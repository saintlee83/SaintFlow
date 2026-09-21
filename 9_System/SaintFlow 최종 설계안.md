

- 버전: 2.2 (2026-09-21)
- Obsidian 단독형의 단일 기준 문서입니다. 방법론, 데이터 모델, vault 구조, 자료 배치, 플러그인 명세를 담고 있으며 이 문서만으로 완결됩니다.
- Notion 단독형은 별도 문서(`SAINTFLOW_NOTION.md`)입니다. 두 버전은 함께 쓰지 않는 대안입니다.

## 목차

1. 방법론
2. 데이터 모델
3. Obsidian vault
4. 자료 배치 가이드
5. SaintFlow Obsidian 플러그인
6. 검증과 작업 계획
7. Claude Code 작업 지침
8. 비범위
9. 미결 사항

---

## 1. 방법론

### 1.1 목적

SaintFlow는 수집한 정보를 세 가지로 바꾸는 흐름입니다.

- 실행할 일
- 재사용할 지식
- 설명할 수 있는 이해

CODE, GTD, PARA, Zettelkasten, Active Recall을 병렬로 붙이지 않고, 두 층으로 재구성했습니다.

- 항목 하나가 통과하는 다섯 단계(SAINT)
- 체계 전체를 유지하는 검토 루프(Flow)

이 문서는 **Obsidian 단독형**입니다. 파일, 속성, 링크로 구현하며, 이 문서만으로 전체 흐름이 완결됩니다.

### 1.2 SAINT와 Flow

|단계|이름|하는 일|답하는 질문|가져온 원칙|
|---|---|---|---|---|
|S|Sweep (수집)|할 일, 자료, 질문, 생각을 수집함에 기록|신경 쓰이는 것이 전부 머리 밖에 있는가?|CODE Capture, GTD 수집|
|A|Arrange (판단·정리)|실행 여부와 다음 행동을 결정하고 활용 맥락으로 정리|행동인가 지식인가? 어디에 쓰이는가?|GTD 명료화·정리, PARA|
|I|Internalize (이해·연결)|자기 말로 설명하고 근거와 다른 생각을 연결|무엇을 이해했고, 무엇과 연결되는가?|CODE Distill, Zettelkasten|
|N|Narrate (인출·설명)|반드시 익힐 지식을 보지 않고 설명한 뒤 근거와 대조|보지 않고 설명하거나 적용할 수 있는가?|Active Recall|
|T|Transform (실행·표현)|다음 행동을 실행하고 지식을 조합해 결과물을 만듦|이것으로 무엇을 만들었는가?|GTD 실행, CODE Express|
|Flow|검토 루프|Daily, Weekly, 프로젝트 종료 주기로 체계 점검|체계가 여전히 작동하는가?|GTD 검토|

### 1.3 경로

항목은 필요한 단계만 통과합니다. N이 T보다 앞에 있지만, 복습이 실행의 전제 조건은 아닙니다. 모든 자료를 영구 노트로 바꾸지도 않습니다.

|항목|경로|
|---|---|
|단순 업무|S → A → T|
|참고 자료|S → A|
|재사용할 생각|S → A → I, 결과물이 필요하면 → T|
|반드시 익힐 지식|I ↔ N|
|운영 검토|Flow가 모든 단계를 점검|

"반드시 익힐 지식"은 다음 세 가지로 한정합니다.

- 시험 범위
- 다른 지식의 전제가 되는 기초
- 자료 없이 현장에서 판단해야 하는 내용

### 1.4 Flow 주기

|주기|내용|
|---|---|
|Daily|다음 행동·예정·마감을 보고 오늘 실행할 일 선택. 복습일이 된 회상 대상은 회상 세션으로 처리|
|Weekly|수집함을 0건으로. 대기 항목, 멈춘 프로젝트, 완료 조건, 연결 없는 Zettel, 오래된 seed, uses 없는 결과물 점검. 언젠가 목록 검토|
|프로젝트 종료|완료 조건 판정, 재사용할 내용을 지식으로 승격, 나머지 보관|

### 1.5 규칙

1. **행동과 지식을 구분합니다.** "트랜잭션 격리 수준 공부하기"는 Task이고, "트랜잭션 격리 수준별 차이"는 지식 노트입니다.
2. **진행 중인 프로젝트는 완료 조건과 다음 행동을 가집니다.** 다음 행동이 없으면 시스템이 멈춘 프로젝트로 표시합니다. 다음 행동을 정할 수 없다면, 그것을 정하기 위해 확인할 질문을 Task로 둡니다.
3. **한 생각의 원본은 하나만 유지합니다.** 복사하지 않고 연결합니다. 출처 노트와 Zettel은 목적이 다르므로 별도로 유지합니다.
4. **프로젝트 종료와 지식의 수명을 분리합니다.** 종료할 때는 재사용할 내용을 먼저 승격한 뒤 보관합니다.
5. **회상과 운영 검토를 구분합니다.** 회상은 N 단계에서 항목 단위로, 운영 검토는 Flow에서 체계 단위로 실행합니다.
6. **AI에게는 분류, 점검, 질문 생성, 채점까지만 맡깁니다.** Zettel 본문, 회상 답, 학습용 연습 코드는 직접 씁니다.
7. **모든 단계는 흔적을 남깁니다.** 기준은 1.6에 정의합니다.
8. **(시스템 규칙) 관계는 자식 쪽 한 곳에만 기록하고, 역방향은 쿼리로 표시합니다.**
9. **(시스템 규칙) 자식은 부모 맥락에서 생성하고, 관계는 생성 시점에 자동으로 기록합니다.** 허용되는 조합은 2.4에 정의합니다.

### 1.6 단계별 완료 증거

|단계|완료 증거|
|---|---|
|Sweep|수집함에 항목 존재|
|Arrange|수집함에서 사라지고 유형·상태·위치가 부여됨|
|Internalize|성숙도 evergreen, Zettel 연결 2개 이상, 연결마다 이유 한 줄|
|Narrate|회상 세션 기록, Zettel의 판정 한 줄, box와 최근 복습일 갱신|
|Transform|상태 done(완료), 결과물에 사용한 지식 링크 기록|
|Flow|검토 기록 존재|

### 1.7 회상 판정

- **통과 기준:** 보지 않고 세 가지를 모두 썼을 때만 pass입니다.
    - 핵심 주장
    - 근거
    - 적용 사례 또는 반례
