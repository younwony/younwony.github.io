# 윤원희 - 이력서( Resume)

**Backend Developer | 7 Years Experience**

- Email: wony9324@naver.com
- Phone: 010-3555-2320
- GitHub: https://github.com/younwony

---

## Professional Summary

**비즈니스 문제를 대용량 시스템과 자동화로 해결하는 백엔드 개발자**

Java/Spring 기반 7년차 백엔드 개발자입니다. 이커머스 플랫폼의 상품·가격·주문·검색 영역을 폭넓게 경험하며, 단순 기능 구현보다 **"왜 이 구조여야 하는가"**를 먼저 고민합니다. 현재는 인플루언서 마케팅 솔루션 'Seeding' 프로젝트를 리딩하며, 200만 인플루언서 데이터 플랫폼을 구축하여 새로운 비즈니스 성장에 기여하고 있습니다. 성능·확장성·운영 리스크를 함께 고려한 설계를 지향하며, 기술적 제약을 비즈니스 관점에서 재정의하여 실질적인 성과로 연결해왔습니다.

**핵심 성과:**
- **검색 성능 10배 개선**: RDB 복합 조건 검색 타임아웃 문제 → 역색인 기반 Elasticsearch 도입으로 10초+ → 1초 이내 달성 (200만 건)
- **Zero Ops 달성**: 운영팀 인터뷰로 발굴한 컨텍스트 스위칭 병목 → Slack ChatOps 구축으로 반복 업무 40% → 0% 자동화
- **매출 10% 상승**: MD팀 협업 기반 전략 상품 타겟팅 및 최저가 분석 체계 구축 → Dynamic Pricing으로 가격 경쟁력 확보
- **개발 생산성 90% 향상**: AI 에이전트(Claude Code) + MCP 활용으로 운영 도구 개발 및 API 문서화 자동화

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
| **AI-Assisted Development** | Claude Code + MCP 활용으로 운영 업무 자동화 및 개발 생산성 향상 |

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
**Backend Developer (Senior)** | 2022.02 - 현재 (3년 11개월)

---

#### 인플루언서 데이터 플랫폼 고도화

> 200만 인플루언서 데이터 자동 수집으로 마케팅 커버리지 20배 확대, 검색 10배 개선, 데이터 정합성 99% 확보

- **문제**: 수작업 수집으로 일 수십 명 한계, RDB 검색 10초+ 타임아웃, CDN 링크 만료로 이미지 유실
- **해결**: PM과 마케팅팀 정기 미팅으로 Pain Point 파악, Elasticsearch + 멀티소스(TikTok/Ensemble API) 파이프라인 설계
- **성과**: 데이터 풀 10만→200만(20배↑), 검색 10초+→1초 이내(10배↑), 리포팅 **Zero Ops**, 이미지 정합성 99%
- **기술**: Spring Boot, Elasticsearch, Redis Lock, Google Sheets API

---

#### 네이버 쇼핑 Dynamic Pricing 시스템

> MD팀 협업 기반 전략 상품 타겟팅 및 최저가 분석 체계 구축으로 대상 상품군 매출 10% 상승

- **문제**: 기존 자동화 시스템은 일괄 처리만 가능, MD팀 선별 전략 상품 정밀 대응 불가, 최저가 미싱 데이터 대응 체계 부재
- **해결**: 카테고리/브랜드 타겟팅 기반 최저가 자동 조정 프로세스 구축, MD팀 선별 상품 집중 모니터링 체계, 최저가 미싱 분석 → 마진율 계산 → 가격 조정 핑퐁 협업 체계 확립
- **성과**: 대상 상품 매출/트래픽 각 **10% 상승**, 자동화 + MD팀 전략적 개입 **하이브리드 구조 정착**
- **기술**: Spring Batch, Naver Shopping API

---

#### 메인 페이지 큐레이션 시스템 구축

> 정적 메인 화면 → 동적 큐레이션 시스템 구축으로 MD팀 자율 운영 달성, 63가지+ UI 레이아웃 제공

- **문제**: 메인 페이지 하드코딩으로 기획전 의존, MD팀 상품 변경 시 개발자 개입 필수
- **해결**: Enum 기반 타입 시스템(14개 위치 × 9개 아이템 × 7개 뷰 타입) 설계, Strategy 패턴으로 확장성 확보
- **성과**: MD팀 **실시간 자율 운영**, **63가지+ 레이아웃** 조합, 신규 타입 Enum 추가만으로 확장
- **기술**: Spring Boot, MySQL, Spring Cache (In-Memory)

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

#### 개발 문화 개선 및 시스템 안정성 강화

- **검색 API TPS 1500% 향상**: Elasticsearch Hit Index Count 최적화로 TPS 200→3,000 달성
- **Review API Latency 90% 개선**: Slow Query 분석 및 인덱스 최적화로 4,000ms→80ms
- **TDD/코드 리뷰 문화 정착**: PR 기반 2인 승인 체계 도입, 배포 후 핫픽스 감소
- **Elastic APM 모니터링**: Slow Query(2초+) 추출/최적화, 서버 임계치 Slack 알림
- **Claude Code + MCP 활용**: 운영 도구 개발 90% 단축, Atlassian MCP로 API 문서 자동화

---

### (주)인터파크
**Backend Developer** | 2021.09 - 2022.01 (5개월)

#### 레거시 시스템 TDD 도입 및 테스트 문화 정착

> 테스트 코드 전무한 레거시 환경에 TDD 도입, 핵심 비즈니스 로직 테스트 체계 구축으로 배포 안정성 확보

- **문제**: 테스트 코드 전무로 기능 변경 시 사이드 이펙트 파악 불가, 수동 테스트 의존으로 배포 리스크 증가
- **해결**: 신규 기능 개발부터 TDD 방식 적용, 판매자 정산/주문 조회 등 핵심 기능 단위 테스트 작성, 테스트 가능한 구조로 리팩토링
- **성과**: 핵심 비즈니스 로직 테스트 커버리지 확보, 배포 리스크 감소, 테스트 기반 개발 문화 정착
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
