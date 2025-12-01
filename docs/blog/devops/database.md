# DBMS 관련 포스트

> **블로그 원문**: https://youn12.tistory.com/category/DBMS
> **데이터베이스**: CUBRID, Tibero

---

## 개요

CUBRID와 Tibero 데이터베이스 사용 중 겪은 이슈와 해결 방법을 정리한 포스트들입니다.

---

## CUBRID (4개)

### 1. CLOB → VARCHAR 타입 변환

**작성일**: 2020.11.16

#### 문제
CLOB 타입의 데이터를 VARCHAR로 변환 필요

#### 해결 방법
CUBRID에서 제공하는 타입 변환 함수 활용

---

### 2. Table, Column Comment 작성

**작성일**: 2021.01.06

#### 테이블 주석 작성
```sql
ALTER TABLE [테이블명] COMMENT='[주석]';
```

**예시**:
```sql
ALTER TABLE test_db COMMENT='testComment';
```

#### 컬럼 주석 작성
```sql
ALTER TABLE [테이블명] MODIFY COLUMN [컬럼명] [데이터타입] COMMENT'[주석]';
```

**예시**:
```sql
ALTER TABLE test_db MODIFY COLUMN I_ID INTEGER COMMENT'id_testComment';
```

---

### 3. Cubrid Server Start - FATAL ERROR

**작성일**: 2021.03.18

#### 문제
데이터베이스 생성 후 `cubrid server start testdb` 명령 실행 시:
> "Out of virtual memory" 오류 발생

#### 원인
설정된 `data_buffer_size` 값이 실제 서버의 할당 가능한 메모리를 초과

#### 해결 방법
**cubrid.conf** 파일 수정:
- 경로: `/app/CUBRID-10.2.2.8874-f681dd9-Linux.x86_64/conf/cubrid.conf`

```conf
# 변경 전
data_buffer_size=2G

# 변경 후
data_buffer_size=1G
```

설정 변경 후 CUBRID 서버 재시작

---

### 4. Excel 개행 문자 마이그레이션

**작성일**: 2021.04.08

#### 문제
Excel 데이터의 개행 문자를 CUBRID로 마이그레이션 시 처리 필요

#### 해결 방법

1. **Excel에서 처리**
   - `SUBSTITUTE()` 함수로 개행 문자 변환

2. **CUBRID 삽입 시**
   - `CHR(10)` 함수로 개행 문자 표현

---

## Tibero (1개)

### JDBC-12003: Unable to open a session

**작성일**: 2020.11.12

#### 문제
Tibero 데이터베이스 연결 시 세션 오류 발생:
> "JDBC-12003: Unable to open a session"

#### 원인
활성 세션 수가 최대 제한에 도달

#### 해결 방법

1. **세션 확인**
   - 현재 활성 세션 목록 조회

2. **세션 종료**
   - 불필요한 세션 정리

---

## 데이터베이스 유용한 명령어

### CUBRID

```sql
-- 데이터베이스 시작
cubrid server start [db_name]

-- 데이터베이스 중지
cubrid server stop [db_name]

-- 상태 확인
cubrid server status
```

### 공통

```sql
-- 테이블 목록 조회
SHOW TABLES;

-- 테이블 구조 확인
DESC [table_name];

-- 테이블 주석 확인
SHOW CREATE TABLE [table_name];
```

---

**태그**: `CUBRID`, `Tibero`, `DBMS`, `SQL`
