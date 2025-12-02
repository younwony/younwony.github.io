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
├── index.html                    # 랜딩 페이지 (4개 카드: 이력서, 경력기술서, GitHub, 블로그)
├── README.md                     # 이 파일 (프로젝트 전체 설명)
├── CLAUDE.md                     # Claude Code 작업 지침
├── docs/                         # 📁 문서 디렉토리
│   ├── README.md                 # 문서 구조 안내
│   ├── career/                   # 경력 관련 문서
│   │   ├── my_career_data.md     # 경력 원본 데이터 (Single Source of Truth)
│   │   ├── resume.md             # 간결한 이력서
│   │   └── career_portfolio.md   # 상세 경력기술서
│   ├── references/               # 참고 자료
│   │   ├── resume_writing_guide.md  # 이력서 작성 가이드
│   │   └── resume_examples.md       # 이력서 예시
│   └── analysis/                 # 분석 자료
│       ├── tech_blog_analysis.md    # 기술 블로그 분석
│       └── github_analysis.md       # GitHub 분석 (예정)
├── templates/
│   ├── resume/                   # 이력서 템플릿 (4종)
│   │   ├── default.html
│   │   ├── corporate.html
│   │   ├── minimal.html
│   │   └── modern.html
│   └── career/                   # 경력기술서 템플릿 (4종)
│       ├── default.html
│       ├── corporate.html
│       ├── minimal.html
│       └── modern.html
├── blog.html                     # 블로그 메인 페이지
├── post.html                     # 포스트 상세 페이지
├── test-runner.html              # JavaScript 테스트 러너
└── assets/
    ├── css/
    │   ├── style.css             # 기본 스타일시트
    │   ├── blog-common.css       # 블로그 공통 스타일
    │   ├── blog.css              # 블로그 페이지 스타일
    │   └── post.css              # 포스트 페이지 스타일
    ├── js/
    │   ├── landing.js            # 랜딩 페이지 스크립트
    │   ├── common.js             # 포트폴리오 공통 스크립트
    │   ├── blog-utils.js         # 블로그 공통 유틸리티
    │   ├── blog.js               # 블로그 페이지 스크립트
    │   ├── post.js               # 포스트 페이지 스크립트
    │   └── blog-utils.test.js    # 유틸리티 테스트
    └── data/
        └── blog-posts.json       # 블로그 포스트 데이터
```

## 📄 주요 파일 설명

### 랜딩 페이지
- **`index.html`**: 메인 페이지
  - 2x2 그리드 레이아웃 (PC), 1열 그리드 (모바일)
  - 4개 카드: 이력서, 경력기술서, GitHub Projects, Tech Blog

### 문서 디렉토리 (`docs/`)
#### 경력 문서 (`docs/career/`)
- **`my_career_data.md`**: 모든 이력서/경력기술서의 원본 데이터 (Single Source of Truth)
  - 이 파일을 수정하면 모든 템플릿에 반영됩니다
  - STAR 기법 (Situation, Task, Action, Result) 형식으로 작성
- **`resume.md`**: 간결한 이력서 (1-2페이지 분량)
- **`career_portfolio.md`**: 상세 경력기술서 (프로젝트별 상세 설명)

#### 참고 자료 (`docs/references/`)
- **`resume_writing_guide.md`**: 경력직 백엔드 개발자 이력서 작성 가이드
  - STAR 기법 적용 방법
  - 정량적 성과 작성법
  - 기술 스택 분류 방법
- **`resume_examples.md`**: 참고용 이력서 예시

#### 분석 자료 (`docs/analysis/`)
- **`tech_blog_analysis.md`**: 기술 블로그 (youn12.tistory.com) 분석
  - 80개 포스팅 카테고리 분석
  - 주요 기술 스택 및 학습 패턴
  - Clean Code, Effective Java, AWS 경험

### 템플릿
- **`templates/resume/`**: 4가지 스타일의 이력서 HTML 템플릿
- **`templates/career/`**: 4가지 스타일의 경력기술서 HTML 템플릿

### 블로그 페이지
- **`blog.html`**: 블로그 메인 페이지
  - 포스트 목록 (그리드/리스트 보기)
  - 카테고리 필터링 및 검색
  - 태그 클라우드
  - 관리자 모드 (`?admin=true`) 지원

- **`post.html`**: 포스트 상세 페이지
  - Markdown 렌더링 (marked.js)
  - 코드 하이라이팅 (highlight.js)
  - 자동 목차(TOC) 생성
  - 이전/다음 글 네비게이션

### 가이드 문서
- **`CLAUDE.md`**: Claude Code를 위한 작업 지침
  - 문서 구조 개요
  - 이력서 업데이트 프로세스
  - 주의사항 및 워크플로우
- **`docs/blog-guide.md`**: 블로그 기능 사용 가이드

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
# docs/career/my_career_data.md 파일 수정
vim docs/career/my_career_data.md
```

