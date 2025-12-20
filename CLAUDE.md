# Claude Code 프로젝트 가이드

> **목적**: 이력서/경력기술서 프로젝트 컨텍스트 제공
> **버전**: 4.2
> **최종 업데이트**: 2025-12-20

---

## 📁 프로젝트 구조

```
younwony.github.io/
├── docs/
│   └── career/
│       ├── my_career_data.md      # ⭐ 원본 데이터 (SSOT)
│       ├── resume.md              # 간결 이력서 (자동 생성)
│       └── career_portfolio.md    # 상세 경력기술서 (자동 생성)
├── templates/
│   ├── resume/*.html              # 이력서 템플릿 (4종)
│   └── career/*.html              # 경력기술서 템플릿 (4종)
├── assets/
│   ├── css/style.css              # 공통 스타일
│   └── js/common.js               # 공통 스크립트
└── .claude/skills/                 # Skills 정의 (7개)
```

### 파일 역할

| 파일 | 역할 | 수정 |
|------|------|------|
| `my_career_data.md` | **원본 데이터** (SSOT) | ✅ 직접 |
| `resume.md` | 간결 이력서 | ❌ 자동 |
| `career_portfolio.md` | 상세 경력기술서 | ❌ 자동 |
| `templates/**/*.html` | HTML 출력물 (8개) | ❌ 자동 |

---

## 🎯 핵심 원칙

### 1. 단일 진실 공급원 (SSOT)

```
my_career_data.md (원본)
    ↓ 자동 생성
    ├── resume.md
    ├── career_portfolio.md
    ├── templates/resume/*.html (4개)
    └── templates/career/*.html (4개)
```

- ✅ **DO**: `my_career_data.md`만 수정
- ❌ **DON'T**: 생성된 파일 직접 수정

### 2. STAR+I 기법

| 항목 | 설명 |
|------|------|
| **S** (Situation) | 상황/배경/제약 |
| **T** (Task) | 과제/목표 |
| **A** (Action) | 기술적 의사결정 (Why & How) |
| **R** (Result) | 정량적 성과 |
| **I** (Impact) | 비즈니스/조직적 효과 |

> **7년차 핵심**: Action에 **"왜 그 기술을 선택했는지"** 의사결정 근거 필수

### 3. 정량적 성과

- ✅ "수집 속도 **99% 단축** (100명/h → 10,000명/h)"
- ✅ "검색 성능 **100배 개선** (10초 → 0.1초)"
- ❌ "수집 속도를 많이 개선했습니다"

---

## 🛠️ Skills

| Skill | 용도 |
|-------|------|
| `/writing-guide` | ⭐ 이력서 작성 가이드 (STAR+I, 시니어 톤) |
| `/update-resume` | 원본 → 10개 파일 동기화 |
| `/add-project` | 새 프로젝트 추가 (STAR+I 형식) |
| `/sync-check` | 동기화 상태 검증 |
| `/format-converter` | PDF/DOCX 변환 |
| `/style-guide` | CSS/HTML 스타일 수정 |
| `/troubleshoot` | 문제 해결 |

---

## 📝 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 4.2 | 2025-12-20 | 임시 문서(remember) 제거, 구조 간소화 |
| 4.1 | 2025-12-20 | 문서 정리: 중복 파일 삭제, Skills 통합 |
| 4.0 | 2025-12-20 | Skills 기반 구조로 개편 |
| 3.2 | 2025-12-05 | STAR+I 모델 적용 |
