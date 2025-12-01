# Python 관련 포스트

> **블로그 원문**: https://youn12.tistory.com/category/Python
> **환경**: Windows, PyCharm

---

## Python 시작기

**작성일**: 2025.01.08

### 배경

웹 크롤링 학습을 위해 Python을 시작하게 되었습니다.

> "이전에는 Selenium과 Java를 사용하여 매크로 프로그램을 만들었었는데, 이번에는 Python이 Windows 기반 웹 크롤링 프로젝트에 더 적합하다고 판단하여 선택했습니다."

### 1. Python 설치

#### 다운로드
공식 웹사이트: https://www.python.org/downloads/

설치 과정은 비교적 간단하며, 특별한 설정 없이 기본값으로 진행

#### 설치 확인
```bash
python --version
```

### 2. IDE 선택

두 가지 옵션 비교:

| IDE | 장점 | 단점 |
|-----|------|------|
| **VSCode** | 가볍고 범용적, 사전 경험 있음 | Python 특화 기능 부족 |
| **PyCharm** | JetBrains 생태계, Python 특화 | 무거움 |

### 최종 선택: PyCharm

선택 이유:
- 현재 IntelliJ와 DataGrip 사용 중
- JetBrains 제품군의 일관된 UX
- 동일한 단축키, UI, 플러그인
- Python 개발에 특화된 기능

### PyCharm 설치

#### Community vs Professional

| 에디션 | 가격 | 주요 기능 |
|--------|------|----------|
| Community | 무료 | 기본 Python 개발 |
| Professional | 유료 | 웹 개발, DB 도구, 과학 도구 |

웹 크롤링 목적이라면 Community 에디션으로 충분

#### 설치 방법
1. JetBrains 공식 사이트에서 다운로드
2. 또는 JetBrains Toolbox 활용

### 다음 단계

Python 기초 학습 후 웹 크롤링 관련 라이브러리 학습 예정:
- Selenium (브라우저 자동화)
- BeautifulSoup (HTML 파싱)
- Requests (HTTP 요청)
- Scrapy (크롤링 프레임워크)

---

## Python 웹 크롤링 기초 (참고)

### 주요 라이브러리

```bash
# 설치
pip install selenium beautifulsoup4 requests
```

### 간단한 예시

```python
# requests + BeautifulSoup
import requests
from bs4 import BeautifulSoup

response = requests.get('https://example.com')
soup = BeautifulSoup(response.text, 'html.parser')

# 특정 요소 추출
titles = soup.find_all('h1')
for title in titles:
    print(title.text)
```

```python
# Selenium (동적 페이지)
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

**태그**: `Python`, `크롤링`, `PyCharm`, `시작`
