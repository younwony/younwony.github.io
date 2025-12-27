# 윤원희 - 이력서( Resume)

**Backend Developer | 7 Years Experience**

- Email: wony9324@naver.com
- Phone: 010-3555-2320
- GitHub: https://github.com/younwony

---

## Professional Summary

**기술과 소통으로 비즈니스 문제를 해결하는 백엔드 개발자**

Java/Spring 기반 7년차 백엔드 개발자로서 커머스 도메인(상품/주문/가격)의 복잡한 비즈니스 로직을 전문적으로 다뤄왔습니다. 기술적 해결책뿐 아니라 비즈니스/운영 조직과의 적극적인 소통을 통해 서비스의 본질적인 문제를 발굴하고 해결합니다.

200만 건 규모의 대용량 데이터 파이프라인 설계부터 ChatOps 기반 운영 자동화까지, 시스템 전 영역에서 성능 최적화와 운영 효율화를 동시에 달성해왔습니다. 최근에는 AI 에이전트(Claude Code)와 MCP를 활용하여 개발 생산성을 혁신하고 있습니다.

**핵심 성과:**
- **Zero Ops 달성:** ChatOps 구축으로 운영 반복 업무 40% → 0% 완전 자동화
- **대용량 처리:** 200만 건 데이터 파이프라인 구축, 검색 성능 100배 개선 (10초 → 0.1초)
- **비즈니스 임팩트:** Dynamic Pricing 시스템으로 매출 10% 상승 견인
- **AI 활용 생산성 혁신:** Claude Code + MCP 도입으로 개발/문서화 업무 90% 자동화

---

## Core Competencies

| 역량 | 설명 |
|------|------|
| **Commerce Domain** | 커머스 핵심 도메인(상품·가격·주문) 비즈니스 로직 설계 및 운영 |
| **Data Pipeline** | 200만 건 이상 이기종 데이터 수집·정제·적재(ETL) 파이프라인 구축 |
| **Architecture & Performance** | 대용량 처리 아키텍처 설계, 성능 최적화, 서버 안정성 확보 |
| **Zero Ops & Automation** | ChatOps, 리포팅 자동화 등 운영 프로세스 100% 자동화 |
| **Cross-functional Leadership** | 요구사항 분석부터 유관 부서 협업까지 프로젝트 전 과정 리딩 |
| **AI-Assisted Development** | Claude Code 활용으로 개발 생산성 90% 향상 |

---

## Technical Skills

### Languages & Frameworks
- **Java**, Spring Boot, Spring Batch, JPA/Hibernate

### Database & Cache
- **MySQL**, **Elasticsearch**, **Redis** (Distributed Lock), Oracle

### Infra & DevOps
- AWS (EC2, S3, RDS), **Elastic APM**, Jenkins

### Data & Analytics
- BigQuery, GA4

### Tools & Integration
- Slack API (ChatOps), Google Sheets API, Naver Shopping API

---

## Work Experience

### (주)구하다
**Backend Developer (Senior)** | 2022.02 - 현재 (3년 9개월)

---

#### 인플루언서 데이터 플랫폼 고도화

> 200만 인플루언서 데이터 자동 수집으로 마케팅 커버리지 20배 확대, 검색 100배 개선, 데이터 정합성 99% 확보

- **문제**: 수작업 수집으로 일 수십 명 한계, RDB 검색 10초+ 타임아웃, CDN 링크 만료로 이미지 유실
- **해결**: PM과 마케팅팀 정기 미팅으로 Pain Point 파악, Elasticsearch + 멀티소스(TikTok/Ensemble API) 파이프라인 설계
- **성과**: 데이터 풀 10만→200만(20배↑), 검색 10초→0.1초(100배↑), 리포팅 **Zero Ops**, 이미지 정합성 99%
- **기술**: Spring Boot, Elasticsearch, Redis Lock, Google Sheets API

---

#### 네이버 쇼핑 Dynamic Pricing 시스템

> API 제약 내 최저가 방어 알고리즘 구현으로 대상 상품군 매출 10% 상승

