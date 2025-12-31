# Work Logs - 작업 기록

> 프로젝트별 상세 작업 내용을 기록합니다.
> 이력서에 반영되지 않은 작업도 상세하게 문서화하여 보관합니다.

---

## 디렉토리 구조

```
career/
├── work-logs/         # 프로젝트별 상세 문서
│   ├── README.md      # 이 파일 (인덱스)
│   ├── guhada/        # (주)구하다 작업 로그
│   ├── interpark/     # (주)인터파크 작업 로그
│   ├── korealit/      # (주)한국문헌정보기술 작업 로그
│   └── personal/      # 개인 프로젝트/학습
├── work-history/      # Jira 월별 작업 이력
│   ├── 2022/          # 2022년 (07-12월)
│   ├── 2023/          # 2023년 (05-12월)
│   ├── 2024/          # 2024년 (01-12월)
│   └── 2025/          # 2025년 (01-12월)
└── summary/           # 연도별 상/하반기 요약
    ├── 2023-H1.md     # 2023년 상반기
    ├── 2023-H2.md     # 2023년 하반기
    ├── 2024-H1.md     # 2024년 상반기
    ├── 2024-H2.md     # 2024년 하반기
    └── 2025-H1.md     # 2025년 상반기
```

---

## 연도별 요약

| 기간 | 작업 건수 | 주요 성과 | 요약 문서 |
|------|----------|----------|----------|
| 2023 상반기 | 17건+ | TPS 1500% 향상, Latency 90% 개선 | [링크](guhada/summary/2023-H1.md) |
| 2023 하반기 | 83건 | 색상 검색 50배 확장, NHN 비용 50% 절감 | [링크](guhada/summary/2023-H2.md) |
| 2024 상반기 | 129건 | 네이버 Dynamic Pricing, 이미지 참조 시스템 | [링크](guhada/summary/2024-H1.md) |
| 2024 하반기 | 131건 | 이미지 Hash 검증, ChatOps 자동화 | [링크](guhada/summary/2024-H2.md) |
| 2025 상반기 | 217건 | Seeding Admin, TikTok 연동, ElasticSearch | [링크](guhada/summary/2025-H1.md) |

---

## 구하다 (2022.02 - 현재)

### 주요 프로젝트 (이력서 반영)

| 날짜 | 작업명 | 설명 | 이력서 반영 |
|------|--------|------|------------|
| 2022-현재 | [인플루언서 데이터 플랫폼 고도화](./guhada/2022-02-influencer-platform.md) | 200만 데이터 규모 수집/검색 시스템 구축 | O (프로젝트 1) |
| 2022-2023 | [네이버 쇼핑 Dynamic Pricing 시스템](./guhada/2022-dynamic-pricing.md) | 최저가 자동 추종으로 매출 10% 상승 | O (프로젝트 2) |
| 2023 | [상품 이미지 정합성 확보 시스템](./guhada/2023-image-integrity.md) | 해시 기반 검증으로 클레임 Zero 달성 | O (프로젝트 3) |
| 2023-2024 | [ChatOps 기반 운영 프로세스 자동화](./guhada/2023-chatops.md) | Slack 기반 Zero Ops 달성 | O (프로젝트 4) |
| 2024-현재 | [개발 문화 개선 및 AI 기반 팀 생산성 혁신](./guhada/2024-dev-culture.md) | 코드 리뷰 문화 정착, Claude Code 활용 | O (프로젝트 5) |
| 2025.12 | [MCP 기반 문서화 자동화](./guhada/2025-12-mcp-documentation.md) | Claude Code + Confluence MCP 연동 | O (프로젝트 5) |

### 2025년 상반기 작업