- **box 갱신:** pass면 한 칸 올리고(최대 5), fail이면 1로 되돌립니다. 두 경우 모두 최근 복습일을 오늘로 바꿉니다.
- **간격:** box 1부터 5까지 각각 1, 3, 7, 14, 30일입니다.
- **답안 위치:** 회상 세션 노트(`3_Narrate/N-YYYY-MM-DD`)에 씁니다. Zettel에는 판정 한 줄만 남깁니다. Zettel 안에 답안을 두면 다음 회상 때 이전 답이 먼저 보여 인출이 오염됩니다.
- **판정 한 줄 형식:** `- YYYY-MM-DD pass|fail — 틀린 점`
- **질문 유형:** 설명, 적용, 비교, 반례를 우선합니다. 정답을 외부에서 검증할 수 있는 질문(코드 컴파일·테스트, 계산, 회로 해석)은 판정에 주관이 끼지 않으므로 우선 사용합니다. 문법이나 API 목록은 회상 대상이 아닙니다.

---

## 2. 데이터 모델

### 2.1 관계

모든 관계는 자식에서 부모 방향입니다(규칙 8).

|자식|필드|부모|다중도|
|---|---|---|---|
|Task|project|Project|0..1|
|Task|area|Area|0..1|
|Project|area|Area|0..1|
|Working|project / area|Project / Area|0..1|
|Output|project|Project|1|
|Output|uses|Zettel, Source|0..n|
|Source|project / area|Project / Area|0..n|
|Zettel|sources|Source|0..n|
|Zettel|project / area|Project / Area|0..n|
|Zettel|본문 "연결" 섹션|Zettel|0..n, 링크마다 이유 필수|
|Map|본문 링크|Zettel|0..n|
|Review(프로젝트 종료)|project|Project|1|

### 2.2 엔터티 스키마

보관은 `1_Arrange/Archive/`로 이동해 처리합니다.

**Task** (`4_Transform/`)

|키|타입|값|필수|
|---|---|---|---|
|type|고정|task|예|
|status|enum|next, scheduled, waiting, someday, done|예|
|project|link|`[[P-이름]]`|아니오|
|area|link|`[[A-이름]]`|아니오|
|scheduled|date||아니오|
|due|date|실제 마감이 있을 때만|아니오|
|waiting_on|text|대기 대상과 요청일|waiting일 때 권장|
|completed|date|done 전환 시 기록|아니오|

**Project** (허브 `1_Arrange/Projects/P-이름/P-이름.md`)

|키|타입|값|필수|
|---|---|---|---|
|type|고정|project|예|
|status|enum|active, on-hold, someday, done|예|
|area|link|`[[A-이름]]`|아니오|
|outcome|text|판정 가능한 완료 조건 한 문장|예|
|deadline|date||아니오|
|repo|text|저장소 URL 또는 로컬 경로|아니오|
|(파생) next_actions|number|2.3||
|(파생) stalled|bool|2.3||

**Area** (허브 `1_Arrange/Areas/A-이름/A-이름.md`)

|키|타입|값|필수|
|---|---|---|---|
|type|고정|area|예|
|status|enum|active, inactive|예|
|standard|text|유지 기준|아니오|
|review_cycle|enum|weekly, monthly, quarterly|아니오|

**Source** (`1_Arrange/Resources/`)

|키|타입|값|필수|
|---|---|---|---|
|type|고정|source|예|
|author|text||아니오|
|url|text||아니오|
|location|text|원문 위치(쪽, 장, 타임스탬프)|아니오|
|project|link list|과목·프로젝트 자료일 때|아니오|
|area|link list||아니오|

**Zettel** (`2_Internalize/Zettels/`, 파일명은 주장 문장)

|키|타입|값|필수|
|---|---|---|---|
|type|고정|zettel|예|
|status|enum|seed, evergreen|예|
|sources|link list|Source 노트|아니오|
|project|link list||아니오|
|area|link list||아니오|
|recall|bool||예(기본 false)|
|box|number|1~5|recall=true일 때|
|last_reviewed|date||아니오|
|last_result|enum|pass, fail|아니오|
|(파생) next_review|date|2.3||

**Map** (`2_Internalize/Maps/`): `type: map`.

**Working** (컨테이너 폴더): `type: working`, `project`, `area`, `repo`(선택).

**Output** (프로젝트 컨테이너)

|키|타입|값|필수|
|---|---|---|---|
|type|고정|output|예|
|project|link||예|
|status|enum|draft, shipped|예|
|uses|link list|Zettel, Source|shipped 시 권장|
|shipped|date||아니오|

**Session** (`3_Narrate/`): `type: session`, `date`. Zettel마다 질문, 답안, 판정 칸을 둡니다.

**Daily** (`5_Flow/Daily/`): `type: daily`, `date`.

**Review** (`5_Flow/Reviews/`): `type: review`, `cycle`(weekly, project-close), `project`, `date`.

**Inbox 항목** (`0_Sweep/`): 스키마가 없습니다.

### 2.3 파생 값 계산 규칙

Bases와 플러그인이 같은 규칙으로 계산합니다.

|값|규칙|
|---|---|
|next_review|last_reviewed가 없으면 today. 있으면 last_reviewed + 간격(box). box가 비어 있으면 1일, 5 이상이면 30일|
|due_today|recall = true, 보관되지 않음, next_review ≤ today|
|stalled|status = active이고, 이 프로젝트를 가리키며 status = next이고 보관되지 않은 Task가 0개|
|orphan_zettel|type = zettel이고 나가는 링크와 들어오는 링크가 모두 없음. 정밀 판정(연결 섹션의 Zettel 링크만 계산)은 플러그인이 수행|
|old_seed|status = seed이고 생성 후 14일 초과(설정 가능)|
|output_without_uses|type = output이고 uses가 비어 있음|

### 2.4 맥락 생성 매트릭스

부모 맥락에서 자식을 만들면 관계가 자동으로 기록됩니다(규칙 9). 플러그인의 C3·C11로 구현합니다.

|부모(생성 맥락)|자식|자동 기록|기록 위치|
|---|---|---|---|
|Project 허브|Task, Zettel, Source|`project` = 부모|자식|
|Project 허브|Working, Output|`project` = 부모, 위치 = 부모 컨테이너|자식|
|Project 허브|Review(프로젝트 종료)|`project` = 부모|자식|
|Area 허브|Task, Project, Zettel, Source|`area` = 부모|자식|
|Area 허브|Working|`area` = 부모, 위치 = 부모 컨테이너|자식|
|Source|Zettel|`sources` = 부모|자식|
|Zettel|Zettel|자식의 "연결" 섹션에 `- [[부모]] — 이유` (이유 필수)|자식|
|Map|Zettel|부모의 "구조" 섹션에 `- [[자식]]` 추가|부모 (Map이 링크를 소유)|

유형별 기본값은 다음과 같습니다.

- Task: `status: next`
- Zettel: `status: seed`, `recall: false`, `box: 1`
- Project: `status: active`
- Output: `status: draft`

