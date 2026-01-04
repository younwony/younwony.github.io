# Claude Code 프로젝트 가이드

> **목적**: 이력서/경력기술서/포트폴리오 프로젝트 컨텍스트 제공
> **버전**: 7.0
> **최종 업데이트**: 2026-01-04

---

## 프로젝트 구조

```
younwony.github.io/
├── docs/
│   └── career/
│       ├── my_career_data.md      # 원본 데이터 (SSOT)
│       ├── resume.md              # 기본 이력서 (자동 생성)
│       ├── career_portfolio.md    # 상세 경력기술서 (자동 생성)
│       ├── portfolio/             # 포트폴리오 (기술 백서)
│       │   ├── portfolio.md       # 포트폴리오 문서
│       │   └── images/            # 아키텍처 다이어그램 (SVG)
│       ├── formats/               # 맞춤형 이력서
│       │   ├── by-jd/             # JD 맞춤형
│       │   ├── by-company/        # 기업 유형별 (스타트업/대기업)
│       │   └── by-domain/         # 도메인별 (핀테크/커머스)
│       └── work-logs/             # 작업 로그 (프로젝트별 상세)
│           ├── README.md          # 작업 로그 인덱스
│           ├── guhada/            # 구하다 작업 로그
│           ├── interpark/         # 인터파크 작업 로그
│           ├── korealit/          # 한국문헌정보기술 작업 로그
│           └── personal/          # 개인 프로젝트
├── templates/
│   ├── resume/*.html              # 이력서 템플릿 (4종)
│   ├── career/*.html              # 경력기술서 템플릿 (4종)
│   └── export/pdf/portfolio.html  # 포트폴리오 템플릿
├── assets/
│   ├── css/style.css              # 공통 스타일
│   └── js/common.js               # 공통 스크립트
└── .claude/skills/                 # Skills 정의 (15개)
    ├── write/                     # 문서 작성 (6개)
    ├── export/                    # 내보내기 (1개)
    ├── data/                      # 데이터 관리 (8개)
    └── util/                      # 유틸리티 (1개)
```

### 파일 역할

| 파일 | 역할 | 수정 |
|------|------|------|
| `my_career_data.md` | **원본 데이터** (SSOT) | 직접 |
| `resume.md` | 기본 이력서 | 자동 |
| `career_portfolio.md` | 상세 경력기술서 | 자동 |
| `portfolio/portfolio.md` | **포트폴리오** (기술 백서, 10-15페이지) | 자동 |
| `portfolio/images/*.svg` | 아키텍처 다이어그램 | 자동 |
| `formats/**/*.md` | 맞춤형 이력서 | 자동 |
| `templates/**/*.html` | HTML 출력물 (9개) | 자동 |
| `work-logs/**/*.md` | **작업 로그** (프로젝트별 상세) | 직접 |

---

## 핵심 원칙

### 1. 단일 진실 공급원 (SSOT)

```
my_career_data.md (원본)
    ↓ 자동 생성
    ├── resume.md (기본)
    ├── career_portfolio.md (상세)
    ├── portfolio/portfolio.md (기술 백서)
    ├── formats/**/*.md (맞춤형)
    ├── templates/resume/*.html (4개)
    ├── templates/career/*.html (4개)
    └── templates/export/pdf/portfolio.html (1개)
```

### 문서 세트 구조

> 이력서 변경 시 세 문서 모두 동기화 필요

| 문서 | 분량 | 목적 | 대상 |
|------|------|------|------|
| **이력서** | 2-3페이지 | 빠른 스크리닝 | 인사/채용담당 |
| **경력기술서** | 5페이지+ | 상세 역량 검증 | 실무 면접관 |
| **포트폴리오** | 10-15페이지 | 기술 의사결정/리더십 | Tech Lead/CTO |

### 2. STAR+I 기법

| 항목 | 설명 |
|------|------|
| **S** (Situation) | 상황/배경/제약 |
| **T** (Task) | 과제/목표 |
| **A** (Action) | 기술적 의사결정 (Why & How) |
| **R** (Result) | 정량적 성과 |
| **I** (Impact) | 비즈니스/조직적 효과 |

