---
name: export-pdf
description: 이력서/경력기술서를 PDF로 내보냅니다. 페이지 경계에서 내용이 끊기지 않도록 여백과 페이지 나눔을 최적화합니다. PDF 출력, 인쇄용 문서가 필요할 때 사용합니다.
---

# PDF 내보내기 (페이지 끊김 방지)

## 개요

이력서/경력기술서를 **PDF로 내보내기** 위한 스킬입니다.

> **핵심 원칙**: 페이지 경계에서 **내용이 어색하게 잘리지 않도록** 여백과 페이지 나눔을 최적화합니다.

## 문서 유형별 템플릿

| 문서 유형 | 분량 | 템플릿 |
|----------|------|--------|
| **이력서** | 2-3페이지 | `resume-2page.html` |
| **경력기술서** | 5페이지+ | `career-portfolio.html` |

---

## 페이지 끊김 방지 (핵심)

### 문제 상황

```
┌─────────── 페이지 1 ──────────┐
│                              │
│  프로젝트 A                   │
│  - Situation: ...            │
│  - Task: ...                 │
│  - Action: ...               │
├──────────── 잘림 ────────────┤  ← 어색하게 잘림!
│  - Result: ...               │
│  - Impact: ...               │
│                              │
└─────────── 페이지 2 ──────────┘
```

### 해결 방법

```
┌─────────── 페이지 1 ──────────┐
│                              │
│  (여백으로 조절)              │
│                              │
├──────────────────────────────┤
│                              │
│  프로젝트 A (통째로 이동)      │
│  - Situation: ...            │
│  - Task: ...                 │
│  - Action: ...               │
│  - Result: ...               │
│  - Impact: ...               │
│                              │
└─────────── 페이지 2 ──────────┘
```

---

## CSS 페이지 나눔 규칙

### 1. 요소 내부에서 끊기지 않게

```css
/* 필수: 모든 섹션/카드에 적용 */
.section,
.company,
.project,
.edu-item,
.award-box {
    page-break-inside: avoid;
    break-inside: avoid;
}
```

### 2. 새 페이지에서 시작

```css
/* 명시적 페이지 나눔 */
.page-break {
    page-break-before: always;
    break-before: page;
}
```

### 3. 제목이 홀로 남지 않게

```css
/* 제목 뒤에 최소 2줄 유지 */
h2, h3, .section-title {
    page-break-after: avoid;
    break-after: avoid;
}
```

### 4. 완전한 CSS 예시

```css
@page {
    size: A4;
    margin: 20mm 18mm;  /* 충분한 여백 */
}

@media print {
    /* 배경색 강제 인쇄 */
    * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    /* 섹션 내부 끊김 방지 */
    .section,
    .company,
    .project,
    .star-grid,
    .edu-grid,
    .award-box {
        page-break-inside: avoid;
        break-inside: avoid;
    }

    /* 제목 뒤 끊김 방지 */
    .section-title,
    .company-header,
    .project-title {
        page-break-after: avoid;
        break-after: avoid;
    }

    /* 명시적 페이지 나눔 */
    .page-break {
        page-break-before: always;
        break-before: page;
        padding-top: 0;
    }
}
```

---

## 페이지 레이아웃 설계

### 2-3페이지 이력서 (resume-2page.html)

```
페이지 1:
├─ Header + Key Metrics
├─ Skills
└─ Work Experience (시작)

페이지 2:
├─ Work Experience (계속)
├─ Key Projects
└─ Education

※ 각 페이지 하단 30mm 여백 확보
  → 내용이 넘치면 다음 페이지로 자동 이동
```

### 경력기술서 (다중 페이지)

```
페이지 1:
├─ Header + Summary
└─ 회사 1 - 프로젝트 1

페이지 2:
├─ 회사 1 - 프로젝트 2, 3
└─ 회사 1 - 프로젝트 4 (시작)

페이지 N:
├─ 이전 경력
└─ Education

※ 프로젝트 카드 전체가 한 페이지에 들어가도록
※ STAR 그리드가 중간에 잘리지 않도록
```

---

## 레이아웃 조정 방법

### 내용이 페이지 경계에서 잘릴 때