### 2.5 본문 작성 규칙

- **Zettel 섹션 순서:** 생각, 근거, 적용 조건과 한계, 연결, 회상 질문, 인출 기록
- **생각 섹션:** 원문을 닫고 씁니다. 이 작업 자체가 첫 번째 인출입니다.
- **연결 섹션:** 한 줄에 하나씩 `- [[대상]] — 연결한 이유` 형식으로 씁니다.
- **회상 질문의 답:** 접힌 콜아웃 `> [!note]-` 안에 둡니다.
- **Zettel 안의 코드:** 주장을 뒷받침하는 최소 예시로 한정합니다. 20줄 이내이고, 그보다 길면 저장소 permalink로 연결합니다.

---

## 3. Obsidian vault

### 3.1 구조

```text
SaintFlow/
├── Home.md
├── 0_Sweep/                      # S: 분류 전 모든 입력(Inbox), 새 노트 기본 위치
├── 1_Arrange/                    # A: PARA
│   ├── Projects/
│   │   └── P-이름/               # 컨테이너
│   │       ├── P-이름.md          # 허브
│   │       ├── W-주제.md
│   │       ├── O-결과물명.md
│   │       └── _files/           # 이 프로젝트 전용 첨부
│   ├── Areas/
│   │   └── A-이름/               # 컨테이너
│   │       ├── A-이름.md
│   │       └── W-주제.md
│   ├── Resources/                # 참고 자료(S-), 원본은 _files/
│   └── Archive/
│       ├── Projects/  Areas/  Tasks/  Resources/  Knowledge/
├── 2_Internalize/                # I: 자기 말로 쓴 지식
│   ├── Zettels/                  # 평면
│   └── Maps/
├── 3_Narrate/                    # N: 회상 세션(N-YYYY-MM-DD)
├── 4_Transform/                  # T: Task, 평면
├── 5_Flow/
│   ├── Daily/
│   └── Reviews/
└── 9_System/
    ├── Bases/                    # Tasks, Projects, Recall, Checks, Knowledge
    ├── Templates/
    ├── SaintFlow 설계안.md
    └── SaintFlow 운영 규칙.md
```

최상위 폴더 이름은 SAINT 단계와 Flow를 따릅니다. 하지만 각 폴더는 **그 단계가 만들어내는 유형의 고정 거처**입니다. 항목이 단계를 거쳐도 파일을 옮기지 않습니다. 예를 들어 Zettel은 만들어진 순간부터 2_Internalize에 있고, 회상을 거쳐도 3_Narrate로 옮겨 가지 않습니다.

### 3.2 배치 근거

- **Resources에는 참고 자료(Source)만 둡니다.** PARA의 Resources는 "참고할 것"이고 Zettel은 "이해한 것"이라 성격이 다릅니다.
- **Task는 4_Transform에 둡니다.** 다음 행동을 정하는 건 Arrange지만, Task 파일이 쓰이는 곳은 실행 단계입니다.
- **작업 노트(W-)와 결과물(O-)은 컨테이너에 둡니다.** 프로젝트와 함께 끝나기 때문입니다.
- **보관은 1_Arrange/Archive 한 곳에 모읍니다.** 원래 어느 단계에 있었는지는 따지지 않습니다. Archive/Knowledge에는 비활성화한 Zettel과 Map이 들어갑니다.

### 3.3 컨테이너 폴더

컨테이너 폴더는 프로젝트나 영역 하나를 담는 전용 폴더(`P-이름/`, `A-이름/`)입니다.

- **구성:** 폴더와 같은 이름의 허브 노트 하나, 그리고 그 프로젝트·영역과 함께 끝나는 파일(W-, O-, 전용 첨부)
- **들어가지 않는 것:** Task, Zettel, Source. 이들은 속성으로만 연결합니다. 폴더 위치로 관계를 한 번 더 표현하면 두 기록이 언젠가 어긋나기 때문입니다.
- **보관:** 컨테이너를 통째로 Archive로 옮깁니다. 링크는 Obsidian이 자동으로 갱신합니다.
- **내부 하위 폴더:** 금지합니다. 예외는 `_files` 하나입니다.

### 3.4 폴더 규칙

1. 최상위 폴더는 단계 이름을 따르지만, 각 폴더는 유형의 고정 거처입니다. 단계를 진행한다고 파일을 옮기지 않습니다.
2. 관계는 폴더가 아니라 속성으로 표현합니다.
3. 파일이 움직이는 경우는 두 가지뿐입니다.
    - Arrange: 0_Sweep에서 유형별 거처로
    - 종료·비활성: 활성 위치에서 `1_Arrange/Archive/`로. 프로젝트는 수확한 뒤에만 옮깁니다.
4. 단계에 유형이 하나뿐이면 단계 폴더에 파일을 바로 둡니다(0_Sweep, 3_Narrate, 4_Transform). 유형이 둘 이상이면 유형 폴더로 나눕니다(1_Arrange, 2_Internalize, 5_Flow).
5. 유형 폴더 아래에는 컨테이너 폴더와 Archive의 연 단위 폴더만 허용합니다.
6. 첨부 폴더 `_files`는 어느 폴더에나 생길 수 있는 유일한 예외입니다.

### 3.5 파일명 규칙

|유형|위치|규칙|예|
|---|---|---|---|
|Inbox 항목|0_Sweep|제한 없음(입력 첫 줄)|회의 때 나온 아이디어|
|프로젝트 허브|1_Arrange/Projects/P-이름/|`P-이름`|P-기술비교보고서|
|영역 허브|1_Arrange/Areas/A-이름/|`A-이름`|A-학업|
|작업 노트|컨테이너|`W-주제`|W-조사와 비교|
|결과물|프로젝트 컨테이너|`O-결과물명`|O-최종 보고서|
|Source|1_Arrange/Resources|`S-원제목`|S-전자회로 3강 BJT 바이어스|
|Zettel|2_Internalize/Zettels|주장 문장, 접두사 없음|이미터 저항의 음되먹임이 BJT 바이어스 안정도를 높인다|
|Map|2_Internalize/Maps|`M-주제`|M-메모리 관리|
|회상 세션|3_Narrate|`N-YYYY-MM-DD`|N-2026-09-21|
|Task|4_Transform|동사로 끝나는 행동 하나, 접두사 없음|후보 기술 A 평가 조건 정리하기|
|Daily|5_Flow/Daily|`YYYY-MM-DD`|2026-09-21|
|주간 검토|5_Flow/Reviews|`R-YYYY-Www` (ISO 주차)|R-2026-W39|
|종료 검토|5_Flow/Reviews|`R-종료-프로젝트명`|R-종료-기술비교보고서|

공통 규칙:

