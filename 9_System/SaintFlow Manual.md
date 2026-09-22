# SaintFlow Manual

Notion에서 설계한 SaintFlow 구조를 Obsidian의 폴더, 속성, 링크, Bases로 옮긴 vault입니다. Notion 구성과 함께 쓰지 않는 대안이며, 이 vault만으로 흐름 전체가 완결됩니다.

SaintFlow는 CODE, GTD, PARA, Zettelkasten, Active Recall을 SAINT 다섯 단계와 Flow 검토 루프로 재구성한 방법론입니다. 목표는 수집한 것을 실행할 일, 재사용할 지식, 설명할 수 있는 이해로 바꾸는 것입니다.

## 구조

```text
SaintFlow/
├── Home.md                 대시보드
├── 0_Sweep/                S · Sweep — 분류 전 입력, 새 노트 기본 위치
├── 1_Arrange/              A · Arrange — PARA
│   ├── Projects/
│   ├── Areas/
│   └── Resources/
├── 2_Internalize/          I · Internalize
│   ├── Zettels/
│   └── Maps/
├── 3_Narrate/              N · Narrate — 회상 노트 N-YYYY-MM-DD
├── 4_Transform/            T · Transform
│   ├── Tasks/
│   └── Outputs/
├── 5_Flow/                 Flow
│   ├── Daily/
│   └── Reviews/            Weekly R-YYYY-Www · 종료 R-종료-이름
└── 9_System/
    ├── Bases/              Inbox · Projects · Areas · Resources · Knowledge · Recall · Tasks · Outputs · Reviews
    ├── Templates/          코어 템플릿 11종
    ├── Commands/           SF 명령 (Templater)
    └── Scripts/            SF 명령 구현
```

각 단계 폴더에는 폴더와 같은 이름의 방 노트가 있습니다. 예를 들어 `0_Sweep/0_Sweep.md`입니다. 방 노트는 Notion의 방 페이지처럼 그 단계의 질문, 완료 증거, Base 보기, 운영 규칙을 담습니다. 사이드바 북마크가 Home과 방 여섯 개를 SAINT 순서로 보여 줍니다.

### Notion과의 대응

| Notion | Obsidian |
|---|---|
| 방 페이지 | 단계 폴더의 방 노트 |
| DB | 유형 폴더 + `9_System/Bases`의 Base |
| DB 보기 | Base 보기. `![[Tasks.base#다음 행동]]`처럼 방 노트와 Home에 임베드 |
| 속성 | frontmatter. 키는 영문이고, 보기에는 한국어 이름으로 표시 |
| relation | 자식 쪽 링크 속성. 반대쪽은 Base의 연결됨 보기 |
| 롤업 | backlinks를 세는 Base 수식 |
| 보관 체크박스 | `archived: true` |
| DB 템플릿 | `9_System/Templates` + SF 명령 |
| 탭, 열 배치 | 접이식 callout, `sf-cols` callout (CSS 스니펫) |

## SAINT와 Flow

| 단계 | 질문 | 완료 증거 | 출처 |
|---|---|---|---|
| S · Sweep | 신경 쓰이는 것이 전부 머리 밖에 있는가? | 0_Sweep에 노트가 있다 | CODE Capture · GTD 수집 |
| A · Arrange | 행동인가 지식인가? 어디에 쓰이는가? | 0_Sweep에서 사라지고 type과 status가 정해졌다 | GTD 명료화·정리 · PARA |
| I · Internalize | 무엇을 이해했고, 무엇과 연결되는가? | evergreen · 연결 2개 이상 · 연결마다 이유 | CODE Distill · Zettelkasten |
| N · Narrate | 보지 않고 설명하거나 적용할 수 있는가? | 회상 노트의 답안과 판정 · box 갱신 | Active Recall |
| T · Transform | 이것으로 무엇을 만들었는가? | Task done · Output의 uses 기록 | GTD 실행 · CODE Express |
| Flow | 체계가 여전히 작동하는가? | 5_Flow에 검토 노트가 있다 | GTD 검토 |

SAINT는 항목 하나가 지나가는 경로이고, Flow는 SAINT 전체를 점검하는 루프입니다.

## 경로

