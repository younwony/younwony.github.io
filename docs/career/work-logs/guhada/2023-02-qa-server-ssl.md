# QA Server SSL 적용

> 작성일: 2025-12-31
> 소속: (주)구하다 / Tech 팀
> 기간: 2023.02 - 2023.03

---

## 개요

QA Server에 SSL을 적용하여 Production 환경과 동일한 환경을 구성하고, 테스트 정확성을 향상시킨 프로젝트.

---

## 배경 및 문제점

### 기존 상황
- QA Server와 Production 환경 간 차이 존재
- SSL이 필요한 API 기능 테스트 불가

### 문제점
- **환경 차이**: QA와 Prod 환경 차이로 인한 테스트 한계
- **SSL 필요 API**: SSL이 필수인 API 테스트 불가
- **에러 발견 어려움**: 환경 차이로 인한 에러 사전 발견 어려움

### 목표
- QA Server SSL 적용
- Production 환경과 동일한 테스트 환경 구성

---

## 상세 구현

### 기술 스택

| 구분 | 기술 |
|------|------|
| 인프라 | AWS |
| 서버 | Guhada Server (Order, Product 등) |
| 보안 | SSL/TLS |

### 구현 내용

#### 1. AWS 학습 및 적용
- AWS 관련 학습을 통한 SSL 인증서 적용
- QA Guhada Server 전체 SSL 적용

#### 2. 환경 동일화
- QA Server와 Prod 환경 동일화
- SSL 필요 API 테스트 가능하도록 구성

### 기술적 의사결정

| 결정 | 선택 | 이유 |
|------|------|------|
| SSL 적용 범위 | 전체 서버 | Prod 환경과 완전 동일화 필요 |

---

## 결과 및 성과

### 정량적 성과
- QA Server SSL 적용 완료
- SSL 필요 API 기능 테스트 가능

### 정성적 효과
- 에러 최소화
- QA 테스트 정확성 향상
- Production 배포 전 문제 사전 발견 가능

---

## 이력서 반영 여부

- [ ] 이력서 반영
- [x] 작업 로그만 기록

**사유:** 인프라 환경 구성, 정량적 성과 불명확

---

## 참고 자료

- Jira: https://temcolabs.atlassian.net/browse/TECH-11920
