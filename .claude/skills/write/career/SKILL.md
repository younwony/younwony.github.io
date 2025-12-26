---
name: write-career
description: 경력기술서(5페이지+)를 작성합니다. 문제 해결 중심, 기술 선택 근거, 정량적 성과를 포함합니다.
---

# 경력기술서 작성

> **작성 원칙 및 STAR+I 가이드**: `/writing-guide` 참조

---

## 경력기술서 vs 이력서

| 구분 | 경력기술서 (이 스킬) | 이력서 |
|------|---------------------|--------|
| **분량** | 5페이지 이상 | 2-3페이지 |
| **목적** | 상세 역량 검증 | 빠른 스크리닝 |
| **내용** | STAR+I 상세 + 기술적 깊이 | 핵심 성과 요약 |
| **스킬** | `/write-career` | `/create-resume-document` |

---

## 경력기술서 특화 섹션

경력기술서는 이력서와 달리 **기술적 깊이**를 보여주는 섹션이 포함됩니다.

### 1. 아키텍처 다이어그램


### Architecture

```markdown
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
             └───────────┬───────────┘
                         │
      ┌──────────────────┼──────────────────┐
      ▼                  ▼                  ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    MySQL    │───▶│Elasticsearch│    │    Redis    │
│  (Master)   │    │  (Search)   │    │   (Lock)    │
└─────────────┘    └─────────────┘    └─────────────┘
```

---

### 2. 데이터 플로우

```markdown
### Data Flow

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
```

---

### 3. 트러블슈팅 상세 ⭐

시니어 수준에서 가장 중요한 섹션입니다.

```markdown
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
- [성공] Elasticsearch 도입 → 역색인 기반 0.1초 달성

**최종 해결**:
- Elasticsearch 클러스터 구성 (3 nodes)
- 실시간 동기화 파이프라인 구축 (MySQL → ES)
- 검색 API 전환 및 Fallback 로직 구현

**검증**:
- Load Test: 1000 TPS에서 p99 < 200ms
- 모니터링: 2주간 안정성 확인
```

---

### 4. 기술 구현 상세

```markdown
### Implementation Details

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
```

---

### 5. Challenges & Solutions 테이블

```markdown
### Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| API Rate Limit | Token Bucket + Exponential Backoff |
| 멀티 인스턴스 중복 | Redis Distributed Lock |
| 이미지 CDN 만료 | S3 직접 업로드 |
| ES 동기화 지연 | Near Real-time Sync (< 1분) |
```

---

## 실행 단계

### Step 1: 프로젝트 선별

> `/writing-guide` 섹션 5. 파레토 원칙 참조

```
현재 프로젝트 목록 → 상위 20% (5-6개) 선별
```

### Step 2: STAR+I 작성

> `/writing-guide` 섹션 3. STAR+I 각 섹션별 가이드 참조

각 프로젝트마다:
1. 한 줄 요약 (비즈니스 임팩트)
2. Situation (조직 손실 명확히)
3. Task (AS-IS → TO-BE)
4. Action (기술 선택 근거 필수)
5. Result (Before/After 테이블)
6. Impact (조직 레벨 효과)

### Step 3: 기술적 깊이 추가

핵심 프로젝트 2-3개에 대해:
- 아키텍처 다이어그램
- 트러블슈팅 상세 (시도-실패-성공)
- Challenges & Solutions 테이블

### Step 4: 검증

```
프로젝트마다 자문:
"이게 없었다면 조직이 잃는 것은?"
→ 한 줄로 정리 못하면 제거 대상
```

### Step 5: 동기화

```bash
/update-resume
```

---

## 체크리스트

### 기본 품질 (필수)

> `/writing-guide` 섹션 10. 작성 체크리스트 참조

- [ ] 프로젝트 5-6개 선별 완료
- [ ] 각 프로젝트 STAR+I 작성 완료
- [ ] Before/After 테이블 성과 포함
- [ ] 시니어 톤 사용

### 기술적 깊이 (경력기술서 특화)

- [ ] 핵심 프로젝트 아키텍처 다이어그램 포함
- [ ] 트러블슈팅 상세 (시도-실패-성공) 포함
- [ ] Challenges & Solutions 테이블 포함
- [ ] 코드 스니펫 + 설계 근거 포함

---

## 관련 스킬

- `/writing-guide`: STAR+I 작성 원칙, 시니어 톤, 파레토 기준
- `/create-resume-document`: 이력서 작성 (2-3페이지)
- `/export`: PDF/PPT 내보내기
