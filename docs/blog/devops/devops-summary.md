# DevOps 실무 경험 정리

> **카테고리**: AWS, Database, IDE, Linux, Server
> **실무 경험 기반**: 문제 해결 및 설정 가이드

---

## 📚 목차

1. [AWS 관련](#aws-관련)
2. [Database 관련](#database-관련)
3. [IDE 및 개발 도구](#ide-및-개발-도구)
4. [Linux 서버 관리](#linux-서버-관리)
5. [Server 설정](#server-설정)

---

## AWS 관련

### EC2 ec2-user 디렉토리 복구 ⭐⭐⭐

**작성일**: 2022.08.19

#### 문제 상황
> 실수로 ec2-user 홈 디렉토리를 삭제하여 SSH 접속 불가

#### 증상
```bash
# SSH 접속 시도
ssh ec2-user@ec2-xx-xx-xx-xx.compute.amazonaws.com

# 에러 발생
Permission denied (publickey)
```

#### 원인 분석
- `.ssh` 디렉토리 삭제
- `authorized_keys` 파일 손실
- SSH 키 인증 실패

---

#### 해결 방법

##### 방법 1: EC2 콘솔 접근
1. **EC2 직렬 콘솔** 또는 **Systems Manager Session Manager** 사용
2. root 권한으로 접속

##### 방법 2: 수동 복구 (단계별)

**1단계: .ssh 디렉토리 생성**
```bash
sudo mkdir -p /home/ec2-user/.ssh
```

**2단계: authorized_keys 파일 복구**
```bash
# 로컬에서 공개 키 확인
cat ~/.ssh/id_rsa.pub

# EC2에서 authorized_keys 생성
sudo vi /home/ec2-user/.ssh/authorized_keys
# 공개 키 내용 붙여넣기
```

**3단계: 권한 설정 (매우 중요!)**
```bash
# .ssh 디렉토리 권한
sudo chmod 700 /home/ec2-user/.ssh

# authorized_keys 파일 권한
sudo chmod 600 /home/ec2-user/.ssh/authorized_keys

# 소유자 설정
sudo chown -R ec2-user:ec2-user /home/ec2-user/.ssh
```

**4단계: 검증**
```bash
# 권한 확인
ls -la /home/ec2-user/.ssh/

# 출력 예시:
# drwx------ 2 ec2-user ec2-user 4096 Aug 19 10:00 .
# -rw------- 1 ec2-user ec2-user  400 Aug 19 10:00 authorized_keys
```

---

#### 권한 체크리스트

| 항목 | 권한 | 소유자 | 필수 여부 |
|------|------|--------|----------|
| `/home/ec2-user` | 755 또는 700 | ec2-user:ec2-user | ✅ |
| `.ssh/` 디렉토리 | **700** | ec2-user:ec2-user | ⭐ |
| `authorized_keys` | **600** | ec2-user:ec2-user | ⭐ |

---

#### 예방 조치

##### 1. 정기 백업
```bash
# AMI 스냅샷 생성
aws ec2 create-image \
    --instance-id i-xxxxx \
    --name "backup-$(date +%Y%m%d)"

# .ssh 디렉토리 백업
tar -czf ssh-backup.tar.gz ~/.ssh/
```

##### 2. IAM 역할 설정
- Systems Manager 접근 권한 부여
- Session Manager 활성화
- EC2 직렬 콘솔 활성화

##### 3. 주의 명령어
```bash
# ❌ 절대 실행하지 말 것!
rm -rf ~  # 홈 디렉토리 삭제
rm -rf /home/ec2-user  # ec2-user 디렉토리 삭제

# ✅ 안전한 삭제
rm -i file.txt  # 삭제 전 확인
```

---

### AWS CLI 유용한 명령어

#### EC2 관리
```bash
# 인스턴스 목록 조회
aws ec2 describe-instances

# 인스턴스 시작
aws ec2 start-instances --instance-ids i-xxxxx

# 인스턴스 중지
aws ec2 stop-instances --instance-ids i-xxxxx

# 보안 그룹 확인
aws ec2 describe-security-groups --group-ids sg-xxxxx

# AMI 생성
aws ec2 create-image \
    --instance-id i-xxxxx \
    --name "MyAMI"
```

#### S3 관리
```bash
# 버킷 목록
aws s3 ls

# 파일 업로드
aws s3 cp file.txt s3://bucket-name/

# 파일 다운로드
aws s3 cp s3://bucket-name/file.txt ./

# 동기화
aws s3 sync ./local-dir s3://bucket-name/
```

---

## Database 관련

### MySQL 설치 및 설정

**참고**: [ddangbbo 프로젝트 - MySQL 설치](../project/ddangbbo-summary.md#2-mysql-설치-및-설정)

#### 기본 명령어
```bash
# MySQL 접속
mysql -u root -p

# 데이터베이스 생성
CREATE DATABASE mydb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# 사용자 생성 및 권한 부여
CREATE USER 'myuser'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON mydb.* TO 'myuser'@'%';
FLUSH PRIVILEGES;

# 데이터베이스 백업
mysqldump -u root -p mydb > backup.sql

# 복원
mysql -u root -p mydb < backup.sql
```

#### 성능 튜닝
```sql
-- 느린 쿼리 확인
SHOW VARIABLES LIKE 'slow_query_log%';

-- 인덱스 확인
SHOW INDEX FROM table_name;

-- 쿼리 실행 계획
EXPLAIN SELECT * FROM table_name WHERE column = 'value';
```

---

## IDE 및 개발 도구

### IntelliJ IDEA 유용한 단축키

#### 코드 작성
| 단축키 | 기능 |
|--------|------|
| `psvm` + Tab | `public static void main` 자동 완성 |
| `sout` + Tab | `System.out.println()` |
| `itar` | for 반복문 (배열 인덱스) |
| `iter` | for-each 반복문 |
| `Ctrl + Space` | 코드 완성 |
| `Ctrl + Shift + Enter` | 구문 완성 |

#### 리팩토링
| 단축키 | 기능 |
|--------|------|
| `Ctrl + Alt + V` | 변수 추출 |
| `Ctrl + Alt + M` | 메서드 추출 |
| `Shift + F6` | 이름 변경 |
| `Ctrl + Alt + L` | 코드 포맷팅 |

---

### Git 유용한 명령어

#### 기본 작업
```bash
# 상태 확인
git status

# 변경사항 확인
git diff

# 커밋
git add .
git commit -m "message"

# 푸시
git push origin main

# 풀
git pull origin main
```

#### 고급 작업
```bash
# 특정 파일 변경 취소
git checkout -- file.txt

# 마지막 커밋 취소 (변경사항 유지)
git reset --soft HEAD~1

# 마지막 커밋 취소 (변경사항 삭제)
git reset --hard HEAD~1

# 특정 커밋으로 되돌리기
git revert commit-hash

# 브랜치 작업
git branch feature-branch
git checkout feature-branch
git merge feature-branch
```

---

## Linux 서버 관리

### 기본 명령어

#### 파일/디렉토리 관리
```bash
# 파일 목록
ls -la

# 디렉토리 생성
mkdir -p /path/to/directory

# 파일 복사
cp source.txt destination.txt

# 파일 이동
mv old.txt new.txt

# 파일 삭제
rm -f file.txt

# 디렉토리 삭제
rm -rf directory/
```

#### 권한 관리
```bash
# 권한 변경
chmod 755 file.sh
chmod u+x file.sh

# 소유자 변경
chown user:group file.txt

# 권한 확인
ls -l file.txt
# -rwxr-xr-x 1 user group 1234 Nov 30 10:00 file.txt
#  ↑ ↑ ↑ ↑
#  | | | +-- 기타 (r-x = 읽기+실행)
#  | | +---- 그룹 (r-x = 읽기+실행)
#  | +------ 소유자 (rwx = 읽기+쓰기+실행)
#  +-------- 파일 타입 (- = 일반 파일, d = 디렉토리)
```

#### 프로세스 관리
```bash
# 프로세스 목록
ps aux

# 특정 프로세스 찾기
ps aux | grep java

# 프로세스 종료
kill -9 PID

# 백그라운드 실행
nohup java -jar app.jar &

# 실행 중인 포트 확인
netstat -tuln | grep 8080
lsof -i :8080
```

---

### 시스템 모니터링

#### 리소스 확인
```bash
# CPU/메모리 사용률
top
htop

# 디스크 사용량
df -h

# 디렉토리 크기
du -sh /path/to/directory

# 메모리 상태
free -h

# 시스템 정보
uname -a
cat /etc/os-release
```

#### 로그 확인
```bash
# 실시간 로그 확인
tail -f /var/log/application.log

# 최근 100줄
tail -n 100 /var/log/application.log

# 로그 검색
grep "ERROR" /var/log/application.log

# 여러 파일 검색
grep -r "ERROR" /var/log/
```

---

## Server 설정

### systemd 서비스 등록

#### 서비스 파일 생성
```bash
sudo vi /etc/systemd/system/myapp.service
```

```ini
[Unit]
Description=My Application
After=network.target

[Service]
Type=simple
User=ec2-user
WorkingDirectory=/home/ec2-user/app
ExecStart=/usr/bin/java -jar /home/ec2-user/app/app.jar
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

#### 서비스 관리
```bash
# 서비스 등록
sudo systemctl daemon-reload

# 서비스 시작
sudo systemctl start myapp

# 서비스 중지
sudo systemctl stop myapp

# 서비스 재시작
sudo systemctl restart myapp

# 부팅 시 자동 시작
sudo systemctl enable myapp

# 서비스 상태 확인
sudo systemctl status myapp

# 로그 확인
sudo journalctl -u myapp -f
```

---

### Nginx 설정

#### 리버스 프록시 설정
```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 정적 파일 서빙
    location /static/ {
        alias /var/www/static/;
    }
}
```

#### 명령어
```bash
# 설정 테스트
sudo nginx -t

# 재시작
sudo systemctl restart nginx

# 로그 확인
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

---

## 핵심 체크리스트

### 보안 체크리스트
- [ ] SSH 키 백업 완료
- [ ] 불필요한 포트 차단
- [ ] 보안 그룹 최소 권한 설정
- [ ] 정기 AMI 스냅샷
- [ ] 로그 모니터링 설정

### 운영 체크리스트
- [ ] systemd 서비스 등록
- [ ] 로그 로테이션 설정
- [ ] 디스크 사용량 모니터링
- [ ] 백업 자동화
- [ ] CI/CD 파이프라인 구축

---

## 참고 자료

- **AWS 공식 문서**: https://docs.aws.amazon.com/
- **Linux Command Line**: https://www.gnu.org/software/bash/manual/
- **systemd 가이드**: https://systemd.io/

---

**작성일**: 2025-11-30
**기반**: 12Dev 블로그 DevOps 관련 포스팅