1. 접두사는 대문자 한 글자와 하이픈이며 뒤에 공백을 두지 않습니다.
2. Task와 Zettel에는 접두사가 없습니다. 제목 자체가 행동이나 주장이어야 합니다.
3. 허브 노트 이름은 컨테이너 폴더 이름과 같아야 합니다.
4. 파일명은 vault 전체에서 유일해야 합니다. 겹치면 생성할 때 뒤에 번호를 붙입니다.
5. 반복되는 프로젝트에는 기간을 붙입니다. 예: `P-전자회로 2026-2`
6. 금지 문자가 있습니다. 생성할 때 제거하거나 치환합니다(예: `C#`은 `C Sharp`로).
    - 운영체제 금지 문자: `/ \ : * ? " < > |`
    - Obsidian 링크를 깨뜨리는 문자: `# ^ [ ]`
7. 보관해도 이름은 바꾸지 않습니다.
8. Zettel 제목은 60자 안팎을 권장합니다.

### 3.6 첨부파일 규칙

- 첨부는 **현재 파일 폴더 아래 `_files/`**에 저장합니다(`attachmentFolderPath: "./_files"`). 프로젝트 전용 파일이 컨테이너 안에 있으므로, 보관할 때 함께 이동합니다.
    
- 참고 자료 원본(PDF, 슬라이드, 데이터시트)은 `1_Arrange/Resources/_files/`에 두고 `S-` 노트에서 링크합니다.
    
- **vault 밖에 두는 것:**
    
    - 보존만 하는 기록 문서(계약서, 증명서, 영수증, 세무 서류)
    - 회사 소유 문서
    - 코드 저장소
    - 대용량 바이너리
    
    이런 파일은 파일 저장소나 git에 두고, 필요할 때만 링크합니다.
    

### 3.7 설정 (`.obsidian/`)

|파일|내용|
|---|---|
|app.json|새 노트 위치 `0_Sweep`, 첨부 위치 `./_files`, 링크 자동 갱신|
|daily-notes.json|폴더 `5_Flow/Daily`, 형식 `YYYY-MM-DD`, 템플릿 `9_System/Templates/Daily`|
|templates.json|템플릿 폴더 `9_System/Templates`|

코어 플러그인 Templates, Daily notes, Bases가 켜져 있어야 합니다.

### 3.8 Bases

모든 폴더 필터는 3.1 경로를 기준으로 합니다.

|파일|보기|비고|
|---|---|---|
|Tasks.base|다음 행동, 예정 및 마감, 대기, 언젠가, 연결된 Task, 완료|"연결된 Task"는 허브 임베드용(`file.hasLink(this.file)`)|
|Projects.base|진행 중, 멈춘 프로젝트, 영역별, 보류 및 언젠가, 완료|수식 `next_actions`, `stalled`는 검증 필요(V1)|
|Recall.base|오늘 복습, 전체 회상 대상|수식 `next_review`|
|Checks.base|수집함, 대기 중, 연결 없는 Zettel, 오래된 seed, uses 없는 결과물|Weekly Review에 임베드|
|Knowledge.base|연결된 지식, Source, Zettel|"연결된 지식"은 허브 임베드용. 과목 허브에서 강의 Source와 Zettel을 모아 봄|

`Home.md`는 수집함, 다음 행동, 예정 및 마감, 진행 중, 오늘 복습, 멈춘 프로젝트, 대기 중 보기를 임베드합니다.

### 3.9 템플릿 (`9_System/Templates/`)

|템플릿|용도|임베드|
|---|---|---|
|Task|행동 하나||
|Project|프로젝트 허브|연결된 Task, 연결된 지식|
|Area|영역 허브|영역별 프로젝트, 연결된 Task, 연결된 지식|
|Working|작업 노트||
|Output|결과물||
|Source|참고 자료 요약||
|Zettel|영구 노트||
|Map|지식 지도||
|Daily|하루 실행과 복습 확인|다음 행동, 오늘 복습|
|Recall Session|회상 답안||
|Weekly Review|주간 검토|Checks 보기 전체, 멈춘 프로젝트, 언젠가|
|Project Close Review|종료 검토||

`saintflow-new` 버튼 블록(S5)은 플러그인을 구현하는 Phase 2에서 템플릿에 추가합니다.

---

## 4. 자료 배치 가이드

### 4.1 판단 순서

아래 질문에 위에서부터 차례로 답하고, 처음으로 "예"가 나온 곳에 둡니다.

1. 아직 무엇인지 판단하지 않았는가? → 0_Sweep
2. 행동인가? → Task(4_Transform). 여러 행동이 필요하면 프로젝트 컨테이너를 만듭니다.
3. 특정 프로젝트·영역과 함께 끝나는가? → 그 컨테이너(`W-`, `O-`, `_files`)
4. 자료가 말하는 것을 정리했는가? → Source(1_Arrange/Resources)
5. 내가 이해한 것을 자기 말로 썼는가? → Zettel(2_Internalize/Zettels). 여러 개념의 구조라면 Map
6. 보존만 하면 되는가? → vault 밖

### 4.2 일반 문서

|문서|위치|
|---|---|
|특정 프로젝트의 초안, 조사 메모, 회의록|프로젝트 컨테이너 `W-`|
|프로젝트 최종 산출물|프로젝트 컨테이너 `O-`|
|정기 회의록, 운영 매뉴얼, 반복 체크리스트, 서식|영역 컨테이너 `W-`|
|논문, 데이터시트, 규격, 강의자료|`S-` 노트, 원본은 Resources/_files|
|계약서, 증명서, 영수증, 세무 서류|vault 밖 파일 저장소|
|회사 소유 문서|각 회사 시스템|

### 4.3 공부 정리

과목 하나는 **프로젝트**(끝나는 날짜와 완료 조건이 있음)이고, 학업 전체는 **영역**입니다. 기준은 두 가지입니다.

- 자료를 요약한 것이면 Source, 이해한 것이면 Zettel
- 학기가 끝나도 다시 볼 것이면 Resources·Internalize, 아니면 과목 컨테이너

|정리 내용|위치|
|---|---|
|강의·교재 단원 요약|`S-` (강의 1회나 단원 1개당 노트 하나, `project` = 과목)|
|이해한 개념 하나|Zettel (시험 범위면 `recall: true`)|
|과목 전체 구조, 공부 순서|`M-과목명`|
|시험 요약 시트, 기출 풀이|과목 컨테이너 `W-`|
|제출 과제|과목 컨테이너 `O-`|
|회상 답안|`N-` 세션|

