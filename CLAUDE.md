# Claude Code 프로젝트 가이드

> **목적**: 이력서/경력기술서 프로젝트 컨텍스트 제공
> **버전**: 4.8
> **최종 업데이트**: 2025-12-25

---

## 📁 프로젝트 구조

```
younwony.github.io/
├── docs/
│   └── career/
│       ├── my_career_data.md      # ⭐ 원본 데이터 (SSOT)
│       ├── resume.md              # 기본 이력서 (자동 생성)
│       ├── career_portfolio.md    # 상세 경력기술서 (자동 생성)
│       ├── formats/               # 맞춤형 이력서
│       │   ├── by-jd/             # JD 맞춤형
│       │   ├── by-company/        # 기업 유형별 (스타트업/대기업)
│       │   └── by-domain/         # 도메인별 (핀테크/커머스)
│       └── work-logs/             # ⭐ 작업 로그 (프로젝트별 상세)
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
└── .claude/
    └── skills/                     # Skills 정의 (14개)
```

### 파일 역할

| 파일 | 역할 | 수정 |
|------|------|------|
| `my_career_data.md` | **원본 데이터** (SSOT) | ✅ 직접 |
| `resume.md` | 기본 이력서 | ❌ 자동 |
| `career_portfolio.md` | 상세 경력기술서 | ❌ 자동 |
| `formats/**/*.md` | 맞춤형 이력서 | ❌ 자동 |
| `templates/**/*.html` | HTML 출력물 (8개) | ❌ 자동 |
| `work-logs/**/*.md` | **작업 로그** (프로젝트별 상세) | ✅ 직접 |

---

## 🎯 핵심 원칙

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

## 🛠️ Skills

### 문서 작성

| Skill | 용도 |
|-------|------|
| `/writing-guide` | ⭐ 이력서 작성 가이드 (STAR+I, 시니어 톤) |
| `/customize-resume` | ⭐ JD/기업 유형별 맞춤 이력서 생성 |
| `/create-resume-document` | 이력서 문서 작성 (2-3페이지) |
| `/create-document-set` | 이력서 + 경력기술서 세트 생성 |

### 문서 내보내기

| Skill | 용도 |
|-------|------|
| `/export-pdf` | ⭐ PDF 내보내기 (페이지 끊김 방지 핵심) |
| `/export-document` | PPT/DOCX 내보내기 |
| `/format-converter` | 다양한 포맷 변환 |

### 데이터 관리

| Skill | 용도 |
|-------|------|
| `/update-resume` | 원본 → 10개 파일 동기화 |
| `/add-project` | 새 프로젝트 추가 (STAR+I 형식) |
| `/sync-check` | 동기화 상태 검증 |
| `/work-log` | ⭐ 작업 로그 기록 및 이력서 반영 판단 |
| `/work-logs-sync` | work-log 가이드 변경 → 기존 파일 일괄 형식 동기화 |

### 기타

| Skill | 용도 |
|-------|------|
| `/style-guide` | CSS/HTML 스타일 수정 |
| `/troubleshoot` | 문제 해결 |

> **상세 문서**: `.claude/skills/README.md` 참조

---

## 🔄 Skills 관리 규칙

### 스킬 추가/수정 시 필수 작업

스킬을 추가하거나 수정할 때 아래 파일들을 함께 업데이트:

1. **스킬 정의 파일**: `.claude/skills/{skill-name}/SKILL.md`
2. **스킬 가이드**: `.claude/skills/README.md` (전체 스킬 목록 및 상세 설명)
3. **CLAUDE.md**: Skills 섹션 테이블 업데이트

### 체크리스트

스킬 변경 후 확인:

- [ ] `.claude/skills/{name}/SKILL.md` 생성/수정
- [ ] `.claude/skills/README.md` 업데이트 (카테고리별 테이블, 상세 설명)
- [ ] `CLAUDE.md` Skills 섹션 테이블 업데이트
- [ ] git add 완료

---

## 📝 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 4.8 | 2025-12-25 | commands 폴더 제거, `/work-logs-sync`를 skills 전용으로 변경 |
| 4.7 | 2025-12-25 | `/work-logs-sync` 커맨드 추가 (스킬 + 커맨드 양쪽 지원) |
| 4.6 | 2025-12-25 | `/work-logs-sync` 스킬 추가 (작업 로그 변경 시 이력서 동기화) |
| 4.5 | 2025-12-24 | `/work-log` 스킬 추가, work-logs 디렉토리 구조 (프로젝트별 상세 작업 기록) |
| 4.4 | 2025-12-21 | 스킬 분리: `/create-resume-document`, `/export-pdf` 추가, 카테고리별 정리 |
| 4.3 | 2025-12-20 | `/customize-resume` 스킬 추가, formats 디렉토리 구조 |
| 4.2 | 2025-12-20 | 임시 문서(remember) 제거, 구조 간소화 |
| 4.1 | 2025-12-20 | 문서 정리: 중복 파일 삭제, Skills 통합 |
| 4.0 | 2025-12-20 | Skills 기반 구조로 개편 |
