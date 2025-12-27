# 이력서/경력기술서 사용 가이드

> **목적**: 이력서/경력기술서 프로젝트의 실사용 워크플로우 가이드
> **대상**: Claude Code 사용자
> **최종 업데이트**: 2025-12-27

---

## Quick Start

### 1분 안에 시작하기

```bash
# 1. 이력서 내용 수정
"my_career_data.md의 Professional Summary를 수정해줘"

# 2. 전체 파일 동기화
"/update-resume"

# 3. PDF 내보내기
"/export"
```

---

## 핵심 개념

### 단일 진실 공급원 (SSOT)

```
my_career_data.md (원본 - 여기만 수정!)
        ↓ 자동 동기화
        ├── resume.md
        ├── career_portfolio.md
        ├── formats/*.md (6개)
        ├── templates/resume/*.html (4개)
        └── templates/career/*.html (4개)
```

**핵심 규칙**: `my_career_data.md`만 수정하고, 나머지는 `/update-resume`로 동기화

---

## 워크플로우별 가이드

### 워크플로우 1: 이력서 내용 수정

```
Step 1: 수정 요청
─────────────────
"구하다 인플루언서 프로젝트의 성과 수치를 업데이트해줘"
"Professional Summary를 더 임팩트 있게 다듬어줘"

Step 2: 동기화
─────────────────
/update-resume

Step 3: 확인 (선택)
─────────────────
/sync-check
```

### 워크플로우 2: 새 프로젝트 추가

```
Step 1: 프로젝트 추가
─────────────────
/add-project
→ 프로젝트 정보 입력 (STAR+I 형식)

Step 2: 자동 처리
─────────────────
- my_career_data.md에 추가
- work-logs/{회사}/에 상세 로그 생성
- 전체 파일 동기화
```

### 워크플로우 3: JD 맞춤형 이력서

```
Step 1: 이력서 생성
─────────────────
/create-resume-document
→ "토스 백엔드 JD에 맞춰 이력서 작성해줘"
→ JD URL 또는 텍스트 제공

Step 2: 결과
─────────────────
docs/career/formats/by-jd/toss_backend_2025-12.md 생성
```

### 워크플로우 4: PDF 내보내기

```
Step 1: 내보내기
─────────────────
/export
→ "이력서를 PDF로 내보내줘"
→ "경력기술서 PDF 만들어줘"

Step 2: 결과
─────────────────
output/윤원희_이력서_2025-12.pdf
output/윤원희_경력기술서_2025-12.pdf
```

### 워크플로우 5: 일상 작업 기록

```
Step 1: 작업 로그 기록
─────────────────
/work-log
→ "오늘 한 작업 기록해줘"
→ 작업 내용 설명

Step 2: 자동 판단
─────────────────
- 이력서에 반영할 만한 성과인지 판단
- 필요 시 my_career_data.md 업데이트 제안
```

---

## 스킬 명령어 정리

### 문서 작성

| 명령어 | 용도 | 예시 |
|--------|------|------|
| `/writing-guide` | 작성 원칙 확인 | "STAR+I 형식 알려줘" |
| `/create-resume-document` | 이력서 작성 | "JD에 맞춰 이력서 작성해줘" |
| `/write-career` | 경력기술서 작성 | "경력기술서 보강해줘" |

### 내보내기

| 명령어 | 용도 | 예시 |
|--------|------|------|
| `/export` | PDF/PPT 생성 | "이력서 PDF로 내보내줘" |

### 데이터 관리

| 명령어 | 용도 | 예시 |
|--------|------|------|
| `/update-resume` | 전체 동기화 | 원본 수정 후 실행 |
| `/add-project` | 프로젝트 추가 | "새 프로젝트 추가할게" |
| `/sync-check` | 동기화 검증 | "파일들 일치하는지 확인해줘" |
| `/work-log` | 작업 로그 기록 | "오늘 작업 기록해줘" |

### 유틸리티

| 명령어 | 용도 | 예시 |
|--------|------|------|
| `/style-guide` | 스타일 수정 | "헤더 색상 변경해줘" |

---

## 파일 구조