```text
1_Arrange/Areas/A-학업/A-학업.md
1_Arrange/Projects/P-전자회로 2026-2/
  P-전자회로 2026-2.md          # outcome, deadline = 기말고사일
  W-기출 풀이.md
  W-시험 요약 시트.md
  O-과제3 보고서.md
1_Arrange/Resources/S-전자회로 3강 BJT 바이어스.md
2_Internalize/Zettels/이미터 저항의 음되먹임이 BJT 바이어스 안정도를 높인다.md
2_Internalize/Maps/M-전자회로.md
```

학기가 끝나면 종료 검토를 합니다. `W-`는 프로젝트와 함께 보관되고, Source·Zettel·Map은 남아서 후속 과목과 연결됩니다.

### 4.4 프로그래밍 공부

코드 자체는 vault 밖 git 저장소에 두고, vault에는 코드에서 얻은 지식만 남깁니다.

|공부 내용|위치|
|---|---|
|책·공식 문서·강의 한 단원|`S-`|
|개념 하나(소유권, RAII, 이벤트 루프)|Zettel, 20줄 이내 코드 예시|
|언어 간 비교, 공통 원리|Zettel, 양쪽 개념 연결|
|에러를 해결하며 얻은 교훈|Zettel, 주장형 제목|
|문법·API 조회용 정리|공식 문서 링크 또는 `S-`, 회상 대상 아님|
|연습 문제, 토이 프로젝트 코드|git 저장소, 허브의 `repo` 속성|
|토이 프로젝트 설계·진행 기록|프로젝트 컨테이너 `W-`, `O-`|
|개발 환경 설정|영역 `A-개발 환경`, 코드는 dotfiles 저장소|

- **Map은 언어보다 개념 중심으로 짭니다.** 예를 들어 `M-메모리 관리` 아래에 C, C++, Rust, Python의 관련 Zettel을 함께 연결합니다. `M-Rust` 같은 언어별 Map은 인덱스 역할만 합니다.
- **끝이 없는 학습은 영역, 결과물이 정의되는 학습은 프로젝트입니다.** 예: "Rust Book 20장까지 연습문제 포함 완료"는 프로젝트입니다.
- **회상 질문은 가능하면 컴파일로 판정 가능하게 만듭니다.** 예: "보지 않고 E0502가 나는 최소 예제를 쓰고 해결책 두 가지를 적용하라."

---

## 5. SaintFlow Obsidian 플러그인

### 5.1 문제 정의

Obsidian의 마찰은 생성과 연결에서 생깁니다. 파일 중심 도구라 relation 선택기가 없고, 새 항목을 만들 때 맥락이 반영되지 않으며, 역방향 관계가 자동으로 생기지 않습니다. 역방향은 규칙 8에 따라 허브의 임베드 보기로 대신하고, 나머지는 플러그인으로 해결합니다.

|작업|플러그인 없이 할 때|
|---|---|
|Task 생성|새 파일 → 템플릿 → 폴더 이동 → 링크 입력|
|관계 지정|`[[` 자동완성, 유형 제한 없음|
|Arrange|이동, 템플릿, 속성, 파일명 수동|
|회상 채점|box, last_reviewed, last_result, 로그 네 곳 편집|
|프로젝트 종료|수확, 이동, 검토 노트 수동|

### 5.2 설계 원칙

- **관계는 자식 쪽에만 씁니다.** 양방향으로 쓰지 않습니다.
- **파일 조작은 Obsidian API로만 합니다.**
    - 이동·이름 변경: `app.fileManager.renameFile` (링크 자동 갱신)
    - 속성 편집: `app.fileManager.processFrontMatter`
    - 생성: `app.vault.create`
- **규칙은 코드로 검증합니다.** 파일명 규칙, 필수 속성, evergreen 승격 조건, 판정 형식이 대상입니다.
- **역할을 나눕니다.** Bases는 보기를 담당하고, 플러그인은 생성·변경·점검 계산을 담당합니다.
- **모바일에서도 동작해야 합니다.** Node API를 쓰지 않고 `isDesktopOnly: false`로 둡니다.
- **사용자 본문은 쓰지 않습니다(규칙 6).** 플러그인은 골격과 링크 줄만 만듭니다.

### 5.3 명령

플러그인 ID는 `saintflow`입니다.

