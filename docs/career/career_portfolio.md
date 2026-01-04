# 윤원희 - 경력기술서

**Backend Developer | 8년차**

---

## 인적 사항

- **이름:** 윤원희
- **이메일:** wony9324@naver.com
- **연락처:** 010-3555-2320
- **GitHub:** https://github.com/younwony

---

## Professional Summary

**기술로 조직의 일하는 방식을 바꾸는 백엔드 개발자**

Java/Spring 기반 8년차 백엔드 개발자입니다. 이커머스 플랫폼의 상품·가격·주문·검색 영역을 폭넓게 경험하며, 단순 기능 구현보다 **"왜 이 구조여야 하는가"**를 먼저 고민합니다. 현재는 인플루언서 마케팅 솔루션 'Seeding' 프로젝트를 리딩하며, 200만 인플루언서 데이터 플랫폼을 구축하여 새로운 비즈니스 성장에 기여하고 있습니다. 성능·확장성·운영 리스크를 함께 고려한 설계를 지향하며, 기술적 제약을 비즈니스 관점에서 재정의하여 실질적인 성과로 연결해왔습니다.

**개인의 성과를 넘어 조직 전체의 생산성을 높이는 패턴을 만들고 확산시킵니다.** ChatOps, Zero Ops 자동화를 통해 운영팀·마케팅팀의 반복 업무를 제거하고, TDD·코드 리뷰 문화를 정착시켜 팀 전체의 코드 품질을 향상시켰습니다.

### 핵심 성과

| 성과 | 문제 → 해결 → 결과 |
|------|-------------------|
| **검색 성능 10배** | RDB 복합 조건 검색 타임아웃 → Elasticsearch 역색인 도입 → 10초+ → 1초 이내 |
| **Zero Ops** | 운영팀 컨텍스트 스위칭 병목 → Slack ChatOps 구축 → 반복 업무 40% → 0% |
| **매출 10% 상승** | MD팀 전략 상품 대응 불가 → Dynamic Pricing 하이브리드 구조 → 매출/트래픽 각 10%↑ |
| **생산성 90% 향상** | 반복 운영 도구 개발 → Claude Code + MCP 활용 → 1-2일 → 1-2시간 |

---

## Core Competencies

| 역량 | 설명 |
|------|------|
| **Commerce Domain** | 커머스 핵심 도메인(상품·가격·주문) 비즈니스 로직 설계 및 운영 |
| **Data Pipeline** | 200만 건 이상 이기종 데이터 수집·정제·적재(ETL) 파이프라인 구축 |
| **Architecture & Performance** | 대용량 처리를 위한 병렬 아키텍처 설계 및 성능 최적화 |
| **Zero Ops & Automation** | ChatOps, 리포팅 자동화 등 운영 프로세스 100% 자동화 |
| **Cross-functional Leadership** | 요구사항 분석부터 유관 부서 협업까지 프로젝트 전 과정 리딩 |
| **AI-Assisted Development** | Claude Code + MCP 활용으로 운영 업무 자동화 및 개발 생산성 향상 |

---

## Technical Skills

| 분류 | 기술 |
|------|------|
| **Backend** | Java, Spring Boot, JPA/Hibernate |
| **Database & Cache** | MySQL, Elasticsearch, Redis (Distributed Lock) |
| **Infra & DevOps** | AWS (EC2, S3, RDS), Elastic APM, Jenkins |
| **AI & Automation** | Claude Code, MCP (Atlassian), Slack API (ChatOps) |

---

## Work Experience

### (주)구하다 | Backend Developer (Senior)
**2022.02 - 현재 (3년 11개월)** | 명품 커머스 + 인플루언서 마케팅 솔루션

---

# Tier 1: 서사형 프로젝트

---

## 1. 인플루언서 데이터 플랫폼 고도화 (2022.02 - 현재)

> 200만 인플루언서 데이터 자동 수집, 검색 성능 10배 개선, 리포팅 Zero Ops 달성

**역할**: 백엔드 아키텍처 설계 주도 (1인 개발) | PM·마케팅팀 협업

**Tech Stack**: Spring Boot, Elasticsearch, Redis Lock, Google Sheets API

