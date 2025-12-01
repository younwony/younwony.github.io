# Open Source 관련 포스트

> **블로그 원문**: https://youn12.tistory.com/category/Open%20Sources
> **기술**: Elasticsearch

---

## Elasticsearch 7.10.0 Linux(CentOS 7) 설치

**작성일**: 2021.05.20
**버전**: Elasticsearch 7.10.0
**환경**: CentOS 7

### 개요
문서 색인을 위한 Elasticsearch 설치 가이드

### 설치 과정

#### 1단계: 다운로드 및 압축 해제

```bash
# 다운로드
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.0-linux-x86_64.tar.gz

# 압축 해제
tar -xzf elasticsearch-7.10.0-linux-x86_64.tar.gz
```

### 설정

#### 2단계: 외부 접속 활성화

**파일**: `config/elasticsearch.yml`

```yaml
# 외부 접속 허용
network.host: 0.0.0.0
```

#### 3단계: 클러스터 초기화

외부 접속 설정 후 필수 설정:

```yaml
cluster.initial_master_nodes: ["127.0.0.1"]
```

### 플러그인 설치

#### Nori (한글 형태소 분석기)

```bash
./bin/elasticsearch-plugin install analysis-nori
```

#### Ingest Attachment (파일 색인)

```bash
./bin/elasticsearch-plugin install ingest-attachment
```

### 실행

```bash
cd elasticsearch-7.10.0

# 실행
./bin/elasticsearch

# 백그라운드 실행
./bin/elasticsearch -d
```

### 접속 확인

```bash
curl http://localhost:9200
```

또는 브라우저에서: `http://[서버IP]:9200`

### 응답 예시

```json
{
  "name" : "node-1",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "xxx",
  "version" : {
    "number" : "7.10.0",
    ...
  },
  "tagline" : "You Know, for Search"
}
```

### 주요 설정 옵션

| 설정 | 설명 | 기본값 |
|------|------|--------|
| network.host | 바인딩 주소 | localhost |
| http.port | HTTP 포트 | 9200 |
| transport.port | 노드 통신 포트 | 9300 |
| cluster.name | 클러스터 이름 | elasticsearch |
| node.name | 노드 이름 | 자동 생성 |

### 메모리 설정

**파일**: `config/jvm.options`

```
# 힙 메모리 설정 (시스템 메모리의 50% 권장)
-Xms1g
-Xmx1g
```

### 유용한 API

```bash
# 클러스터 상태
curl http://localhost:9200/_cluster/health?pretty

# 인덱스 목록
curl http://localhost:9200/_cat/indices?v

# 노드 정보
curl http://localhost:9200/_cat/nodes?v
```

---

**태그**: `Elasticsearch`, `검색엔진`, `설치`, `CentOS`
