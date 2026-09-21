# SaintFlow 운영 규칙

전체 설계는 [[SaintFlow 최종 설계안]]에 있습니다. 이 노트는 매일 참고할 요약입니다.

## 폴더
1. 최상위 폴더는 단계 이름을 따르지만, 각 폴더는 유형의 고정 거처입니다. 단계를 진행해도 파일을 옮기지 않습니다.
2. 관계는 속성(project, area, sources, uses)으로 표현하고, 자식 쪽에만 기록합니다.
3. 파일 이동은 두 가지뿐입니다. 0_Sweep에서 거처로, 활성 위치에서 1_Arrange/Archive로(프로젝트는 수확 후).
4. 컨테이너(P-, A-)는 허브 노트와 함께 끝나는 파일(W-, O-, _files)만 담습니다. Task, Zettel, Source는 넣지 않습니다.
5. 첨부는 현재 폴더의 _files에 저장합니다. 보존용 기록 문서, 회사 문서, 코드 저장소는 vault 밖에 둡니다.

## 어디에 둘까
1. 아직 무엇인지 모른다 → 0_Sweep
2. 행동이다 → 4_Transform (여러 행동이면 프로젝트)
3. 특정 프로젝트·영역과 함께 끝난다 → 그 컨테이너(W-, O-)
4. 자료가 말하는 것을 정리했다 → 1_Arrange/Resources (S-)
5. 이해한 것을 자기 말로 썼다 → 2_Internalize/Zettels (구조면 Maps)
6. 보존만 하면 된다 → vault 밖

## 파일명
| 유형 | 위치 | 규칙 |
|---|---|---|
| 프로젝트 허브 | 1_Arrange/Projects/P-이름/ | P-이름 |
| 영역 허브 | 1_Arrange/Areas/A-이름/ | A-이름 |
| 작업 노트 | 컨테이너 | W-주제 |
| 결과물 | 프로젝트 컨테이너 | O-결과물명 |
| Source | 1_Arrange/Resources | S-원제목 |
| Zettel | 2_Internalize/Zettels | 주장 문장(60자 안팎) |
| Map | 2_Internalize/Maps | M-주제 |
| 회상 세션 | 3_Narrate | N-YYYY-MM-DD |
| Task | 4_Transform | 동사로 끝나는 행동 하나 |
| Daily | 5_Flow/Daily | YYYY-MM-DD |
| Review | 5_Flow/Reviews | R-YYYY-Www, R-종료-프로젝트명 |

- 허브 이름은 컨테이너 폴더 이름과 같게 합니다.
- 파일명은 vault 전체에서 유일해야 합니다.
- 반복되는 프로젝트에는 기간을 붙입니다(예: P-전자회로 2026-2).
- 금지 문자: / \ : * ? " < > | # ^ [ ]
- 보관해도 이름은 바꾸지 않습니다.

## 완료 증거
| 단계 | 증거 |
|---|---|
| Sweep | 0_Sweep에 파일 존재 |
| Arrange | 0_Sweep에서 사라지고 status와 위치 부여 |
| Internalize | evergreen, 연결 2개 이상, 연결 이유 |
| Narrate | 회상 세션 노트, 인출 기록 한 줄, box·last_reviewed 갱신 |
| Transform | status: done, 결과물의 uses |
| Flow | 5_Flow/Reviews의 검토 노트 |

## 회상 판정
보지 않고 핵심 주장, 근거, 적용 사례 또는 반례를 모두 쓴 경우에만 pass입니다. pass면 box를 한 칸 올리고(최대 5), fail이면 1로 되돌립니다. 간격은 1, 3, 7, 14, 30일입니다. 답안은 3_Narrate의 회상 세션 노트에 씁니다.

## AI 경계
AI에게는 분류, 점검, 질문 생성, 채점까지만 맡깁니다. Zettel 본문, 회상 답, 학습용 연습 코드는 직접 씁니다.
