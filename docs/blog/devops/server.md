# Server 관련 포스트

> **블로그 원문**: https://youn12.tistory.com/category/Server
> **서버**: Nginx, Tomcat

---

## 개요

웹 서버(Nginx, Tomcat) 설정 및 운영 관련 포스트들입니다.

---

## 목차

1. [Tomcat 포트 충돌 해결](#1-tomcat-포트-충돌-해결)
2. [Nginx 서버 점검 JSON 응답](#2-nginx-서버-점검-json-응답)

---

## 1. Tomcat 포트 충돌 해결

**작성일**: 2020.10.30
**환경**: Windows

### 문제 상황
Tomcat이 제대로 종료되지 않아 포트가 점유된 상태로 남음

### 해결 방법

#### 1단계: 포트 사용 프로세스 확인
```cmd
netstat -ano | findstr [포트번호]
```

예시:
```cmd
netstat -ano | findstr 8080
```

#### 2단계: PID 확인
출력 결과에서 마지막 숫자가 PID (Process ID)

#### 3단계: 프로세스 종료
```cmd
taskkill /F /PID [PID번호]
```

예시:
```cmd
taskkill /F /PID 12345
```

### 참고: Linux에서의 처리

```bash
# 포트 사용 확인
lsof -i :[포트번호]

# 또는
netstat -tlnp | grep [포트번호]

# 프로세스 종료
kill -9 [PID]
```

---

## 2. Nginx 서버 점검 JSON 응답

**작성일**: 2022.08.03

### 배경
데이터베이스 업데이트 중 서버 다운 시 점검 페이지 필요

> "Front, Android, AOS 각 Client가 있기에 Html이 아닌 Json 형식으로 필요 변수들을 내려주었다"

### 구현 방법

#### 1단계: 점검 JSON 파일 생성

**경로**: `/home/maintenance/maintenance.json`

```json
{
  "name": "점검중",
  "start-time": "2022.08.03 11:00:00",
  "end-time": "2022.08.03 16:00:00"
}
```

#### 2단계: Nginx Config 설정

**경로**: `/etc/nginx/maintenance.conf`

```nginx
# 점검 파일 존재 여부로 점검 상태 판별
set $maintenance 0;

if (-f /home/maintenance/maintenance.json) {
    set $maintenance 1;
}

# 점검 중일 시 503 상태코드 반환
if ($maintenance = 1) {
    return 503;
}

# 점검 경로 접근 시 JSON 응답
error_page 503 @maintenance;

location @maintenance {
    add_header Retry-After 3600;
    add_header Content-Type application/json;

    root /home/maintenance;
    rewrite ^(.*)$ /maintenance.json break;
}
```

#### 3단계: 실제 Config에 포함

```nginx
# nginx.conf 또는 site config
include /etc/nginx/maintenance.conf;
```

### 핵심 기능

| 기능 | 설명 |
|------|------|
| 점검 상태 판별 | JSON 파일 존재 여부로 자동 판별 |
| HTTP 상태 코드 | 503 (Service Unavailable) |
| 응답 형식 | JSON |
| Retry-After | 재시도 시간 헤더 포함 |

### 점검 모드 전환

```bash
# 점검 모드 시작
touch /home/maintenance/maintenance.json
# JSON 내용 작성

# 점검 모드 종료
rm /home/maintenance/maintenance.json
```

---

## 유용한 서버 명령어

### Nginx

```bash
# 설정 테스트
nginx -t

# 재시작
systemctl restart nginx

# 설정 리로드 (무중단)
systemctl reload nginx

# 상태 확인
systemctl status nginx
```

### Tomcat

```bash
# 시작
./startup.sh

# 종료
./shutdown.sh

# 로그 확인
tail -f logs/catalina.out
```

---

**태그**: `Nginx`, `Tomcat`, `Server`, `점검페이지`