|ID|명령|트리거|동작|검증 기준|
|---|---|---|---|---|
|C1|수집|어디서나(단축키, 모바일 리본)|한 줄 입력 → `0_Sweep/`에 파일 생성, 중복 시 번호|2단계 이내 완료|
|C2|분류|활성 파일이 `0_Sweep/`에 있음|유형 선택 → 유형별 입력(아래 표) → 템플릿 속성 병합, 본문 보존 → 파일명 규칙 적용 → 거처로 이동|Sweep에 파일 없음, 필수 속성 존재, 파일명 규칙 준수|
|C3|맥락 생성|활성 파일 또는 C11 버튼이 놓인 노트가 2.4의 부모|허용 유형 선택 → 제목 입력 → 관계 자동 기록 → 기본값 → 파일명 규칙 → 생성 후 열기. 부모가 없으면 C5 선택기|관계 수동 입력 0회, 허브 임베드에 즉시 표시|
|C4|새 프로젝트 / 새 영역|어디서나|이름과 완료 조건(프로젝트는 필수) → 컨테이너와 허브 생성 → 첫 다음 행동 입력 권유|완료 조건이 비면 거부|
|C5|관계 지정|해당 필드가 있는 파일|필드 선택(project, area, sources, uses) → 유형 필터 퍼지 선택기(project는 active·on-hold 허브만)|링크 표기 `[[파일명]]` 통일|
|C6|Zettel 연결 추가|활성 파일이 Zettel|Zettel 선택 → 이유 입력(필수) → 연결 섹션에 `- [[X]] — 이유` 삽입|이유가 비면 거부|
|C7|상태 전환|Task, Project, Zettel, Output|Task done → `completed` 기록. Zettel evergreen → 연결 2개 이상, 모든 연결에 이유, 생각 섹션 비어 있지 않음을 검사해 미충족 시 거부. Output shipped → uses가 비면 경고|조건 미충족 시 상태 불변|
|C8|회상 세션 / 채점|세션은 어디서나, 채점은 recall Zettel|세션: `3_Narrate/N-오늘` 생성, due_today Zettel별 질문·답안 칸 생성. 채점: pass는 box+1(최대 5), fail은 box=1이고 틀린 점 필수. last_reviewed·last_result 갱신, 인출 기록에 한 줄 추가|next_review가 2.3과 일치|
|C9|프로젝트 종료|활성 파일이 P- 허브|완료 조건 판정 → O-의 uses 확인 → W-별 승격 또는 보관 선택 → 남은 Task 처리 → status: done → `R-종료-이름` 생성 → 컨테이너를 `1_Arrange/Archive/Projects/`로 이동|활성 위치에 잔여 파일 없음, 링크 유지|
|C10|주간 검토|어디서나|`R-YYYY-Www` 생성 → 2.3 점검 값을 계산해 "점검 스냅샷"에 개수와 링크 기록|픽스처 기대값과 일치|
|C11|생성 버튼 블록|`saintflow-new` 코드 블록|허용 유형별 버튼 렌더링 → 블록이 놓인 노트를 부모로 C3 실행|버튼과 제목 입력만으로 연결된 자식 생성|
|C12|Inbox 처리 모드|어디서나 (0_Sweep에 파일이 있을 때)|0_Sweep 파일을 생성 순으로 하나씩 열고 판단 순서를 질문으로 제시 → 2분 안에 끝나는 일이면 Task(`status: done`, `completed` 오늘)로 기록하고 다음 항목 → 아니면 C2 분류 흐름 → 건너뛰기·삭제 가능 → 끝나면 처리 요약(처리 수, 유형별 건수) 표시|종료 후 0_Sweep 잔량이 건너뛴 항목 수와 같음. 처리된 항목은 모두 필수 속성과 파일명 규칙 충족|
|C13|Source에서 Zettel 추출|활성 파일이 Source이고, 커서가 "추출할 생각"의 체크리스트 항목에 있음|항목 문구를 제목 후보로 제시 → 주장 문장 제목 입력(파일명 규칙 검사) → `2_Internalize/Zettels/`에 seed Zettel 생성(`sources: [[현재 Source]]`, project·area 상속 여부 선택) → 원래 항목을 체크하고 `[[새 Zettel]]` 링크로 치환 → 새 Zettel 열기|새 Zettel의 sources가 현재 Source를 가리킴. Source 항목이 체크되고 링크로 바뀜. 생각 섹션은 비어 있음(규칙 6)|
|C14|선택 영역 승격|활성 파일이 W- 노트이고 텍스트가 선택됨|대상 유형 선택(Zettel, Source) → 제목 입력 → 선택 텍스트를 새 노트 본문으로 이동(Zettel은 생각 섹션, Source는 핵심 내용) → project·area를 원래 노트에서 상속 → 원래 자리에 `[[새 노트]]` 링크를 남김. Zettel은 seed로 생성|텍스트가 복사가 아니라 이동됨. 원래 자리에 링크가 남음. 새 노트의 거처와 속성이 규칙에 맞음|
|C15|규칙 검사|명령 실행. 설정에 따라 시작 시, 파일 이동·이름 변경 시에도|vault를 검사해 위반을 규칙별 목록으로 표시(5.7) → 항목마다 파일 열기와 빠른 수정 제공 → 이벤트 모드에서는 위반이 생기는 즉시 알림|픽스처 vault에 심어 둔 위반을 모두 검출. 빠른 수정 후 재검사하면 0건|
|C16|SaintFlow 패널|사이드바 뷰 (상시 표시)|Inbox 잔량, 오늘 복습, 멈춘 프로젝트, 대기, 연결 없는 Zettel, 오래된 seed, uses 없는 결과물 개수 표시 → 클릭하면 해당 목록이나 Bases 보기 열기 → metadataCache 이벤트로 갱신|값이 C10 계산과 일치. 파일 변경 직후 반영|
|C17|시작 시 Home 열기|Obsidian 시작 (설정으로 켜고 끔)|워크스페이스 로드 후 `Home.md`를 활성 탭으로 열기. 모바일 포함|시작 직후 활성 탭이 Home|
|C18|허브 열기|활성 파일이 컨테이너 안에 있음, 또는 파일 탐색기에서 컨테이너 폴더 선택|현재 파일이 속한 컨테이너의 허브(`폴더명.md`)로 이동 → 파일 탐색기에서 허브 노트를 구분 표시하고 폴더 메뉴에 "허브 열기" 추가 → 허브가 없으면 생성 제안|컨테이너 안의 어느 파일에서든 한 번에 허브 도달|
|C19|스키마 마이그레이션|명령 실행. 플러그인 업데이트로 스키마 버전이 오르면 안내|유형별 스키마(5.8)와 각 노트의 frontmatter 비교 → 누락 속성 추가, 이름이 바뀐 키 변경, 허용되지 않은 값 보고 → 변경 미리보기와 확인 → 적용 결과 로그|미리보기와 실제 변경이 일치. 본문은 변경되지 않음. 재실행하면 변경 0건(멱등)|
|C20|점검 리포트 내보내기|명령 실행, C10 실행 시 자동|2.3 점검 값과 C15 위반 목록을 `9_System/reports/YYYY-MM-DD.json`에 저장(항목별 경로, 유형, 사유)|JSON이 정의된 스키마를 따름. 값이 C10·C16과 일치|

C2 유형별 입력:

|유형|추가 입력|결과 위치|
|---|---|---|
|Task|상태, project 또는 area|4_Transform/|
|Project|완료 조건, area, repo(선택)|1_Arrange/Projects/P-이름/P-이름.md|
|Area|유지 기준|1_Arrange/Areas/A-이름/A-이름.md|
|Source|author, url, project 또는 area(선택)|1_Arrange/Resources/S-이름.md|
|Zettel|주장 문장 제목(status는 seed 고정)|2_Internalize/Zettels/|
|Map|주제|2_Internalize/Maps/M-주제.md|
|삭제|확인|휴지통|

C11 블록 문법:

````markdown
```saintflow-new
types: task, working, output, zettel, source
```
````

- `types`는 2.4에서 부모 유형에 허용된 자식만 받습니다. 허용되지 않은 유형이 있으면 오류 문구를 렌더링합니다.
- 부모 유형은 블록이 놓인 노트의 `type`으로 판정합니다.
- `registerMarkdownCodeBlockProcessor`로 구현하며, 읽기 모드와 Live Preview 모두 지원합니다.

### 5.4 점검 계산

- **frontmatter 조회:** `app.metadataCache.getFileCache(file)?.frontmatter`
- **frontmatter 링크 해석:** 속성 값의 `[[...]]`를 `getFirstLinkpathDest`로 직접 해석합니다. `resolvedLinks`에 frontmatter 링크가 포함되는지에 의존하지 않습니다.
- **역방향 인덱스:** 위 결과와 `resolvedLinks`를 합쳐 만들고, `resolved`와 `changed` 이벤트에 맞춰 갱신합니다.
- **보관 판정:** 경로가 `1_Arrange/Archive/`로 시작하면 보관된 것으로 봅니다.
- **2.3과의 일치:** 계산 함수는 순수 함수로 분리하고 단위 테스트합니다.

### 5.5 설정 탭

