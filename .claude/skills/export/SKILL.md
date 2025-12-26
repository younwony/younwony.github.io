---
name: export
description: 이력서/경력기술서를 PDF 또는 PPT로 내보냅니다. 페이지 끊김 방지 최적화, 발표용 슬라이드 생성을 지원합니다.
---

# 문서 내보내기 (PDF/PPT)

## 개요

이력서/경력기술서를 **PDF** 또는 **PPT**로 내보냅니다.

| 포맷 | 용도 | 특징 |
|------|------|------|
| **PDF** | 채용 제출, 이메일 첨부 | 페이지 끊김 방지 최적화 |
| **PPT** | 자기소개 발표, 기술 면접 | 슬라이드 형식 |

---

## PDF 내보내기

### 핵심 원칙

> **페이지 경계에서 내용이 어색하게 잘리지 않도록** 여백과 페이지 나눔을 최적화합니다.

### 문제 상황 → 해결

```
┌─────────── 문제 ───────────┐     ┌─────────── 해결 ───────────┐
│                            │     │                            │
│  프로젝트 A                 │     │  (여백으로 조절)            │
│  - Situation: ...          │     │                            │
│  - Task: ...               │     ├────────────────────────────┤
│  - Action: ...             │     │  프로젝트 A (통째로 이동)    │
├───────── 잘림! ────────────┤     │  - Situation: ...          │
│  - Result: ...             │     │  - Task: ...               │
│  - Impact: ...             │     │  - Action: ...             │
│                            │     │  - Result: ...             │
└─────────── 페이지 2 ────────┘     │  - Impact: ...             │
                                   └─────────── 페이지 2 ────────┘
```

### CSS 페이지 나눔 규칙

```css
@page {
    size: A4;
    margin: 20mm 18mm;
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
    .edu-grid {
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
    }
}
```

### PDF 내보내기 단계

#### Step 1: 브라우저에서 열기

```bash
# Windows
start templates/resume/default.html      # 이력서
start templates/career/default.html      # 경력기술서

# macOS
open templates/resume/default.html
open templates/career/default.html
```

#### Step 2: 인쇄 미리보기 (Ctrl+P)

**필수 설정:**
- 대상: "PDF로 저장"
- 용지 크기: A4
- 여백: **없음** 또는 **최소**
- 배경 그래픽: **체크**

#### Step 3: 페이지 나눔 확인

```
✅ 확인 사항:
□ 각 페이지가 자연스럽게 구성됨
□ 섹션/프로젝트가 중간에 잘리지 않음
□ 제목이 페이지 하단에 홀로 남지 않음
□ 여백이 균일함
□ 배경색/아이콘이 정상 출력됨
```

#### Step 4: PDF 저장

문제 없으면 "저장" 클릭

### 레이아웃 조정 방법

**내용이 페이지 경계에서 잘릴 때:**

1. **여백 조절**
```css
.section { margin-bottom: 25px; }  /* 기본 */
.section { margin-bottom: 18px; }  /* 내용 넘치면 줄이기 */
```

2. **폰트 크기 조절**
```css
body { font-size: 9.5pt; }  /* 기본 */
body { font-size: 9pt; }    /* 분량 많으면 줄이기 */
```

3. **명시적 페이지 나눔**
```html
<div class="page-break">
    <section class="section">...</section>
</div>
```

4. **내용 축약**
```
프로젝트 설명 3줄 → 2줄
성과 항목 5개 → 4개
```

---

## PPT 내보내기

### 템플릿 구조

```
templates/export/ppt/
├── intro-slides.html       # 자기소개 슬라이드 (5장)
└── career-slides.html      # 경력기술서 슬라이드 (10장)
```

### intro-slides.html (자기소개 5장)

```
슬라이드 1: 표지
- 이름, 직함, 한 줄 소개

슬라이드 2: About Me
- Professional Summary
- 핵심 역량 4가지

슬라이드 3: Technical Skills
- 기술 스택 시각화

슬라이드 4: Key Projects
- 대표 프로젝트 3개
- 핵심 성과 (숫자 강조)

슬라이드 5: Contact
- 연락처, GitHub/Portfolio 링크
```

### career-slides.html (경력기술서 10장)

```
슬라이드 1: 표지
슬라이드 2-3: 프로젝트 1 (Situation-Task / Action-Result)
슬라이드 4-5: 프로젝트 2
슬라이드 6-7: 프로젝트 3
슬라이드 8-9: 프로젝트 4
슬라이드 10: Thank You
```

### PPT 생성 방법

**방법 1: 스크립트 사용**
```bash
node scripts/generate-documents.js

# 결과물 위치
# output/윤원희_자기소개.pptx
# output/윤원희_경력기술서.pptx
```

**방법 2: Google Slides 활용**
1. HTML을 브라우저에서 열기
2. 각 슬라이드 스크린샷 (또는 PDF 저장)
3. Google Slides에 이미지로 삽입

---

## 출력 파일 명명

### 기본

```
output/
├── 윤원희_이력서_2025-12.pdf
├── 윤원희_경력기술서_2025-12.pdf
├── 윤원희_자기소개.pptx
└── 윤원희_경력기술서.pptx
```

### 회사별 지원 시

```
output/
├── 윤원희_이력서_A회사_2025-12.pdf
└── 윤원희_경력기술서_A회사_2025-12.pdf
```

---

## 용도별 권장 포맷

| 상황 | 권장 포맷 |
|------|----------|
| **채용 사이트 제출** | PDF |
| **이메일 첨부** | PDF |
| **면접 자료** | PDF |
| **1분 자기소개** | PPT (intro-slides) |
| **기술 면접 발표** | PPT (career-slides) |

---

## 문제 해결

### PDF

| 문제 | 해결 |
|------|------|
| 배경색이 인쇄 안 됨 | 인쇄 설정에서 "배경 그래픽" 체크 |
| 섹션이 잘림 | `page-break-inside: avoid` 적용 |
| 페이지 여백이 너무 큼 | 인쇄 설정에서 여백 "없음" |
| 아이콘이 안 보임 | Font Awesome CDN 연결 확인 |
| 한글 깨짐 | 폰트 지정: 'Malgun Gothic' |

### PPT

| 문제 | 해결 |
|------|------|
| 스크립트 실행 안 됨 | Node.js 설치 확인 |
| 이미지/아이콘 누락 | 별도 삽입 필요 |

---

## 체크리스트

### PDF 내보내기
- [ ] 브라우저에서 HTML 열기
- [ ] 인쇄 미리보기 확인
- [ ] 페이지 끊김 없음 확인
- [ ] 배경 그래픽 체크
- [ ] PDF 저장

### PPT 내보내기
- [ ] 원본 데이터 최신화
- [ ] 스크립트 실행 (또는 수동)
- [ ] 슬라이드 내용 확인
- [ ] 디자인/스타일 검토

---

## 관련 스킬

- `/write-resume`: 이력서 작성 (2-3페이지)
- `/write-career`: 경력기술서 작성 (5페이지+)
- `/style-guide`: CSS 스타일 수정 가이드
