/**
 * SaintFlow · SF 새 항목
 * 지금 연 노트를 부모로 삼아 자식 노트를 만들고, 관계 속성을 생성 시점에 기록합니다.
 * 호출: 9_System/Commands/SF 새 항목.md → <%* await tp.user.sf_new(tp) %>
 */
const TEMPLATE_DIR = "9_System/Templates";

const TYPES = {
  task:     { label: "Task",     folder: "4_Transform/Tasks",     template: "Task",     defaults: { type: "task", status: "next" } },
  project:  { label: "Project",  folder: "1_Arrange/Projects",    template: "Project",  defaults: { type: "project", status: "active" } },
  area:     { label: "Area",     folder: "1_Arrange/Areas",       template: "Area",     defaults: { type: "area", status: "active" } },
  resource: { label: "Resource", folder: "1_Arrange/Resources",   template: "Resource", defaults: { type: "resource", status: "to read" } },
  zettel:   { label: "Zettel",   folder: "2_Internalize/Zettels", template: "Zettel",   defaults: { type: "zettel", maturity: "seed" } },
  map:      { label: "Map",      folder: "2_Internalize/Maps",    template: "Map",      defaults: { type: "map" } },
  output:   { label: "Output",   folder: "4_Transform/Outputs",   template: "Output",   defaults: { type: "output", status: "draft" } },
};

// 부모 유형별 선택지: [표시, 자식 유형, 부모를 기록할 속성, 목록 속성 여부]
const CHILDREN = {
  project:  [["Task", "task", "project", true], ["하위 프로젝트", "project", "parent", false], ["Output", "output", "project", true], ["Resource", "resource", "project", true], ["Zettel", "zettel", "project", true]],
  area:     [["Project", "project", "area", true], ["Task", "task", "area", true], ["Resource", "resource", "area", true], ["Zettel", "zettel", "area", true]],
  task:     [["하위 Task", "task", "parent", false]],
  resource: [["Zettel", "zettel", "source", true]],
  map:      [["Zettel", "zettel", null, false]],
  zettel:   [["연결할 Zettel", "zettel", null, false]],
};

// 부모 본문에 자식 링크를 남길 섹션
const BODY_LINK = { map: "## 구조", zettel: "## 연결" };

function fillTemplate(text, title, moment) {
  return text
    .replace(/{{date(?::([^}]+))?}}/g, (_, fmt) => moment().format(fmt || "YYYY-MM-DD"))
    .replace(/{{title}}/g, title);
}

function sanitize(title) {
  return String(title).replace(/[\\/:*?"<>|#^[\]]/g, " ").replace(/\s+/g, " ").trim();
}

function isEmpty(v) {
  return v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0);
}

// heading 섹션의 끝(다음 #, ## 제목 앞, 빈 줄 앞)에 한 줄을 넣습니다.
function insertUnderHeading(text, heading, line) {
  const lines = text.split("\n");
  const start = lines.findIndex((l) => l.trim() === heading);
  if (start === -1) return `${text.trimEnd()}\n\n${heading}\n${line}\n`;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^#{1,2}\s/.test(lines[i])) { end = i; break; }
  }
  let at = end;
  while (at > start + 1 && lines[at - 1].trim() === "") at--;
  lines.splice(at, 0, line);
  return lines.join("\n");
}

async function sf_new(tp) {
  const { Notice, moment } = tp.obsidian;
  const parent = app.workspace.getActiveFile();
  const pfm = parent ? (app.metadataCache.getFileCache(parent)?.frontmatter ?? {}) : {};
  const ptype = pfm.type;
  const scoped = Boolean(parent && CHILDREN[ptype]);
  const options = scoped ? CHILDREN[ptype] : Object.entries(TYPES).map(([key, t]) => [t.label, key, null, false]);

  const pick = await tp.system.suggester(options.map((o) => o[0]), options, false, scoped ? `${parent.basename} 아래에 만들기` : "새로 만들 항목");
  if (!pick) return;
  const [label, type, field, asList] = pick;
  const t = TYPES[type];

  const title = sanitize((await tp.system.prompt(`${label} 제목`, "")) ?? "");
  if (!title) return;
  const path = `${t.folder}/${title}.md`;
  if (app.vault.getAbstractFileByPath(path)) {
    new Notice(`이미 있는 이름입니다: ${path}`);
    return;
  }

  const tpl = app.vault.getAbstractFileByPath(`${TEMPLATE_DIR}/${t.template}.md`);
  const text = tpl ? fillTemplate(await app.vault.read(tpl), title, moment) : `---\ntype: ${type}\n---\n`;
  const file = await app.vault.create(path, text);
  const link = scoped ? `[[${parent.basename}]]` : null;

  await app.fileManager.processFrontMatter(file, (fm) => {
    for (const [k, v] of Object.entries(t.defaults)) if (isEmpty(fm[k])) fm[k] = v;
    if (isEmpty(fm.created)) fm.created = moment().format("YYYY-MM-DD");
    if (field && link) fm[field] = asList ? [link] : link;
    // 하위 프로젝트는 상위의 area를 물려받습니다.
    if (type === "project" && field === "parent" && !isEmpty(pfm.area)) fm.area = pfm.area;
  });

  if (scoped && BODY_LINK[ptype]) {
    await app.vault.process(parent, (data) => insertUnderHeading(data, BODY_LINK[ptype], `- [[${title}]] — `));
  }

  await app.workspace.getLeaf("tab").openFile(file);
  new Notice(`${label}: ${title}`);
}

module.exports = sf_new;
module.exports._test = { fillTemplate, sanitize, isEmpty, insertUnderHeading };
