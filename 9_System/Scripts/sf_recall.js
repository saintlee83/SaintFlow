/**
 * SaintFlow · SF 회상 시작 / SF 회상 판정
 * start: 오늘 회상할 Zettel의 질문과 빈 답안을 N-YYYY-MM-DD 노트에 준비합니다.
 * grade: pass/fail에 따라 box · last_reviewed · last_result를 고치고 회상 노트에 판정을 남깁니다.
 * 호출: <%* await tp.user.sf_recall(tp, "start") %> · <%* await tp.user.sf_recall(tp, "grade") %>
 */
const ZETTEL_DIR = "2_Internalize/Zettels";
const NARRATE_DIR = "3_Narrate";
const INTERVAL = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 };
const JUDGE = "## 판정";

function clampBox(v) {
  const n = Math.round(Number(v));
  return Number.isFinite(n) ? Math.min(5, Math.max(1, n)) : 1;
}

// 아직 회상한 적이 없으면 null(오늘 대상)을 돌려줍니다.
function nextReview(fm, moment) {
  if (!fm.last_reviewed) return null;
  const last = moment(String(fm.last_reviewed).slice(0, 10), "YYYY-MM-DD");
  if (!last.isValid()) return null;
  return last.add(INTERVAL[clampBox(fm.box)], "days").format("YYYY-MM-DD");
}

function dueZettels(moment, today) {
  const due = [];
  for (const file of app.vault.getMarkdownFiles()) {
    if (!file.path.startsWith(`${ZETTEL_DIR}/`)) continue;
    const fm = app.metadataCache.getFileCache(file)?.frontmatter;
    if (!fm || fm.recall !== true || fm.archived === true) continue;
    const next = nextReview(fm, moment);
    if (next === null || next <= today) due.push({ file, fm, next: next ?? "" });
  }
  return due.sort((a, b) => a.next.localeCompare(b.next));
}

function insertBefore(text, heading, block) {
  const idx = text.indexOf(`\n${heading}`);
  if (idx === -1) return `${text.trimEnd()}\n\n${block.trimEnd()}\n\n${heading}\n`;
  return `${text.slice(0, idx).trimEnd()}\n\n${block.trimEnd()}\n${text.slice(idx)}`;
}

function sessionSkeleton(today) {
  return `---\ntype: recall\ndate: ${today}\n---\n%% Zettel을 열기 전에 씁니다. 다 쓴 뒤 SF 회상 판정으로 판정합니다. %%\n\n${JUDGE}\n`;
}

async function sessionFile(today) {
  const path = `${NARRATE_DIR}/N-${today}.md`;
  return app.vault.getAbstractFileByPath(path) ?? (await app.vault.create(path, sessionSkeleton(today)));
}

function answerBlock(d) {
  const q = d.fm.question ? `질문: ${d.fm.question}` : "회상 질문이 비어 있습니다. Zettel의 question을 채우세요.";
  return `## [[${d.file.basename}]]\n> ${q}\n\n- 핵심 주장:\n- 근거:\n- 적용 사례 또는 반례:\n`;
}

async function start(tp) {
  const { Notice, moment } = tp.obsidian;
  const today = moment().format("YYYY-MM-DD");
  const due = dueZettels(moment, today);
  const file = await sessionFile(today);
  const text = await app.vault.read(file);
  const blocks = due.filter((d) => !text.includes(`## [[${d.file.basename}]]`)).map(answerBlock);
  if (blocks.length) await app.vault.process(file, (data) => insertBefore(data, JUDGE, blocks.join("\n")));
  await app.workspace.getLeaf("tab").openFile(file);
  new Notice(due.length ? `오늘 회상 ${due.length}건` : "오늘 회상할 Zettel이 없습니다.");
}

async function grade(tp) {
  const { Notice, moment } = tp.obsidian;
  const today = moment().format("YYYY-MM-DD");
  const active = app.workspace.getActiveFile();
  const afm = active ? app.metadataCache.getFileCache(active)?.frontmatter : null;

  let target = afm?.type === "zettel" ? { file: active, fm: afm } : null;
  if (!target) {
    const due = dueZettels(moment, today);
    if (!due.length) { new Notice("판정할 Zettel이 없습니다."); return; }
    target = await tp.system.suggester(due.map((d) => d.file.basename + (d.fm.question ? `  ·  ${d.fm.question}` : "")), due, false, "판정할 Zettel");
    if (!target) return;
  }

  const result = await tp.system.suggester(["pass — 핵심 주장, 근거, 적용 사례 또는 반례를 모두 썼다", "fail"], ["pass", "fail"], false, "판정");
  if (!result) return;
  const wrong = result === "fail" ? ((await tp.system.prompt("틀린 점", "")) ?? "").trim() : "";

  let box = 1;
  await app.fileManager.processFrontMatter(target.file, (fm) => {
    box = result === "pass" ? Math.min(5, clampBox(fm.box) + 1) : 1;
    fm.box = box;
    fm.last_reviewed = today;
    fm.last_result = result;
  });

  const file = await sessionFile(today);
  const line = `- [[${target.file.basename}]] ${result}${wrong ? ` — ${wrong}` : ""} · box ${box}`;
  await app.vault.process(file, (data) => `${data.trimEnd()}\n${line}\n`);
  new Notice(`${target.file.basename}: ${result} · box ${box}`);
}

async function sf_recall(tp, mode) {
  return mode === "grade" ? grade(tp) : start(tp);
}

module.exports = sf_recall;
module.exports._test = { clampBox, nextReview, insertBefore, sessionSkeleton, answerBlock };
