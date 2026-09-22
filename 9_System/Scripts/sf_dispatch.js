/**
 * SaintFlow · SF 보내기
 * 0_Sweep의 노트를 대상 유형 폴더로 옮기고, 그 유형의 템플릿 속성과 섹션을 붙입니다.
 * 호출: 9_System/Commands/SF 보내기.md → <%* await tp.user.sf_dispatch(tp) %>
 */
const INBOX = "0_Sweep";
const TEMPLATE_DIR = "9_System/Templates";

const TYPES = {
  task:     { label: "Tasks",              folder: "4_Transform/Tasks",     template: "Task",     defaults: { type: "task", status: "next" } },
  project:  { label: "Projects",           folder: "1_Arrange/Projects",    template: "Project",  defaults: { type: "project", status: "active" } },
  area:     { label: "Areas",              folder: "1_Arrange/Areas",       template: "Area",     defaults: { type: "area", status: "active" } },
  resource: { label: "Resources",          folder: "1_Arrange/Resources",   template: "Resource", defaults: { type: "resource", status: "to read" } },
  zettel:   { label: "Knowledge · Zettel", folder: "2_Internalize/Zettels", template: "Zettel",   defaults: { type: "zettel", maturity: "seed" } },
  map:      { label: "Knowledge · Map",    folder: "2_Internalize/Maps",    template: "Map",      defaults: { type: "map" } },
  output:   { label: "Outputs",            folder: "4_Transform/Outputs",   template: "Output",   defaults: { type: "output", status: "draft" } },
};

// dispatch 속성값 → 유형. Notion의 보낼 곳과 같은 이름을 씁니다.
const DISPATCH = { Tasks: "task", Projects: "project", Areas: "area", Resources: "resource", Knowledge: "zettel", Outputs: "output", "삭제": "delete" };

function fillDate(text, moment) {
  return text.replace(/{{date(?::([^}]+))?}}/g, (_, fmt) => moment().format(fmt || "YYYY-MM-DD"));
}

function stripFrontmatter(text) {
  const m = text.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return m ? text.slice(m[0].length) : text;
}

function isEmpty(v) {
  return v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0);
}

// 템플릿 속성 순서를 따르고, 노트에 이미 있는 값은 지키며, dispatch는 지웁니다.
function mergeProps(current, templateProps, defaults, captured, moment) {
  const next = {};
  for (const [k, v] of Object.entries(templateProps)) {
    if (k === "position") continue;
    if (k === "created") { next.created = isEmpty(current.created) ? captured : current.created; continue; }
    next[k] = current[k] !== undefined ? current[k] : (typeof v === "string" ? fillDate(v, moment) : v);
  }
  for (const [k, v] of Object.entries(current)) {
    if (k === "dispatch" || k in next) continue;
    next[k] = v;
  }
  for (const [k, v] of Object.entries(defaults)) {
    if (isEmpty(next[k])) next[k] = v;
  }
  next.type = defaults.type;
  if (isEmpty(next.created)) next.created = captured;
  return next;
}

async function readTemplate(name, moment) {
  const file = app.vault.getAbstractFileByPath(`${TEMPLATE_DIR}/${name}.md`);
  if (!file) return { props: {}, body: "" };
  const raw = await app.vault.read(file);
  const props = { ...(app.metadataCache.getFileCache(file)?.frontmatter ?? {}) };
  return { props, body: fillDate(stripFrontmatter(raw), moment).trim() };
}

async function sf_dispatch(tp) {
  const { Notice, moment } = tp.obsidian;
  const file = app.workspace.getActiveFile();
  const current = file ? (app.metadataCache.getFileCache(file)?.frontmatter ?? {}) : {};
  if (!file || file.extension !== "md" || file.parent?.path !== INBOX || current.type === "room") {
    new Notice("0_Sweep의 노트를 연 상태에서 실행하세요.");
    return;
  }

  let key = DISPATCH[current.dispatch];
  if (!key) {
    const keys = [...Object.keys(TYPES), "delete"];
    const labels = [...Object.values(TYPES).map((t) => t.label), "삭제"];
    key = await tp.system.suggester(labels, keys, false, "보낼 곳");
    if (!key) return;
  }

  if (key === "delete") {
    if (app.fileManager.trashFile) await app.fileManager.trashFile(file);
    else await app.vault.trash(file, true);
    new Notice(`삭제했습니다: ${file.basename}`);
    return;
  }

  const t = TYPES[key];
  const dest = `${t.folder}/${file.name}`;
  if (app.vault.getAbstractFileByPath(dest)) {
    new Notice(`같은 이름의 노트가 이미 있습니다: ${dest}`);
    return;
  }

  const { props, body } = await readTemplate(t.template, moment);
  const captured = moment(file.stat.ctime).format("YYYY-MM-DD");

  await app.fileManager.processFrontMatter(file, (fm) => {
    const next = mergeProps(fm, props, t.defaults, captured, moment);
    for (const k of Object.keys(fm)) delete fm[k];
    Object.assign(fm, next);
  });

  if (body) {
    await app.vault.process(file, (data) => `${data.trimEnd()}\n\n${body}\n`);
  }

  await app.fileManager.renameFile(file, dest);
  new Notice(`${t.label}(으)로 옮겼습니다: ${file.basename}`);
}

module.exports = sf_dispatch;
module.exports._test = { fillDate, stripFrontmatter, isEmpty, mergeProps };