---

### Situation (배경/제약)

- **수작업 의존**: 마케팅팀이 틱톡/인스타그램을 직접 탐색 후 엑셀에 수기 입력. 일 수집량 수십 명 수준으로 대형 캠페인 진행 불가
- **검색 성능 한계**: 초기 수십만 건은 RDB로 충분했으나, 200만 건 확대 및 복합 필터 추가로 응답 지연 심화 (10초+ 타임아웃)
- **데이터 파편화**: 플랫폼별 팔로워/좋아요/이메일 등 지표 분산, 통합 비교 기준 부재
- **이미지 유실**: CDN 링크 만료로 프로필 이미지 유실 다수 발생

### Task (과제/목표)

- 수집 프로세스 100% 자동화 (일 5,000명+ 목표)
- 200만 건 복합 조건 검색 1초 이내 달성
- 이미지 데이터 정합성 99% 이상 확보
- 리포팅 업무 완전 자동화

### Action (기술적 의사결정)

**1. Elasticsearch 도입**
- **선택**: 역색인 기반 검색 엔진 구축
- **Why**: 동적 필터 100가지 조합 대응. 구하다 커머스에서 이미 ES 운영 중이어서 학습 곡선 최소화
- **Why Not RDB Index**: 복합 인덱스 추가 시도 → 4초로 개선되었으나 부족. 동적 필터 조합이 다양해 인덱스 효율 저하
- **Trade-off**: 실시간 동기화 지연 1분 이내로 감수. Near Real-time Sync 파이프라인 구축

**2. 멀티소스 API 파이프라인 (Instagram/YouTube/TikTok 등 다중 플랫폼 통합)**
- **선택**: TikTok API + Ensemble API + EchoTik API + Web Scraper 조합
- **Why**: Instagram/YouTube/TikTok 등 다양한 플랫폼 데이터 통합 수집. TikTok API로 팔로워/좋아요 메인 데이터, Ensemble/EchoTik으로 이메일·US 거주지 세부 데이터 수집
- **Why Not 단일 소스**: 각 API/플랫폼의 데이터 커버리지 상이. 멀티소스 조합으로 데이터 풍부성 확보

**3. Redis Distributed Lock**
- **선택**: 분산락 기반 중복 수집 방지
- **Why**: 멀티 인스턴스 환경에서 동일 인플루언서 중복 수집 방지. API Rate Limit 준수 필요
- **Trade-off**: Lock 오버헤드 존재. TTL 60초로 데드락 방지

### Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Data Sources                         │
├─────────────┬─────────────┬─────────────┬──────────────┤
│   TikTok    │  Ensemble   │   EchoTik   │ Web Scraper  │
│    API      │    API      │    API      │  (Selenium)  │
└──────┬──────┴──────┬──────┴──────┬──────┴───────┬──────┘
       └─────────────┴─────────────┴──────────────┘
                           │
                           ▼
             ┌───────────────────────┐
             │    Collector Service   │
             │    (Spring Boot)       │
             └───────────┬───────────┘
                         │
      ┌──────────────────┼──────────────────┐
      ▼                  ▼                  ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    MySQL    │───▶│Elasticsearch│    │    Redis    │
