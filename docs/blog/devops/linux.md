# Linux 관련 포스트

> **블로그 원문**: https://youn12.tistory.com/category/Linux
> **OS**: CentOS 7

---

## 개요

CentOS 7 환경에서의 시스템 설정 및 문제 해결 포스트들입니다.

---

## 목차

1. [CentOS 7 방화벽 설정](#1-centos-7-방화벽-설정)
2. [JAVA_HOME 설정](#2-java_home-설정)
3. [Cannot allocate memory 오류 해결](#3-cannot-allocate-memory-오류-해결)

---

## 1. CentOS 7 방화벽 설정

**작성일**: 2020.10.26

### firewalld 기본 명령어

```bash
# 방화벽 상태 확인
systemctl status firewalld

# 방화벽 시작
systemctl start firewalld

# 방화벽 중지
systemctl stop firewalld

# 부팅 시 자동 시작
systemctl enable firewalld

# 부팅 시 자동 시작 해제
systemctl disable firewalld
```

### 포트 관리

```bash
# 포트 열기
firewall-cmd --zone=public --add-port=8080/tcp --permanent

# 포트 확인
firewall-cmd --zone=public --list-ports

# 포트 닫기
firewall-cmd --zone=public --remove-port=8080/tcp --permanent

# 설정 적용
firewall-cmd --reload
```

### 서비스 관리

```bash
# 서비스 허용
firewall-cmd --zone=public --add-service=http --permanent

# 서비스 목록 확인
firewall-cmd --zone=public --list-services
```

---

## 2. JAVA_HOME 설정

**작성일**: 2021.01.14

### 설정 단계

#### 1단계: JAVAC 경로 확인
```bash
which javac
```

#### 1.1단계: 원본 파일 경로 확인
심볼릭 링크의 실제 경로 파악:
```bash
readlink -f [javac 경로]
```

#### 2단계: JAVA_HOME 설정
```bash
vi /etc/profile
```

파일 하단에 추가:
```bash
export JAVA_HOME=/app/jdk1.8.0_271
export PATH=$PATH:$JAVA_HOME/bin
```

#### 3단계: 설정 확인
```bash
# 설정 적용
source /etc/profile

# 환경변수 확인
echo $JAVA_HOME
```

---

## 3. Cannot allocate memory 오류 해결

**작성일**: 2022.10.05

### 문제 상황
- **환경**: AWS EC2 t3.small 인스턴스
- **상황**: 3개의 Java 애플리케이션 운영 중
- **증상**: 사용량 증가에 따라 메모리 부족 오류 발생

### 진단

#### JVM 모니터링
```bash
jps
```
Java 프로세스 상태 확인

### 해결 방법: Swap 메모리 설정

부족한 RAM을 HDD로 대체하는 방식

#### 1단계: 스왑 파일 생성
```bash
# 2GB 스왑 파일 생성
sudo fallocate -l 2G /swapfile

# 권한 설정
sudo chmod 600 /swapfile
```

#### 2단계: 스왑 활성화
```bash
# 스왑 영역 설정
sudo mkswap /swapfile

# 스왑 활성화
sudo swapon /swapfile
```

#### 3단계: 설정 확인
```bash
# 메모리 상태 확인
free -h
```

#### 4단계: 영구 설정 (선택)
```bash
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

## 유용한 Linux 명령어

### 시스템 정보

```bash
# 메모리 확인
free -h

# 디스크 사용량
df -h

# CPU 정보
cat /proc/cpuinfo

# OS 버전
cat /etc/os-release
```

### 프로세스 관리

```bash
# 프로세스 목록
ps aux

# 특정 프로세스 검색
ps aux | grep java

# 프로세스 종료
kill -9 [PID]
```

### 네트워크

```bash
# 포트 사용 확인
netstat -tlnp

# 특정 포트 확인
lsof -i :[port]
```

---

**태그**: `Linux`, `CentOS`, `방화벽`, `JAVA_HOME`, `메모리`
