# 윤원희 (Yun Wonhee)

**Backend Developer | 7 Years Experience**

- Email: wony9324@naver.com
- Phone: 010-3555-2320
- GitHub: https://github.com/younwony

---

## Professional Summary

**기술과 소통으로 비즈니스 문제를 해결하는 백엔드 개발자**

Java/Spring 기반 7년차 백엔드 개발자로서 커머스 도메인(상품/주문/가격)의 복잡한 비즈니스 로직을 전문적으로 다뤄왔습니다. 기술적 해결책뿐 아니라 비즈니스/운영 조직과의 적극적인 소통을 통해 서비스의 본질적인 문제를 발굴하고 해결합니다.

**핵심 성과:**
- **Zero Ops 달성:** 현업 인터뷰를 통한 Pain Point 발굴 및 ChatOps 구축으로 운영 반복 업무 40% → 0% 완전 자동화
- **대용량 처리 아키텍처:** 200만 건 규모 데이터 파이프라인 구축, 병렬 처리 도입으로 검색 성능 100배 개선 (10초 → 0.1초)
- **비즈니스 임팩트:** 네이버 쇼핑 Dynamic Pricing 시스템 고도화로 가격 경쟁력 확보, 매출 10% 상승 견인

---

## Core Competencies

| 역량 | 설명 |
|------|------|
| **Commerce Domain** | 커머스 핵심 도메인(상품·가격·주문) 비즈니스 로직 설계 및 운영 |
| **Data Pipeline** | 200만 건 이상 이기종 데이터 수집·정제·적재(ETL) 파이프라인 구축 |
| **Architecture & Performance** | 대용량 처리를 위한 병렬 아키텍처 설계 및 성능 최적화 |
| **Zero Ops & Automation** | ChatOps, 리포팅 자동화 등 운영 프로세스 100% 자동화 |
| **Reliability Engineering** | 서버 리소스 모니터링, Slow Query 분석 체계로 서비스 안정성 확보 |
| **Quality & Testing** | TDD 기반 개발, 코드 리뷰 문화 정착으로 코드 품질 향상 |
| **Cross-functional Leadership** | 요구사항 분석부터 유관 부서 협업까지 프로젝트 전 과정 리딩 |
| **AI-Assisted Development** | Claude Code 활용으로 운영 업무 자동화 및 개발 생산성 향상 |

---

## Technical Skills

### Languages & Frameworks
- **Java**, Spring Boot, Spring Batch, JPA/Hibernate

### Database & Cache
- **MySQL**, **Elasticsearch**, **Redis** (Distributed Lock), Oracle

### Infra & DevOps
- AWS (EC2, S3, RDS), **Elastic APM** (Slow Query 분석), Jenkins

### Data & Analytics
- BigQuery, GA4

### Tools & Integration
- Slack API (ChatOps), Google Sheets API, Naver Shopping API, JIRA, Confluence

### AI Coding Assistant
- Claude Code (AI 기반 코딩 어시스턴트 활용)
- MCP (Model Context Protocol) - Confluence/Jira 연동 자동화

---

## Work Experience

### (주)구하다
**Backend Developer (Senior)**
*2022.02 - 현재 (3년 9개월)*

#### 인플루언서 데이터 플랫폼 고도화 (200만 데이터 규모)
- **핵심 성과:** 데이터 수집 **100% 자동화**, 데이터 풀 **20배 확대** (10만→200만 명), 검색 성능 **100배 개선** (10초→0.1초), **Zero Ops 달성**
- **주요 역할:**
  - **요구사항 분석 및 협업 리딩:** 마케팅팀 정기 미팅으로 Pain Point 파악, 수집 조건 우선순위 공동 정의
  - **멀티소스 데이터 파이프라인 설계:** TikTok API, Ensemble API 등 조합한 수집 아키텍처, 병렬 처리로 일 5,000명 자동 수집 달성
  - **시스템 안정성 확보:** Retry 로직 + Redis Distributed Lock으로 API 차단 방지 및 중복 수집 방지
  - **운영 자동화:** Google Sheets API 기반 리포팅 완전 자동화
- **Impact:** 대형 캠페인 진행 가능한 마케팅 커버리지 확보, 리포팅 업무 제거로 고부가가치 업무 집중
- **Tech Decision:** RDB 대신 Elasticsearch 선택(200만 건 복합 조건 검색 0.1초 달성), Redis Distributed Lock으로 중복 수집 방지
- **사용 기술:** Spring Boot, Redis Lock, Elasticsearch, Google Sheets API

#### 네이버 쇼핑 Dynamic Pricing 시스템
- **핵심 성과:** API 제약(25,000건/일) 극복, 마진율 4% 보장 범위 내 자동 가격 조정, **매출/트래픽 각각 10% 상승**
- **주요 역할:**
  - **비즈니스 규칙 설계 리딩:** 마케팅/MD팀과 협의하여 가격 추종 범위(4%), 최소 마진 기준, 예외 상품군 정의
  - **Dynamic Pricing 엔진 개발:** 모델번호 매핑 기반 경쟁사 최저가 수집 및 조건부 자동 할인 적용 로직 구현
  - **하이브리드 운영 구조 설계:** 자동 처리 + MD팀 수동 처리 통합, 예외 케이스 Admin 뷰 제공
  - **성과 검증 환경 구축:** GA/BigQuery 연동으로 정량 분석 환경 구축
