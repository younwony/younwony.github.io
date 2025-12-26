# Claude Code 프로젝트 가이드

> **목적**: 이력서/경력기술서 프로젝트 컨텍스트 제공
> **버전**: 6.0
> **최종 업데이트**: 2025-12-26

---

## 프로젝트 구조

```
younwony.github.io/
├── docs/
│   └── career/
│       ├── my_career_data.md      # 원본 데이터 (SSOT)
│       ├── resume.md              # 기본 이력서 (자동 생성)
│       ├── career_portfolio.md    # 상세 경력기술서 (자동 생성)
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
│   └── career/*.html              # 경력기술서 템플릿 (4종)
├── assets/
│   ├── css/style.css              # 공통 스타일
│   └── js/common.js               # 공통 스크립트
└── .claude/skills/                 # Skills 정의 (9개)
    ├── write/                     # 문서 작성
    ├── export/                    # 내보내기
    ├── data/                      # 데이터 관리
    └── util/                      # 유틸리티
```

### 파일 역할

| 파일 | 역할 | 수정 |
|------|------|------|
| `my_career_data.md` | **원본 데이터** (SSOT) | 직접 |
| `resume.md` | 기본 이력서 | 자동 |
| `career_portfolio.md` | 상세 경력기술서 | 자동 |
| `formats/**/*.md` | 맞춤형 이력서 | 자동 |
| `templates/**/*.html` | HTML 출력물 (8개) | 자동 |
| `work-logs/**/*.md` | **작업 로그** (프로젝트별 상세) | 직접 |

---

## 핵심 원칙

### 1. 단일 진실 공급원 (SSOT)

```
my_career_data.md (원본)
    ↓ 자동 생성
    ├── resume.md (기본)
    ├── career_portfolio.md (상세)
    ├── formats/**/*.md (맞춤형)
    ├── templates/resume/*.html (4개)
    └── templates/career/*.html (4개)
```

### 2. STAR+I 기법

| 항목 | 설명 |
|------|------|
| **S** (Situation) | 상황/배경/제약 |
| **T** (Task) | 과제/목표 |
| **A** (Action) | 기술적 의사결정 (Why & How) |
| **R** (Result) | 정량적 성과 |
| **I** (Impact) | 비즈니스/조직적 효과 |

> **7년차 핵심**: Action에 **"왜 그 기술을 선택했는지"** 의사결정 근거 필수

---

## Skills (9개)

### 문서 작성 (write/)

| Skill | 용도 |
|-------|------|
| `/writing-guide` | STAR+I 작성 가이드, 시니어 톤 표현 |
| `/create-resume-document` | 이력서 작성 (2-3페이지, JD 맞춤형, 세트 생성) |
| `/write-career` | 경력기술서 작성 (5페이지+, 아키텍처/트러블슈팅 상세) |

### 문서 내보내기 (export/)

| Skill | 용도 |
|-------|------|
| `/export` | PDF/PPT 내보내기 (페이지 끊김 방지) |

### 데이터 관리 (data/)

| Skill | 용도 |
|-------|------|
| `/update-resume` | 원본 → 10개 파일 동기화 |
| `/add-project` | 새 프로젝트 추가 (STAR+I 형식) |
| `/sync-check` | 동기화 상태 검증 |
| `/work-log` | 작업 로그 기록 및 이력서 반영 판단 |
| `/work-logs-sync` | work-log 형식 변경 시 일괄 동기화 |

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
  /create-resume-document   # 이력서 (2-3페이지)
  /write-career             # 경력기술서 (5페이지+)

내보내기:
  /export                   # PDF/PPT 내보내기

데이터 관리:
  /update-resume            # 10개 파일 동기화
  /add-project              # 새 프로젝트 추가
  /sync-check               # 동기화 검증
  /work-log                 # 작업 로그 기록
  /work-logs-sync           # 형식 일괄 동기화

유틸리티:
  /style-guide              # CSS 스타일 가이드
```

---

## 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 6.0 | 2025-12-26 | Skills 구조 개편: 14개 → 9개 통합, 카테고리별 그룹화 (write/export/data/util) |
| 5.0 | 2025-12-26 | Skills 정리: troubleshoot 삭제, 중복 내용 정리 |
| 4.9 | 2025-12-26 | `/enhance-portfolio` 스킬 추가 |
| 4.5 | 2025-12-24 | `/work-log` 스킬 추가, work-logs 디렉토리 구조 |
| 4.0 | 2025-12-20 | Skills 기반 구조로 개편 |
