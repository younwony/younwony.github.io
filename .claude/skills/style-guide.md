# CSS/HTML 스타일 가이드 (Skill)

> 이 스킬은 템플릿 작업 시 자동으로 참조됩니다.

---

## CSS 변수 시스템

### 변수 정의

```css
:root {
    /* Primary Colors */
    --primary-dark: #1a1a2e;
    --primary-blue: #4a6cf7;
    --text-primary: #333;
    --bg-body: #f8f9fa;
    --bg-white: white;
}

[data-theme="dark"] {
    --primary-dark: #e0e0e0;
    --primary-blue: #60a5fa;
    --text-primary: #e0e0e0;
    --bg-body: #0f0f23;
    --bg-white: #1a1a2e;
}
```

### 변수 사용

```css
.section {
    background: var(--bg-white);
    color: var(--text-primary);
}

.section h3 {
    color: var(--primary-dark);
}

.section h3 i {
    color: var(--primary-blue);
}
```

**장점**:
- 라이트/다크 모드가 자동으로 적용됨
- 중복 코드 제거
- 유지보수 용이

---

## 인라인 스타일 금지

**Bad**:
```html
<h3 style="color: #1a1a2e; font-size: 1.2rem;">제목</h3>
```

**Good**:
```html
<h3 class="section-title">제목</h3>
```

```css
.section-title {
    color: var(--primary-dark);
    font-size: 1.2rem;
}
```

---

## CSS 파일 구조

```css
/* assets/css/style.css */

/* 1. CSS Variables (Light & Dark) */
/* 2. Reset & Base */
/* 3. Typography */
/* 4. Layout */
/* 5. Components */
/* 6. Dark Mode Overrides (if needed) */
```

---

## HTML 템플릿 구조

### 표준 head 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>문서 제목</title>

    <!-- 외부 CSS -->
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- 콘텐츠 -->

    <!-- 공통 스크립트 -->
    <script src="../../assets/js/common.js"></script>
</body>
</html>
```

---

## 템플릿 종류

| 템플릿 | 특징 | 적합한 용도 |
|--------|------|-----------|
| **default** | 균형 잡힌 레이아웃 | 일반적인 이력서 |
| **minimal** | 심플한 디자인 | 간결함 선호 |
| **modern** | 모던한 UI | 디자인 중시 |
| **corporate** | 격식 있는 스타일 | 대기업 지원 |

---

## 자주 발생하는 문제

### 다크모드가 일부 요소에만 적용됨

**원인**: 인라인 스타일 또는 하드코딩된 색상값

**해결**:
```css
/* 하드코딩 제거 */
.element {
    color: var(--text-primary);
    background: var(--bg-white);
}
```

### CSS 변수가 적용되지 않음

**확인 사항**:
1. `:root` 블록에 변수가 정의되어 있는가?
2. `var(--변수명)` 문법이 올바른가?
3. CSS 파일이 올바르게 로드되었는가?

### 반응형 레이아웃 깨짐

**확인 사항**:
1. `viewport` 메타 태그가 있는가?
2. 미디어 쿼리가 적절한가?
3. `flex` 또는 `grid` 레이아웃이 올바른가?

---

## 관련 파일

- CSS: `assets/css/style.css`
- JS: `assets/js/common.js`
- 템플릿: `templates/**/*.html`
- 공통 head: `templates/partials/head.html`
