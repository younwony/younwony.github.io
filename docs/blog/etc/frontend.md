# FrontEnd 관련 포스트

> **블로그 원문**: https://youn12.tistory.com/category/FrontEnd
> **기술**: JavaScript, jQuery

---

## Image Load 후 Resize Event 사용

**작성일**: 2021.03.15

### 문제 상황
이미지 로드 완료 후 리사이즈 이벤트를 적용해야 하는 상황

### 해결 방법

#### onload 함수 활용
이미지 로드가 완료된 후에 리사이즈 작업 수행

```javascript
// JavaScript
const img = new Image();
img.onload = function() {
    // 이미지 로드 완료 후 실행
    handleResize();
};
img.src = 'image-url.jpg';
```

#### jQuery 방식

```javascript
// jQuery
$('img').on('load', function() {
    // 이미지 로드 완료 후 실행
    $(this).css({
        'width': calculateWidth(),
        'height': calculateHeight()
    });
});
```

### 이미지 크기에 따른 CSS 설정

```javascript
function handleImageResize(img) {
    const width = img.naturalWidth;
    const height = img.naturalHeight;

    if (width > height) {
        // 가로가 긴 이미지
        img.style.width = '100%';
        img.style.height = 'auto';
    } else {
        // 세로가 긴 이미지
        img.style.width = 'auto';
        img.style.height = '100%';
    }
}
```

### 주의사항

1. **캐시된 이미지**
   - 이미 캐시된 이미지는 onload가 즉시 실행될 수 있음
   - src 설정 전에 onload 핸들러 등록 필요

2. **비동기 처리**
   - 여러 이미지 로드 시 Promise 활용 권장

```javascript
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

// 사용
loadImage('image.jpg')
    .then(img => handleImageResize(img))
    .catch(err => console.error('이미지 로드 실패'));
```

---

**태그**: `JavaScript`, `jQuery`, `이미지`, `리사이즈`