│  (Master)   │    │  (Search)   │    │   (Lock)    │
└─────────────┘    └─────────────┘    └─────────────┘
```

### Troubleshooting

**문제**: 200만 건 검색 시 10초 이상 타임아웃

**발견**:
- 마케팅팀 피드백: "필터 적용하면 로딩이 안 끝나요"
- Slow Query Log: `WHERE followers > 10000 AND country = 'US' AND ...` 12초

**분석**:
1. EXPLAIN 결과: type=ALL (Full Table Scan)
2. 복합 인덱스 추가 시도 → 4초로 개선되었으나 부족
3. 원인: 동적 필터 조합이 100가지 이상 → 인덱스 효율 저하

**시도한 방법들**:
- [실패] Covering Index → 5초로 개선되었으나 여전히 느림
- [실패] Query Caching → 조건 조합이 많아 Hit율 5% 미만
- [성공] Elasticsearch 도입 → 역색인 기반 1초 이내 달성

**최종 해결**:
- Elasticsearch 클러스터 구성
- 실시간 동기화 파이프라인 구축 (MySQL → ES)
- 검색 API 전환 및 Fallback 로직 구현

**Lesson Learned**:
> "초기 설계 시 데이터 규모 예측 부족 → 이후 프로젝트에서 Scale-out 전제 설계 원칙 수립"

### Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| API Rate Limit (일 25,000건) | Token Bucket + Exponential Backoff |
| 멀티 인스턴스 중복 수집 | Redis Distributed Lock (TTL 60초) |
| 이미지 CDN 링크 만료 | S3 직접 업로드 + 해시 기반 변경 감지 |
| ES 동기화 지연 | Near Real-time Sync 파이프라인 (< 1분) |

### Implementation Details

**Redis Distributed Lock**:
```java
// 문제: 멀티 인스턴스 환경에서 동일 인플루언서 중복 수집
// 해결: TTL 기반 분산락으로 데드락 방지 + 멱등성 확보
String lockKey = "collector:" + platform + ":" + targetId;
long ttl = 60_000L; // 평균 작업시간 25초의 2.5배

