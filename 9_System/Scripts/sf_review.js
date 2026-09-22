/**
 * SaintFlow · SF Weekly / SF 프로젝트 종료
 * weekly: 이번 주 R-YYYY-Www 검토 노트를 열거나 만듭니다.
 * closing: 프로젝트의 R-종료-이름 검토 노트를 열거나 만들고 project를 기록합니다.
 * 호출: <%* await tp.user.sf_review(tp, "weekly") %> · <%* await tp.user.sf_review(tp, "closing") %>
 */
const TEMPLATE_DIR = "9_System/Templates";
const REVIEW_DIR = "5_Flow/Reviews";

function fillTemplate(text, title, moment) {
  return text
    .replace(/{{date(?::([^}]+))?}}/g, (_, fmt) => moment().format(fmt || "YYYY-MM-DD"))
    .replace(/{{title}}/g, title);
}

async function openOrCreate(path, title, template, moment) {
  let file = app.vault.getAbstractFileByPath(path);
  if (file) return { file, created: false };
  const tpl = app.vault.getAbstractFileByPath(`${TEMPLATE_DIR}/${template}.md`);
  const text = tpl ? fillTemplate(await app.vault.read(tpl), title, moment) : `---\ntype: ${template.toLowerCase()}\n---\n`;
  file = await app.vault.create(path, text);
  return { file, created: true };
}

async function weekly(tp) {
  const { moment } = tp.obsidian;
  const title = `R-${moment().format("GGGG-[W]WW")}`;
  const { file } = await openOrCreate(`${REVIEW_DIR}/${title}.md`, title, "Weekly", moment);
  await app.workspace.getLeaf("tab").openFile(file);
}

async function closing(tp) {
  const { Notice, moment } = tp.obsidian;
  const active = app.workspace.getActiveFile();
  const afm = active ? app.metadataCache.getFileCache(active)?.frontmatter : null;
  let project = afm?.type === "project" ? active : null;

  if (!project) {
    const candidates = app.vault.getMarkdownFiles().filter((f) => {
      if (!f.path.startsWith("1_Arrange/Projects/")) return false;
      const fm = app.metadataCache.getFileCache(f)?.frontmatter;
      return fm?.type === "project" && fm.archived !== true && fm.status !== "dropped";
    });
    if (!candidates.length) { new Notice("종료할 프로젝트가 없습니다."); return; }
    project = await tp.system.suggester(candidates.map((f) => f.basename), candidates, false, "종료할 프로젝트");
    if (!project) return;
  }

  const title = `R-종료-${project.basename}`;
  const { file, created } = await openOrCreate(`${REVIEW_DIR}/${title}.md`, title, "Closing", moment);
  if (created) {
    await app.fileManager.processFrontMatter(file, (fm) => { fm.project = [`[[${project.basename}]]`]; });
  }
  await app.workspace.getLeaf("tab").openFile(file);
}

async function sf_review(tp, kind) {
  return kind === "closing" ? closing(tp) : weekly(tp);
}

module.exports = sf_review;
module.exports._test = { fillTemplate };
