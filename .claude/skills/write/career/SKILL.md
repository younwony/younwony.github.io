---
name: write-career
description: 경력기술서(5페이지+)를 작성합니다. 문제 해결 중심, 기술 선택 근거, 정량적 성과를 포함합니다.
---

# 경력기술서 작성

## 핵심 철학

> **프로젝트는 "참여 기록"이 아니라 "문제 해결 이력서"**

면접관은 무엇을 만들었는지가 아니라 다음 세 가지를 본다:
1. **왜 이 문제가 중요했는가** (비즈니스/운영 관점)
2. **본인의 판단과 선택은 무엇이었는가** (기술 의사결정)
3. **결과적으로 무엇이 얼마나 개선되었는가** (정량 지표)

---

## 프로젝트 수 (파레토 원칙)

| 분류 | 프로젝트 수 | 설명 |
|------|------------|------|
| **이상적** | 5-6개 | 상위 20% 핵심 프로젝트만 |
| **최대** | 7-8개 | 프로젝트 수 많을수록 약해짐 |

### 남겨야 할 프로젝트 (상위 20%)
- 매출/비용/속도/안정성 등 **비즈니스 지표가 변한** 프로젝트
- **설계 선택이 드러나는** 프로젝트
- 타 부서와 **협업 구조를 바꾼** 사례

### 제거해야 할 프로젝트 (하위 20%)
- CRUD 중심 내부 관리 도구
- 성과 없는 단순 유지보수
- "~을 사용했다" 위주의 기술 나열

---

## 프로젝트 포맷 (권장)

### 기본 구조 (15-20줄/프로젝트)

```markdown
## 프로젝트: [프로젝트명]

**기간**: YYYY.MM - YYYY.MM | **역할**: 백엔드 리드

> **한 줄 요약**: [비즈니스 임팩트 중심 핵심 가치 한 문장]

### 배경/문제 정의 (Why)
- [비즈니스 관점 문제 상황 - 조직의 손실/비효율성 명확히]
- [기술적 제약]

### 해결 전략 (How) ⭐ 가장 중요
**문제 분석**:
- [원인 파악 과정]

**기술 선택 근거**: (왜 이 방식이 합리적인 선택이었는지)
- 대안 1: [검토한 방법] → [채택하지 않은 이유]
- **선택**: [채택한 기술] → [선택 이유]

**구현**:
- [핵심 구현 내용 2-3개]

### 성과 (Result)

| 항목 | Before | After | 개선율 |
|------|--------|-------|--------|
| 검색 응답 | 10초 | 0.1초 | 100배 |
| 운영 업무 | 40% | 0% | Zero Ops |

### 비즈니스 임팩트
- [조직/비즈니스 효과 2-3개]

**기술 스택**: Java, Spring Boot, Elasticsearch, Redis
```

---

## 작성 원칙

### 1. 한 줄 요약 필수

```
❌ "인플루언서 데이터 플랫폼을 개발했다"
✅ "200만 인플루언서 데이터 자동 수집으로 마케팅 커버리지 20배 확대 및 검색 100배 개선"
```

### 2. 기술 선택 이유 (Why) 필수

```
❌ "Elasticsearch를 사용했다"
✅ "MySQL 인덱스로는 동적 필터 100가지 조합 대응 한계 → 역색인 기반 ES 선택"
```

### 3. 실패 사례도 포함

```
❌ 성공 사례만 나열
✅ "Query Caching 시도 → Hit율 5% 미만으로 폐기 → ES로 전환"
```

### 4. Before/After 테이블로 성과 시각화

```
❌ "성능 개선"
✅ | Before | After | 개선율 |
   |--------|-------|--------|
   | 10초   | 0.1초 | 100배  |
```

### 5. 시니어 톤 사용

| 피해야 할 표현 | 권장 표현 |
|--------------|----------|
| 담당했습니다 | **설계하고 구현했습니다** |
| 사용했습니다 | **선택·도입했습니다** |
| 개발했습니다 | **아키텍처를 설계했습니다** |
| 참여했습니다 | **주도적으로 리딩했습니다** |

---

## 기술적 깊이 섹션 (선택)

시니어 수준 경력기술서에 추가할 섹션들입니다.

### 1. 아키텍처 다이어그램 (Architecture)

```markdown
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
```

### 2. 데이터 플로우 (Data Flow)

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

### 3. 트러블슈팅 상세 (Troubleshooting)

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

### 4. 기술 구현 상세 (Implementation Details)

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

### 5. 도전 과제 (Challenges & Solutions)

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

### Step 1: 프로젝트 선별 (파레토)

```
현재 프로젝트 목록 → 상위 20% (5-6개) 선별

기준:
✅ 비즈니스 지표 변화 (매출/비용/속도)
✅ 기술적 의사결정 근거 있음
✅ 타 부서 협업/영향력

❌ CRUD 관리 도구
❌ 단순 유지보수
❌ 기술 나열 위주
```

### Step 2: 프로젝트별 포맷 적용

각 프로젝트:
1. **한 줄 요약** 작성 (비즈니스 임팩트 중심)
2. **배경/문제 정의** (조직 손실 명확히)
3. **해결 전략** (기술 선택 근거 필수)
4. **Before/After 테이블** 성과
5. **비즈니스 임팩트** 2-3개

### Step 3: 검증

```
프로젝트마다 자문:
"이게 없었다면 조직이 잃는 것은?"
→ 한 줄로 정리 못하면 제거 대상
```

### Step 4: 파일 동기화

```bash
/update-resume
```

---

## 체크리스트

### 프로젝트 선별
- [ ] 5-6개 핵심 프로젝트만 선별
- [ ] 비즈니스 지표 변화 확인
- [ ] CRUD/유지보수 제거

### 포맷 품질
- [ ] 한 줄 요약 필수 (비즈니스 임팩트)
- [ ] 기술 선택 근거 (Why) 포함
- [ ] Before/After 테이블 성과
- [ ] 시니어 톤 사용

### 기술적 깊이 (선택)
- [ ] 아키텍처 다이어그램
- [ ] 트러블슈팅 상세 (시도-실패-성공)
- [ ] Challenges & Solutions 테이블

---

## 관련 스킬

- `/writing-guide`: STAR+I 작성 가이드
- `/create-resume-document`: 이력서 작성 (2-3페이지)
- `/export-pdf`: PDF 내보내기
