# 기술 종합 정리 (Framework, Frontend, Open Source, Python)

> **카테고리**: Framework, FrontEnd, Open Sources, Python
> **포스팅 수**: 4개
> **주요 기술**: eGovFrame, JavaScript, Elasticsearch, Python

---

## 📚 목차

1. [Framework - eGovFrame](#framework---egovframe)
2. [FrontEnd - JavaScript/jQuery](#frontend---javascriptjquery)
3. [Open Source - Elasticsearch](#open-source---elasticsearch)
4. [Python - 웹 크롤링](#python---웹-크롤링)

---

## Framework - eGovFrame

### eGovFrame Maven 빌드 초기화 ⭐⭐

**작성일**: 2020.10.30
**환경**: eGovFrameWork v3.7

#### 문제 해결 프로세스

**1단계: Maven 프로젝트 업데이트**
```
프로젝트 우클릭 → Maven → Update Project
단축키: Alt + F5
```

**2단계: Maven Clean**
```bash
mvn clean
```

**3단계: Maven Install**
```bash
mvn install
```

#### 전체 명령어

```bash
# 기본
mvn clean install

# 테스트 스킵
mvn clean install -DskipTests

# 오프라인 모드
mvn clean install -o

# 강제 업데이트
mvn clean install -U

# 의존성 캐시 삭제 (필요시)
rm -rf ~/.m2/repository
```

#### eGovFrame 주요 특징

| 특징 | 설명 |
|------|------|
| **기반** | Spring Framework |
| **용도** | 공공기관 시스템 개발 |
| **버전** | 3.x (Spring 4), 4.x (Spring 5) |

---

## FrontEnd - JavaScript/jQuery

### Image Load 후 Resize Event 사용 ⭐⭐

**작성일**: 2021.03.15

#### 문제 상황
이미지 로드 완료 후 리사이즈 이벤트를 적용해야 하는 상황

#### 해결 방법

**JavaScript 방식**:
```javascript
const img = new Image();
img.onload = function() {
    // 이미지 로드 완료 후 실행
    handleResize();
};
img.src = 'image-url.jpg';
```

**jQuery 방식**:
```javascript
$('img').on('load', function() {
    $(this).css({
        'width': calculateWidth(),
        'height': calculateHeight()
    });
});
```

#### 이미지 크기에 따른 CSS 설정

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

#### Promise를 활용한 비동기 처리

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

#### 주의사항

1. **캐시된 이미지**
   - 이미 캐시된 이미지는 onload가 즉시 실행될 수 있음
   - src 설정 전에 onload 핸들러 등록 필요

2. **비동기 처리**
   - 여러 이미지 로드 시 Promise 활용 권장

---

## Open Source - Elasticsearch

### Elasticsearch 7.10.0 Linux(CentOS 7) 설치 ⭐⭐⭐

**작성일**: 2021.05.20
**버전**: Elasticsearch 7.10.0
**환경**: CentOS 7

#### 설치 과정

**1단계: 다운로드 및 압축 해제**

```bash
# 다운로드
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.0-linux-x86_64.tar.gz

# 압축 해제
tar -xzf elasticsearch-7.10.0-linux-x86_64.tar.gz
```

**2단계: 외부 접속 활성화**

파일: `config/elasticsearch.yml`

```yaml
# 외부 접속 허용
network.host: 0.0.0.0

# 클러스터 초기화 (필수!)
cluster.initial_master_nodes: ["127.0.0.1"]
```

**3단계: 플러그인 설치**

```bash
# Nori (한글 형태소 분석기)
./bin/elasticsearch-plugin install analysis-nori

# Ingest Attachment (파일 색인)
./bin/elasticsearch-plugin install ingest-attachment
```

**4단계: 실행**

```bash
cd elasticsearch-7.10.0

# 포그라운드 실행
./bin/elasticsearch

# 백그라운드 실행
./bin/elasticsearch -d
```

**5단계: 접속 확인**

```bash
curl http://localhost:9200
```

응답 예시:
```json
{
  "name" : "node-1",
  "cluster_name" : "elasticsearch",
  "version" : {
    "number" : "7.10.0"
  },
  "tagline" : "You Know, for Search"
}
```

#### 주요 설정 옵션

| 설정 | 설명 | 기본값 |
|------|------|--------|
| `network.host` | 바인딩 주소 | localhost |
| `http.port` | HTTP 포트 | 9200 |
| `transport.port` | 노드 통신 포트 | 9300 |
| `cluster.name` | 클러스터 이름 | elasticsearch |
| `node.name` | 노드 이름 | 자동 생성 |

#### 메모리 설정

파일: `config/jvm.options`

```
# 힙 메모리 설정 (시스템 메모리의 50% 권장)
-Xms1g
-Xmx1g
```

#### 유용한 API

```bash
# 클러스터 상태
curl http://localhost:9200/_cluster/health?pretty

# 인덱스 목록
curl http://localhost:9200/_cat/indices?v

# 노드 정보
curl http://localhost:9200/_cat/nodes?v
```

---

## Python - 웹 크롤링

### Python 시작기 ⭐⭐

**작성일**: 2025.01.08
**환경**: Windows, PyCharm

#### 배경

웹 크롤링 학습을 위해 Python을 선택한 이유:
- 이전 Java + Selenium 경험
- Windows 기반 웹 크롤링 프로젝트에 적합
- 간결한 문법과 풍부한 라이브러리

#### 1. Python 설치

**다운로드**: https://www.python.org/downloads/

**설치 확인**:
```bash
python --version
```

#### 2. IDE 선택

| IDE | 장점 | 단점 |
|-----|------|------|
| **VSCode** | 가볍고 범용적, 사전 경험 있음 | Python 특화 기능 부족 |
| **PyCharm** | JetBrains 생태계, Python 특화 | 무거움 |

#### 최종 선택: PyCharm

선택 이유:
- 현재 IntelliJ와 DataGrip 사용 중
- JetBrains 제품군의 일관된 UX
- 동일한 단축키, UI, 플러그인
- Python 개발에 특화된 기능

#### PyCharm 에디션 비교

| 에디션 | 가격 | 주요 기능 |
|--------|------|----------|
| **Community** | 무료 | 기본 Python 개발 |
| **Professional** | 유료 | 웹 개발, DB 도구, 과학 도구 |

웹 크롤링 목적이라면 **Community 에디션**으로 충분

#### 3. 웹 크롤링 라이브러리

**설치**:
```bash
pip install selenium beautifulsoup4 requests
```

**주요 라이브러리**:
- **Selenium**: 브라우저 자동화
- **BeautifulSoup**: HTML 파싱
- **Requests**: HTTP 요청
- **Scrapy**: 크롤링 프레임워크

#### 예시 코드

**Requests + BeautifulSoup (정적 페이지)**:
```python
import requests
from bs4 import BeautifulSoup

response = requests.get('https://example.com')
soup = BeautifulSoup(response.text, 'html.parser')

# 특정 요소 추출
titles = soup.find_all('h1')
for title in titles:
    print(title.text)
```

**Selenium (동적 페이지)**:
```python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get('https://example.com')

# 요소 찾기
element = driver.find_element(By.CLASS_NAME, 'content')
print(element.text)

driver.quit()
```

---

## 핵심 정리

### eGovFrame (전자정부 프레임워크)
- ✅ Maven 빌드 초기화 프로세스
- ✅ Spring Framework 기반 공공기관 개발
- ✅ 의존성 캐시 관리

### JavaScript/jQuery
- ✅ 이미지 로드 후 리사이즈 이벤트
- ✅ Promise 기반 비동기 처리
- ✅ 캐시된 이미지 처리 주의사항

### Elasticsearch
- ✅ 7.10.0 설치 및 설정
- ✅ 외부 접속 및 클러스터 초기화
- ✅ Nori 한글 형태소 분석기
- ✅ 주요 API 및 메모리 설정

### Python 웹 크롤링
- ✅ Python 설치 및 환경 구성
- ✅ PyCharm vs VSCode 비교
- ✅ Selenium, BeautifulSoup 기초
- ✅ 정적 vs 동적 페이지 크롤링

---

## 참고 자료

- **eGovFrame 공식 문서**: https://www.egovframe.go.kr/
- **Elasticsearch 공식 문서**: https://www.elastic.co/guide/
- **Python 공식 문서**: https://docs.python.org/
- **원본 블로그**: https://youn12.tistory.com/

---

**작성일**: 2025-12-02
**기반**: 12Dev 블로그 Framework, FrontEnd, Open Sources, Python 카테고리