- **문제**: API 25,000건/일 한도로 5만+ 상품 실시간 대응 불가, 마진율 관리 어려움
- **해결**: 매출 기여도 상위 20% 상품 집중 + 마진 4% 보장 룰 엔진 설계
- **성과**: 대상 상품 매출/트래픽 각 **10% 상승**, MD팀 가격 조정 업무 **80% 감소**
- **기술**: Spring Batch, Naver Shopping API, BigQuery, GA4

---

#### 상품 이미지 정합성 확보 시스템

> URL 동일 이미지 변경 감지 시스템 구축으로 클레임 Zero 달성

- **문제**: 해외 부티크 이미지 변경 시 URL 유지 → 기존 시스템 감지 불가, 월 20건+ 클레임
- **해결**: SHA256 해시 검증, 첫 0~5KB 영역 확인으로 변경 여부 빠르게 판단
- **성과**: 이미지 불일치 클레임 **Zero**, 반품 비용 절감, 검수 **Zero Ops**
- **기술**: Spring Boot, AWS S3, Image Hashing (SHA256)

---

#### ChatOps 기반 운영 프로세스 자동화

> 현업 인터뷰 통한 Pain Point 발굴 및 운영 요청 채널 Slack 통합으로 수동 업무 40% → 0% 완전 자동화

- **문제**: 발주/클레임 요청이 이메일/메신저/구두로 분산, 운영팀 40% 시간 단순 반복 업무
- **해결**: 운영팀·유관 부서 인터뷰로 병목 발굴, Slack ChatOps 구축, 버튼 클릭만으로 DB 처리 완료
- **성과**: 운영팀 수동 업무 **Zero Ops**, 요청 채널 **100% 통합**, 히스토리 추적 가능
- **기술**: Spring Boot, Slack Event API, Interactive Components

---

#### 기타 성과

- **TDD/코드 리뷰 문화 정착**: PR 기반 2인 승인 체계 도입, 배포 후 핫픽스 감소
- **Elastic APM 모니터링**: Slow Query(2초+) 추출/최적화, 서버 임계치 Slack 알림
- **Claude Code + MCP 활용**: 운영 도구 개발 90% 단축, Atlassian MCP로 API 문서 자동화

---

### (주)인터파크
**Backend Developer** | 2021.09 - 2022.01 (5개월)

#### Seller 어드민 TDD 도입 및 성능 개선

> 레거시 시스템에 TDD 도입으로 변경 안정성 확보, 쿼리 최적화로 응답 시간 80% 단축

- **문제**: 테스트 코드 전무, 기능 변경 시 사이드 이펙트 파악 불가, 수동 테스트 의존
- **해결**: TDD 방식 적용, 핵심 비즈니스 로직 단위 테스트 작성, 실행 계획 분석 통한 인덱스 튜닝
- **성과**: 테스트 커버리지 확보로 배포 리스크 감소, 조회 성능 5초→1초 (80% 단축)
- **기술**: Java, Spring Framework, Oracle, JUnit, Mockito

---

### (주)한국문헌정보기술
**Backend Developer** | 2018.06 - 2021.08 (3년 2개월)

#### 자체 검색 엔진 구축 및 대용량 처리 최적화

> Elasticsearch 기반 검색 엔진 구축으로 라이선스 비용 수천만원 절감, 데이터 등록 70% 단축

- **문제**: 상용 솔루션 라이선스 비용 수천만원, 단건 Insert로 초기 데이터 구축 10시간+ 소요
- **해결**: ES + Nori + Apache Tika(PDF/DOCX 색인), Bulk Insert + 이미지 썸네일 병렬/비동기 처리
- **성과**: 라이선스 비용 **수천만원 절감**, 등록 10시간→3시간 (70% 단축), **2021년 우수사원** 선정
- **기술**: Java, Spring Framework, Elasticsearch, Nori Analyzer, Apache Tika, Oracle

---

## Education

**대전대학교** | 컴퓨터공학 학사 (2011.02 - 2018.02)

---

## Certifications

**정보처리기사** | 한국산업인력공단 | 2017.05

---

## Awards

**2021년 사내 우수사원** | (주)한국문헌정보기술 | 대용량 처리 최적화 및 검색 엔진 구축 성과
