---
name: format-converter
description: 이력서/경력기술서를 다양한 포맷(HTML, Markdown, DOCX, PDF)으로 변환합니다. 포맷 변환, 이력서 내보내기, 문서 출력이 필요할 때 사용합니다.
---

# 포맷 변환

## 개요

이력서/경력기술서 문서를 다양한 포맷으로 변환합니다.

## 지원 포맷

| 소스 | 대상 | 방법 |
|------|------|------|
| HTML → PDF | 브라우저 Print | Chrome/Edge 인쇄 기능 |
| HTML → DOCX | Pandoc | `pandoc` CLI 사용 |
| MD → HTML | 템플릿 적용 | 기존 템플릿 활용 |
| MD → DOCX | Pandoc | `pandoc` CLI 사용 |
| MD → PDF | Pandoc + LaTeX | `pandoc` + `pdflatex` |

## 소스 파일

### Markdown
- `docs/career/resume.md` - 간결 이력서
- `docs/career/career_portfolio.md` - 상세 경력기술서

### HTML 템플릿
- `templates/resume/*.html` (4종)
- `templates/career/*.html` (4종)

## 변환 방법

### 1. HTML → PDF (권장: 브라우저)

가장 간단하고 스타일 유지가 완벽한 방법:

```bash
# 1. 브라우저에서 HTML 열기
start templates/resume/default.html   # Windows
open templates/resume/default.html    # macOS

# 2. Ctrl+P (또는 Cmd+P) → PDF로 저장
# 옵션: 배경 그래픽 포함 체크
```

### 2. HTML → PDF (CLI: wkhtmltopdf)

```bash
# 설치 (Windows)
choco install wkhtmltopdf

# 설치 (macOS)
brew install wkhtmltopdf

# 변환
wkhtmltopdf templates/resume/default.html output/resume.pdf
```

### 3. Markdown → DOCX (Pandoc)

```bash
# 설치
# Windows: choco install pandoc
# macOS: brew install pandoc

# 간결 이력서 변환
pandoc docs/career/resume.md -o output/resume.docx

# 상세 경력기술서 변환
pandoc docs/career/career_portfolio.md -o output/career_portfolio.docx

# 스타일 적용 (reference 문서 사용)
pandoc docs/career/resume.md --reference-doc=templates/reference.docx -o output/resume.docx
```

### 4. Markdown → PDF (Pandoc + LaTeX)

```bash
# LaTeX 설치 필요
# Windows: choco install miktex
# macOS: brew install --cask mactex

# 변환
pandoc docs/career/resume.md -o output/resume.pdf

# 한글 지원 (xelatex 엔진)
pandoc docs/career/resume.md --pdf-engine=xelatex -V mainfont="Malgun Gothic" -o output/resume.pdf
```

### 5. Markdown → HTML

```bash
# 기본 변환
pandoc docs/career/resume.md -o output/resume.html

# 스타일 포함
pandoc docs/career/resume.md -s --css=assets/css/style.css -o output/resume.html
```

## 출력 디렉토리

```bash
# output 디렉토리 생성 (없으면)
mkdir -p output
```

출력 파일 구조:
```
output/
├── resume.pdf
├── resume.docx
├── career_portfolio.pdf
└── career_portfolio.docx
```

## 실행 단계

### Step 1: 변환 대상 확인
- 어떤 문서를 변환할지 (resume / career_portfolio)
- 어떤 템플릿을 사용할지 (default / minimal / modern / corporate)
- 어떤 포맷으로 변환할지 (PDF / DOCX)

### Step 2: 도구 설치 확인
```bash
# Pandoc 설치 확인
pandoc --version

# wkhtmltopdf 설치 확인 (HTML→PDF용)
wkhtmltopdf --version
```

### Step 3: 변환 실행

### Step 4: 결과 확인
```bash
ls -la output/
```

## 권장 변환 방식

| 용도 | 권장 방식 |
|------|----------|
| **온라인 제출** | HTML → PDF (브라우저) |
| **이메일 첨부** | MD → PDF (Pandoc) |
| **편집 가능 문서** | MD → DOCX (Pandoc) |
| **인쇄용** | HTML → PDF (브라우저, 배경 포함) |

## 주의사항

### PDF 변환 시
- 브라우저 변환 시 "배경 그래픽" 옵션 체크
- 여백 설정 확인 (기본값 또는 최소)
- 다크모드 해제 후 변환 권장

### DOCX 변환 시
- 복잡한 스타일은 손실될 수 있음
- reference.docx 템플릿 사용 권장
- 변환 후 수동 스타일 조정 필요할 수 있음

### 한글 지원
- PDF 변환 시 한글 폰트 지정 필요
- `--pdf-engine=xelatex` 옵션 사용
- macOS: "Apple SD Gothic Neo"
- Windows: "Malgun Gothic"

## 빠른 명령어

```bash
# 이력서 PDF (브라우저 권장)
start templates/resume/default.html

# 이력서 DOCX
pandoc docs/career/resume.md -o output/resume.docx

# 경력기술서 PDF
pandoc docs/career/career_portfolio.md --pdf-engine=xelatex -V mainfont="Malgun Gothic" -o output/career_portfolio.pdf

# 경력기술서 DOCX
pandoc docs/career/career_portfolio.md -o output/career_portfolio.docx
```

## 체크리스트

- [ ] 변환 대상 문서 선택
- [ ] 출력 포맷 선택
- [ ] 필요 도구 설치 확인
- [ ] output 디렉토리 생성
- [ ] 변환 실행
- [ ] 결과 파일 확인
- [ ] 스타일/레이아웃 검토
