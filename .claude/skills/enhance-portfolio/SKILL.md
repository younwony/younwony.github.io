---
name: enhance-portfolio
description: 경력기술서에 아키텍처 다이어그램, 데이터 플로우, 트러블슈팅 상세 등 기술적 깊이를 추가합니다. 포트폴리오 품질 향상이 필요할 때 사용합니다.
---

# 경력기술서 기술적 깊이 강화

## 개요

경력기술서(career_portfolio.md)의 프로젝트 설명에 시니어 개발자 수준의 기술적 상세를 추가합니다.

## 추가할 섹션들

### 1. 아키텍처 다이어그램 (Architecture)

각 프로젝트에 ASCII 또는 Mermaid 형식의 시스템 구성도 추가

```markdown
### 🏗️ Architecture

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   TikTok    │    │  Ensemble   │    │   EchoTik   │
│    API      │    │    API      │    │    API      │
└──────┬──────┘    └──────┬──────┘    └──────┬──────┘
       │                  │                  │
       └──────────────────┼──────────────────┘
                          ▼
              ┌───────────────────────┐
              │    Data Collector     │
              │   (Spring Batch)      │
              └───────────┬───────────┘
                          │
       ┌──────────────────┼──────────────────┐
       ▼                  ▼                  ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    MySQL    │    │    Redis    │    │Elasticsearch│
│  (Master)   │    │   (Lock)    │    │  (Search)   │
└─────────────┘    └─────────────┘    └─────────────┘
```
```

### 2. 데이터 플로우 (Data Flow)

데이터 처리 흐름을 단계별로 시각화

```markdown
### 📊 Data Flow

```
1. 수집 단계
   API Request → Rate Limit Check → Response Parse → Validation

2. 정제 단계
   Raw Data → Deduplication → Normalization → Enrichment

3. 적재 단계
   Validated Data → MySQL (Master) → ES Index → Cache Warming
```
```

### 3. 트러블슈팅 상세 (Troubleshooting)

문제 해결 과정을 상세히 기록

```markdown
### 🔧 Troubleshooting

**문제**: 200만 건 검색 시 10초 이상 타임아웃

**발견 과정**:
- 운영팀 리포트: "검색 결과가 안 나와요" 반복 접수
- APM 지표 확인: 95 percentile 응답 시간 12초

**원인 분석**:
1. MySQL EXPLAIN 분석 → Full Table Scan 확인
2. 인덱스 추가 시도 → 복합 조건에서 효과 미미
3. Query Profile 분석 → JOIN 비용이 전체 80%

**시도한 방법들**:
- [실패] Covering Index 추가 → 5초로 개선되었으나 여전히 느림
- [실패] Query Caching → 조건 조합이 많아 Hit율 5% 미만
- [성공] Elasticsearch 도입 → 역색인 기반 0.1초 달성

**최종 해결**:
- Elasticsearch 클러스터 구성 (3 nodes)
- 실시간 동기화 파이프라인 구축 (MySQL → ES)
- 검색 API 전환 및 Fallback 로직 구현

**검증**:
- Load Test: 1000 TPS에서 p99 < 200ms
- 모니터링: 2주간 안정성 확인
```

### 4. 기술 구현 상세 (Implementation Details)

핵심 기술 결정의 구현 상세

```markdown
### ⚙️ Implementation Details

**Redis Distributed Lock 구현**:

```java
// Lock 키 설계: 리소스 타입 + 고유 식별자
String lockKey = "collector:tiktok:" + influencerId;

// TTL: 작업 예상 시간의 2배 (데드락 방지)
long ttl = 60_000L; // 60초

// 재시도 전략: Exponential Backoff
int maxRetries = 3;
long baseDelay = 100L;
```

**설계 근거**:
- TTL 60초: 평균 수집 시간 25초 기준 2.5배 여유
- Lock 범위: 인플루언서 단위로 최소화 (동시 처리량 극대화)
- 실패 시: Skip 후 다음 배치에서 재처리 (멱등성 보장)
```

### 5. 도전 과제 (Challenges)

프로젝트 진행 중 직면한 기술적 도전

```markdown
### 🚀 Challenges & Solutions

| 도전 과제 | 해결 방법 |
|----------|----------|
| API Rate Limit 초과 | Token Bucket 패턴으로 요청 속도 제어 |
| 멀티 인스턴스 중복 | Redis Distributed Lock 도입 |
| 이미지 CDN 만료 | S3 직접 업로드로 영구 보관 |
| 대량 데이터 메모리 | Chunk 기반 스트리밍 처리 |
```

## 실행 단계

### Step 1: 대상 프로젝트 선정
- 가장 복잡한 프로젝트부터 순차 적용
- 사용자에게 우선순위 확인

### Step 2: 정보 수집
```markdown
다음 질문에 대한 답변을 수집:

