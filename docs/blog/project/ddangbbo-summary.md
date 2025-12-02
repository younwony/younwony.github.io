# ddangbbo 모바일 청첩장 프로젝트 완벽 정리

> **프로젝트명**: ddangbbo (땅뽀)
> **기간**: 2025.02 ~ 2025.03
> **목적**: 개발자 부부의 결혼 준비 프로젝트
> **포스팅 수**: 5개

---

## 📚 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [인프라 구축](#인프라-구축)
4. [주요 기능](#주요-기능)
5. [회고](#회고)

---

## 프로젝트 개요

### 배경
> "기나긴 결혼 준비 중 개발자 부부로서, 결혼 과정 중 하나쯤은 개발과 관련된 컨텐츠를 만들어보고자 모바일 청첩장을 만들게 되었다"

### 프로젝트명 유래
**ddangbbo** = 땅(남편) + 뽀(아내)의 애칭 조합

### 프로젝트 목표
- 실제 사용 가능한 모바일 청첩장 제작
- AWS 인프라 구축 경험
- Spring Boot + JPA 실무 적용
- CI/CD 파이프라인 구축

---

## 기술 스택

### Backend
- **Framework**: Spring Boot
- **ORM**: JPA (Java Persistence API)
- **Database**: MySQL
- **Build Tool**: Gradle/Maven

### Frontend
- **Core**: HTML5, CSS3, JavaScript
- **Library**: jQuery
- **Animation**: CSS3 Animations

### DevOps
- **CI/CD**: GitHub Actions
- **Cloud**: AWS
  - EC2 (서버)
  - RDS (MySQL) → EC2 내 MySQL로 변경
  - Route 53 (도메인)
- **Version Control**: Git/GitHub

### 아키텍처
```
사용자 (모바일 브라우저)
         ↓
   AWS Route 53 (ddangbbo 도메인)
         ↓
      AWS EC2
    ├── Spring Boot App
    └── MySQL Database
         ↑
   GitHub Actions (CI/CD)
```

---

## 인프라 구축

### 1. EC2 인스턴스 생성 ⭐
**작성일**: 2025.02.08

#### 선택 이유
- 회사에서 AWS 사용 중 → 실무 경험 확장
- AWS 지식 강화 목표

#### 구성 내용
- **인스턴스 타입**: t2.micro (프리티어)
- **운영체제**: Amazon Linux 2
- **네트워킹**: VPC, 보안 그룹 설정
- **스토리지**: EBS 볼륨

#### 보안 그룹 설정
| 타입 | 프로토콜 | 포트 | 소스 |
|------|---------|------|------|
| SSH | TCP | 22 | My IP |
| HTTP | TCP | 80 | 0.0.0.0/0 |
| HTTPS | TCP | 443 | 0.0.0.0/0 |
| Custom | TCP | 8080 | 0.0.0.0/0 |

---

### 2. MySQL 설치 및 설정 ⭐⭐
**작성일**: 2025.02.09

#### 설치 과정
```bash
# 1. MySQL 리포지토리 추가
sudo wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm

# 2. GPG key 설정
sudo rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022

# 3. 리포지토리 설치
sudo rpm -ivh mysql80-community-release-el7-3.noarch.rpm

# 4. MySQL 서버 설치
sudo yum install mysql-server

# 5. 설치 확인
mysql --version

# 6. MySQL 서버 시작
sudo systemctl start mysqld
sudo systemctl enable mysqld

# 7. 초기 비밀번호 확인
sudo grep 'temporary password' /var/log/mysqld.log
```

#### 보안 설정
```sql
-- 1. root 비밀번호 변경
ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewPassword123!';

-- 2. 데이터베이스 생성
CREATE DATABASE ddangbbo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 3. 사용자 생성 및 권한 부여
CREATE USER 'ddangbbo_user'@'%' IDENTIFIED BY 'UserPassword123!';
GRANT ALL PRIVILEGES ON ddangbbo.* TO 'ddangbbo_user'@'%';
FLUSH PRIVILEGES;
```

#### EC2 보안 그룹 추가 설정
- **타입**: MySQL/Aurora
- **프로토콜**: TCP
- **포트**: 3306
- **소스**: 0.0.0.0/0 (개발용, 운영 시 제한 필요)

---

### 3. Route 53 도메인 구매 ⭐⭐
**작성일**: 2025.02.13

#### 목적
> "청첩장 URL을 의미 있게 하고자 도메인을 등록"

#### 도메인 선택 과정
1. AWS Route 53 콘솔 접속
2. 도메인 검색: "ddangbbo"
3. 사용 가능 확인 및 결제
4. 도메인 등록 완료

#### DNS 설정
```
레코드 타입: A
이름: www.ddangbbo.com
값: [EC2 퍼블릭 IP]
TTL: 300초
```

#### 비용
- 도메인 연간 등록비: 약 $12 (도메인에 따라 상이)

---

### 4. GitHub Actions CI/CD 구성 ⭐⭐⭐
**작성일**: (암묵적으로 포함됨)

#### Workflow 파일
```yaml
# .github/workflows/deploy.yml
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
        username: ec2-user
        key: ${{ secrets.EC2_SSH_KEY }}
        script: |
          cd /home/ec2-user/ddangbbo
          git pull origin main
          ./gradlew build
          sudo systemctl restart ddangbbo
```

#### 배포 자동화 흐름
```
코드 커밋 (main 브랜치)
    ↓
GitHub Actions 트리거
    ↓
빌드 (Gradle)
    ↓
EC2 SSH 접속
    ↓
코드 풀 + 재빌드
    ↓
애플리케이션 재시작
    ↓
배포 완료
```

---

## 주요 기능

### 1. Welcome Section ⭐⭐⭐
**구현 내용**
- 메인 웨딩 사진 표시
- **애니메이션**: 떨어지는 벚꽃 효과
  - CSS3 keyframes 활용
  - 랜덤한 위치와 속도로 자연스러운 효과

```css
@keyframes falling {
    0% {
        top: -10%;
        opacity: 1;
    }
    100% {
        top: 110%;
        opacity: 0;
    }
}

.cherry-blossom {
    animation: falling linear infinite;
    animation-duration: 8s;
}
```

---

### 2. Greeting Messages ⭐
**구현 내용**
- 하객 그룹별 맞춤 메시지 표시
- URL 파라미터 기반 메시지 변경
- 예시: `?group=family`, `?group=friend`

**기술 구현**
```javascript
const urlParams = new URLSearchParams(window.location.search);
const group = urlParams.get('group');
const message = getGreetingByGroup(group);
```

---

### 3. Photo Slideshow ⭐⭐
**구현 내용**
- 약 30장의 웨딩 사진 슬라이드쇼
- 자동 재생 + 수동 네비게이션
- 터치 스와이프 지원 (모바일)

**기술 스택**
- jQuery로 슬라이드 효과 구현
- CSS transition

---

### 4. Making Film ⭐⭐⭐
**구현 내용**
- 아내가 직접 편집한 웨딩 비디오
- HTML5 video 태그 활용
- 반응형 비디오 플레이어

```html
<video controls>
    <source src="wedding-video.mp4" type="video/mp4">
</video>
```

---

### 5. Calendar (D-Day Counter) ⭐⭐
**구현 내용**
- 손으로 그린 결혼식 날짜 표시
- 실시간 카운트다운 타이머

**JavaScript 로직**
```javascript
function updateDday() {
    const weddingDate = new Date('2025-03-15');
    const today = new Date();
    const diff = weddingDate - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById('d-day').innerText = `D-${days}`;
}

setInterval(updateDday, 1000);
```

---

### 6. Navigation ⭐⭐⭐
**구현 내용**
- 네이버 지도 연동
- Tmap 연동
- 카카오맵 연동
- 각 앱 딥링크 활용

```javascript
// 네이버 지도 열기
window.open('nmap://place?lat=37.5665&lng=126.9780');

// 카카오맵 열기
window.open('kakaomap://look?p=37.5665,126.9780');

// Tmap 열기
window.open('tmap://route?goalx=126.9780&goaly=37.5665');
```

---

### 7. Directions ⭐⭐
**구현 내용**
- 지역별 상세 교통 안내
- 지하철, 버스, 자가용 경로 안내
- 아코디언 UI로 접기/펼치기

---

### 8. Ceremony Information ⭐
**구현 내용**
- 식사 장소 및 시간
- 주차 안내
- 기타 참고사항

---

### 9. Congratulations Messages (방명록) ⭐⭐⭐
**구현 내용**
- 하객 축하 메시지 작성 기능
- Spring Boot + JPA 활용
- 실시간 메시지 목록 표시

#### 백엔드 API
```java
@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @PostMapping
    public ResponseEntity<Message> createMessage(@RequestBody MessageDto dto) {
        Message message = messageService.save(dto);
        return ResponseEntity.ok(message);
    }

    @GetMapping
    public ResponseEntity<List<Message>> getMessages() {
        return ResponseEntity.ok(messageService.findAll());
    }
}
```

#### 엔티티 설계
```java
@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String content;

    @CreatedDate
    private LocalDateTime createdAt;
}
```

---

### 10. Thanks & Sharing ⭐⭐
**구현 내용**
- 맞춤 감사 메시지
- **카카오톡 공유** 기능
- URL 복사 기능

#### 카카오톡 공유 API
```javascript
Kakao.init('YOUR_API_KEY');

function shareKakao() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '땅과 뽀의 결혼식에 초대합니다',
            description: '2025년 3월 15일 오후 1시',
            imageUrl: 'https://ddangbbo.com/images/main.jpg',
            link: {
                mobileWebUrl: 'https://ddangbbo.com',
                webUrl: 'https://ddangbbo.com'
            }
        }
    });
}
```

---

## 기술적 도전과 해결

### 도전 1: 모바일 최적화 ⭐⭐⭐
**문제**
- 다양한 모바일 기기 대응
- 로딩 속도 최적화

**해결**
- 반응형 디자인 (미디어 쿼리)
- 이미지 레이지 로딩
- CDN 활용 (Bootstrap, jQuery)

```css
/* 모바일 우선 설계 */
.container {
    width: 100%;
    padding: 15px;
}

@media (min-width: 768px) {
    .container {
        max-width: 750px;
    }
}
```

---

### 도전 2: 벚꽃 애니메이션 성능 ⭐⭐
**문제**
- 많은 수의 벚꽃 요소로 인한 성능 저하

**해결**
- CSS3 애니메이션 활용 (GPU 가속)
- 벚꽃 개수 제한 (10~15개)
- `will-change` 속성 사용

```css
.cherry-blossom {
    will-change: transform, opacity;
    transform: translateZ(0);  /* GPU 가속 */
}
```

---

### 도전 3: CI/CD 구축 ⭐⭐⭐
**문제**
- 수동 배포의 번거로움
- 배포 중 다운타임 발생

**해결**
- GitHub Actions 자동 배포
- 무중단 배포 전략 (blue-green 간소화 버전)
- systemd 활용한 자동 재시작

```bash
# systemd 서비스 파일
[Unit]
Description=Ddangbbo Wedding Service

[Service]
User=ec2-user
ExecStart=/usr/bin/java -jar /home/ec2-user/ddangbbo/build/libs/ddangbbo.jar
Restart=always

[Install]
WantedBy=multi-user.target
```

---

## 프로젝트 회고

### 기술적 성과 ✅

#### Backend
- Spring Boot + JPA 프로젝트 구조 설계 경험
- RESTful API 설계 및 구현
- 트랜잭션 관리 이해

#### Frontend
- jQuery를 활용한 DOM 조작
- CSS3 애니메이션 고급 활용
- 모바일 반응형 디자인

#### DevOps
- AWS 인프라 구축 경험 (EC2, Route 53)
- GitHub Actions CI/CD 파이프라인 구축
- 리눅스 서버 관리 (systemd, nginx)

#### Database
- MySQL 설치 및 설정
- JPA 엔티티 설계
- 데이터 영속성 관리

---

### 개인적 의미 ⭐⭐⭐
- **협업**: 개발자 부부가 함께 만든 프로젝트
- **실용성**: 실제 결혼식에서 사용된 결과물
- **추억**: 평생 기억에 남을 프로젝트

---

### 배운 점 📚

#### 1. 전체 개발 프로세스 경험
```
기획 → 설계 → 개발 → 배포 → 운영
```
End-to-End 경험 획득

#### 2. 클라우드 인프라 이해
- AWS 서비스 조합 능력
- 비용 최적화 고려 (프리티어 활용)
- 보안 그룹 설정

#### 3. 사용자 중심 개발
- 모바일 사용자 경험 최적화
- 빠른 로딩 속도 중요성
- 직관적인 UI/UX

---

### 아쉬운 점 ❌

#### 1. 테스트 코드 부재
- 시간 제약으로 테스트 코드 미작성
- 향후 유지보수 시 어려움 예상

#### 2. 보안 강화 필요
- MySQL 포트 전체 공개 (0.0.0.0/0)
- HTTPS 미적용
- 입력 검증 강화 필요

#### 3. 성능 모니터링 부족
- 로그 수집 체계 미흡
- 성능 메트릭 미측정

---

### 향후 개선 방향 🎯

#### 단기 목표
1. ✅ HTTPS 적용 (Let's Encrypt)
2. ✅ 보안 그룹 강화 (IP 제한)
3. ✅ 이미지 최적화 (WebP 변환)

#### 중기 목표
1. 📋 테스트 코드 작성 (JUnit, Mockito)
2. 📋 로깅 체계 구축 (ELK Stack)
3. 📋 성능 모니터링 (CloudWatch)

#### 장기 목표
1. 🎯 백엔드 리팩토링 (클린 아키텍처)
2. 🎯 프론트엔드 현대화 (React/Vue)
3. 🎯 마이크로서비스 전환 검토

---

## 핵심 기술 정리

### Spring Boot 활용
```java
@SpringBootApplication
public class DdangbboApplication {
    public static void main(String[] args) {
        SpringApplication.run(DdangbboApplication.class, args);
    }
}
```

### JPA 영속성 관리
```java
@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findAllByOrderByCreatedAtDesc();
}
```

### jQuery 실전 활용
```javascript
// AJAX 요청
$.ajax({
    url: '/api/messages',
    method: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function(data) {
        console.log('메시지 저장 성공');
    }
});
```

---

## 참고 자료

- **프로젝트 블로그**: https://youn12.tistory.com/category/프로젝트
- **AWS 공식 문서**: https://docs.aws.amazon.com/
- **Spring Boot 공식 문서**: https://spring.io/projects/spring-boot
- **GitHub Actions 가이드**: https://docs.github.com/en/actions

---

**작성일**: 2025-11-30
**기반**: 12Dev 블로그 프로젝트 5개 포스팅
**프로젝트 URL**: https://ddangbbo.com (가상)
