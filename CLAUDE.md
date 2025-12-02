# Claude Code 작업 지침

> **목적**: Claude Code의 이력서/경력기술서 작업 일관성 확보
> **버전**: 3.0
> **최종 업데이트**: 2025-12-02

---

## 📑 목차

1. [문서 구조](#-문서-구조)
2. [핵심 원칙](#-핵심-원칙)
3. [작업 프로세스](#-작업-프로세스)
4. [스타일 가이드](#-스타일-가이드)
5. [유지보수 가이드](#-유지보수-가이드)
6. [참고 문서](#-참고-문서)

---

## 📁 문서 구조

### 전체 구조도

```
younwony.github.io/
├── docs/                           # 📚 문서 저장소
│   ├── README.md                   # 문서 구조 설명
│   ├── career/                     # 경력 관련 문서
│   │   ├── my_career_data.md      # ⭐ 원본 데이터 (SSOT)
│   │   ├── resume.md              # 자동 생성: 간결 이력서
│   │   └── career_portfolio.md    # 자동 생성: 상세 경력기술서
│   ├── references/                 # 참고 자료
│   │   ├── resume_writing_guide.md
│   │   └── resume_examples.md
│   └── analysis/                   # 분석 자료
│       ├── tech_blog_analysis.md
│       └── github_analysis.md
├── templates/                      # 🎨 HTML 템플릿
│   ├── resume/                     # 이력서 템플릿 (4종)
│   │   ├── default.html           # 자동 생성
│   │   ├── minimal.html           # 자동 생성
│   │   ├── modern.html            # 자동 생성
│   │   └── corporate.html         # 자동 생성
│   └── career/                     # 경력기술서 템플릿 (4종)
│       ├── default.html           # 자동 생성
│       ├── minimal.html           # 자동 생성
│       ├── modern.html            # 자동 생성
│       └── corporate.html         # 자동 생성
├── assets/                         # 🎨 스타일 & 스크립트
│   ├── css/
│   │   └── style.css              # 공통 스타일 (다크모드 포함)
│   └── js/
│       └── common.js              # 공통 스크립트
└── index.html                      # 메인 페이지
```

### 파일 역할 정의

| 파일 | 역할 | 수정 가능 여부 |
|------|------|--------------|
| `my_career_data.md` | **원본 데이터** (SSOT) | ✅ 직접 수정 |
| `resume.md` | 간결 이력서 | ❌ 자동 생성 |
| `career_portfolio.md` | 상세 경력기술서 | ❌ 자동 생성 |
| `templates/**/*.html` | HTML 출력물 (8개) | ❌ 자동 생성 |
| `style.css` | 공통 스타일 | ✅ 직접 수정 |
| `common.js` | 공통 스크립트 | ✅ 직접 수정 |

---

## 🎯 핵심 원칙

### 1. 단일 진실 공급원 (Single Source of Truth)

```
my_career_data.md (원본)
    ↓ 자동 생성
    ├── resume.md
    ├── career_portfolio.md
    └── templates/
        ├── resume/*.html (4개)
        └── career/*.html (4개)
```

**원칙**:
- ✅ **DO**: `my_career_data.md`만 수정
- ❌ **DON'T**: 생성된 파일 직접 수정

### 2. STAR 기법 준수

모든 프로젝트 설명은 STAR 형식을 따릅니다:

| 항목 | 설명 | 예시 |
|------|------|------|
| **S**ituation | 상황/배경 | "기존 데이터 수집 속도가 느려..." |
| **T**ask | 과제/목표 | "수집 속도 개선 및 데이터 확장" |
| **A**ction | 실행 내용 | "병렬 처리 아키텍처 설계" |
| **R**esult | 결과/성과 | "속도 99% 단축 (100명/h → 10,000명/h)" |

### 3. 정량적 성과 중심

**좋은 예시**:
- ✅ "수집 속도 **99% 단축** (100명/h → 10,000명/h)"
- ✅ "검색 성능 **100배 개선** (10초 → 0.1초)"
- ✅ "운영팀 수동 업무 **40% → 0%** (Zero Ops 달성)"

**나쁜 예시**:
- ❌ "수집 속도를 많이 개선했습니다"
- ❌ "검색이 빨라졌습니다"
- ❌ "업무 자동화를 했습니다"

---

## 🔄 작업 프로세스

### 이력서 업데이트 워크플로우

#### 1단계: 변경사항 확인

```bash
# 원본 데이터 변경 확인
git diff docs/career/my_career_data.md
```

**확인 사항**:
- [ ] 어떤 프로젝트가 수정되었는가?
- [ ] 어떤 섹션이 변경되었는가? (S/T/A/R)
- [ ] 새로운 기술이 추가되었는가?

#### 2단계: 변경 범위 결정

```
변경된 프로젝트 식별
    ↓
영향받는 파일 목록 작성
    ↓
업데이트 대상 파일 (최대 10개)
```

**업데이트 대상**:
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

#### 3단계: 변경 적용

**원칙**:
- ✅ **변경된 섹션만** 찾아서 교체
- ✅ STAR 형식 그대로 반영
- ❌ **변경되지 않은 부분** 절대 수정 금지
- ❌ 사용하지 않은 기술 추가 금지

#### 4단계: 검증

```bash
# 변경사항 확인
git diff docs/career/resume.md
git diff templates/resume/default.html

# 전체 변경 파일 확인
git status
```

**검증 체크리스트**:
- [ ] 변경된 프로젝트만 업데이트되었는가?
- [ ] 10개 파일 모두 업데이트되었는가?
- [ ] STAR 형식이 유지되었는가?
- [ ] 정량적 성과가 포함되었는가?
- [ ] 사용하지 않은 기술이 제거되었는가?

#### 5단계: 커밋

```bash
# 작은 단위로 커밋
git add docs/career/resume.md
git commit -m "docs: 프로젝트 1 성과 지표 업데이트"

git add docs/career/career_portfolio.md
git commit -m "docs: 프로젝트 1 상세 내용 보강"

git add templates/resume/*.html
git commit -m "feat: 이력서 템플릿 프로젝트 1 업데이트"

git add templates/career/*.html
git commit -m "feat: 경력기술서 템플릿 프로젝트 1 업데이트"
```

---

## 🎨 스타일 가이드

### CSS 구조

#### 파일 구성

```css
/* assets/css/style.css */

/* 1. Reset & Base */
/* 2. Typography */
/* 3. Layout */
/* 4. Components */
/* 5. Dark Mode */
```

#### 다크모드 구현

**라이트 모드 (기본)**:
```css
.section {
    background: white;
    color: #333;
}

.section h3 {
    color: #1a1a2e;
}
```

**다크 모드**:
```css
[data-theme="dark"] .section {
    background: #1a1a2e;
    color: #e0e0e0;
}

[data-theme="dark"] .section h3 {
    color: #e0e0e0;
}
```

#### 인라인 스타일 금지

**❌ 나쁜 예시**:
```html
<h3 style="color: #1a1a2e; font-size: 1.2rem;">제목</h3>
```

**✅ 좋은 예시**:
```html
<h3 class="section-title">제목</h3>
```

```css
.section-title {
    color: #1a1a2e;
    font-size: 1.2rem;
}

[data-theme="dark"] .section-title {
    color: #e0e0e0;
}
```

### HTML 템플릿 구조

#### 공통 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>문서 제목</title>

    <!-- 외부 CSS -->
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- 콘텐츠 -->

    <!-- 공통 스크립트 -->
    <script src="../../assets/js/common.js"></script>
</body>
</html>
```

#### 템플릿별 특성

| 템플릿 | 특징 | 적합한 용도 |
|--------|------|-----------|
| **default** | 균형 잡힌 레이아웃 | 일반적인 이력서 |
| **minimal** | 심플한 디자인 | 간결함 선호 |
| **modern** | 모던한 UI | 디자인 중시 |
| **corporate** | 격식 있는 스타일 | 대기업 지원 |

---

## 🔧 유지보수 가이드

### 일상적인 유지보수

#### 1. 프로젝트 추가

**절차**:
1. `my_career_data.md`에 새 프로젝트 추가 (STAR 형식)
2. 기술 스택 섹션 업데이트
3. 워크플로우 실행 (10개 파일 업데이트)
4. 검증 후 커밋

**예시**:
```markdown
### 프로젝트 6: 신규 프로젝트명

**기간**: 2025.01 - 진행 중

#### Situation (상황)
- 기존 시스템의 문제점 설명

#### Task (과제)
- 해결해야 할 목표

#### Action (실행)
- 구체적인 실행 내용
- 사용한 기술 및 방법론

#### Result (결과)
- 정량적 성과 (숫자로 표현)
- 비즈니스 임팩트
```

#### 2. 기술 스택 업데이트

**원칙**:
- ✅ **사용 중인 기술만** 포함
- ✅ 프로젝트에서 실제 활용한 기술
- ❌ 배운 것만 나열 금지

**카테고리**:
```
Languages/Frameworks
├── Java
├── Spring Boot
└── JPA/Hibernate

Database & Cache
├── MySQL
├── Redis
└── Elasticsearch

Infra & DevOps
├── AWS (EC2, S3, RDS)
├── Jenkins
└── GitHub Actions

Tools
├── IntelliJ
├── JIRA
└── Slack API
```

#### 3. 성과 지표 개선

**Before** (정성적):
```
- 시스템 성능을 개선했습니다
```

**After** (정량적):
```
- 시스템 응답 속도 **80% 개선** (5초 → 1초)
- 동시 처리량 **3배 향상** (100 TPS → 300 TPS)
```

### 정기적인 리뷰

#### 월간 리뷰 (매월 1일)

**체크리스트**:
- [ ] 새로운 프로젝트 경험 추가
- [ ] 성과 지표 업데이트
- [ ] 기술 스택 최신화
- [ ] 링크 유효성 검증

#### 분기별 리뷰 (분기 말)

**체크리스트**:
- [ ] 전체 문서 구조 점검
- [ ] 오래된 프로젝트 간소화
- [ ] Professional Summary 업데이트
- [ ] 템플릿 디자인 개선 검토

### 버전 관리

#### 의미 있는 커밋 메시지

```bash
# 좋은 예시
git commit -m "docs: 프로젝트 3 성과 지표 추가 (매출 10% 증가)"
git commit -m "feat: 이력서 템플릿 다크모드 지원 추가"
git commit -m "fix: 경력기술서 날짜 오타 수정"

# 나쁜 예시
git commit -m "수정"
git commit -m "업데이트"
git commit -m "이것저것 수정함"
```

#### 브랜치 전략

```
main (master)
├── feature/add-project-6     # 새 프로젝트 추가
├── fix/typo-correction        # 오타 수정
└── style/dark-mode-improve    # 스타일 개선
```

---

## 🐛 문제 해결

### 자주 발생하는 문제

#### 문제 1: 다크모드가 일부 요소에만 적용됨

**원인**: 인라인 스타일 사용

**해결**:
```html
<!-- ❌ Before -->
<h3 style="color: #1a1a2e;">제목</h3>

<!-- ✅ After -->
<h3 class="section-title">제목</h3>
```

```css
/* CSS 추가 */
.section-title {
    color: #1a1a2e;
}

[data-theme="dark"] .section-title {
    color: #e0e0e0;
}
```

#### 문제 2: 10개 파일 업데이트 누락

**원인**: 수동 작업 시 일부 파일 누락

**해결**:
```bash
# 체크리스트 활용
files=(
    "docs/career/resume.md"
    "docs/career/career_portfolio.md"
    "templates/resume/default.html"
    "templates/resume/minimal.html"
    "templates/resume/modern.html"
    "templates/resume/corporate.html"
    "templates/career/default.html"
    "templates/career/minimal.html"
    "templates/career/modern.html"
    "templates/career/corporate.html"
)

for file in "${files[@]}"; do
    echo "Checking: $file"
    git diff "$file" | head -5
done
```

#### 문제 3: STAR 형식 깨짐

**원인**: 자동 생성 시 형식 미준수

**해결**:
```markdown
<!-- 템플릿 준수 -->
#### Situation (상황)
- 명확한 배경 설명

#### Task (과제)
- 구체적인 목표

#### Action (실행)
- 실행한 내용
- 사용한 기술

#### Result (결과)
- **정량적 성과** (숫자 포함)
- 비즈니스 임팩트
```

---

## 📚 참고 문서

### 내부 문서

| 문서 | 경로 | 설명 |
|------|------|------|
| 문서 구조 안내 | `docs/README.md` | 전체 문서 구조 설명 |
| 원본 데이터 | `docs/career/my_career_data.md` | STAR 형식 경력 데이터 |
| 이력서 작성 가이드 | `docs/references/resume_writing_guide.md` | STAR 기법 상세 설명 |
| 이력서 예시 | `docs/references/resume_examples.md` | 좋은 이력서 사례 |
| 블로그 분석 | `docs/analysis/tech_blog_analysis.md` | 기술 블로그 현황 |

### 외부 참고 자료

- [STAR 기법 가이드](https://www.indeed.com/career-advice/resumes-cover-letters/star-method-resume)
- [효과적인 이력서 작성법](https://www.themuse.com/advice/how-to-write-a-resume)
- [다크모드 디자인 가이드](https://material.io/design/color/dark-theme.html)

---

## 🚀 빠른 참조

### 체크리스트: 이력서 업데이트

```markdown
- [ ] 1. `git diff docs/career/my_career_data.md` 실행
- [ ] 2. 변경된 프로젝트/섹션 확인
- [ ] 3. 10개 파일 업데이트 목록 작성
- [ ] 4. STAR 형식 준수 확인
- [ ] 5. 정량적 성과 포함 확인
- [ ] 6. 변경되지 않은 부분 유지 확인
- [ ] 7. 사용하지 않은 기술 제거 확인
- [ ] 8. 작은 단위로 커밋
- [ ] 9. 커밋 메시지 명확히 작성
- [ ] 10. 최종 검증 (렌더링 확인)
```

### 명령어 모음

```bash
# 변경사항 확인
git diff docs/career/my_career_data.md

# 전체 상태 확인
git status

# 작은 단위 커밋
git add <file>
git commit -m "type: 명확한 설명"

# 최근 커밋 확인
git log --oneline -5

# 파일 복구 (실수한 경우)
git checkout HEAD -- <file>
```

---

## 📝 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 3.0 | 2025-12-02 | 문서 구조 개편, 유지보수 가이드 추가 |
| 2.0 | 2025-11-30 | docs 디렉토리 구조 개편 |
| 1.0 | 2025-11-01 | 초기 버전 작성 |

---

**문서 관리자**: Claude Code
**프로젝트**: younwony.github.io
**라이센스**: Private
