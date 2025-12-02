# ddangbbo - 모바일 청첩장 프로젝트

> **프로젝트 기간**: 2025.02.08 - 2025.03.04
> **프로젝트 유형**: 개인 프로젝트 (결혼 준비 웹 애플리케이션)
> **개발자**: 개발자 부부 협업

---

## 📋 프로젝트 개요

### 프로젝트 배경
결혼 준비 중인 개발자 부부가 직접 만든 **맞춤형 모바일 청첩장** 웹 애플리케이션입니다.

기존 청첩장 서비스의 제약과 템플릿의 한계를 극복하고, 본인들만의 독창적인 청첩장을 만들기 위해 직접 개발했습니다.

### 프로젝트 목표
- ✅ 모바일 최적화된 반응형 청첩장
- ✅ AWS 클라우드 인프라 기반 안정적인 서비스
- ✅ GitHub Actions를 통한 자동 배포
- ✅ 전체 개발 프로세스 경험 및 학습

---

## 🛠️ 기술 스택

### Backend
- **Framework**: Spring Boot
- **ORM**: JPA (Java Persistence API)
- **Language**: Java

### Frontend
- **Library**: jQuery
- **Language**: JavaScript
- **Styling**: HTML5, CSS3

### Database
- **RDBMS**: MySQL 8.0

### Infrastructure
- **Cloud Platform**: AWS
  - **EC2**: 애플리케이션 서버 호스팅
  - **Route 53**: 도메인 관리 및 DNS 설정
- **OS**: Linux (EC2 인스턴스)

### DevOps
- **CI/CD**: GitHub Actions
- **Version Control**: Git, GitHub
- **Deployment**: 자동 배포 파이프라인

---

## 📝 개발 과정 (5단계)

### [1단계] EC2 생성
**날짜**: 2025.02.08

#### 주요 작업
- AWS EC2 인스턴스 생성
- 인스턴스 타입 선택 및 설정
- 보안 그룹 구성 (포트 개방)
- 키 페어 생성 및 SSH 접속 설정

#### 학습 포인트
- AWS 클라우드 컴퓨팅 기본 개념
- 보안 그룹 및 방화벽 설정
- Linux 서버 원격 접속

---

### [2단계] MySQL 설치
**날짜**: 2025.02.09

#### 주요 작업
- EC2 환경에서 MySQL 8.0 설치
- MySQL 초기 설정 및 보안 구성
- 데이터베이스 및 사용자 생성
- 외부 접속 설정 (원격 개발 환경 구축)

#### 설치 과정
```bash
# MySQL 8.0 설치
sudo yum install mysql-server

# MySQL 시작 및 자동 시작 설정
sudo systemctl start mysqld
sudo systemctl enable mysqld

# 보안 설정
sudo mysql_secure_installation

# 데이터베이스 생성
CREATE DATABASE ddangbbo;

# 사용자 생성 및 권한 부여
CREATE USER 'ddangbbo_user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON ddangbbo.* TO 'ddangbbo_user'@'%';
FLUSH PRIVILEGES;
```

#### 학습 포인트
- Linux 환경에서 MySQL 설치 및 설정
- 데이터베이스 보안 모범 사례
- 원격 접속 설정 및 방화벽 구성

---

### [3단계] Route 53 도메인 구매
**날짜**: 2025.02.13

#### 주요 작업
- AWS Route 53을 통한 도메인 등록
- 청첩장 전용 도메인 선택 및 구매
- DNS 레코드 설정 (A 레코드, CNAME)
- EC2 인스턴스와 도메인 연결

#### 도메인 설정
- **A 레코드**: 도메인 → EC2 퍼블릭 IP 매핑
- **CNAME**: www 서브도메인 설정
- **TTL**: DNS 캐시 시간 최적화

#### 학습 포인트
- DNS 작동 원리 이해
- AWS Route 53 활용법
- 도메인과 서버 연결 프로세스

---

### [4단계] 프로젝트 개발
**날짜**: 2025.03.04

#### Backend 개발 (Spring Boot)
**구조**:
```
src/
├── main/
│   ├── java/
│   │   └── com.ddangbbo/
│   │       ├── controller/   # REST API 컨트롤러
│   │       ├── service/       # 비즈니스 로직
│   │       ├── repository/    # JPA 리포지토리
│   │       ├── entity/        # JPA 엔티티
│   │       └── dto/           # 데이터 전송 객체
│   └── resources/
│       ├── application.yml    # 설정 파일
│       └── static/            # 정적 리소스
```

