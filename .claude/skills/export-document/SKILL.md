---
name: export-document
description: 이력서/경력기술서를 PDF, PPT, DOCX 등 제출용 문서로 내보냅니다. 면접 제출, 이메일 첨부, 프레젠테이션용 문서가 필요할 때 사용합니다.
---

# 문서 내보내기 (PDF/PPT/DOCX)

## 개요

이력서/경력기술서를 제출 가능한 형식으로 내보냅니다.

## 출력 포맷

| 포맷 | 용도 | 템플릿 |
|------|------|--------|
| **PDF** | 이력서 제출, 이메일 첨부 | `templates/export/pdf/` |
| **PPT** | 자기소개 프레젠테이션 | `templates/export/ppt/` |
| **DOCX** | 편집 가능 문서 | Pandoc 변환 |

## 빠른 시작

### PDF 내보내기 (권장)

```bash
# 1. 브라우저에서 열기
start templates/export/pdf/resume-print.html   # Windows
open templates/export/pdf/resume-print.html    # macOS

# 2. Ctrl+P → PDF로 저장
# - 여백: 없음 또는 최소
# - 배경 그래픽: 체크
```

### PPT 내보내기

```bash
# 브라우저에서 열어 슬라이드 확인
start templates/export/ppt/intro-slides.html

# 또는 Google Slides로 가져오기
```

## 템플릿 구조

```
templates/export/
├── pdf/
│   ├── resume-print.html       # 1페이지 이력서 (A4)
│   ├── resume-2page.html       # 2페이지 상세 이력서
│   └── career-portfolio.html   # 경력기술서 (다중 페이지)
├── ppt/
│   ├── intro-slides.html       # 자기소개 슬라이드 (5장)
│   └── project-showcase.html   # 프로젝트 소개 (10장)
└── assets/
    └── print.css               # 인쇄 전용 CSS
```

## PDF 템플릿

### resume-print.html (1페이지 이력서)

**특징:**
- A4 한 장에 최적화
- 인쇄 시 배경/아이콘 유지
- 다크모드 무관하게 라이트 테마 고정

**구성:**
```
┌─────────────────────────────────┐
│ 이름 / 직함                      │
│ 연락처 (이메일, 전화, GitHub)    │
├─────────────────────────────────┤
│ Professional Summary (3줄)      │
├─────────────────────────────────┤
│ Core Competencies (4개 항목)    │
├─────────────────────────────────┤
│ Technical Skills (카테고리별)    │
├─────────────────────────────────┤
│ Work Experience (최근 2개)      │
│ - 회사명 / 기간                  │
│ - 핵심 성과 (3줄)                │
├─────────────────────────────────┤
│ Education / Certification       │
└─────────────────────────────────┘
```

### resume-2page.html (2페이지 상세)

**특징:**
- 상세 프로젝트 포함
- 페이지 나눔 자동 처리
- STAR 형식 유지

### career-portfolio.html (경력기술서)

**특징:**
- 모든 프로젝트 상세 포함
- STAR+I 형식 완전 표현
- 페이지 번호 자동 삽입

## PPT 템플릿

### intro-slides.html (자기소개 5장)

```
슬라이드 1: 표지
- 이름, 직함, 한 줄 소개

슬라이드 2: About Me
- Professional Summary
- 핵심 역량 4가지

슬라이드 3: Technical Skills
- 기술 스택 시각화
- 숙련도 표시

슬라이드 4: Key Projects
- 대표 프로젝트 3개
- 핵심 성과 (숫자 강조)

슬라이드 5: Contact
- 연락처
- GitHub/Portfolio 링크
```

### project-showcase.html (프로젝트 10장)

```
슬라이드 1: 표지
슬라이드 2-3: 프로젝트 1 (Situation-Task / Action-Result)
슬라이드 4-5: 프로젝트 2
슬라이드 6-7: 프로젝트 3
슬라이드 8-9: 프로젝트 4
슬라이드 10: Thank You
```

## 인쇄용 CSS (print.css)

### 핵심 기능

```css
@media print {
  /* 페이지 설정 */
  @page {
    size: A4;
    margin: 15mm;
  }

  /* 배경색 강제 인쇄 */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* 페이지 나눔 방지 */
  .no-break {
    page-break-inside: avoid;
  }

  /* 새 페이지 시작 */
  .page-break {
    page-break-before: always;
  }

  /* 숨김 요소 */
  .no-print {
    display: none !important;
  }
}
```

## 실행 단계

### Step 1: 출력 형식 선택