|설정|기본값|
|---|---|
|폴더 경로|3.1|
|회상 간격|1, 3, 7, 14, 30|
|old_seed 임계값|14일|
|파일명 접두사|P-, A-, W-, O-, S-, M-, N-, R-|
|템플릿 폴더|9_System/Templates|
|점검 리포트 폴더(C20)|9_System/reports|
|시작 시 Home 열기(C17)|켬|
|Home 경로(C17)|Home.md|
|파일 탐색기 허브 표시(C18)|켬|
|시작 시 규칙 검사(C15)|끔|
|이동·이름 변경 시 규칙 검사(C15)|끔|
|주간 검토 시 리포트 저장(C20)|켬|

### 5.6 대안

QuickAdd, Templater, Metadata Menu 조합으로도 C1~C5의 상당 부분을 만들 수 있습니다. 하지만 규칙 검증(C6, C7)과 점검 계산(C10)은 조합으로 만들기 어렵고, 서드파티 플러그인 세 개에 의존하게 됩니다. 그래서 자체 플러그인을 기본안으로 정했습니다. 플러그인 구현이 늦어지면 임시로 QuickAdd 매크로로 C1과 C3만 먼저 구성합니다.

### 5.7 C15 검사 항목

|규칙|위반 예|빠른 수정|
|---|---|---|
|유형과 거처|`type: task`인데 4_Transform 밖에 있음|거처로 이동|
|필수 속성|Project에 `outcome` 없음|속성 추가 후 파일 열기|
|파일명|접두사 누락, 금지 문자 포함|규칙에 맞는 이름 제안|
|허브 이름|컨테이너 폴더명과 허브 파일명 불일치|허브 이름 변경|
|컨테이너 내용|컨테이너 안에 Task, Zettel, Source|거처로 이동|
|폴더 깊이|컨테이너 안에 하위 폴더(`_files` 제외)|보고만|
|관계 무결성|보관된 프로젝트를 가리키는 활성 Task, 해석되지 않는 링크|파일 열기|
|값 범위|허용값 밖의 `status`, 1~5 밖의 `box`|값 선택|

템플릿 폴더는 값이 비어 있는 골격이므로 검사에서 뺍니다. 컨테이너에 같은 이름의 허브가 없는 경우도 "허브 이름"으로 보고하되, 어느 유형의 허브를 만들지는 사람이 정해야 하므로 보고만 합니다.

### 5.8 스키마 정의

2.2의 표를 검사 가능한 형태로 옮긴 것입니다. C15의 "필수 속성"과 "값 범위", C19의 누락 속성 판정이 모두 이 정의 하나를 봅니다.

- 속성마다 종류(고정값, 열거, 링크, 링크 리스트, 날짜, 텍스트, 숫자, 불리언), 필수 여부, 허용값, 범위를 둡니다.
- `box`처럼 다른 속성의 값에 따라 필수가 되는 경우를 조건부 필수로 적습니다(`recall`이 true일 때).
- 빈 문자열과 빈 리스트는 "값 없음"으로 봅니다. 값이 없는 속성은 값 범위 검사 대상이 아닙니다.
- 스키마 버전을 두고, 플러그인 업데이트로 버전이 오르면 C19 안내를 띄웁니다.
- 키 이름이 바뀌면 `이전 이름 → 새 이름` 표에 적고 버전을 올립니다. C19가 그 표를 보고 갈아 끼웁니다.

C19는 누락된 키를 빈 값으로 채우고 이름이 바뀐 키를 옮기기만 합니다. 허용값 밖의 값은 자동으로 바꾸지 않고 보고만 하며, 고치는 일은 C15의 값 선택이 맡습니다. 본문은 어떤 경우에도 바꾸지 않습니다.

---

## 6. 검증과 작업 계획

### 6.1 vault 검증 항목

|ID|확인 내용|실패 시 대응|
|---|---|---|
|V1|Projects.base의 `file.backlinks.filter(value.asFile().properties.status == "next").length` 계산|Bases에서 수식을 제거하고, 판정은 플러그인 C10이 담당|
|V2|`file.hasLink(this.file)`가 frontmatter 링크를 포함하는가|임베드 필터를 속성 값 비교 식으로 교체|
|V3|`'!uses'` 필터가 빈 값을 잡는가|명시적 비교로 교체|
|V4|`'scheduled'`, `'due'` truthy 필터|명시적 비교로 교체|
|V5|`date(last_reviewed) + duration(...)` 계산|날짜 + 기간 문자열 형식으로 교체|
|V6|리스트 `.length` 비교|함수 형식으로 교체|
|V7|임베드된 Base 보기에서 만든 새 노트에 필터 값이 채워지는가|채워지지 않으면 C11만 사용|
|V8|`./_files`가 "현재 폴더 아래 하위 폴더"로 동작하는가|설정 화면에서 해당 옵션을 직접 선택|

### 6.2 픽스처 vault (`tests/fixture-vault/`)

|파일|내용|기대 결과|
|---|---|---|
|1_Arrange/Projects/P-정상/P-정상.md|active, 완료 조건|stalled = false|
|4_Transform/정상 다음 행동하기.md|next, project = P-정상|P-정상 허브에 표시|
|1_Arrange/Projects/P-멈춤/P-멈춤.md|active, next Task 없음|stalled = true|
|4_Transform/회신 받기.md|waiting, waiting_on|대기 1건|
|2_Internalize/Zettels/연결된 주장.md|evergreen, 연결 2개와 이유|orphan = false|
|2_Internalize/Zettels/고립된 주장.md|seed, 링크 없음|orphan = true, old_seed = true(임계값 0일)|
|2_Internalize/Zettels/복습 대상.md|recall, box 2, last_reviewed = 3일 전|due_today = true|
|1_Arrange/Projects/P-정상/O-결과.md|output, shipped, uses 비어 있음|output_without_uses = 1|
|1_Arrange/Resources/S-테스트.md|source, project = P-정상|P-정상 허브의 연결된 지식에 표시|
|2_Internalize/Maps/M-테스트.md|map|C11 테스트용|
|0_Sweep/미분류.md||Sweep 잔량 1|
|2_Internalize/Zettels/보조 주장.md|evergreen, 연결 2개|"연결된 주장"의 연결 대상이 실재해야 하므로 추가. 그 대상을 "고립된 주장"으로 삼으면 orphan 기대값이 깨짐|

C15 위반도 규칙마다 하나씩 심어 둡니다. 점검 스냅샷 개수를 흔들지 않도록 프로젝트는 `on-hold`로,
Task는 `next`나 허용값 밖의 값으로 둡니다. 대조군으로 `P-정상/_files/`를 두어 "폴더 깊이"에 잡히지 않는지 봅니다.