| 날짜 | 작업명 | 설명 | 이력서 반영 |
|------|--------|------|------------|
| 2025.04-06 | [Seeding Admin 구축](./guhada/2025-04-seeding-admin.md) | 데이터 수집 자동화, ElasticSearch 검색 최적화 | O |
| 2025.02,06 | [WMS 시스템 설계](./guhada/2025-02-wms-system-design.md) | 창고관리시스템 개선 설계 | X |
| 2025.03 | [쿠폰 최대 할인가 해제](./guhada/2025-03-coupon-max-discount.md) | 쿠폰 시스템 고도화 | X |
| 2025.02-03 | [발란,젠테 최저가 조정](./guhada/2025-02-competitor-price-adjustment.md) | 크롤링 기반 가격 경쟁력 확보 | X |
| ~2025.01 | [해외 부티크 API 연동](./guhada/2025-01-boutique-api-integration.md) | Netdressed, Rakuten API 연동 | X |

### 2023년 작업

| 날짜 | 작업명 | 설명 | 이력서 반영 |
|------|--------|------|------------|
| 2023.01 | [Algorithm 분석 및 개선](./guhada/2023-01-algorithm-optimization.md) | TPS 1500% 향상, Latency 90% 감소 | O |
| 2023.03-05 | [상품상세 3차 업데이트](./guhada/2023-03-product-detail-review.md) | Review API Latency 90% 개선 | O |
| 2023.11-12 | [암호화폐 포인트 전환](./guhada/2023-11-crypto-point-conversion.md) | Temco 코인 → 포인트 전환 | X |
| 2023.11~ | [Guhada Analytics](./guhada/2023-11-analytics-dashboard.md) | BigQuery, GA 기반 데이터 분석 | X |
| 2023.10-11 | [상품 색상 검색](./guhada/2023-10-color-search.md) | Color 표준화 알고리즘 | X |
| 2023.09 | [NHN 알림톡 비용 절감](./guhada/2023-09-nhn-notification-cost.md) | 월 20~30만원 절감 | X |
| 2023.08-11 | [Alibaba 외부몰 주문 연동](./guhada/2023-08-alibaba-order-integration.md) | Alibaba API 연동 | X |
| 2023.07-09 | [상품 옵션 재고 알림](./guhada/2023-07-restock-notification.md) | 재입고 Push 알림 | X |
| 2023.06 | [메인 팝업 관리](./guhada/2023-06-settle-main-popup.md) | Settle 팝업 관리 기능 | X |
| 2023.04-05 | [외부 주문 수집](./guhada/2023-04-external-order-collection.md) | 외부몰 주문 프로세스 | X |
| 2023.03-04 | [발주확인 기능](./guhada/2023-03-settle-order-confirm.md) | Settle 발주 확인 | X |
| 2023.02-03 | [QA Server SSL 적용](./guhada/2023-02-qa-server-ssl.md) | QA/Prod 환경 동일화 | X |
| 2023.01-02 | [메인 Curation 구현](./guhada/2023-01-main-curation.md) | 2차 Curation 추가 | X |

---

## 인터파크 (2021.09 - 2022.01)

| 날짜 | 작업명 | 설명 | 이력서 반영 |
|------|--------|------|------------|
| 2021-2022 | [Seller 어드민 성능 개선](./interpark/2021-09-seller-admin.md) | 조회 성능 80% 단축 (5초 → 1초) | O |

---

## 한국문헌정보기술 (2018.06 - 2021.08)

| 날짜 | 작업명 | 설명 | 이력서 반영 |
|------|--------|------|------------|
| 2018-2021 | [자체 검색 엔진 구축](./korealit/2018-06-search-engine.md) | Elasticsearch + Nori, 등록 속도 70% 단축 | O |

---

## 개인 프로젝트/학습

| 날짜 | 작업명 | 설명 | 이력서 반영 |
|------|--------|------|------------|
| - | - | - | - |

---

## 이력서 반영 기준

### 반영 O
- 정량적 성과 명확 (%, 배, 시간 단축 등)
- 기술적 의사결정 포함 (Why & How)
- 팀/조직 수준의 비즈니스 임팩트
- 면접에서 설명할 스토리 있음

### 반영 X (작업 로그만 기록)
- 일상적 운영 업무
- 정량적 성과 불명확
- 개인 학습/실험 단계