1. 아키텍처
   - 어떤 시스템/서비스들이 연동되었나요?
   - 데이터는 어디서 어디로 흐르나요?

2. 트러블슈팅
   - 가장 어려웠던 기술적 문제는?
   - 어떻게 발견했고, 어떤 시도를 했나요?
   - 최종 해결책은 무엇이었나요?

3. 구현 상세
   - 핵심 로직은 어떻게 구현했나요?
   - 왜 그렇게 설계했나요? (Trade-off)
```

### Step 3: 콘텐츠 작성
- ASCII 다이어그램 또는 Mermaid 형식 사용
- 구체적인 수치/설정값 포함
- Why(이유)와 How(방법) 모두 설명

### Step 4: 파일 업데이트
1. `my_career_data.md` - 원본에 상세 추가
2. `career_portfolio.md` - 자동 동기화
3. `templates/career/*.html` - 자동 동기화

### Step 5: git add
```bash
git add docs/career/my_career_data.md
git add docs/career/career_portfolio.md
git add templates/career/*.html
```

## 체크리스트

### 추가할 섹션
- [ ] Architecture (아키텍처 다이어그램)
- [ ] Data Flow (데이터 플로우)
- [ ] Troubleshooting (트러블슈팅 상세)
- [ ] Implementation Details (구현 상세)
- [ ] Challenges & Solutions (도전 과제)

### 품질 기준
- [ ] ASCII 다이어그램이 명확한가?
- [ ] 구체적인 수치가 포함되었는가?
- [ ] Why(이유)가 설명되었는가?
- [ ] 시도했다 실패한 것도 포함되었는가?
- [ ] 검증 방법이 명시되었는가?

### 파일 동기화
- [ ] my_career_data.md 업데이트
- [ ] career_portfolio.md 동기화
- [ ] templates/career/*.html 동기화
- [ ] git add 완료

## 예시: 프로젝트 1 강화 버전

```markdown
## 프로젝트 1: 인플루언서 데이터 플랫폼 고도화

[기존 STAR+I 내용 유지]

---

### 🏗️ Architecture

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
              │    (Spring Batch)      │
              │   ┌─────────────────┐  │
              │   │ Rate Limiter    │  │
              │   │ (Token Bucket)  │  │
              │   └─────────────────┘  │
              └───────────┬───────────┘
                          │
       ┌──────────────────┼──────────────────┐
       ▼                  ▼                  ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    MySQL    │───▶│Elasticsearch│    │    Redis    │
│  (Master)   │    │  (Search)   │    │   (Lock)    │
└─────────────┘    └─────────────┘    └─────────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │   Google Sheets API   │
              │   (Auto Reporting)    │
              └───────────────────────┘
```

### 📊 Data Flow

```
1. 수집 (Collection)
   Schedule Trigger → Lock Acquire → API Request → Response Parse

2. 정제 (Processing)
   Validation → Deduplication → Normalization → Image Download

3. 적재 (Storage)
   MySQL Insert → ES Index Sync → S3 Upload (Images)

4. 서빙 (Serving)
   Search Request → ES Query → Result Format → Response
```

### 🔧 Troubleshooting

**문제**: 200만 건 복합 조건 검색 시 10초 이상 타임아웃

**발견**:
- 마케팅팀 피드백: "필터 적용하면 로딩이 안 끝나요"
- Slow Query Log: `WHERE followers > 10000 AND country = 'US' AND ...` 12초

**분석**:
1. EXPLAIN 결과: type=ALL (Full Table Scan)
2. 복합 인덱스 추가 시도 → 4초로 개선되었으나 부족
3. 원인: 동적 필터 조합이 100가지 이상 → 인덱스 효율 저하

**해결**:
- Elasticsearch 역색인 기반 검색으로 전환
- MySQL은 Master Data로만 사용
- 실시간 동기화: MySQL Binlog → Kafka → ES Indexer

**검증**:
- p99 응답 시간: 10초 → 0.1초 (100배 개선)
- 2주간 모니터링: 안정성 확인

### ⚙️ Implementation Details

**Redis Distributed Lock**:
```java
String lockKey = "collector:" + platform + ":" + targetId;
long ttl = 60_000L; // 평균 작업시간 25초의 2.5배

// Redisson 기반 구현
RLock lock = redisson.getLock(lockKey);
boolean acquired = lock.tryLock(0, ttl, TimeUnit.MILLISECONDS);
```

**설계 근거**:
- Lock 단위: 인플루언서 ID → 최대 병렬성 확보
- TTL 60초: 작업 실패 시 자동 해제로 데드락 방지
- 재시도 없음: 다음 배치에서 처리 (멱등성)

### 🚀 Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| API Rate Limit | Token Bucket + Exponential Backoff |
| 멀티 인스턴스 중복 | Redis Distributed Lock |
| 이미지 CDN 만료 | S3 직접 업로드 |
| ES 동기화 지연 | Near Real-time Sync (< 1분) |
```