**주요 기능**:
1. **초대장 정보 관리**
   - 신랑/신부 정보
   - 예식 장소 및 시간
   - 연락처 정보

2. **방명록 기능**
   - 축하 메시지 작성
   - 메시지 조회 (페이징)

3. **갤러리**
   - 사진 업로드 및 관리
   - 이미지 최적화

**JPA 엔티티 예시**:
```java
@Entity
@Table(name = "guestbook")
public class Guestbook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String message;

    @CreatedDate
    private LocalDateTime createdAt;
}
```

#### Frontend 개발 (jQuery)
**주요 페이지**:
- 메인 페이지 (초대 문구)
- 신랑/신부 소개
- 갤러리
- 오시는 길 (지도 API 연동)
- 방명록

**jQuery AJAX 통신**:
```javascript
// 방명록 작성
$('#guestbook-form').submit(function(e) {
    e.preventDefault();

    $.ajax({
        url: '/api/guestbook',
        method: 'POST',
        data: JSON.stringify({
            name: $('#name').val(),
            message: $('#message').val()
        }),
        contentType: 'application/json',
        success: function(response) {
            alert('축하 메시지가 등록되었습니다!');
            loadGuestbook();
        }
    });
});
```

#### 학습 포인트
- Spring Boot 풀스택 개발
- JPA를 활용한 데이터베이스 연동
- RESTful API 설계 및 구현
- jQuery를 통한 비동기 통신

---

### [5단계] GitHub Actions CI/CD
**날짜**: 프로젝트 개발 단계에서 병행

#### CI/CD 파이프라인 구성
**workflow 파일**:
```yaml
name: Deploy to EC2

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up JDK 11
      uses: actions/setup-java@v2
      with:
        java-version: '11'

    - name: Build with Gradle
      run: ./gradlew build

    - name: Deploy to EC2
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.EC2_HOST }}
        username: ${{ secrets.EC2_USER }}
        key: ${{ secrets.EC2_KEY }}
        script: |
          cd /home/ec2-user/ddangbbo
          git pull origin main
          ./gradlew build
          sudo systemctl restart ddangbbo
```

#### 자동화 프로세스
1. **코드 푸시** → GitHub main 브랜치
2. **빌드 트리거** → GitHub Actions 자동 실행
3. **빌드 & 테스트** → Gradle 빌드
4. **배포** → EC2 서버에 SSH 접속 후 배포
5. **서비스 재시작** → systemctl로 애플리케이션 재시작

#### 학습 포인트
- GitHub Actions 워크플로우 작성
- CI/CD 파이프라인 구축
- 자동 배포 시스템 구현
- Secret 관리 (AWS 키, SSH 키)

---

## 🎯 프로젝트 성과

### 기술적 성과
✅ **AWS 클라우드 인프라 구축**
- EC2 인스턴스 설정 및 운영
- Route 53 도메인 관리
- 클라우드 네이티브 애플리케이션 개발

✅ **풀스택 개발 경험**
- Spring Boot 백엔드 API 개발
- jQuery 프론트엔드 개발
- JPA를 활용한 데이터베이스 연동

✅ **CI/CD 자동화**
- GitHub Actions 기반 배포 자동화
- DevOps 프로세스 경험
- 운영 효율성 향상

✅ **실제 서비스 배포 및 운영**
- 프로덕션 환경 구축
- 실사용자 대상 서비스 제공
- 모니터링 및 유지보수

### 개인적 성과
🎉 **결혼식 성공적 진행**
- 개성 있는 맞춤형 청첩장
- 하객들의 긍정적 반응

💡 **학습 및 성장**
- 전체 개발 프로세스 경험
- 클라우드 인프라 실무 능력 향상
- 자동화 및 DevOps 역량 강화

---

## 📊 아키텍처 다이어그램

```
┌─────────────┐
│   사용자     │
└──────┬──────┘
       │ HTTPS
       │
       ▼
┌─────────────────┐
│  Route 53 (DNS) │
└────────┬────────┘
         │
         ▼
┌──────────────────────┐
│   AWS EC2 Instance   │
│  ┌────────────────┐  │
│  │  Spring Boot   │  │
│  │  Application   │  │
│  └────────┬───────┘  │
│           │          │
│  ┌────────▼───────┐  │
│  │  MySQL 8.0     │  │
│  │  Database      │  │
│  └────────────────┘  │
└──────────────────────┘
         ▲
         │
┌────────┴────────┐
│  GitHub Actions │
│  (CI/CD)        │
└─────────────────┘
```

