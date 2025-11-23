# 프로젝트 구조

이력서 및 경력기술서 템플릿 프로젝트입니다.

## 디렉토리 구조

```
younwony.github.io/
├── assets/
│   ├── css/
│   │   ├── career-default.css    # 경력기술서 기본 스타일
│   │   ├── corporate.css         # 기업형 템플릿 스타일
│   │   ├── minimal.css           # 미니멀 템플릿 스타일
│   │   ├── modern.css            # 모던 템플릿 스타일
│   │   └── style.css             # 이력서 기본 스타일
│   └── js/
│       ├── common.js             # 공통 기능 (다크모드, PDF, 템플릿 전환)
│       ├── landing.js            # 랜딩 페이지 스크립트
│       └── template-switcher.js  # 템플릿 전환 기능
├── templates/
│   ├── career/                   # 경력기술서 템플릿
│   │   ├── default.html          # 기본 템플릿
│   │   ├── modern.html           # 모던 템플릿
│   │   ├── corporate.html        # 기업형 템플릿
│   │   └── minimal.html          # 미니멀 템플릿
│   └── resume/                   # 이력서 템플릿
│       ├── default.html          # 기본 템플릿
│       ├── modern.html           # 모던 템플릿
│       ├── corporate.html        # 기업형 템플릿
│       └── minimal.html          # 미니멀 템플릿
├── index.html                    # 랜딩 페이지
├── CLAUDE.md                     # 작성 가이드
└── PROJECT_STRUCTURE.md          # 이 파일
```

## 주요 기능

### 1. 공통 UI 컴포넌트 (common.js)

모든 템플릿에서 자동으로 생성되는 UI 요소:

- **다크모드 토글** (좌측 하단)
  - 위치: `left: 30px, bottom: 30px`
  - localStorage에 테마 저장
  - 페이지 로드 시 자동 적용

- **PDF 저장 버튼** (우측 하단)
  - 위치: `right: 30px, bottom: 30px`
  - 브라우저 인쇄 기능 활용

- **홈 버튼** (좌측 상단)
  - index.html로 이동

- **템플릿 전환** (우측 상단)
  - 기본 / 모던 / 기업형 템플릿 전환
  - 이력서 ↔ 경력기술서 전환

### 2. 템플릿 종류

#### 이력서 (Resume)
- **default**: 깔끔한 기본 레이아웃
- **modern**: 사이드바 디자인
- **corporate**: 전문적인 기업형
- **minimal**: 미니멀한 디자인

#### 경력기술서 (Career)
- **default**: STAR 기법 기반 상세 기술서
- **modern**: 사이드바 디자인
- **corporate**: 전문적인 기업형
- **minimal**: 미니멀한 디자인

### 3. 다크모드

모든 CSS 파일에 다크모드 스타일 포함:
- `[data-theme="dark"]` 선택자 사용
- 색상 팔레트 통일
- 배경, 텍스트, 액센트 색상 자동 전환

### 4. 반응형 디자인

- 모바일 (768px 이하) 최적화
- 버튼 크기 및 위치 자동 조정
- 레이아웃 유연성

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, Custom Properties
- **JavaScript (ES6+)**: 모듈 패턴, DOM 조작
- **Font Awesome 6.4.0**: 아이콘
- **Pretendard**: 한글 폰트

## 사용 방법

### 1. 템플릿 선택
1. `index.html` 방문
2. 이력서 또는 경력기술서 선택
3. 원하는 템플릿 스타일 선택

### 2. 내용 수정
- 각 템플릿 HTML 파일 직접 편집
- 개인 정보, 경력, 프로젝트 내용 입력

### 3. PDF 저장
- 우측 하단 "Save as PDF" 버튼 클릭
- 브라우저 인쇄 → PDF 저장 선택
- 다크모드 버튼, 템플릿 전환 UI는 자동으로 숨김 처리

## 개발 가이드

### CSS 수정
- 각 템플릿 스타일: `assets/css/` 디렉토리
- 다크모드 스타일은 각 CSS 파일 하단에 위치

### JavaScript 수정
- 공통 기능: `assets/js/common.js`
- 모든 템플릿에서 자동 로드됨

### 새 템플릿 추가
1. HTML 파일 생성 (`templates/resume/` 또는 `templates/career/`)
2. `<script src="../../assets/js/common.js"></script>` 추가
3. CSS 스타일 작성 또는 기존 스타일 활용

## 주의사항

- 모든 템플릿은 `common.js`를 필수로 로드해야 함
- PDF 저장 시 `.no-print` 클래스 요소는 자동 숨김
- 다크모드는 localStorage에 저장되어 지속됨
- 모바일 환경에서는 버튼 크기/위치가 자동 조정됨