| 들어온 것 | 경로 |
|---|---|
| 해야 할 일 | S → A → T |
| 여러 단계의 일 | S → A(Projects) → T |
| 읽을 자료 | S → A(Resources) → I → N |
| 떠오른 생각 | S → I → N |
| 결과물 | T(Outputs) → Flow |

## 규칙

1. **행동과 지식을 구분합니다.** 끝나면 사라지는 것은 Task, 다른 맥락에서 다시 쓸 것은 Zettel입니다.
2. **active 프로젝트는 완료 조건과 다음 행동을 가집니다.** 열린 Task(next · in progress · waiting)도, active 하위 프로젝트도 없으면 멈춤으로 표시됩니다. 시작 전이면 planned, 잠시 멈추면 paused로 둡니다.
3. **한 생각의 원본은 하나만 둡니다.** 복사하지 않고 링크합니다. 프로젝트 노트는 지식을 가져다 쓰지만 소유하지 않습니다.
4. **프로젝트 종료와 지식의 수명을 분리합니다.** 프로젝트는 보관해도 거기서 나온 Zettel은 계속 살아 있습니다.
5. **회상과 운영 검토를 구분합니다.** 회상은 N · Narrate에서, 운영 점검은 Flow에서 합니다.
6. **AI에게는 분류, 점검, 질문 생성, 채점까지만 맡깁니다.** 생각을 자기 말로 쓰는 일과 회상 답안은 직접 합니다.
7. **모든 단계는 흔적을 남깁니다.** 각 방 노트의 완료 증거가 기준입니다.
8. **관계는 자식 쪽 링크 속성에 한 번만 기록합니다.** 반대쪽은 Base의 연결됨 보기가 보여 줍니다.
9. **자식은 부모 노트에서 `SF 새 항목`으로 만듭니다.** 관계 속성이 생성 시점에 기록됩니다.

## 유형과 속성

| 유형 | 폴더 | 속성 |
|---|---|---|
| (Inbox) | 0_Sweep | dispatch, link |
| project | 1_Arrange/Projects | status, done_criteria, due, area, parent, repo, link, archived, created |
| area | 1_Arrange/Areas | status, standard, review_cycle, link, archived, created |
| resource | 1_Arrange/Resources | status, kind, author, link, project, area, archived, created |
| zettel | 2_Internalize/Zettels | maturity, source, project, area, recall, question, box, last_reviewed, last_result, link, archived, created |
| map | 2_Internalize/Maps | archived, created |
| recall | 3_Narrate | date |
| task | 4_Transform/Tasks | status, project, area, parent, scheduled, due, waiting_on, link, archived, created |
| output | 4_Transform/Outputs | kind, status, project, uses, link, archived, created |
| daily · weekly · closing | 5_Flow | date, project(closing) |

- 링크 속성 값은 `"[[노트 이름]]"` 형식입니다. project, area, source, uses는 목록이고 parent는 하나입니다.
- 속성 유형(날짜, 체크박스, 숫자, 목록)은 `.obsidian/types.json`에 정해 두었습니다.
- 선택형 값: kind(자료)는 책 · 강의 · 문서 · 논문 · 영상 · 웹 · 데이터시트 · 기타, kind(결과물)는 문서 · 코드 · 발표 · 결정 · 기타, review_cycle은 매주 · 격주 · 매월 · 분기, maturity는 seed · evergreen, last_result는 pass · fail입니다.

### 자동 계산 (Base 수식)

| Base | 수식 |
|---|---|
| Projects | 진행률(■□ 10칸), D-day, 열린 Task, 멈춤 |
| Tasks | 마감, 하위 진행(`2/5`, 모두 끝나면 `✓ 5/5`), 오늘 |
| Knowledge | 다음 복습일, 오늘 회상, 연결 수, 연결 없음, 오래된 seed |
| Areas | 진행 프로젝트 |
| Resources | Zettel 수 |
| Outputs | 지식 미연결 |

Notion과 달리 수식으로 보기를 거를 수 있어, 오늘 회상과 멈춤 보기가 수식 그대로 동작합니다.

## 상태