> **8년차 핵심**: Action에 **"왜 그 기술을 선택했는지"** 의사결정 근거 필수

---

## Skills (15개)

### 문서 작성 (write/)

| Skill | 용도 |
|-------|------|
| `/writing-guide` | STAR+I 작성 가이드, 시니어 톤 표현 |
| `/create-resume-document` | 이력서 작성 (2-3페이지, JD 맞춤형, **세트 생성**) |
| `/write-career` | 경력기술서 작성 (5페이지+, 아키텍처/트러블슈팅 상세) |
| `/write-portfolio` | **포트폴리오 작성** (10-15페이지, 기술 백서 형식) |
| `/svg-diagram` | SVG 아키텍처 다이어그램 (Before/After) |
| `/mermaid-diagram` | Mermaid 다이어그램 (플로우, 시퀀스, ER)

### 문서 내보내기 (export/)

| Skill | 용도 |
|-------|------|
| `/export` | PDF/PPT 내보내기 (페이지 끊김 방지) |

### 데이터 관리 (data/)

| Skill | 용도 |
|-------|------|
| `/update-resume` | 원본 → 이력서/경력기술서 동기화 |
| `/add-project` | 새 프로젝트 추가 (STAR+I 형식) |
| `/sync-check` | 동기화 상태 검증 |
| `/work-log` | 작업 로그 기록 및 이력서 반영 판단 |

### 커맨드

| Command | 용도 |
|---------|------|
| `/sync-all` | **원본 → 전체 파일 동기화** (이력서 + HTML + 리멤버) |

### 유틸리티 (util/)

| Skill | 용도 |
|-------|------|
| `/style-guide` | CSS/HTML 스타일 수정 가이드 |

> **상세 문서**: `.claude/skills/README.md` 참조

---

## Quick Reference

```
문서 작성:
  /writing-guide            # STAR+I 작성 가이드
  /create-resume-document   # 이력서 (2-3페이지, 세트 생성)
  /write-career             # 경력기술서 (5페이지+)
  /write-portfolio          # 포트폴리오 (10-15페이지, 기술 백서)

다이어그램:
  /svg-diagram              # SVG 아키텍처 (Before/After)
  /mermaid-diagram          # Mermaid (플로우, 시퀀스, ER)

내보내기:
  /export                   # PDF/PPT 내보내기

데이터 관리:
  /update-resume            # 이력서/경력기술서/포트폴리오 동기화
  /add-project              # 새 프로젝트 추가
  /sync-check               # 동기화 검증
  /work-log                 # 작업 로그 기록

커맨드:
  /sync-all                 # 전체 동기화 (세트 작성 포함)

유틸리티:
  /style-guide              # CSS 스타일 가이드
```

### 세트 작성 워크플로우

```
원본 변경 → /sync-all 실행
    ↓
    ├── 이력서 (resume.md) 업데이트
    ├── 경력기술서 (career_portfolio.md) 업데이트
    ├── 포트폴리오 (portfolio/portfolio.md) 업데이트
    ├── HTML 템플릿 동기화
    └── 플랫폼 프로필 동기화
```

---

## 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 7.0 | 2026-01-04 | 포트폴리오 스킬 추가 (`/write-portfolio`, `/svg-diagram`, `/mermaid-diagram`), 세트 작성 워크플로우 추가 |
| 6.0 | 2025-12-26 | Skills 구조 개편: 14개 → 9개 통합, 카테고리별 그룹화 (write/export/data/util) |
| 5.0 | 2025-12-26 | Skills 정리: troubleshoot 삭제, 중복 내용 정리 |
| 4.9 | 2025-12-26 | `/enhance-portfolio` 스킬 추가 |
| 4.5 | 2025-12-24 | `/work-log` 스킬 추가, work-logs 디렉토리 구조 |
| 4.0 | 2025-12-20 | Skills 기반 구조로 개편 |
