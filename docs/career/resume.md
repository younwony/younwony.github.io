# 윤원희 (Yun Wonhee)

**Backend Developer | 7 Years Experience**

- Email: wony9324@naver.com
- Phone: 010-3555-2320
- GitHub: https://github.com/younwony

---

## Professional Summary

**"기술과 소통으로 비즈니스 문제를 해결하는 백엔드 개발자"**

Java/Spring 기반 커머스 도메인에서 7년간 상품·가격·주문 등 핵심 비즈니스 로직을 개발하고 운영하며, **기술적 역량과 이해관계자 협업 능력을 함께 성장**시켜왔습니다.

단순 기능 구현을 넘어, **비즈니스 요구사항의 본질적 문제를 파악하고 유관 부서와 적극적으로 소통하여 최적의 해결책을 도출**하는 것이 강점입니다. 네이버 쇼핑 Dynamic Pricing 시스템에서는 API 제약을 마케팅/MD팀과의 협업으로 해결했고, ChatOps 프로젝트에서는 운영팀 인터뷰를 직접 리딩하여 **운영 업무 40%→0% 완전 자동화(Zero Ops)**를 달성했습니다.

**200만 건 대용량 데이터 파이프라인 구축**, **데이터 처리 속도 100배 개선**, **커머스 매출 10% 상승** 등 정량적 성과로 비즈니스 임팩트를 증명합니다.

---

## Core Competencies

- **Commerce Domain:** 커머스 핵심 도메인(상품·가격·주문) 비즈니스 로직 설계 및 운영 경험
- **Data Pipeline:** 200만 건 이상의 이기종 데이터 수집·정제·적재(ETL) 파이프라인 구축
- **Architecture & Performance:** 대용량 데이터 처리를 위한 병렬 아키텍처 설계 및 성능 최적화
- **Zero Ops & Automation:** 운영 비효율 제거를 위한 업무 프로세스 100% 자동화 (ChatOps, 리포팅 자동화)
- **Cross-functional Leadership:** 비즈니스 요구사항 분석부터 유관 부서 협업까지 프로젝트 전 과정 리딩

---

## Technical Skills

### Languages & Frameworks
- **Java**, Spring Boot, Spring Batch, JPA/Hibernate

### Database & Cache
- MySQL, Oracle, **Redis (Distributed Lock)**, Elasticsearch

### Infra & DevOps
- AWS (EC2, S3, RDS), Jenkins, GitHub Actions

### Data & Analytics
- BigQuery, GA4

### Tools & Integration
- Slack API (ChatOps), Google Sheets API, Naver Shopping API, JIRA, Confluence

---

## Work Experience

### (주)구하다
**Backend Developer (Senior)**
*2022.02 - 현재 (3년 9개월)*

#### 인플루언서 데이터 플랫폼 고도화 (200만 데이터 규모)
- **핵심 성과:** 데이터 수집 **100% 자동화**, 데이터 풀 **20배 확대** (10만→200만 명), 검색 성능 **100배 개선** (10초→0.1초), **리포팅 Zero Ops 달성**
- **주요 역할:**
  - **요구사항 분석 및 협업 리딩:** 마케팅팀과의 정기 미팅으로 실제 Pain Point 파악, 수집 조건 우선순위 함께 정의
  - **대용량 데이터 파이프라인 설계:** 멀티소스 수집 아키텍처 설계, 일 5,000명 자동 수집 목표 달성
  - **시스템 안정성 확보:** Retry 로직 + Redis Distributed Lock으로 API 차단 방지 및 중복 수집 방지
  - **운영 자동화(Zero Ops):** Google Sheets API로 리포팅 완전 자동화, 마케팅팀 실시간 성과 확인 가능
- **사용 기술:** Spring Boot, Redis Lock, Elasticsearch, Google Sheets API

#### 네이버 쇼핑 Dynamic Pricing 시스템 (커머스 가격 경쟁력 확보)
- **핵심 성과:** API 제약(25,000건/일) 극복, 마진율 4% 보장 범위 내 자동 가격 조정, **매출/트래픽 각각 10% 상승**
- **주요 역할:**
  - **비즈니스 규칙 설계 리딩:** 마케팅/MD팀과 협의하여 가격 추종 범위(4%), 최소 마진 기준, 예외 상품군 등 핵심 정책 정의. 기술적 제약을 비즈니스 우선순위로 해결하는 방안 직접 제안
  - **Dynamic Pricing 엔진 개발:** 모델번호 매핑 기반 경쟁사 최저가 수집 및 조건부 자동 할인 적용 로직 구현
  - **하이브리드 운영 구조 설계:** 시스템 자동 처리 + MD팀 수동 처리 통합, 예외 케이스 집중 관리 Admin 뷰 제공
  - **데이터 기반 성과 검증:** GA/BigQuery 연동으로 가격 정책 전후 트래픽·매출 변화 정량 분석 환경 구축
- **사용 기술:** Spring Batch, Naver Shopping API, BigQuery, Google Analytics

#### 해외 부티크 상품 데이터 정합성 확보 (커머스 클레임 방지)
- **핵심 성과:** 상품 이미지 불일치로 인한 고객 클레임 **Zero 달성**, 반품 비용 절감, **운영 자동화(Zero Ops)**
- **주요 역할:**
  - **문제 원인 분석 및 해결책 제안:** CS팀과 협업하여 클레임 패턴 분석, 해시 기반 검증 방안 직접 제안
  - **해시 기반 이미지 검증 시스템 구축:** HTTP Header(ETag, Last-Modified) 및 MD5 해시값 비교로 이미지 변경 정밀 감지
  - **운영 자동화:** 수동 검수 → 24시간 자동 동기화로 운영팀 개입 없이 이미지 정합성 유지
- **사용 기술:** Java, Spring Boot, AWS S3, Image Hashing (MD5/ETag)

#### 비즈니스 프로세스 최적화 (ChatOps) - Zero Ops 달성
- **핵심 성과:** 운영팀 수동 업무 **40%→0%** (Zero Ops), 소통 채널 **100% 통합**, 업무 투명성 확보
- **주요 역할:**
  - **현업 인터뷰 직접 리딩:** 운영팀·유관 부서 인터뷰 주도하여 실제 Pain Point 발굴 (병목: 컨텍스트 스위칭)
  - **사용자 중심 플랫폼 선정:** 구성원이 익숙한 Slack 선택, 기존 업무 흐름 유지하며 자동화 적용으로 채택률 극대화
  - **ChatOps 시스템 구축:** Slack Event API 기반 발주 승인/반려, 클레임 처리 등 버튼 클릭 한 번으로 DB 처리까지 완료
- **사용 기술:** Java, Spring Boot, Slack Event API

#### 개발 문화 및 엔지니어링 역량 강화 - 팀 리딩
- **핵심 성과:** 배포 후 버그·핫픽스 건수 감소, 신규 입사자 온보딩 시간 단축, 팀 역량 상향 평준화
- **주요 역할:**
  - **코드 리뷰 프로세스 도입 리딩:** PR 기반 개발 프로세스 직접 제안 및 팀 합의 도출, 최소 2명 이상 리뷰 승인 의무화
  - **코드 컨벤션 수립:** 팀원 협의 통해 Java/Spring 코딩 컨벤션 명문화, 신규 입사자 가이드라인 배포
  - **지식 공유 체계 구축:** 상호 코드 리뷰를 통한 기술 지식 전파, 주니어 개발자 멘토링
- **사용 기술:** Code Review, Clean Code, Engineering Culture

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