| 유형 | 상태 |
|---|---|
| Task | next · in progress · waiting · someday · done · dropped |
| Project | planned · active · paused · someday · done · dropped |
| Area | active · paused · retired |
| Resource | to read · reading · processed · reference |
| Output | draft · in review · done · shipped |

0_Sweep 노트, 회상 노트, 검토 노트, Zettel에는 status가 없습니다. 0_Sweep은 폴더 자체가 상태이고, 회상의 판정은 결과이며, Zettel은 maturity가 대신합니다.

## Inbox에서 옮기기

- 0_Sweep은 유형이 아니라 상태입니다. 노트는 옮겨지면서 type을 얻습니다.
- `SF 보내기`로 옮깁니다. 보낼 곳을 고르거나 dispatch에 적어 둔 값을 쓰며, 대상 템플릿의 속성과 섹션을 붙인 뒤 폴더를 바꿉니다. 이름, 본문, link는 그대로 남고 dispatch는 지워집니다. created는 수집한 날로 남습니다.
- Notion에서는 옮길 때 템플릿이 적용되지 않았지만, 여기서는 적용됩니다.
- 판단이 이미 끝났다면 0_Sweep을 거치지 않고 `SF 새 항목`으로 바로 만듭니다.

## 하위 프로젝트와 하위 Task

- **하위 프로젝트:** 프로젝트에서 `SF 새 항목` → 하위 프로젝트를 고릅니다. parent가 기록되고 상위의 area를 물려받습니다. 상위 프로젝트 노트의 하위 프로젝트 섹션에 나타납니다.
- active 하위 프로젝트가 있으면 상위 프로젝트는 멈춤으로 보지 않습니다.
- **하위 Task:** Task에서 `SF 새 항목` → 하위 Task를 고릅니다. parent만 기록되고 project는 달지 않습니다. 프로젝트 집계는 상위 Task 기준이므로, 하위 Task에 project를 달면 중복으로 집계됩니다.
- 하위 진행에 끝난 수/전체가 나오고, 모두 끝나면 ✓가 붙습니다. 상위 Task의 status는 직접 done으로 바꿉니다.
- 한자리에서 끝나는 단계는 하위 Task로, 여러 날에 걸치거나 결과물이 따로 나오면 Project로 올립니다.

## 회상

1. `SF 회상 시작` — 오늘 회상할 Zettel마다 질문과 빈 답안이 담긴 `3_Narrate/N-YYYY-MM-DD` 노트가 열립니다.
2. Zettel을 열지 않고 핵심 주장, 근거, 적용 사례 또는 반례를 씁니다.
3. 다 쓴 뒤 Zettel을 열어 대조합니다.
4. `SF 회상 판정` — pass나 fail을 고르면 Zettel의 box, last_reviewed, last_result가 갱신되고 회상 노트의 판정 섹션에 한 줄이 남습니다.

| Box | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| 다음 복습 | 1일 | 3일 | 7일 | 14일 | 30일 |

pass면 한 칸 오르고(최대 5), fail이면 1로 돌아갑니다. Notion에서는 box를 손으로 고쳤지만, 여기서는 판정 명령이 고칩니다. 답안은 회상 노트에만 두고 Zettel에는 두지 않습니다.

## 명령

| 명령 | 어디서 | 하는 일 |
|---|---|---|
| SF 보내기 | 0_Sweep 노트 | 보낼 곳 폴더로 옮기고 템플릿을 적용 |
| SF 새 항목 | 아무 노트 | 지금 노트를 부모로 자식 노트를 만들고 관계를 기록 |
| SF 회상 시작 | 아무 곳 | 오늘 회상 노트에 질문과 답안 칸을 준비 |
| SF 회상 판정 | 회상 노트 또는 Zettel | box · last_reviewed · last_result 갱신, 판정 기록 |
| SF Weekly | 아무 곳 | 이번 주 검토 노트 R-YYYY-Www를 열거나 만듦 |
| SF 프로젝트 종료 | 프로젝트 노트 | R-종료-이름 검토 노트를 열거나 만들고 project를 기록 |

`SF 새 항목`이 부모별로 보여 주는 선택지는 다음과 같습니다.

