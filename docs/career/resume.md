# 윤원희 (Yun Wonhee)

**Backend Developer | 7 Years Experience**

- Email: wony9324@naver.com
- Phone: 010-3555-2320
- GitHub: https://github.com/younwony

---

## Professional Summary

**"기술과 소통으로 비즈니스 문제를 해결하는 백엔드 개발자"**

Java/Spring 기반 7년차 백엔드 개발자로서 커머스 도메인(상품/주문/가격)의 복잡한 비즈니스 로직을 전문적으로 다뤄왔습니다.
개발팀 내 기술적 해결책뿐 아니라, 비즈니스/운영 조직과의 적극적인 소통을 통해 서비스의 본질적인 문제를 발굴하고 해결합니다.

- **운영 효율화 (Zero Ops):** 현업 인터뷰를 통한 Pain Point 발굴 및 ChatOps 구축으로 운영 반복 업무를 40%에서 0%로 완전 자동화 달성
- **대용량 트래픽 설계:** 200만 건 규모의 데이터 파이프라인 구축 및 병렬 처리 아키텍처 도입으로 데이터 처리 속도 100배 개선
- **비즈니스 임팩트:** 네이버 쇼핑 Dynamic Pricing 시스템 고도화 및 기술적 제약 해결을 통해 가격 경쟁력을 확보, 매출 10% 상승 견인

---

## Core Competencies

- **Commerce Domain:** 커머스 핵심 도메인(상품·가격·주문) 비즈니스 로직 설계 및 운영 경험
- **Data Pipeline:** 200만 건 이상의 이기종 데이터 수집·정제·적재(ETL) 파이프라인 구축
- **Architecture & Performance:** 대용량 데이터 처리를 위한 병렬 아키텍처 설계 및 성능 최적화
- **Zero Ops & Automation:** 운영 비효율 제거를 위한 업무 프로세스 100% 자동화 (ChatOps, 리포팅 자동화)
- **Cross-functional Leadership:** 비즈니스 요구사항 분석부터 유관 부서 협업까지 프로젝트 전 과정 리딩
- **AI-Assisted Development:** AI 코딩 어시스턴트(Claude Code) 활용으로 운영 업무 자동화/시스템화 개발 가속화, 타 부서 직접 개발 지원을 통한 개발팀 리소스 절감

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

### AI Coding Assistant
- Claude Code (AI 기반 코딩 어시스턴트 활용)

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
- **Impact:** 마케팅 커버리지 극대화로 대형 캠페인 진행 가능, 리포팅 수작업 완전 제거로 고부가가치 업무 집중
- **Tech Decision:** RDB 대신 Elasticsearch 선택(200만 건 복합 조건 검색 0.1초 달성), Redis Distributed Lock으로 멀티 인스턴스 중복 수집 방지
- **사용 기술:** Spring Boot, Redis Lock, Elasticsearch, Google Sheets API

#### 네이버 쇼핑 Dynamic Pricing 시스템 (커머스 가격 경쟁력 확보)
- **핵심 성과:** API 제약(25,000건/일) 극복, 마진율 4% 보장 범위 내 자동 가격 조정, **매출/트래픽 각각 10% 상승**
- **주요 역할:**
  - **비즈니스 규칙 설계 리딩:** 마케팅/MD팀과 협의하여 가격 추종 범위(4%), 최소 마진 기준, 예외 상품군 등 핵심 정책 정의. 기술적 제약을 비즈니스 우선순위로 해결하는 방안 직접 제안
  - **Dynamic Pricing 엔진 개발:** 모델번호 매핑 기반 경쟁사 최저가 수집 및 조건부 자동 할인 적용 로직 구현
  - **하이브리드 운영 구조 설계:** 시스템 자동 처리 + MD팀 수동 처리 통합, 예외 케이스 집중 관리 Admin 뷰 제공
  - **데이터 기반 성과 검증:** GA/BigQuery 연동으로 가격 정책 전후 트래픽·매출 변화 정량 분석 환경 구축
- **Impact:** 가격 경쟁력 확보로 네이버 쇼핑 노출 우위 달성, MD팀은 전략 상품·예외 케이스에만 집중하는 고효율 구조 정착
- **Tech Decision:** Spring Batch로 대량 가격 조정 트랜잭션 안정성 확보, 매출 기여도 상위 12% 상품에 API Quota 집중하여 ROI 극대화
- **사용 기술:** Spring Batch, Naver Shopping API, BigQuery, Google Analytics