- **Impact:** 가격 경쟁력 확보로 네이버 쇼핑 노출 우위 달성, MD팀 고효율 구조 정착
- **Tech Decision:** Spring Batch로 트랜잭션 안정성 확보, 매출 기여도 상위 상품에 API Quota 집중
- **사용 기술:** Spring Batch, Naver Shopping API, BigQuery, Google Analytics

#### 상품 이미지 정합성 확보 및 클레임 방지 시스템
- **핵심 성과:** 이미지 불일치 클레임 **Zero 달성**, 반품 비용 절감, **Zero Ops 달성**
- **주요 역할:**
  - **문제 원인 분석:** CS팀과 협업하여 클레임 패턴 분석, 해시 기반 검증 방안 제안
  - **해시 기반 검증 시스템 구축:** HTTP Header(ETag, Last-Modified) 및 MD5 해시값 비교로 이미지 변경 정밀 감지
  - **운영 자동화:** 24시간 무인 이미지 동기화 운영 체계 구축
- **Impact:** 고객 신뢰도 회복으로 구매 전환율 안정화, CS팀 클레임 업무 부담 제거
- **Tech Decision:** MD5 해시 + ETag 이중 검증, Header 우선 비교로 네트워크 비용 80% 절감
- **사용 기술:** Java, Spring Boot, AWS S3, Image Hashing (MD5/ETag)

#### ChatOps 기반 운영 프로세스 자동화 (Zero Ops)
- **핵심 성과:** 운영팀 수동 업무 **40%→0%** (Zero Ops), 소통 채널 **100% 통합**, 업무 투명성 확보
- **주요 역할:**
  - **현업 인터뷰 직접 리딩:** 운영팀·유관 부서 인터뷰 주도, 병목(컨텍스트 스위칭) 발굴
  - **사용자 중심 플랫폼 선정:** 구성원이 익숙한 Slack 선택으로 채택률 극대화
  - **ChatOps 시스템 구축:** Slack Event API 기반 버튼/모달로 발주 승인/반려 구현, 버튼 클릭 한 번으로 DB 처리 완료
- **Impact:** 운영팀 고부가가치 업무 집중, 휴먼 에러 방지로 클레임 감소
- **Tech Decision:** Slack 선택(채택률 극대화), Event API + Interactive Component로 컨텍스트 스위칭 제거
- **사용 기술:** Java, Spring Boot, Slack Event API

#### 개발 문화 개선 및 시스템 안정성 강화
- **핵심 성과:** TDD 도입으로 코드 품질 개선, Slow Query 최적화, 서버 안정성 확보, 운영 업무 **90% 단축**
- **주요 역할:**
  - **코드 리뷰 문화 정착:** PR 기반 리뷰 프로세스 도입, 배포 전 최소 2인 승인 체계 확립
  - **TDD 기반 개발 도입:** 신규 기능 개발 시 TDD 적용, 핵심 비즈니스 로직 단위 테스트 커버리지 확보
  - **서버 리소스 모니터링 구축:** 디스크/메모리 사용량 체크 스크립트 → 임계치 초과 시 Slack 알림 자동 발송
  - **Elastic APM 기반 Slow Query 분석:** 2초 이상 Slow Query 추출 및 시각화, 인덱스 누락·불필요한 JOIN 식별 후 최적화
  - **AI 에이전트 활용 자동화:** Claude Code로 운영성 스크립트 AI 페어프로그래밍 (1~2일 → 1~2시간)
- **Impact:** 리소스 모니터링으로 장애 사전 감지, Slow Query 최적화로 UX 향상, TDD/코드 리뷰로 유지보수 비용 절감
- **Tech Decision:** Elastic APM 활용(추가 비용 없이 Slow Query 시각화), Slack 알림(즉시 이슈 인지)
- **사용 기술:** Java, Spring Boot, Elastic APM, TDD (JUnit, Mockito), Slack API, Shell Script

---

### (주)인터파크
**Backend Developer**
*2021.09 - 2022.01 (5개월)*

#### Seller 어드민 성능 개선 및 레거시 리팩토링
- **핵심 성과:** 정산/주문 조회 응답 시간 **5초 → 1초 미만** (80% 단축)
- **주요 역할:**
  - Slow Query 실행 계획 분석을 통한 인덱스 튜닝 및 불필요한 JOIN 제거
  - 복잡한 비즈니스 로직을 Service Layer로 분리하여 가독성 및 유지보수성 향상
- **사용 기술:** Java, Spring Framework, Oracle

---

### (주)한국문헌정보기술
**Backend Developer**
*2018.06 - 2021.08 (3년 2개월)*

#### 자체 검색 엔진 구축 및 대용량 처리 최적화
- **핵심 성과:** 데이터 등록 속도 **70% 단축**, 라이선스 비용 절감, **2021년 사내 우수사원** 선정
- **주요 역할:**
  - Elasticsearch 기반 자체 검색 엔진 개발 및 Nori 한글 형태소 분석기 적용
  - 단건 Insert → Bulk Insert 전환으로 DB 트랜잭션 횟수 최소화
- **Impact:** 외부 라이선스 의존성 제거로 비용 절감, 한글 검색 정확도 향상
- **사용 기술:** Java, Spring Framework, Elasticsearch, Nori Analyzer, Oracle

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