```
사용자: "PDF로 이력서 만들어줘"
→ resume-print.html 사용

사용자: "발표용 PPT 만들어줘"
→ intro-slides.html 사용

사용자: "상세 경력기술서 PDF"
→ career-portfolio.html 사용
```

### Step 2: 데이터 동기화 확인

```bash
# 원본 데이터 최신 여부 확인
git diff docs/career/my_career_data.md

# 필요시 /update-resume 실행
```

### Step 3: 템플릿 생성/업데이트

1. 최신 데이터로 export 템플릿 업데이트
2. 브라우저에서 미리보기 확인
3. 레이아웃/폰트 검토

### Step 4: 내보내기

**PDF:**
```bash
# 브라우저에서 열고 Ctrl+P
start templates/export/pdf/resume-print.html

# 설정:
# - 대상: PDF로 저장
# - 여백: 없음
# - 배경 그래픽: 체크
```

**PPT (Google Slides로 가져오기):**
1. HTML을 브라우저에서 열기
2. 각 슬라이드 스크린샷
3. Google Slides에 이미지로 삽입

**DOCX:**
```bash
pandoc docs/career/resume.md -o output/resume.docx
```

## 옵션별 권장

| 상황 | 권장 포맷 | 템플릿 |
|------|----------|--------|
| **채용 사이트 제출** | PDF 1페이지 | resume-print.html |
| **이메일 첨부** | PDF 2페이지 | resume-2page.html |
| **면접 자료** | PDF 경력기술서 | career-portfolio.html |
| **1분 자기소개** | PPT 5장 | intro-slides.html |
| **기술 면접** | PPT 10장 | project-showcase.html |
| **편집 필요** | DOCX | Pandoc 변환 |

## ⚠️ 페이지 레이아웃 필수 확인 (중요)

**PDF 출력 시 반드시 확인해야 할 사항:**

### 1페이지 이력서
- [ ] **A4 한 장에 딱 맞게** 구성되어 있는가?
- [ ] 내용이 페이지 하단을 넘어가지 않는가?
- [ ] 여백이 균일하고 답답하지 않은가?

### 2페이지 이상 문서
- [ ] **페이지 경계에서 내용이 어색하게 잘리지 않는가?**
- [ ] 섹션 제목이 페이지 맨 아래에 홀로 남지 않는가?
- [ ] 프로젝트/경력 항목이 중간에서 끊기지 않는가?
- [ ] 각 페이지가 자연스럽게 시작하고 끝나는가?

### 레이아웃 조정 방법

**내용이 넘칠 경우:**
1. 경력 설명 간소화 (3줄 → 2줄)
2. 오래된 경력 축약
3. 폰트 크기 미세 조정 (10pt → 9.5pt)
4. 여백 조정

**페이지 중간에서 끊길 경우:**
```css
/* 해당 요소에 적용 */
.section, .experience-item {
  page-break-inside: avoid;
}
```

**새 페이지에서 시작해야 할 경우:**
```css
.new-section {
  page-break-before: always;
}
```

---

## 체크리스트

### 내보내기 전
- [ ] 원본 데이터 최신화 확인
- [ ] export 템플릿 데이터 동기화
- [ ] 브라우저 미리보기 확인
- [ ] 오타/레이아웃 검토

### PDF 설정
- [ ] 여백: 없음 또는 최소
- [ ] 배경 그래픽: 체크
- [ ] 페이지 크기: A4
- [ ] 다크모드 해제

### ⭐ 페이지 레이아웃 (필수)
- [ ] **1페이지: A4 한 장에 딱 맞는가?**
- [ ] **2페이지+: 내용이 어색하게 잘리지 않는가?**
- [ ] 섹션이 페이지 경계에서 끊기지 않는가?
- [ ] 각 페이지가 자연스럽게 구성되어 있는가?

### 최종 확인
- [ ] 파일 열림 확인
- [ ] 페이지 수 확인
- [ ] 폰트 깨짐 없음
- [ ] 링크 클릭 가능

## 문제 해결

### 배경색이 인쇄 안 됨
→ 브라우저 인쇄 설정에서 "배경 그래픽" 체크

### 한글 깨짐 (Pandoc PDF)
```bash
pandoc --pdf-engine=xelatex -V mainfont="Malgun Gothic" input.md -o output.pdf
```

### 페이지가 잘림
→ 여백 설정을 "최소" 또는 "없음"으로 변경

### 아이콘이 안 보임
→ Font Awesome CDN 연결 확인, 로컬 폰트 파일 사용 권장