### Step 2: 변경사항 확인
```bash
git diff docs/career/my_career_data.md
```

### Step 3: 템플릿 업데이트
변경된 내용을 다음 10개 파일에 반영:
- `docs/career/resume.md`
- `docs/career/career_portfolio.md`
- `templates/resume/*.html` (4개)
- `templates/career/*.html` (4개)

> 📖 상세한 업데이트 프로세스는 [docs/README.md](./docs/README.md) 또는 [CLAUDE.md](./CLAUDE.md) 참조

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
- `docs/career/my_career_data.md` 하나로 모든 템플릿 관리
- 데이터 일관성 보장

### 2. STAR 기법 적용
- **S**ituation (배경)
- **T**ask (과제/목표)
- **A**ction (행동/해결)
- **R**esult (성과)

### 3. 체계적인 문서 구조
- `docs/` 디렉토리로 문서 패키지화
- 경력, 참고자료, 분석 자료 분리
- 명확한 파일 역할 및 참조 관계

### 4. 다크 모드 지원
- 자동 다크/라이트 모드 전환
- 사용자 선호도 저장

### 5. 반응형 디자인
- 랜딩 페이지: 2x2 그리드 (PC) / 1열 (모바일)
- 모든 템플릿 모바일, 태블릿, 데스크톱 지원
- 인쇄 최적화 스타일 제공

### 6. 블로그 기능
- 카테고리별 포스트 관리 (프로젝트, Study, Algorithm, DevOps 등)
- Markdown 기반 콘텐츠 작성 및 렌더링
- 관리자 모드 (CRUD 기능)
- localStorage 기반 데이터 저장
- 테스트 코드 포함 (`test-runner.html`)

## 📚 참고 문서

### 핵심 문서
- [docs/README.md](./docs/README.md) - 📁 **문서 구조 안내** (가장 먼저 읽어야 할 문서)
- [CLAUDE.md](./CLAUDE.md) - Claude Code 작업 지침

### 경력 문서
- [docs/career/my_career_data.md](./docs/career/my_career_data.md) - 경력 원본 데이터
- [docs/career/resume.md](./docs/career/resume.md) - 간결한 이력서
- [docs/career/career_portfolio.md](./docs/career/career_portfolio.md) - 상세 경력기술서

### 참고 자료
- [docs/references/resume_writing_guide.md](./docs/references/resume_writing_guide.md) - 이력서 작성 가이드
- [docs/references/resume_examples.md](./docs/references/resume_examples.md) - 이력서 예시

### 분석 자료
- [docs/analysis/tech_blog_analysis.md](./docs/analysis/tech_blog_analysis.md) - Tech Blog 분석

## 🌐 외부 링크

- **Tech Blog**: [youn12.tistory.com](https://youn12.tistory.com/)
  - Clean Code, Effective Java 학습 기록
  - AWS, Spring Boot 실무 프로젝트 경험
  - 80개 이상의 기술 포스팅

- **GitHub**: [github.com/younwony](https://github.com/younwony)
  - 공개 리포지토리 및 프로젝트

## 📧 연락처

- **Email**: wony9324@naver.com
- **Phone**: 010-3555-2320
- **GitHub**: https://github.com/younwony
- **Blog**: https://youn12.tistory.com

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

---

**Last Updated**: 2025-12-02
**Version**: 2.1 (블로그 기능 추가, 코드 리팩토링)