```
docs/career/
├── my_career_data.md          ⭐ 원본 (이것만 수정!)
├── resume.md                   # 기본 이력서 (자동 생성)
├── career_portfolio.md         # 경력기술서 (자동 생성)
├── PROFESSIONAL_SUMMARY_SPEC.md  # Summary 작성 명세
├── USAGE_GUIDE.md              # 이 파일
├── formats/                    # 맞춤형 이력서
│   ├── by-jd/                  # JD 맞춤형
│   ├── by-company/             # 기업 유형별 (스타트업/대기업)
│   └── by-domain/              # 도메인별 (핀테크/커머스)
└── work-logs/                  # 작업 로그
    ├── guhada/                 # 구하다
    ├── interpark/              # 인터파크
    └── korealit/               # 한국문헌정보기술

templates/
├── resume/*.html               # 이력서 HTML (4종)
├── career/*.html               # 경력기술서 HTML (4종)
└── export/pdf/*.html           # PDF 내보내기용

output/                         # 최종 PDF 출력
```

---

## 자주 사용하는 요청 예시

### Professional Summary 관련

```
"Professional Summary 다듬어줘"
"Summary를 명세서 기준으로 개선해줘"
"핵심 성과를 [문제→해결→성과] 패턴으로 바꿔줘"
```

### 프로젝트 관련

```
"구하다 인플루언서 프로젝트 성과 수치 업데이트해줘"
"Dynamic Pricing 프로젝트에 트러블슈팅 섹션 추가해줘"
"새 프로젝트 추가할게"
```

### 맞춤형 이력서

```
"토스 백엔드 JD에 맞춰 이력서 만들어줘"
"스타트업용 이력서 생성해줘"
"핀테크 도메인 강조한 이력서 만들어줘"
```

### 내보내기

```
"이력서 PDF로 내보내줘"
"경력기술서 PDF 만들어줘"
"발표용 PPT 만들어줘"
```

### 동기화/검증

```
"/update-resume 실행해줘"
"파일들 동기화 상태 확인해줘"
"모든 파일에서 성과 수치가 일치하는지 검증해줘"
```

---

## 핵심 작성 원칙

### Professional Summary 패턴 (필수)

```
❌ Bad:  "Elasticsearch 도입으로 10초 → 0.1초 달성"
✅ Good: "RDB 타임아웃 → Elasticsearch 도입으로 10초 → 0.1초 달성"
```

**패턴**: `[문제] → [해결 방법] → [정량 성과]`

### STAR+I 프레임워크

| 항목 | 설명 | 예시 |
|------|------|------|
| **S** (Situation) | 문제/배경 | "RDB 검색 10초 타임아웃" |
| **T** (Task) | 해결 목표 | "0.5초 이내 검색 달성" |
| **A** (Action) | 기술적 의사결정 | "ES 역색인 도입" |
| **R** (Result) | 정량 성과 | "10초 → 0.1초 (100배)" |
| **I** (Impact) | 비즈니스 효과 | "마케팅팀 업무 효율 향상" |

### 시니어 톤

| 피해야 할 표현 | 권장 표현 |
|---------------|----------|
| 담당했습니다 | **달성/개선했습니다** |
| 개발했습니다 | **설계하고 구현했습니다** |
| 사용했습니다 | **도입하여 해결했습니다** |

---

## 팁 & 주의사항

### Do's

- ✅ `my_career_data.md`만 직접 수정
- ✅ 수정 후 항상 `/update-resume` 실행
- ✅ 성과는 항상 정량 수치 포함
- ✅ 기술 선택 이유(Why) 포함

### Don'ts

- ❌ `resume.md`, HTML 파일 직접 수정 (동기화 시 덮어씀)
- ❌ 성과 없이 기술만 나열
- ❌ "담당했습니다" 표현 사용
- ❌ 프로젝트 10개 이상 나열 (5-6개 권장)

---

## 관련 문서

| 문서 | 설명 |
|------|------|
| `PROFESSIONAL_SUMMARY_SPEC.md` | Professional Summary 작성 상세 명세 |
| `.claude/skills/README.md` | 전체 스킬 목록 |
| `.claude/skills/write/guide/SKILL.md` | STAR+I 작성 가이드 상세 |

---

## 변경 이력

| 날짜 | 변경 내용 |
|------|----------|
| 2025-12-27 | 최초 작성 |
