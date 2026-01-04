# Before: 수작업 데이터 수집 프로세스

```mermaid
flowchart TD
    subgraph MANUAL["👤 수작업 프로세스"]
        direction TB
        A[("👤 마케팅팀<br/>TikTok/Instagram<br/>직접 탐색")]
        B[("📊 Excel<br/>스프레드시트<br/>정리")]
        C[("🗄️ MySQL<br/>RDB")]
    end

    subgraph PROBLEM["🚨 Pain Points"]
        direction TB
        P1["❌ 일 수십 명 수집 한계"]
        P2["❌ 200만 건 검색 시 10초+"]
        P3["❌ 이미지 CDN 만료"]
        P4["❌ 중복 관리 불가"]
    end

    subgraph RESULT["⏳ 검색 결과"]
        D["검색 타임아웃<br/>10초+<br/>복합 조건 검색 불가"]
    end

    A -->|"수기 입력"| B
    B -->|"수동 입력"| C
    C -->|"검색 요청"| D

    style A fill:#f8f9fa,stroke:#bdbdbd,stroke-width:2px
    style B fill:#e8f5e9,stroke:#81c784,stroke-width:2px
    style C fill:#e3f2fd,stroke:#64b5f6,stroke-width:2px
    style D fill:#ffebee,stroke:#e57373,stroke-width:2px
    style MANUAL fill:#fafafa,stroke:#e0e0e0
    style PROBLEM fill:#fff5f5,stroke:#ffcdd2
    style RESULT fill:#ffebee,stroke:#e57373
```

## 주요 문제점

| 구분 | 문제 | 영향 |
|------|------|------|
| 수집 | 일 수십 명 한계 | 대형 캠페인 불가 |
| 검색 | 10초+ 타임아웃 | 복합 조건 검색 불가 |
| 이미지 | CDN 만료 | 프로필 유실 |
| 데이터 | 중복 관리 불가 | 데이터 품질 저하 |