| 부모 | 만들 수 있는 것 | 기록되는 관계 |
|---|---|---|
| Project | Task, 하위 프로젝트, Output, Resource, Zettel | project, 하위 프로젝트는 parent |
| Area | Project, Task, Resource, Zettel | area |
| Task | 하위 Task | parent |
| Resource | Zettel | source |
| Map | Zettel | Map의 구조 섹션에 링크 추가 |
| Zettel | 연결할 Zettel | 이 Zettel의 연결 섹션에 링크 추가 |
| 그 밖 | 모든 유형 | 없음 |

명령 팔레트(Ctrl/Cmd+P)에서 `SF`를 입력해 `Templater: Insert 9_System/Commands/SF …`를 실행합니다. 노트가 편집 모드일 때 실행됩니다. 설정 → 단축키에서 `SF`로 찾아 키를 지정해 두면 편합니다.

## 파일 이름

- Task와 Zettel은 제목 자체가 행동과 주장입니다.
- 날짜 노트는 Daily `YYYY-MM-DD`, 회상 `N-YYYY-MM-DD`, Weekly `R-YYYY-Www`, 종료 `R-종료-프로젝트명`입니다.
- 링크가 이름으로 연결되므로, 이름은 vault 전체에서 겹치지 않게 둡니다.
- `\ / : * ? " < > | # ^ [ ]`는 SF 명령이 공백으로 바꿉니다.

## 설치

1. 압축을 풀고 `SaintFlow` 폴더를 Obsidian에서 vault로 엽니다. 코어 플러그인(Bases, Templates, Daily notes, Properties, Bookmarks)과 설정이 이미 들어 있습니다.
2. 설정 → 모양 → CSS 스니펫에서 `saintflow`가 켜져 있는지 확인합니다.
3. 설정 → 커뮤니티 플러그인에서 제한 모드를 끄고 Templater를 설치해 켭니다. 폴더 설정이 들어 있어 따로 지정할 것은 없습니다.
4. 선택: Folder notes를 설치하면 폴더를 눌렀을 때 방 노트가 열립니다. Obsidian Web Clipper는 저장 폴더를 0_Sweep, 주소를 link 속성으로 설정합니다.

Templater 없이도 폴더, Base 보기, 코어 템플릿은 모두 동작합니다. 이 경우 옮기기와 자식 만들기는 수동으로 하고, 회상 후 box와 last_reviewed는 직접 고칩니다.

## 처음 열었을 때 확인할 것

Base 수식 가운데 일부는 Obsidian 버전에 따라 동작이 다를 수 있습니다. 빈 vault에서는 보이지 않으므로, 테스트용 프로젝트 하나와 Task 두 개를 만들어 확인합니다.

| ID | 확인 | 동작하지 않으면 |
|---|---|---|
| V1 | Projects의 진행률·열린 Task, Tasks의 하위 진행, Resources의 Zettel 수가 계산되는가 (`file.backlinks.filter(…)`) | 해당 수식을 보기에서 빼고, 연결됨 보기로 확인 |
| V2 | Knowledge의 회상 열과 오늘 회상 보기가 맞는가 (`date + "3d"`) | 기간 표기를 `duration("3d")` 형식으로 바꿈 |
| V3 | 프로젝트 노트의 다음 행동 섹션에 project 속성으로 연결한 Task가 보이는가 (`file.hasLink(this.file)`) | 연결됨 보기의 필터를 속성 비교로 바꿈 |
| V4 | Home과 방 노트의 Base 임베드가 모두 보이는가 | 보기 이름 철자 확인 |
| V5 | 방 노트 머리의 질문과 완료 증거가 두 열로 보이는가 | CSS 스니펫이 켜졌는지 확인 |

## Notion과 다른 점

- **나은 점:** 수식으로 보기를 거를 수 있어 오늘 회상과 멈춤이 정확합니다. 옮길 때 템플릿이 적용되고, box가 판정 명령으로 갱신됩니다. 연결됨 보기가 템플릿 안에서 바로 동작하고, 전체 너비와 보기 설정도 파일에 들어 있어 수동 설정이 거의 없습니다.
- **약한 점:** 롤업이 없어 집계를 backlinks 수식에 의존합니다. 탭과 열은 callout과 CSS로 흉내 냅니다. 끌어다 놓아 DB를 바꾸는 대신 `SF 보내기`를 씁니다.
