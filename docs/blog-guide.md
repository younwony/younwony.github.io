# 블로그 기능 사용 가이드

이 문서는 블로그 시스템의 사용 방법과 기능을 설명합니다.

---

## 1. 접속 방법

### 일반 사용자 모드
```
blog.html
post.html?id={포스트ID}
```

### 관리자 모드 (CRUD 기능 활성화)
```
blog.html?admin=true
post.html?id={포스트ID}&admin=true
```

---

## 2. 블로그 메인 페이지 (blog.html)

### 기능 목록

| 기능 | 설명 | 관리자 전용 |
|------|------|:-----------:|
| 카테고리 필터링 | 프로젝트, Study, Live-Study, Algorithm, DevOps, 기타 | - |
| 검색 | 제목, 요약, 태그, 서브카테고리 검색 | - |
| 정렬 | 최신순, 오래된순, 제목(A-Z, Z-A) | - |
| 보기 모드 | 그리드 / 리스트 전환 | - |
| 태그 클라우드 | 상위 15개 태그 표시 및 클릭 필터링 | - |
| 페이지네이션 | 9개 포스트 / 페이지 | - |
| 포스트 추가 | 새 포스트 생성 | O |
| 포스트 수정 | 기존 포스트 수정 | O |
| 포스트 삭제 | 포스트 삭제 | O |

### 사용 예시

```
# 전체 포스트 보기
blog.html

# 관리자 모드로 접속
blog.html?admin=true

# 검색 결과 (URL 파라미터)
blog.html?search=Spring
```

---

## 3. 포스트 상세 페이지 (post.html)

### 기능 목록

| 기능 | 설명 | 관리자 전용 |
|------|------|:-----------:|
| Markdown 렌더링 | marked.js로 콘텐츠 렌더링 | - |
| 코드 하이라이팅 | highlight.js로 코드 블록 스타일링 | - |
| 자동 목차(TOC) | h2, h3, h4 기반 목차 자동 생성 | - |
| 스크롤 하이라이트 | 현재 읽는 섹션 목차 강조 | - |
| 이전/다음 글 | 날짜순 네비게이션 | - |
| 원본 링크 | Tistory 블로그 원본 링크 | - |
| 콘텐츠 편집 | Markdown 에디터로 콘텐츠 수정 | O |

### Markdown 에디터 기능 (관리자 모드)

#### 툴바 버튼
- **굵게** (Ctrl+B)
- *기울임* (Ctrl+I)
- `인라인 코드`
- 제목 (h2, h3, h4)
- 목록 (순서 없음, 순서 있음)
- 인용문
- 코드 블록
- 링크/이미지
- 테이블

#### 키보드 단축키
| 단축키 | 기능 |
|--------|------|
| Ctrl+B | 굵게 |
| Ctrl+I | 기울임 |
| Ctrl+S | 저장 |
| Tab | 들여쓰기 (4칸) |

---

## 4. 데이터 저장소

### localStorage
- **키**: `blog_posts_data`
- **구조**:
```json
{
  "posts": [...],
  "categories": [...]
}
```

### 초기 데이터 소스
- **파일**: `assets/data/blog-posts.json`
- localStorage가 비어있을 때 JSON에서 로드

### 데이터 초기화
```javascript
// 브라우저 콘솔에서 실행
localStorage.removeItem('blog_posts_data');
location.reload();
```

---

## 5. 파일 구조

```
/
├── blog.html                    # 블로그 메인 페이지
├── post.html                    # 포스트 상세 페이지
└── assets/
    ├── js/
    │   ├── blog.js             # 블로그 로직 (CRUD)
    │   ├── post.js             # 포스트 상세 로직
    │   └── common.js           # 공통 (테마, 네비게이션)
    ├── css/
    │   ├── blog.css            # 블로그 스타일
    │   └── post.css            # 포스트 스타일
    └── data/
        └── blog-posts.json     # 초기 블로그 데이터
```

---

## 6. 포스트 데이터 구조

```javascript
{
  id: 1,                              // 고유 ID
  category: "project",                // 카테고리 ID
  title: "포스트 제목",               // 제목
  summary: "포스트 요약",             // 요약
  date: "2025-02-08",                 // 날짜 (YYYY-MM-DD)
  tags: ["Spring Boot", "MySQL"],     // 태그 배열
  url: "https://youn12.tistory.com/", // 원본 URL
  series: "ddangbbo",                 // 시리즈명 (선택)
  subcategory: "모바일",              // 서브카테고리 (선택)
  content: "## Markdown 콘텐츠"       // 본문 (선택)
}
```

### 카테고리 목록

| ID | 이름 | 아이콘 | 색상 |
|----|------|--------|------|
| project | 프로젝트 | fa-rocket | #4a6cf7 |
| study | Study | fa-book-open | #10b981 |
| live-study | Live-Study | fa-graduation-cap | #8b5cf6 |
| algorithm | Algorithm | fa-code | #f59e0b |
| devops | DevOps | fa-server | #ef4444 |
| etc | 기타 | fa-ellipsis-h | #6b7280 |

---

## 7. 개발/수정 가이드

### 새 카테고리 추가
1. `assets/data/blog-posts.json`의 `categories` 배열에 추가
2. localStorage 초기화 후 재로드

### 스타일 수정
- 블로그 목록: `assets/css/blog.css`
- 포스트 상세: `assets/css/post.css`

### JavaScript 수정
- CRUD 로직: `assets/js/blog.js`
- 에디터/렌더링: `assets/js/post.js`

---

**최종 업데이트**: 2025-12-02
