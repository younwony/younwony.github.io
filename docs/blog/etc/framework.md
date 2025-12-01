# Framework 관련 포스트

> **블로그 원문**: https://youn12.tistory.com/category/Framework
> **프레임워크**: eGovFrame (전자정부 표준프레임워크)

---

## eGovFrame Maven 빌드 초기화

**작성일**: 2020.10.30
**환경**: eGovFrameWork v3.7

### 문제 상황
eGovFrame 프로젝트에서 Maven 빌드 문제 발생

### 해결 방법: 빌드 초기화

#### 1단계: Maven 프로젝트 업데이트
```
프로젝트 우클릭 → Maven → Update Project
```

또는 단축키: `Alt + F5`

#### 2단계: Maven Clean
```bash
mvn clean
```

IDE에서:
```
프로젝트 우클릭 → Run As → Maven clean
```

#### 3단계: Maven Install
```bash
mvn install
```

IDE에서:
```
프로젝트 우클릭 → Run As → Maven install
```

### 전체 과정 정리

```bash
# 1. 의존성 캐시 삭제 (필요시)
rm -rf ~/.m2/repository

# 2. 프로젝트 클린
mvn clean

# 3. 컴파일 및 설치
mvn install

# 4. 또는 한 번에
mvn clean install
```

### 추가 옵션

```bash
# 테스트 스킵
mvn clean install -DskipTests

# 오프라인 모드
mvn clean install -o

# 강제 업데이트
mvn clean install -U
```

### eGovFrame 주요 특징

| 특징 | 설명 |
|------|------|
| 기반 | Spring Framework |
| 용도 | 공공기관 시스템 개발 |
| 버전 | 3.x (Spring 4 기반), 4.x (Spring 5 기반) |

---

**태그**: `eGovFrame`, `Maven`, `빌드`, `전자정부프레임워크`