|규칙|파일|기대|
|---|---|---|
|유형과 거처|2_Internalize/거처 위반 확인하기.md|4_Transform으로 이동 제안|
|필수 속성|1_Arrange/Projects/P-속성 누락/P-속성 누락.md|outcome 추가 제안|
|파일명|1_Arrange/Resources/접두사 없는 자료.md|`S-접두사 없는 자료` 제안|
|허브 이름|1_Arrange/Projects/P-이름 불일치/P-다른 이름.md|노트 쪽 이름 변경 제안, 폴더 쪽 허브 없음 보고|
|컨테이너 내용|1_Arrange/Projects/P-정상/컨테이너 안 할 일하기.md|4_Transform으로 이동 제안|
|폴더 깊이|1_Arrange/Projects/P-멈춤/초안/|보고만|
|관계 무결성|4_Transform/없는 프로젝트 확인하기.md|링크 해석 실패|
|값 범위|4_Transform/값 범위 확인하기.md|status 값 고르기|

### 6.3 명령별 수용 테스트

|명령|테스트|
|---|---|
|C2|"미분류"를 Task(project = P-정상)로 분류 → `4_Transform/미분류.md`, `type: task`, `status: next`, `project: "[[P-정상]]"`, Sweep 비어 있음|
|C3|P-멈춤 허브에서 Task 생성 → project 자동 지정, stalled = false|
|C6|이유를 비운 채 실행 → 삽입되지 않음|
|C7|"고립된 주장"을 evergreen으로 승격 시도 → 거부되고 부족한 조건 표시|
|C8|세션 시작 → `3_Narrate/N-오늘`에 "복습 대상" 칸 생성. pass → box 3, last_reviewed 오늘, last_result pass, 로그 한 줄, next_review = 오늘 + 7일|
|C9|P-정상 종료 → `1_Arrange/Archive/Projects/P-정상/`, R-종료-정상 생성, Task의 project 링크 유지|
|C10|스냅샷 개수가 6.2 기대값과 일치|
|C11|S-테스트의 "+ Zettel" → `sources: ["[[S-테스트]]"]`, `status: seed`. M-테스트의 "+ Zettel" → 구조 섹션에 링크 추가. 허용되지 않은 유형은 오류 문구|
|C12|"미분류"를 건너뛰고 종료 → 요약에 건너뜀 1건, 잔량 1건. 새 항목을 2분 규칙으로 처리 → `status: done`, `completed` 오늘|
|C13|S-테스트의 "추출할 생각" 항목에서 실행 → seed Zettel 생성, `sources`가 S-테스트, 원래 항목이 `- [x] [[새 Zettel]]`로 바뀜, 생각 섹션 비어 있음|
|C14|W- 노트에서 문단을 골라 Zettel로 승격 → 문단이 새 Zettel의 생각 섹션으로 이동하고 원래 자리에는 링크만 남음|
|C15|6.2에 심어 둔 위반 9건이 규칙별로 모두 검출. 빠른 수정 후 재검사하면 그 건이 사라짐|
|C16|패널 개수가 C10 스냅샷과 일치. Task의 status를 waiting으로 바꾸면 "대기 중"이 곧 갱신됨|
|C17|설정을 켜고 재시작 → 활성 탭이 Home|
|C18|O-결과에서 허브 열기 → P-정상이 열림. 파일 탐색기에서 허브가 구분 표시됨|
|C19|미리보기에 나온 수와 실제 변경 수가 같고 본문은 그대로. 곧바로 다시 실행하면 변경 0건|
|C20|`9_System/reports/오늘.json`의 `totals.checks`가 C10·C16과 일치, `totals.violationTotal` = 9|

### 6.4 작업 단계

|단계|작업|상태 / 완료 조건|
|---|---|---|
|Phase 0|V1~V8 검증, 실패 항목 대응|6.1 전 항목에 결과 기록|
|Phase 1|스키마 보강(waiting_on, completed, last_result, Area 값, Source project·area, repo, `_files`, Knowledge.base)|완료 (v2.0 vault)|
|Phase 2|플러그인 스캐폴드(TypeScript, esbuild), C1~C5, C11, 템플릿에 `saintflow-new` 추가|구현 완료. C2, C3, C11 수용 테스트는 픽스처 vault에서 수동 확인 대기|
|Phase 3|C6~C8, 점검 계산 모듈과 단위 테스트|구현 완료. 단위 테스트 통과. C6, C7, C8 수용 테스트는 수동 확인 대기|
|Phase 4|C9, C10|구현 완료. C9, C10 수용 테스트는 수동 확인 대기|
|Phase 5|C12~C20, 스키마 정의(5.8), 규칙 검사(5.7), 사이드바 패널|구현 완료. 단위 테스트 통과. 수용 테스트는 수동 확인 대기|

플러그인은 vault 밖 별도 저장소(`../saintflow`)에 있습니다. 산출물만 vault의
`.obsidian/plugins/saintflow/`로 빌드합니다. 명령·모듈 구성과 빌드 방법은 그 저장소의 `README.md`,
수용 테스트 절차는 `tests/fixture-vault/README.md`에 있습니다.
6.3의 수용 테스트는 Obsidian을 열어야 하므로 아직 실행하지 않았습니다.

---

## 7. Claude Code 작업 지침

- 이 문서를 단일 기준으로 삼습니다. 동작을 바꿀 때는 이 문서를 먼저 갱신합니다.
- vault 파일을 플러그인 밖에서 직접 수정할 때는 Obsidian이 닫힌 상태에서만 합니다.
- 사용자 본문(Zettel의 생각·근거, 회상 답, 회고, 학습용 연습 코드)은 생성하거나 수정하지 않습니다.
- 커밋은 명령 하나 단위로 하고, 메시지에 명령 ID를 포함합니다.

## 8. 비범위

- 다른 도구(Notion 등)와의 동기화. Notion 단독형은 별도 문서의 대안입니다.
- AI가 Zettel 본문, 회상 답, 학습용 코드를 작성하는 기능
- 모바일 Git 동기화 구성
- 보존용 기록 문서와 회사 문서의 vault 내 관리

## 9. 미결 사항

|항목|선택지|
|---|---|
|컨텍스트(장소·도구) 속성|도입(Task에 context), 미도입|
|~~플러그인 배포~~|결정: 소스는 vault 밖 별도 저장소(`../saintflow`), 산출물만 `.obsidian/plugins/saintflow/`로 직접 빌드. vault 경로는 `SAINTFLOW_VAULT` 환경 변수로 바꿉니다. `node_modules`가 vault 안에 들어가지 않고 Sync 대상에서도 빠집니다. BRAT은 다른 기기에 배포할 일이 생기면 다시 봅니다|
|기록 문서 저장소|Google Drive 등 외부 저장소의 폴더 구조|