---

## 🔍 기술적 도전과 해결

### Challenge 1: MySQL 외부 접속 설정
**문제**: 로컬 개발 환경에서 EC2 MySQL 접속 불가

**해결**:
1. MySQL 사용자 호스트를 `localhost`에서 `%`로 변경
2. EC2 보안 그룹에 3306 포트 개방
3. MySQL 설정 파일 `bind-address` 수정

### Challenge 2: 도메인 연결 지연
**문제**: Route 53 도메인 설정 후 접속 불가

**해결**:
- DNS 전파 시간 대기 (최대 48시간)
- nslookup으로 DNS 전파 확인
- 브라우저 캐시 클리어

### Challenge 3: CI/CD SSH 인증 문제
**문제**: GitHub Actions에서 EC2 SSH 접속 실패

**해결**:
- GitHub Secrets에 SSH 키 등록
- SSH 키 권한 설정 (chmod 600)
- known_hosts 자동 추가 설정

---

## 💡 학습 포인트 정리

### AWS 클라우드
- ✅ EC2 인스턴스 생성 및 관리
- ✅ Route 53 DNS 설정
- ✅ 보안 그룹 및 네트워크 구성

### Backend 개발
- ✅ Spring Boot 애플리케이션 개발
- ✅ JPA 엔티티 설계 및 리포지토리 패턴
- ✅ RESTful API 설계

### Database
- ✅ MySQL 설치 및 운영
- ✅ 데이터베이스 보안 설정
- ✅ JPA를 통한 ORM

### DevOps
- ✅ GitHub Actions CI/CD 파이프라인
- ✅ 자동 배포 스크립트 작성
- ✅ Linux 서버 운영

---

## 🚀 향후 개선 사항

### 기능 개선
- [ ] 관리자 페이지 추가
- [ ] 모바일 UX 최적화
- [ ] 사진 업로드 기능 강화
- [ ] 방명록 스팸 필터링

### 기술 개선
- [ ] HTTPS 적용 (Let's Encrypt)
- [ ] CDN 도입 (CloudFront)
- [ ] 데이터베이스 백업 자동화
- [ ] 모니터링 시스템 구축 (CloudWatch)

### 성능 개선
- [ ] 이미지 최적화 (WebP 변환)
- [ ] 캐싱 전략 (Redis)
- [ ] 로드 밸런싱 (다중 인스턴스)

---

## 📚 참고 자료

- **원본 블로그 포스팅**:
  - [[프로젝트 - ddangbbo] 모바일 청첩장](https://youn12.tistory.com/)
  - [[프로젝트 - ddangbbo] 1 - EC2 생성](https://youn12.tistory.com/)
  - [[프로젝트 - ddangbbo] 2 - Mysql 설치](https://youn12.tistory.com/)
  - [[프로젝트 - ddangbbo] 3 - Route 53 도메인 구매](https://youn12.tistory.com/)
  - [[프로젝트 - ddangbbo] 4 - 프로젝트 개발](https://youn12.tistory.com/)

- **기술 문서**:
  - [Spring Boot 공식 문서](https://spring.io/projects/spring-boot)
  - [AWS EC2 사용자 가이드](https://docs.aws.amazon.com/ec2/)
  - [GitHub Actions 문서](https://docs.github.com/en/actions)

---

## 🏆 프로젝트 요약

ddangbbo 프로젝트는 단순한 웹 애플리케이션 개발을 넘어, **전체 소프트웨어 개발 생명주기(SDLC)**를 경험한 의미 있는 프로젝트였습니다.

**핵심 성과**:
1. AWS 클라우드 인프라 구축 및 운영 경험
2. Spring Boot 풀스택 개발 능력 향상
3. CI/CD 자동화 파이프라인 구축
4. 실제 사용자 대상 서비스 배포 및 운영

이 프로젝트를 통해 **개발자로서의 엔드투엔드 역량**을 크게 향상시킬 수 있었으며, 특히 **DevOps 및 클라우드 인프라 영역**에서 실무 경험을 쌓을 수 있었습니다.

---

**프로젝트 기간**: 2025.02.08 - 2025.03.04
**문서 작성일**: 2025-11-30
**작성자**: 윤원희 (12Dev 블로그 기반)