#### 해외 부티크 상품 데이터 정합성 확보 (커머스 클레임 방지)
- **핵심 성과:** 상품 이미지 불일치로 인한 고객 클레임 **Zero 달성**, 반품 비용 절감, **운영 자동화(Zero Ops)**
- **주요 역할:**
  - **문제 원인 분석 및 해결책 제안:** CS팀과 협업하여 클레임 패턴 분석, 해시 기반 검증 방안 직접 제안
  - **해시 기반 이미지 검증 시스템 구축:** HTTP Header(ETag, Last-Modified) 및 MD5 해시값 비교로 이미지 변경 정밀 감지
  - **운영 자동화:** 수동 검수 → 24시간 자동 동기화로 운영팀 개입 없이 이미지 정합성 유지
- **Impact:** 고객 신뢰도 회복으로 구매 전환율 안정화, CS팀 클레임 처리 업무 부담 제거
- **Tech Decision:** MD5 해시 + ETag 이중 검증으로 URL 동일해도 이미지 변경 감지, Header 우선 비교로 네트워크 비용 80% 절감
- **사용 기술:** Java, Spring Boot, AWS S3, Image Hashing (MD5/ETag)

#### 비즈니스 프로세스 최적화 (ChatOps) - Zero Ops 달성
- **핵심 성과:** 운영팀 수동 업무 **40%→0%** (Zero Ops), 소통 채널 **100% 통합**, 업무 투명성 확보
- **주요 역할:**
  - **현업 인터뷰 직접 리딩:** 운영팀·유관 부서 인터뷰 주도하여 실제 Pain Point 발굴 (병목: 컨텍스트 스위칭)
  - **사용자 중심 플랫폼 선정:** 구성원이 익숙한 Slack 선택, 기존 업무 흐름 유지하며 자동화 적용으로 채택률 극대화
  - **ChatOps 시스템 구축:** Slack Event API 기반 발주 승인/반려, 클레임 처리 등 버튼 클릭 한 번으로 DB 처리까지 완료
- **Impact:** 운영팀이 고부가가치 업무에 집중 가능, 휴먼 에러 방지로 클레임 감소, 현업 만족도 향상
- **Tech Decision:** Slack 선택(구성원이 가장 익숙한 플랫폼으로 채택률 극대화), Event API + Interactive Component로 컨텍스트 스위칭 제거
- **사용 기술:** Java, Spring Boot, Slack Event API

#### 엔지니어링 효율화 - 개발 문화 개선 및 AI 기반 반복 업무 자동화
- **핵심 성과:** 배포 후 버그·핫픽스 건수 감소, 신규 입사자 온보딩 시간 단축, 운영성 반복 업무 **70~90% 단축**
- **주요 역할:**
  - **조직 문화·프로세스 개선:** PR 기반 코드 리뷰 프로세스 제안·정착, 최소 2인 승인 체계 도입, Java/Spring 코딩 컨벤션 수립 및 문서화
  - **AI 에이전트 기반 반복 업무 자동화:** Claude Code를 활용해 SQL 작성, 데이터 조회·정제, 운영성 스크립트 등을 AI 페어프로그래밍 방식으로 신속히 구현
  - **운영 툴 내재화:** 반복 업무를 내부 시스템에 기능으로 내재화, 별도 유틸리티로 개발하여 팀 전체가 활용 가능하도록 배포
- **Impact:** 협업 효율·코드 품질·개발 속도 유의미하게 개선, 시니어 개발자들이 핵심 도메인 개발에 집중 가능한 환경 확보
- **사용 기술:** Code Review, Clean Code, Engineering Culture, Java, Spring Boot, AI Agent(Claude Code)

#### AI 에이전트 기반 운영 툴 내재화 및 팀 리소스 최적화
- **핵심 성과:** 운영성 도구 개발 시간 **90% 단축** (1~2일 → 1~2시간), 사내 맞춤형 운영 툴 5건 이상 신규 구축
- **주요 역할:**
  - **AI 기반 개발 파이프라인 도입:** Claude Code를 활용하여 자연어 명령으로 SQL 생성, 데이터 마이그레이션 스크립트, 백오피스 기능 구현 워크플로우 정립
  - **팀 내 전파 및 가이드:** 프롬프트 엔지니어링 노하우와 AI 활용 패턴을 공유, 주니어 개발자도 AI 보조로 복잡한 쿼리/테스트 코드 작성 가능
- **Impact:** 백엔드 팀 생산성 비약적 향상, 핵심 기능 개발에 지속적으로 시간 투자 가능한 구조 정착
- **사용 기술:** Java, Spring Boot, Claude Code (AI Agent), Shell Script

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
