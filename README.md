# 윤원희 - 백엔드 개발자 포트폴리오

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://younwony.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> 7년차 백엔드 개발자의 이력서 및 경력기술서 포트폴리오 사이트

## 📋 프로젝트 개요

Java/Spring Boot 기반의 백엔드 개발자 이력서와 경력기술서를 다양한 템플릿으로 제공하는 정적 웹사이트입니다.

**Live Demo:** [https://younwony.github.io](https://younwony.github.io)

## 🗂️ 프로젝트 구조

```
younwony.github.io/
├── index.html                    # 랜딩 페이지
├── resume.md                     # 간결한 이력서 (마크다운)
├── career_portfolio.md           # 상세 경력기술서 (마크다운)
├── my_career_data.md            # 원본 데이터 (Single Source of Truth)
├── CLAUDE.md                    # 이력서 작성 가이드 & 업데이트 프로세스
├── reference_resume_examples.md # 참고용 이력서 예시
├── templates/
│   ├── resume/                  # 이력서 템플릿 (4종)
│   │   ├── default.html         # 기본 템플릿
│   │   ├── corporate.html       # 기업형 템플릿
│   │   ├── minimal.html         # 미니멀 템플릿
│   │   └── modern.html          # 모던 템플릿
│   └── career/                  # 경력기술서 템플릿 (4종)
│       ├── default.html         # 기본 템플릿
│       ├── corporate.html       # 기업형 템플릿
│       ├── minimal.html         # 미니멀 템플릿
│       └── modern.html          # 모던 템플릿
└── assets/
    ├── css/                     # 스타일시트
    └── js/                      # JavaScript 파일

```

## 📄 주요 파일 설명

### 원본 데이터
- **`my_career_data.md`**: 모든 이력서/경력기술서의 원본 데이터 (Single Source of Truth)
  - 이 파일을 수정하면 모든 템플릿에 반영됩니다
  - STAR 기법 (Situation, Task, Action, Result) 형식으로 작성

### 마크다운 버전
- **`resume.md`**: 간결한 이력서 (1-2페이지 분량)
- **`career_portfolio.md`**: 상세 경력기술서 (프로젝트별 상세 설명)

### 템플릿
- **`templates/resume/`**: 4가지 스타일의 이력서 HTML 템플릿
- **`templates/career/`**: 4가지 스타일의 경력기술서 HTML 템플릿

### 가이드 문서
- **`CLAUDE.md`**:
  - 경력직 백엔드 개발자 이력서 작성 가이드
  - STAR 기법 적용 방법
  - 이력서 업데이트 프로세스 문서화

## 🚀 사용 방법

### 로컬에서 실행

1. **저장소 클론**
```bash
git clone https://github.com/younwony/younwony.github.io.git
cd younwony.github.io
```

2. **로컬 서버 실행**
```bash
# Python 3 사용
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

### GitHub Pages로 배포

이 저장소는 GitHub Pages로 자동 배포됩니다.
- **URL**: https://younwony.github.io
- **배포 브랜치**: `master`

## 🎨 템플릿 종류

### 이력서 (Resume) 템플릿
1. **Default**: 깔끔하고 읽기 쉬운 기본 템플릿
2. **Corporate**: 전통적인 기업형 레이아웃
3. **Minimal**: 미니멀리스트 디자인
4. **Modern**: 현대적이고 시각적인 디자인

### 경력기술서 (Career Portfolio) 템플릿
1. **Default**: STAR 기법이 잘 드러나는 기본 템플릿
2. **Corporate**: 상세한 프로젝트 설명에 적합한 기업형 레이아웃
3. **Minimal**: 핵심 내용에 집중한 미니멀 디자인
4. **Modern**: 타임라인과 시각적 요소가 강조된 모던 디자인

## 🔄 이력서 업데이트 방법

### Step 1: 원본 데이터 수정
```bash
# my_career_data.md 파일 수정
vim my_career_data.md
```

### Step 2: 변경사항 확인
```bash
git diff my_career_data.md
```

### Step 3: 템플릿 업데이트
변경된 내용을 다음 10개 파일에 반영:
- `resume.md`
- `career_portfolio.md`
- `templates/resume/*.html` (4개)
- `templates/career/*.html` (4개)

> 📖 상세한 업데이트 프로세스는 [CLAUDE.md](./CLAUDE.md) 참조

### Step 4: 커밋 및 푸시
```bash
git add .
git commit -m "docs: 이력서 내용 업데이트"
git push origin master
```

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Fonts**: Google Fonts (Inter, Roboto)
- **Icons**: Font Awesome 6.4.0
- **Hosting**: GitHub Pages
- **Version Control**: Git

## 📝 주요 특징

### 1. Single Source of Truth
- `my_career_data.md` 하나로 모든 템플릿 관리
- 데이터 일관성 보장

### 2. STAR 기법 적용
- Situation (배경)
- Task (과제/목표)
- Action (행동/해결)
- Result (성과)

### 3. 다크 모드 지원
- 자동 다크/라이트 모드 전환
- 사용자 선호도 저장

### 4. 반응형 디자인
- 모바일, 태블릿, 데스크톱 모두 지원
- 인쇄 최적화 스타일 제공

## 📚 참고 문서

- [CLAUDE.md](./CLAUDE.md) - 이력서 작성 가이드 및 업데이트 프로세스
- [my_career_data.md](./my_career_data.md) - 원본 데이터
- [reference_resume_examples.md](./reference_resume_examples.md) - 참고용 이력서 예시

## 📧 연락처

- **Email**: wony9324@naver.com
- **Phone**: 010-3555-2320
- **GitHub**: https://github.com/younwony

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

---

**Last Updated**: 2025-11-24
