# Algorithm 분석 및 개선

> 작성일: 2025-12-31
> 소속: (주)구하다 / Tech 팀
> 기간: 2023.01

---

## 개요

Guhada 플랫폼 검색 알고리즘 분석 및 Elasticsearch Hit Index Count 개선을 통한 검색 성능 최적화 프로젝트.

---

## 배경 및 문제점

### 기존 상황
- Guhada 플랫폼 검색 알고리즘의 TPS가 200 수준으로 제한적
- 검색 Latency가 높아 사용자 경험 저하

### 문제점
- **낮은 처리량**: TPS 200으로 트래픽 증가 시 병목 발생
- **높은 지연시간**: 검색 응답 속도 저하

### 목표
- Elasticsearch Hit Index Count 로직 개선
- TPS 향상 및 Latency 감소

---

## 상세 구현

### 기술 스택

| 구분 | 기술 |
|------|------|
| 검색 엔진 | Elasticsearch |
| 언어 | Java |
| 프레임워크 | Spring Boot |

### 구현 내용

#### 1. 알고리즘 분석
- 기존 검색 알고리즘 정의 및 병목 지점 분석
- Hit Index Count 로직의 비효율성 파악

#### 2. Elasticsearch Indexing 로직 개선
- Hit Index Count 최적화
- 인덱싱 전략 재설계

### 기술적 의사결정

| 결정 | 선택 | 이유 |
|------|------|------|
| 최적화 대상 | Hit Index Count | 가장 큰 병목 지점으로 분석됨 |

---

## 결과 및 성과

### 정량적 성과
- **TPS 1500% 향상**: 200 → 3,000
- **Latency 90% 감소**: 검색 응답 속도 대폭 개선

### 정성적 효과
- 사용자 검색 경험 향상
- 트래픽 증가에 대한 대응력 확보

---

## 이력서 반영 여부

- [x] 이력서 반영
- [ ] 작업 로그만 기록

**사유:** TPS 1500% 향상, Latency 90% 감소라는 명확한 정량적 성과

---

## 참고 자료

- Jira: https://temcolabs.atlassian.net/browse/TECH-12222
