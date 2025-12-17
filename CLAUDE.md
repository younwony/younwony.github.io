# Claude Code 작업 지침

> **목적**: Claude Code의 이력서/경력기술서 작업 일관성 확보
> **버전**: 4.1
> **최종 업데이트**: 2025-12-17

---

## 📁 문서 구조

```
younwony.github.io/
├── docs/                           # 문서 저장소
│   ├── career/                     # 경력 관련 문서
│   │   ├── my_career_data.md      # ⭐ 원본 데이터 (SSOT)
│   │   ├── resume.md              # 자동 생성: 간결 이력서
│   │   └── career_portfolio.md    # 자동 생성: 상세 경력기술서
│   └── references/                 # 참고 자료
├── templates/                      # HTML 템플릿
│   ├── resume/                     # 이력서 템플릿 (4종)
│   └── career/                     # 경력기술서 템플릿 (4종)
├── assets/                         # 스타일 & 스크립트
│   ├── css/style.css
│   └── js/common.js
└── .claude/
    ├── skills/                     # 🎯 지식/가이드라인 (자동 참조)
    │   ├── resume-writing.md      # STAR+I 기법, 시니어 톤
    │   └── style-guide.md         # CSS 변수, 다크모드
    └── commands/                   # 🔧 워크플로우 (/명령어로 호출)
        ├── resume-update.md       # 이력서 업데이트
        ├── project-add.md         # 새 프로젝트 추가
        ├── monthly-review.md      # 월간 리뷰
        └── quarterly-review.md    # 분기별 리뷰
```

---

## 🎯 핵심 원칙

### 단일 진실 공급원 (SSOT)

```
my_career_data.md (원본)
    ↓ 자동 생성
    ├── resume.md
    ├── career_portfolio.md
    └── templates/*.html (8개)
```

- ✅ `my_career_data.md`만 수정
- ❌ 생성된 파일 직접 수정 금지

### 업데이트 대상 파일 (10개)

1. `docs/career/resume.md`
2. `docs/career/career_portfolio.md`
3. `templates/resume/default.html`
4. `templates/resume/minimal.html`
5. `templates/resume/modern.html`
6. `templates/resume/corporate.html`
7. `templates/career/default.html`
8. `templates/career/minimal.html`
9. `templates/career/modern.html`
10. `templates/career/corporate.html`

---

## 🎨 Skills (지식/가이드라인)

Claude가 작업 시 **자동으로 참조**하는 지식입니다.

| Skill | 파일 | 설명 |
|-------|------|------|
| `resume-writing` | `.claude/skills/resume-writing.md` | STAR+I 기법, 정량화, 시니어 톤 |
| `style-guide` | `.claude/skills/style-guide.md` | CSS 변수, 다크모드, 템플릿 구조 |

---

## 🔧 Commands (워크플로우)

사용자가 `/명령어`로 **직접 호출**하는 작업입니다.

| 명령어 | 설명 | 사용 시점 |
|--------|------|----------|
| `/resume-update` | 이력서 업데이트 | `my_career_data.md` 변경 후 |
| `/project-add` | 새 프로젝트 추가 | 새 프로젝트 경험 추가 시 |
| `/monthly-review` | 월간 리뷰 | 매월 1일 |
| `/quarterly-review` | 분기별 리뷰 | 분기 말 |

---

## 📚 참고 문서

| 문서 | 경로 |
|------|------|
| 원본 데이터 | `docs/career/my_career_data.md` |
| 작성 가이드 상세 | `docs/references/resume_writing_guide.md` |
| 이력서 예시 | `docs/references/resume_examples.md` |

---

## 📝 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 4.1 | 2025-12-17 | Skills/Commands 분리 (지식 vs 워크플로우) |
| 4.0 | 2025-12-17 | 워크플로우를 Slash Commands로 분리 |
| 3.2 | 2025-12-05 | STAR+I 모델 적용 |

---

**문서 관리자**: Claude Code
**프로젝트**: younwony.github.io
