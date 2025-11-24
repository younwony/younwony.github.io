# 윤원희 (Yun Wonhee)

**Backend Developer | 7 Years Experience**

- Email: wony9324@naver.com
- Phone: 010-3555-2320
- GitHub: https://github.com/younwony

---

## Professional Summary

**"비즈니스 임팩트를 숫자로 증명하는 데이터 드리븐 개발자"**

7년 간 커머스 및 마케팅 도메인에서 대용량 트래픽 처리와 시스템 자동화에 주력해 왔습니다. Java/Spring Boot 기반의 안정적인 시스템 구축 역량을 바탕으로, **Elasticsearch 도입으로 검색 성능을 20배 개선**하고, **ThreadPoolTaskExecutor 커스터마이징과 병렬 처리 아키텍처 설계로 데이터 수집 속도를 100배(100명/h → 10,000명/h) 단축**한 경험이 있습니다. 단순한 기능 구현을 넘어, 운영 비효율을 제거하는 자동화 시스템 구축을 통해 조직의 생산성을 높이는 데 기여합니다.

---

## Core Competencies

- **Architecture & Performance:** 대용량 데이터 처리를 위한 병렬 아키텍처 설계 및 ThreadPoolTaskExecutor 최적화 경험
- **Data Pipeline:** 200만 건 이상의 이기종 데이터 수집·정제·적재(ETL) 파이프라인 구축
- **Search Engine:** Elasticsearch 기반의 검색 엔진 도입 및 인덱싱 최적화 (성능 20배 개선)
- **Resilience Engineering:** Resilience4j RateLimiter 및 Backoff Retry 정책을 통한 API 안정성 확보
- **Automation:** 운영 비효율 제거를 위한 업무 프로세스 100% 자동화 (Zero Ops 지향)

---

## Technical Skills

### Languages & Frameworks
- **Java (Expert)**, Spring Boot, Spring Batch, JPA/Hibernate

### Database & Cache
- MySQL, Oracle, **Redis (Distributed Lock)**, **Elasticsearch**

### Infra & DevOps
- AWS (EC2, S3, RDS), Docker, Jenkins, GitHub Actions

### Tools & Libraries
- IntelliJ, JIRA, Confluence, **Resilience4j**, Slack API, GA4, BigQuery

---

## Work Experience

### (주)구하다
**Backend Developer (Senior)**
*2022.02 - 현재 (3년 9개월)*

#### 인플루언서 데이터 플랫폼 고도화
- **핵심 성과:** 수집 속도 **99% 단축 (100명/h → 10,000명/h)**, 데이터 풀 **20배 확대 (10만 → 200만 명)**
- **주요 기술:**
  - **병렬 아키텍처 설계:** ThreadPoolTaskExecutor를 커스텀하여 I/O Blocking 시간을 최소화하고 리소스 효율 극대화
  - **안정성 확보:** Resilience4j RateLimiter와 Backoff Retry 정책을 적용해 API 임계치 내에서 최대 효율을 내도록 튜닝
  - **분산 제어:** Redis Distributed Lock 도입으로 멀티 인스턴스 환경에서 중복 수집 방지
  - **검색 최적화:** Elasticsearch 도입하여 복합 조건 검색을 200ms 이내로 처리
- **사용 기술:** Spring Boot, ThreadPoolTaskExecutor, Resilience4j, Redis Lock, Elasticsearch, Google Sheets API

#### 네이버 쇼핑 최저가 대응 및 Dynamic Pricing 시스템
- **핵심 성과:** API Quota(25,000건/일) 제약 극복 및 마진율 4% 보장 범위 내 자동 가격 조정, **매출/트래픽 각각 10% 상승**
- **주요 기술:**
  - **Dynamic Pricing 로직:** 모델번호 매핑으로 경쟁사 최저가 수집, [자사 판매가 vs 최저가 차이 < 4%] & [최소 마진 확보] 조건 충족 시에만 자동 할인 적용
  - **API Quota 효율화:** 매출 상위 및 노출 중요 상품 우선순위 스케줄링으로 한정된 API 리소스 활용 극대화
  - **하이브리드 운영 구조:** 자동+매뉴얼 프로세스 통합, MD팀이 예외 케이스만 집중 관리할 수 있도록 Admin 뷰 제공
  - **성과 검증 환경:** GA/BigQuery 연동하여 가격 정책 전후 트래픽 및 매출 변화 정량 분석
- **사용 기술:** Spring Batch, Naver Shopping API, BigQuery, Google Analytics

#### 데이터 기반 프로세스 최적화 및 ChatOps 자동화
- **핵심 성과:** **품절률 20% 감소**, 이미지 처리 비용 **80% 절감**, 운영팀 반복 업무 **100% 제거**
- **주요 기술:**
  - **데이터 파이프라인:** GA4(행동 로그)와 DB(주문 로그)를 BigQuery로 통합 적재하여 '상습 품절 패턴' 분석
  - **비용 최적화:** 이미지 전체(수 MB) 대신 Header(4KB) 해시 비교로 변경 감지 알고리즘 개선
  - **ChatOps 구현:** Slack Event API를 활용해 메신저 내에서 '승인/반려' 버튼 클릭만으로 업무 종결
- **사용 기술:** BigQuery, GA4, Slack Event API, AWS S3, Image Hashing

---

### (주)인터파크
**Backend Developer**
*2021.09 - 2022.01 (5개월)*

#### Seller 어드민 성능 개선 및 레거시 리팩토링
- **핵심 성과:** 정산/주문 조회 응답 시간 **5초 → 1초 이내**로 단축
- **주요 기술:**
  - Slow Query 실행 계획 분석을 통한 인덱스 튜닝 및 불필요한 JOIN 제거
  - N+1 문제 해결을 위한 Fetch Join 적용
  - 복잡한 비즈니스 로직을 Service Layer로 분리하여 가독성 및 유지보수성 향상
- **사용 기술:** Spring Boot, JPA, MySQL

---

### (주)한국문헌정보기술
**Backend Developer**
*2018.06 - 2021.08 (3년 2개월)*

#### 자체 검색 엔진 구축 및 대용량 처리 최적화
- **핵심 성과:** 데이터 등록 속도 **70% 단축**, 라이선스 비용 절감, **2021년 사내 우수사원** 선정
- **주요 기술:**
  - Elasticsearch 기반 자체 검색 엔진 개발 및 Nori 한글 형태소 분석기 적용으로 검색 정확도 향상
  - 단건 Insert를 Bulk Insert 알고리즘으로 전환하여 DB 트랜잭션 횟수 최소화
  - 배치 사이즈 튜닝을 통한 최적 성능 달성
- **사용 기술:** Elasticsearch, Nori Analyzer, Bulk Insert, Oracle

---

## Education

**대전대학교**
컴퓨터공학 학사 (2011.02 - 2018.02)

---

## Certifications

**정보처리기사**
한국산업인력공단 | 2017.05

---

## Awards

**2021년 사내 우수사원**
(주)한국문헌정보기술 | 대용량 처리 최적화 및 검색 엔진 구축 성과
