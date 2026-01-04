# 윤원희 - 이력서

**Backend Developer | 8년차**

- Email: wony9324@naver.com
- Phone: 010-3555-2320
- GitHub: https://github.com/younwony

---

## Professional Summary

**비즈니스 문제를 기술로 해결하는 백엔드 개발자**

Java/Spring 기반 8년차 백엔드 개발자입니다. 커머스 플랫폼의 상품·가격·주문·검색 영역에서 **성능·확장성·운영 효율**을 동시에 고려한 설계를 지향합니다. 현재는 200만 인플루언서 데이터 플랫폼을 구축하며 새로운 비즈니스 성장에 기여하고 있습니다.

### 핵심 성과

| 성과 | 문제 → 해결 → 결과 |
|------|-------------------|
| **검색 성능 10배** | RDB 복합 조건 검색 타임아웃 → Elasticsearch 역색인 도입 → 10초+ → 1초 이내 |
| **Zero Ops** | 운영팀 컨텍스트 스위칭 병목 → Slack ChatOps 구축 → 반복 업무 40% → 0% |
| **매출 10% 상승** | MD팀 전략 상품 대응 불가 → Dynamic Pricing 하이브리드 구조 → 매출/트래픽 각 10%↑ |
| **생산성 90% 향상** | 반복 운영 도구 개발 → Claude Code + MCP 활용 → 1-2일 → 1-2시간 |

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

#### 인플루언서 데이터 플랫폼 고도화

> 200만 인플루언서 데이터 자동 수집, 검색 성능 10배 개선

- **문제**: 수작업 수집으로 일 수십 명 한계, RDB 검색 10초+ 타임아웃
- **해결**: Elasticsearch 역색인 기반 검색 엔진 + 멀티소스 API 파이프라인 (Instagram/YouTube/TikTok 등 다중 플랫폼 통합)
  - 데이터 풀 10만→200만(20배↑), 검색 10초+→1초 이내(10배↑)
- **기술**: Spring Boot, Elasticsearch, Redis Lock, Google Sheets API

---

#### 네이버 쇼핑 Dynamic Pricing

> 자동화 + MD팀 협업으로 네이버 최저가 달성, 매출 10% 상승

- **문제**: 기존 자동화 시스템은 일괄 처리만 가능, MD팀 전략 상품 정밀 대응 불가
- **해결**:
  - **자동 프로세스**: 전체 상품 동적 가격 모니터링 및 자동 조정
  - **MD팀 협업 (핑퐁)**: 타겟팅 상품 데이터 제공 → 마진율 기반 판매가 조정 → 할인 적용 → 최저가 달성
  - 대상 상품 매출/트래픽 각 **10% 상승**
- **기술**: Spring Boot, Naver Shopping API

---

#### ChatOps 기반 운영 프로세스 자동화

> Slack 기반 운영 요청 통합으로 수동 업무 Zero Ops 달성

- **문제**: 발주/클레임 요청이 이메일/메신저/구두로 분산, 운영팀 40% 시간 단순 반복
- **해결**: Slack Event API + Interactive Component로 버튼 클릭만으로 DB 처리 완료
  - 수동 업무 40%→0%, 요청 채널 **100% 통합**
- **기술**: Spring Boot, Slack Event API, Interactive Components

---

#### 품절률 감소 및 데이터 분석

> 재구매 이탈 분석 → 품절 취소율 40%→20% 절반 감소

- **문제**: 품절 경험 유저의 재구매 전환 거의 없음, 품절 취소 사유 40% 차지
- **해결**: GA4+BigQuery 연동으로 원인 분석 → 지연 셀러 패널티 정책 + 품절 고객 포인트 보상
- **성과**: 품절 취소율 **40%→20% (50% 감소)**, 재구매 전환율 개선
- **기술**: BigQuery, Google Analytics (GA4), MySQL

---

#### Additional Impact

- **메인 페이지 큐레이션**: MD팀 개발자 개입 없이 상품 구성, Enum 기반 타입 시스템, 인메모리 캐시(3분 TTL)
- **상품 이미지 정합성**: SHA256 해시 검증으로 URL 동일 이미지 변경 감지, 클레임 Zero 달성
- **AI 기반 생산성 혁신**: Claude Code + MCP 활용으로 운영 도구 개발 90% 단축, 문서화 80% 자동화

---

### (주)인터파크 | Backend Developer
**2021.09 - 2022.01 (5개월)** | 종합 쇼핑몰

#### 레거시 시스템 TDD 도입

- **성과**: TDD 기반 개발 도입, 핵심 비즈니스 로직 테스트 커버리지 확보, 테스트 문화 정착
- **기술**: Java, Spring, Oracle, JUnit, Mockito

---

### (주)한국문헌정보기술 | Backend Developer
**2018.06 - 2021.08 (3년 2개월)** | 아카이빙/기록물 관리 솔루션

#### 자체 검색 엔진 구축 및 대용량 처리 최적화

> 라이선스 100% 절감, 처리 속도 70% 단축

- **문제**: 상용 검색엔진 라이선스 수천만원, 대량 이미지 등록 10시간+ 지연
- **해결**: Elasticsearch + Nori 한글 형태소 분석기 + Bulk Insert + 병렬 썸네일 처리
  - 라이선스 **100% 절감**, 처리 시간 10h→3h(70%↓)
- **기술**: Java, Spring, Elasticsearch, Nori, Apache Tika

---

## Education & Certification

| 구분 | 내용 |
|------|------|
| **학력** | 대전대학교 컴퓨터공학 학사 (2011 - 2018) |
| **자격증** | 정보처리기사 (2017.05) |
| **수상** | 2021년 사내 우수사원 - (주)한국문헌정보기술 |