RLock lock = redisson.getLock(lockKey);
boolean acquired = lock.tryLock(0, ttl, TimeUnit.MILLISECONDS);
```

**설계 근거**:
- Lock 단위: 인플루언서 ID → 최대 병렬성 확보
- TTL 60초: 작업 실패 시 자동 해제로 데드락 방지
- 재시도 없음: 다음 배치에서 처리 (멱등성)

### Result (Before/After)

| 지표 | Before | After | 개선율 |
|------|--------|-------|--------|
| 검색 응답 시간 | 10초+ | 1초 이내 | 90%↓ |
| 데이터 풀 | 10만 명 | 200만 명 | 20배↑ |
| 일 수집량 | 수십 명 (수작업) | 5,000명+ (자동) | 100배↑ |
| 리포팅 업무 | 반나절/주 | 0 (Zero Ops) | 100%↓ |

### Impact (비즈니스/조직 효과)

- 대형 캠페인 진행 가능한 마케팅 커버리지 확보
- 마케팅팀 리포팅 업무 제거로 고부가가치 업무 집중 가능
- 정기 소통 체계 구축으로 요구사항 반영 속도 향상

---

## 2. ChatOps 기반 운영 프로세스 자동화 (2024.01 - 2024.03)

> 현업 인터뷰 통한 Pain Point 발굴, Slack 기반 운영 요청 통합으로 수동 업무 Zero Ops 달성

**역할**: 현업 인터뷰 직접 리딩 및 ChatOps 설계 | 운영팀·마케팅팀·CS팀 협업

**Tech Stack**: Spring Boot, Slack Event API, Interactive Components

---

### Situation (배경/제약)

- **채널 파편화**: 발주/클레임 처리가 이메일, 메신저, 구두 요청 등 5개 채널로 분산
- **정보 누락**: 히스토리 추적 불가, 요청 처리 여부 확인 어려움
- **운영 비효율**: 운영팀 업무 시간 40%가 반복적 수동 처리에 소모
- **현업 불만**: "어디로 요청해야 할지 모르겠다", "처리 결과를 즉시 알고 싶다" 등

### Task (과제/목표)

- 다중 채널 Slack 단일화로 현업 혼란 해소
- 별도 어드민 접속 없이 메신저 내 업무 완결 환경 구축
- 업무 처리 과정 투명화

### Action (기술적 의사결정)

**1. Slack 플랫폼 선택**
- **Why**: 구성원이 가장 익숙한 플랫폼. 별도 앱 설치 없이 즉시 도입 가능하여 채택률 극대화
- **Why Not 자체 어드민**: 신규 시스템 학습 비용. 기존 업무 플로우와 단절
- **Why Not 이메일 자동화**: 양방향 상호작용 한계. 실시간 처리 불가

**2. Interactive Component 활용**
- **Why**: 단순 알림이 아닌 양방향 상호작용 필요. 버튼 클릭 → API 호출 → DB 처리 → 결과 표시 파이프라인 구현
- **Trade-off**: Slack API 의존성. 장애 시 대안 필요 → 기존 어드민 Fallback 유지

**3. 스레드 기반 워크플로우**
- **Why**: 관련 논의 집중, 컨텍스트 유지. 처리 완료 후 스레드에 결과 기록

### Result (Before/After)

| 지표 | Before | After | 개선율 |
|------|--------|-------|--------|
| 수동 업무 비율 | 40% | 0% (Zero Ops) | 100%↓ |
| 요청 채널 | 5개 분산 | Slack 단일 | 100% 통합 |
| 히스토리 추적 | 불가능 | 스레드 기록 | 100% 가능 |

### Impact (비즈니스/조직 효과)

- 운영팀 고부가가치 업무 집중 가능
- 휴먼 에러 방지로 클레임 감소
- ChatOps 패턴 마케팅팀·CS팀으로 확산 적용
- 현업 만족도 향상: "요청 창구 명확", "처리 결과 즉시 확인"

**Lesson Learned**:
> "도구 도입 전 현업 인터뷰로 실제 Pain Point 발굴 필수 → 기술이 아닌 문제 중심 접근"

---

## 3. 자체 검색 엔진 구축 및 대용량 처리 최적화 (2018.06 - 2021.08)

> Elasticsearch 기반 검색 엔진 구축으로 라이선스 100% 절감, 처리 속도 70% 단축

**회사**: (주)한국문헌정보기술 | Backend Developer

**역할**: 검색 엔진 아키텍처 설계 주도 | 솔루션 개발팀

**Tech Stack**: Java, Spring, Elasticsearch, Nori, Apache Tika

---

### Situation (배경/제약)

- **라이선스 비용**: 상용 검색엔진 연간 라이선스 수천만원 → 프로젝트 수익성 저하
- **처리 속도**: 대량 이미지 등록 시 단건 Insert로 10시간+ 소요
- **한글 검색**: 형태소 분석 미지원으로 검색 정확도 저조

### Task (과제/목표)

- 비용 절감을 위한 자체 검색 엔진 구축
- 한글 검색 정확도 확보
- 대량 데이터 등록 속도 70% 이상 단축

### Action (기술적 의사결정)

**1. Elasticsearch + Nori 선택**
- **Why**: 오픈소스로 라이선스 비용 제거. Nori는 한글 형태소 분석 네이티브 지원
- **Why Not 상용 솔루션**: 프로젝트당 수천만원 비용. 커스터마이징 제한
- **Trade-off**: 운영 복잡도 증가. 자체 운영 역량 필요

**2. Bulk Insert + 병렬 처리**
- **Why**: 단건 Insert는 네트워크 오버헤드 과다. 썸네일 생성은 I/O 바운드이므로 병렬화로 처리량 극대화
- **구현**: 최대 해상도(2000px) 생성 후 나머지(1000px~300px)를 병렬 처리

### Result (Before/After)

| 지표 | Before | After | 개선율 |
|------|--------|-------|--------|
| 라이선스 비용 | 수천만원/년 | 0원 | 100%↓ |
| 데이터 등록 | 10시간+ | 3시간 | 70%↓ |
| 한글 검색 | 형태소 분석 없음 | Nori 적용 | 정확도↑ |

### Impact (비즈니스/조직 효과)

- 프로젝트 수익성 향상
- 공공기관 사용자 만족도 개선
- **2021년 사내 우수사원 선정**

**Lesson Learned**:
> "오픈소스 활용 시 운영 역량 확보 필수 → 도입 전 PoC 및 운영 가이드 문서화"

---

# Tier 2: 요약형 프로젝트

---

## 네이버 쇼핑 Dynamic Pricing (2023.01 - 현재)

> 자동화 + MD팀 협업으로 네이버 최저가 달성, 매출 10% 상승

- **자동 프로세스**: 전체 상품 동적 가격 모니터링 및 자동 조정
- **MD팀 협업 (핑퐁)**: 타겟팅 상품 데이터 제공 → 마진율 기반 판매가 조정 → 할인 적용 → 최저가 달성
- 자동화와 수동(MD팀 전략)의 하이브리드 구조 정착
- **성과**: 대상 상품 매출/트래픽 각 10% 상승

**Tech Stack**: Spring Boot, Naver Shopping API

---

## 메인 페이지 큐레이션 시스템 (2023.01 - 2023.02)

> MD팀 실시간 자율 운영 달성, Enum 기반 확장 설계

- 개발자 개입 없이 메인 페이지 상품 구성 변경 가능한 시스템 구축
- Enum 기반 타입 시스템으로 전시 위치/아이템/뷰 타입 정의
- 인메모리 캐시(3분 TTL) 적용으로 외부 의존성 제거
- **성과**: 10+ 전시 위치 통합 관리, MD팀 자율 운영

**Tech Stack**: Spring Boot, Spring Cache, MySQL

---

## 상품 이미지 정합성 확보 시스템 (2023.07 - 2023.09)

> SHA256 해시 검증으로 이미지 불일치 클레임 Zero 달성

- URL 동일해도 이미지 내용 변경 감지하는 해시 기반 검증 시스템 구축
- 이미지 파일 0~5KB 영역만 확인하여 변경 여부 빠르게 판단
- 24시간 자동 동기화 운영 체계 구축
- **성과**: 월 20건+ 클레임 → 0건 (Zero)

**Tech Stack**: Spring Boot, AWS S3, SHA256

---

## AI 기반 개발 생산성 혁신 (2024.03 - 현재)

> Claude Code + MCP 활용으로 개발/문서화 시간 90% 단축

- 반복적 CRUD 운영 도구, 배치 스크립트 개발 자동화
- Atlassian MCP로 JIRA 작업 완료 시 Confluence 문서 자동 생성
- 표준 API 문서 템플릿 정의로 클라이언트 협업 효율화
- **성과**: 운영 도구 개발 1-2일 → 1-2시간, 문서화 80% 자동화

**Tech Stack**: Claude Code, MCP (Atlassian), Confluence

---

## 품절률 감소 및 데이터 분석 (2024.01 - 2024.06)

> 재구매 이탈 분석 → 품절 취소율 40%→20% 절반 감소

- **문제 발견**: GA4+BigQuery 분석으로 품절 경험 유저의 재구매 전환 거의 없음 확인
- **원인 분석**: DB 기반 품절 사유 분석 → 지연 셀러(2주+)가 핵심 원인
- **해결**: 지연 셀러 패널티 정책 수립 (누적 시 계약 해지) + 품절 고객 포인트 보상
- **성과**: 품절 취소율 40%→20% (50% 감소), 재구매 전환율 개선

**Tech Stack**: BigQuery, Google Analytics (GA4), MySQL

---

## 개발 문화 및 시스템 안정성 강화 (2022.02 - 현재)

> TDD/코드 리뷰 문화 정착, 검색 API TPS 1500% 향상

- PR 기반 코드 리뷰 프로세스 도입 (2인 승인 의무화)
- TDD 기반 개발, 핵심 비즈니스 로직 테스트 커버리지 확보
- Elastic APM 기반 Slow Query 분석 체계 구축
- 서버 리소스 모니터링 → Slack 알림 자동화
- **성과**: 검색 API TPS 200→3,000 (1500%↑), Review API 4s→80ms (90%↓)

**Tech Stack**: Elasticsearch, Elastic APM, JUnit, Mockito

---

### (주)인터파크 | Backend Developer
**2021.09 - 2022.01 (5개월)** | 종합 쇼핑몰

## 레거시 시스템 TDD 도입 (Tier 2)

> 테스트 코드 전무한 레거시에 TDD 문화 정착

- 신규 기능 개발부터 TDD 방식 적용
- 핵심 비즈니스 로직(판매자 정산/주문 조회) 단위 테스트 작성
- 테스트 가능한 구조로 Service Layer 분리 리팩토링
- **성과**: 테스트 기반 개발 문화 정착, 배포 리스크 감소

**Tech Stack**: Java, Spring, Oracle, JUnit, Mockito

---

## Education & Certification

| 구분 | 내용 |
|------|------|
| **학력** | 대전대학교 컴퓨터공학 학사 (2011 - 2018) |
| **자격증** | 정보처리기사 (2017.05) |
| **수상** | 2021년 사내 우수사원 - (주)한국문헌정보기술 |
