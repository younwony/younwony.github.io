# After: 자동화된 데이터 파이프라인

```mermaid
flowchart TD
    subgraph SOURCES["🌐 외부 데이터 소스"]
        direction LR
        S1["♪ TikTok<br/>API"]
        S2["E Ensemble<br/>API"]
        S3["↗ EchoTik<br/>API"]
        S4["🔍 Scraper<br/>Web"]
    end

    subgraph BATCH["⚙️ Spring Boot Batch"]
        direction TB
        B1["Parallel Processing"]
        B2["Retry Logic"]
        B3["Scheduler"]
    end

    subgraph LOCK["🔒 Redis Lock"]
        R1["중복 방지"]
    end

    subgraph STORAGE["💾 데이터 저장"]
        direction LR
        D1[("🗄️ MySQL<br/>원본 저장")]
        D2["📦 AWS S3<br/>이미지 저장"]
        D3["🔎 Elasticsearch<br/>검색 최적화"]
    end

    subgraph RESULT["✅ 성과"]
        direction LR
        R2["일 5,000명+<br/>자동 수집"]
        R3["200만 데이터<br/>검색 풀"]
        R4["검색 1초 이내<br/>응답 시간"]
        R5["Zero Ops<br/>운영 자동화"]
    end

    S1 --> BATCH
    S2 --> BATCH
    S3 --> BATCH
    S4 --> BATCH

    BATCH -.->|"분산락 체크"| LOCK

    BATCH --> D1
    BATCH --> D2
    BATCH --> D3

    style S1 fill:#e3f2fd,stroke:#90caf9,stroke-width:2px
    style S2 fill:#e3f2fd,stroke:#90caf9,stroke-width:2px
    style S3 fill:#e3f2fd,stroke:#90caf9,stroke-width:2px
    style S4 fill:#e3f2fd,stroke:#90caf9,stroke-width:2px
    style BATCH fill:#e8f5e9,stroke:#81c784,stroke-width:2px
    style LOCK fill:#fff3e0,stroke:#ffb74d,stroke-width:2px
    style D1 fill:#f3e5f5,stroke:#ce93d8,stroke-width:2px
    style D2 fill:#f3e5f5,stroke:#ce93d8,stroke-width:2px
    style D3 fill:#f3e5f5,stroke:#ce93d8,stroke-width:2px
    style SOURCES fill:#fafafa,stroke:#90caf9
    style STORAGE fill:#fafafa,stroke:#ce93d8
    style RESULT fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
```

## 아키텍처 구성요소

| 계층 | 컴포넌트 | 역할 |
|------|----------|------|
| Data Sources | TikTok, Ensemble, EchoTik API, Web Scraper | 외부 데이터 수집 |
| Processing | Spring Boot Batch | 병렬 처리 + 재시도 + 스케줄링 |
| Locking | Redis | 분산 환경 중복 방지 |
| Storage | MySQL, S3, Elasticsearch | 원본/이미지/검색 데이터 |

## 핵심 성과

| 지표 | Before | After | 개선율 |
|------|--------|-------|--------|
| 일일 수집량 | 수십 명 | 5,000명+ | 100x+ |
| 검색 응답 | 10초+ | 1초 이내 | 10x+ |
| 운영 개입 | 상시 | Zero Ops | 완전 자동화 |
| 데이터 풀 | 제한적 | 200만+ | 대규모 확장 |
