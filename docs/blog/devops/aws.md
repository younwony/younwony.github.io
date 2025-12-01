# AWS 관련 포스트

> **블로그 원문**: https://youn12.tistory.com/category/AWS
> **서비스**: EC2, Route 53

---

## 개요

AWS 서비스 사용 중 겪은 이슈와 해결 방법을 정리한 포스트입니다.

---

## EC2 ec2-user 디렉토리 복구

**작성일**: 2022.08.19

### 문제 상황
실수로 ec2-user 홈 디렉토리를 삭제하여 SSH 접속 불가

### 증상
- SSH 접속 시 인증 오류 발생
- .ssh 디렉토리와 authorized_keys 파일 손실

### 해결 방법

#### 방법 1: rsync를 이용한 복구
다른 정상적인 EC2 인스턴스에서 설정 파일 복사

#### 방법 2: 수동 복구

1. **EC2 콘솔에서 접근**
   - EC2 직렬 콘솔 또는 Systems Manager Session Manager 사용

2. **.ssh 디렉토리 생성**
   ```bash
   mkdir -p /home/ec2-user/.ssh
   ```

3. **authorized_keys 파일 복구**
   ```bash
   # 퍼블릭 키 복사
   echo "[YOUR_PUBLIC_KEY]" > /home/ec2-user/.ssh/authorized_keys
   ```

4. **권한 설정**
   ```bash
   # .ssh 디렉토리 권한
   chmod 700 /home/ec2-user/.ssh

   # authorized_keys 파일 권한
   chmod 600 /home/ec2-user/.ssh/authorized_keys

   # 소유자 설정
   chown -R ec2-user:ec2-user /home/ec2-user/.ssh
   ```

### 핵심 포인트

| 항목 | 권한 |
|------|------|
| .ssh 디렉토리 | 700 (drwx------) |
| authorized_keys | 600 (-rw-------) |

### 예방 조치

1. **정기 백업**
   - AMI 스냅샷 생성
   - 중요 설정 파일 백업

2. **IAM 역할 활용**
   - Systems Manager 접근 권한 설정
   - Session Manager를 통한 대체 접속 경로 확보

3. **주의 사항**
   ```bash
   # 홈 디렉토리 삭제 시 주의!
   rm -rf ~  # 절대 하지 말 것!
   ```

---

## AWS 관련 추가 포스트

### ddangbbo 프로젝트 (별도 문서)

프로젝트 카테고리에서 AWS 관련 내용을 다룹니다:

1. **EC2 생성** - 인스턴스 생성 및 기본 설정
2. **MySQL 설치** - EC2에 MySQL 설치 및 보안 그룹 설정
3. **Route 53 도메인** - 도메인 등록 및 연결

자세한 내용은 [프로젝트 문서](../project/ddangbbo.md) 참조

---

## 유용한 AWS CLI 명령어

### EC2

```bash
# 인스턴스 목록
aws ec2 describe-instances

# 인스턴스 시작
aws ec2 start-instances --instance-ids i-xxxx

# 인스턴스 중지
aws ec2 stop-instances --instance-ids i-xxxx

# 보안 그룹 확인
aws ec2 describe-security-groups
```

### S3

```bash
# 버킷 목록
aws s3 ls

# 파일 업로드
aws s3 cp file.txt s3://bucket-name/

# 파일 다운로드
aws s3 cp s3://bucket-name/file.txt ./
```

---

**태그**: `AWS`, `EC2`, `SSH`, `보안`