**방법 1: 여백 조절**
```css
.section {
    margin-bottom: 25px;  /* 기본 */
}

/* 내용이 넘치면 줄이기 */
.section {
    margin-bottom: 18px;
}
```

**방법 2: 폰트 크기 조절**
```css
body {
    font-size: 9.5pt;  /* 기본 */
}

/* 분량 많으면 줄이기 */
body {
    font-size: 9pt;
}
```

**방법 3: 명시적 페이지 나눔**
```html
<!-- 특정 위치에서 새 페이지 시작 -->
<div class="page-break">
    <section class="section">
        ...
    </section>
</div>
```

**방법 4: 내용 축약**
```
프로젝트 설명 3줄 → 2줄
성과 항목 5개 → 4개
```

### 섹션 제목이 페이지 하단에 홀로 남을 때

```html
<!-- Before: 제목만 남음 -->
<h2 class="section-title">Work Experience</h2>
<!-- --- 페이지 끊김 --- -->
<div class="company">...</div>

<!-- After: 제목+내용 함께 이동 -->
<section class="section">  <!-- page-break-inside: avoid -->
    <h2 class="section-title">Work Experience</h2>
    <div class="company">...</div>
</section>
```

---

## PDF 내보내기 단계

### Step 1: 브라우저에서 열기

```bash
# Windows
start templates/export/pdf/resume-2page.html      # 이력서
start templates/export/pdf/career-portfolio.html  # 경력기술서

# macOS
open templates/export/pdf/resume-2page.html
open templates/export/pdf/career-portfolio.html
```

### Step 2: 미리보기 확인

브라우저에서 확인할 사항:
- [ ] 페이지 구분선 위치 (dashed line)
- [ ] 각 페이지가 자연스럽게 끝나는지
- [ ] 섹션이 중간에 잘리지 않는지

### Step 3: 인쇄 미리보기 (Ctrl+P)

**필수 설정:**
- 대상: "PDF로 저장"
- 용지 크기: A4
- 여백: **없음** 또는 **최소**
- 배경 그래픽: **체크**

### Step 4: 페이지 나눔 확인

인쇄 미리보기에서 반드시 확인:

```
✅ 확인 사항:
□ 각 페이지가 자연스럽게 구성됨
□ 섹션/프로젝트가 중간에 잘리지 않음
□ 제목이 페이지 하단에 홀로 남지 않음
□ 여백이 균일함
□ 배경색/아이콘이 정상 출력됨
```

### Step 5: PDF 저장

문제 없으면 "저장" 클릭

---

## 문서 유형별 체크리스트

### 2-3페이지 이력서

- [ ] 각 페이지 자연스럽게 끝남
- [ ] 경력 항목이 중간에 잘리지 않음
- [ ] 프로젝트 카드가 분리되지 않음
- [ ] 마지막 페이지 하단 여백 충분

### 경력기술서 (5페이지+)

- [ ] STAR 그리드가 통째로 유지됨
- [ ] 프로젝트 카드 전체가 한 페이지에
- [ ] 회사 헤더 뒤에 최소 1개 프로젝트
- [ ] 각 페이지 상단/하단 여백 균일

---

## 문제 해결

### 배경색이 인쇄 안 됨

→ 브라우저 인쇄 설정에서 "배경 그래픽" 체크

### 섹션이 잘림

→ 해당 요소에 `page-break-inside: avoid` 적용

### 페이지 여백이 너무 큼

→ 인쇄 설정에서 여백을 "없음"으로 변경
   (HTML 내부 padding으로 여백 제어)

### 아이콘이 안 보임

→ Font Awesome CDN 연결 확인
→ 로컬 환경이면 인터넷 연결 필요

### 한글 깨짐

→ 폰트 지정 확인: 'Malgun Gothic' (Windows)

---

## 출력 파일 명명

```
output/
├── 윤원희_이력서_2025-12.pdf
└── 윤원희_경력기술서_2025-12.pdf
```

회사별 지원 시:
```
output/
├── 윤원희_이력서_A회사_2025-12.pdf
└── 윤원희_경력기술서_A회사_2025-12.pdf
```

---

## 관련 스킬

- `/create-resume-document`: 이력서 문서 작성 (2-3페이지)
- `/create-document-set`: 이력서 + 경력기술서 세트 생성
- `/style-guide`: CSS 스타일 수정 가이드
