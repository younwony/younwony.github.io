---
name: export-document
description: 이력서/경력기술서를 PPT, DOCX 등 제출용 문서로 내보냅니다. 프레젠테이션용 슬라이드, 편집 가능 문서가 필요할 때 사용합니다. (PDF는 /export-pdf 사용)
---

# 문서 내보내기 (PPT/DOCX)

## 개요

이력서/경력기술서를 PPT, DOCX 형식으로 내보냅니다.

> **PDF 내보내기**: `/export-pdf` 스킬을 사용하세요.

## 출력 포맷

| 포맷 | 용도 | 방법 |
|------|------|------|
| **PPT** | 자기소개 프레젠테이션 | HTML → 스크립트 생성 |
| **DOCX** | 편집 가능 문서 | Pandoc 변환 |
| **PDF** | 제출용 문서 | → `/export-pdf` 스킬 |

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
- 숙련도 표시

슬라이드 4: Key Projects
- 대표 프로젝트 3개
- 핵심 성과 (숫자 강조)

슬라이드 5: Contact
- 연락처
- GitHub/Portfolio 링크
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
# PPT 파일 자동 생성
node scripts/generate-documents.js

# 결과물 위치
# output/윤원희_자기소개.pptx
# output/윤원희_경력기술서.pptx
```

**방법 2: Google Slides 활용**

1. HTML을 브라우저에서 열기
2. 각 슬라이드 스크린샷 (또는 PDF 저장)
3. Google Slides에 이미지로 삽입

**방법 3: 수동 복사**

1. HTML 내용을 PowerPoint에 복사
2. 스타일 직접 조정

---

## DOCX 내보내기

### Pandoc 설치

```bash
# Windows
choco install pandoc

# macOS
brew install pandoc
```

### 기본 변환

```bash
# 이력서 변환
pandoc docs/career/resume.md -o output/resume.docx

# 경력기술서 변환
pandoc docs/career/career_portfolio.md -o output/career_portfolio.docx
```

### 스타일 적용 변환

```bash
# reference.docx 템플릿 사용
pandoc docs/career/resume.md \
    --reference-doc=templates/reference.docx \
    -o output/resume.docx
```

### 한글 폰트 지정

```bash
# 맑은 고딕으로 변환
pandoc docs/career/resume.md \
    -V mainfont="Malgun Gothic" \
    -o output/resume.docx
```

---

## 실행 단계

### Step 1: 출력 형식 선택

```
"발표용 PPT 만들어줘"
→ intro-slides.html 또는 career-slides.html

"편집 가능한 문서로 줘"
→ Pandoc DOCX 변환

"PDF로 제출해야 해"
→ /export-pdf 스킬 사용
```

### Step 2: 데이터 동기화 확인

```bash
# 원본 데이터 최신 여부 확인
git diff docs/career/my_career_data.md

# 필요시 /update-resume 실행
```

### Step 3: 변환 실행

**PPT:**
```bash
node scripts/generate-documents.js
```

**DOCX:**
```bash
pandoc docs/career/resume.md -o output/resume.docx
```

### Step 4: 결과 확인

```bash
ls -la output/
```

---

## 출력 디렉토리

```
output/
├── 윤원희_자기소개.pptx
├── 윤원희_경력기술서.pptx
├── resume.docx
└── career_portfolio.docx
```

---

## 용도별 권장 포맷

| 상황 | 권장 포맷 | 스킬/방법 |
|------|----------|----------|
| **채용 사이트 제출** | PDF | `/export-pdf` |
| **이메일 첨부** | PDF | `/export-pdf` |
| **면접 자료** | PDF | `/export-pdf` |
| **1분 자기소개** | PPT | intro-slides.html |
| **기술 면접 발표** | PPT | career-slides.html |
| **편집 요청** | DOCX | Pandoc 변환 |

---

## 주의사항

### PPT 생성 시
- 스크립트 실행 전 Node.js 설치 필요
- 이미지/아이콘은 별도 삽입 필요할 수 있음

### DOCX 변환 시
- 복잡한 스타일은 손실될 수 있음
- 변환 후 수동 스타일 조정 권장
- reference.docx 템플릿 사용 권장

---

## 체크리스트

### PPT 생성
- [ ] 원본 데이터 최신화
- [ ] 스크립트 실행
- [ ] 슬라이드 내용 확인
- [ ] 디자인/스타일 검토
- [ ] 파일 열림 확인

### DOCX 변환
- [ ] Pandoc 설치 확인
- [ ] 변환 실행
- [ ] 스타일 확인
- [ ] 한글 깨짐 없음

---

## 관련 스킬

- `/export-pdf`: PDF 내보내기 (페이지 끊김 방지)
- `/create-resume-document`: 이력서 문서 작성 (2-3페이지)
- `/format-converter`: 다양한 포맷 변환
