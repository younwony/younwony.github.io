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

## 템플릿 종류

### 1. 기본 (Colorful)
- 컬러풀한 디자인, 아이콘 사용
- Font Awesome 아이콘 포함
- 그라데이션, 배경색 활용

### 2. 모던 (Modern) - Black & White
- 미니멀한 흑백 디자인
- 아이콘 최소화, 타이포그래피 중심
- 프로젝트별 페이지 이분할 레이아웃
- 컨텍스트 그리드 (배경/문제 영역 분리)

---

## PDF 내보내기

### 핵심 원칙

> **PDF 출력 요청 시 기본 + 모던 두 가지 형식을 모두 생성합니다.**

### PDF 생성 명령어 (Edge Headless)

```bash
# Windows - 기본 형식
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="output/윤원희_이력서_2025-12.pdf" --no-margins "file:///C:/workspace/younwony.github.io/templates/export/pdf/resume-2page.html"

"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="output/윤원희_경력기술서_2025-12.pdf" --no-margins "file:///C:/workspace/younwony.github.io/templates/export/pdf/career-portfolio.html"

# Windows - 모던 형식
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="output/윤원희_이력서_Modern_2025-12.pdf" --no-margins "file:///C:/workspace/younwony.github.io/templates/export/pdf/resume-modern.html"

"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="output/윤원희_경력기술서_Modern_2025-12.pdf" --no-margins "file:///C:/workspace/younwony.github.io/templates/export/pdf/career-portfolio-modern.html"
```

### 출력 파일 목록 (총 4개)

```
output/
├── 윤원희_이력서_2025-12.pdf           # 기본 (컬러풀)
├── 윤원희_이력서_Modern_2025-12.pdf    # 모던 (흑백)
├── 윤원희_경력기술서_2025-12.pdf       # 기본 (컬러풀)
└── 윤원희_경력기술서_Modern_2025-12.pdf # 모던 (흑백)
```

---

## 템플릿 파일 구조

```
templates/export/
├── pdf/
│   ├── resume-2page.html           # 이력서 - 기본 (2페이지)
│   ├── resume-modern.html          # 이력서 - 모던 (2페이지)
│   ├── career-portfolio.html       # 경력기술서 - 기본 (5페이지+)
│   └── career-portfolio-modern.html # 경력기술서 - 모던 (5페이지)
└── assets/                          # CSS 모듈 (기본 형식용)
    ├── variables.css
    ├── base.css
    ├── layout.css
    ├── components.css
    └── career-print.css
```

---

## 모던 템플릿 특징

### 디자인 원칙

| 항목 | 기본 | 모던 |
|------|------|------|
| 색상 | 컬러풀 (그라데이션) | 흑백 (#000, #333, #666) |
| 아이콘 | Font Awesome | 최소화 (텍스트 중심) |
| 레이아웃 | 자유 배치 | 페이지 이분할 (50%/50%) |
| 컨텍스트 | 한 줄 텍스트 | 그리드 분리 (배경/문제) |

### 모던 레이아웃 구조

```
┌─────────────────────────────────────────────┐
│ 프로젝트 제목                    2024.01-현재 │
│ 역할: 백엔드 아키텍처 설계 주도                │
├─────────────────────────────────────────────┤
│ [Metrics: 100x | 20x | 100% | Zero]         │
├──────────────────────┬──────────────────────┤
│ 배경 (Situation)     │ 문제 (Problem)        │
│ - 상황 설명          │ - 해결해야 할 문제    │
├──────────────────────┴──────────────────────┤
│ [주요 성과 및 해결 방법]                      │
│ - 성과 1: 설명                               │
│ - 성과 2: 설명                               │
├─────────────────────────────────────────────┤
│ Tech Decision (Why)                          │
│ - 기술 선택 이유 1                            │
│ - 기술 선택 이유 2                            │
├─────────────────────────────────────────────┤
│ [Spring Boot] [Elasticsearch] [Redis]        │
└─────────────────────────────────────────────┘
```

---

## PDF 생성 체크리스트

### 필수 생성 항목

- [ ] 이력서 - 기본 형식 (resume-2page.html)
- [ ] 이력서 - 모던 형식 (resume-modern.html)
- [ ] 경력기술서 - 기본 형식 (career-portfolio.html)
- [ ] 경력기술서 - 모던 형식 (career-portfolio-modern.html)

### 확인 사항

- [ ] 각 페이지가 자연스럽게 구성됨
- [ ] 섹션/프로젝트가 중간에 잘리지 않음
- [ ] 모던 형식: 프로젝트가 페이지 50%씩 균등 분할
- [ ] 여백이 균일함
- [ ] output 폴더에 4개 PDF 생성됨

---

## 수동 내보내기 (브라우저)

### Step 1: HTML 파일 열기

```bash
# Windows - 기본 형식
start templates/export/pdf/resume-2page.html
start templates/export/pdf/career-portfolio.html

# Windows - 모던 형식
start templates/export/pdf/resume-modern.html
start templates/export/pdf/career-portfolio-modern.html
```

### Step 2: 인쇄 미리보기 (Ctrl+P)

**필수 설정:**
- 대상: "PDF로 저장"
- 용지 크기: A4
- 여백: **없음** 또는 **최소**
- 배경 그래픽: **체크**

### Step 3: PDF 저장

---

## 용도별 권장 포맷

| 상황 | 권장 포맷 |
|------|----------|
| **채용 사이트 제출** | PDF (기본 or 모던) |
| **이메일 첨부** | PDF (모던 권장) |
| **면접 자료** | PDF |
| **1분 자기소개** | PPT (intro-slides) |
| **기술 면접 발표** | PPT (career-slides) |
| **보수적인 기업** | PDF (모던 권장) |
| **스타트업/IT기업** | PDF (기본 or 모던) |

---

## 문제 해결

### PDF

| 문제 | 해결 |
|------|------|
| 배경색이 인쇄 안 됨 | 인쇄 설정에서 "배경 그래픽" 체크 |
| 섹션이 잘림 | `page-break-inside: avoid` 적용 |
| 페이지 여백이 너무 큼 | 인쇄 설정에서 여백 "없음" |
| 아이콘이 안 보임 | Font Awesome CDN 연결 확인 (기본만) |
| 한글 깨짐 | 폰트 지정: 'Malgun Gothic' |
| 모던 하단 여백 많음 | `justify-content: space-between` 확인 |

---

## 관련 스킬

- `/write-resume`: 이력서 작성 (2-3페이지)
- `/write-career`: 경력기술서 작성 (5페이지+)
- `/style-guide`: CSS 스타일 수정 가이드
