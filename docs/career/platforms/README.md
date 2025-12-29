# 채용 플랫폼 프로필 가이드

> 각 플랫폼에 맞춤화된 프로필/경력 내용을 관리합니다.

---

## 디렉토리 구조

```
platforms/
├── remember/                      # 리멤버
│   ├── profile-basic.md           # 기본 프로필 (네트워킹용)
│   ├── profile-jobseek.md         # 구직용 프로필 (상세)
│   └── careers/                   # 회사별 경력 기술
│       ├── guhada-basic.md        # 구하다 기본용
│       ├── guhada-jobseek.md      # 구하다 구직용 (상세)
│       ├── interpark-basic.md     # 인터파크 기본용
│       ├── interpark-jobseek.md   # 인터파크 구직용 (상세)
│       ├── korealit-basic.md      # 한국문헌정보기술 기본용
│       └── korealit-jobseek.md    # 한국문헌정보기술 구직용 (상세)
├── wanted/                        # 원티드
│   ├── profile.md
│   └── projects/                  # 프로젝트 단위 기술
├── saramin/                       # 사람인
│   ├── profile.md
│   └── self-intro.md              # 자기소개서
├── jobkorea/                      # 잡코리아
│   └── (saramin과 동일)
└── linkedin/                      # 링크드인
    ├── about-kr.md                # 국문 About
    ├── about-en.md                # 영문 About
    └── experiences/               # Experience 섹션
```

---

## 콘텐츠 유형

### 기본용 (basic)
- **용도**: 네트워킹, 명함 교환
- **톤**: 현 직장 재직 중, 차분한 톤
- **내용**: 간단한 역할 설명, 주요 업무 bullet points

### 구직용 (jobseek)
- **용도**: 적극 구직 의사 표현
- **톤**: 성과 강조, 적극적 톤
- **내용**: 문제→해결→성과 스토리텔링, 정량적 수치 포함

---

## 플랫폼별 특성

| 플랫폼 | 프로필 제한 | 경력 제한 | 특징 |
|--------|------------|----------|------|
| 리멤버 | ~500자 | ~5000자 | 명함 기반, 기본/구직 분리 |
| 원티드 | ~300자 | 프로젝트 단위 | 개발자 채용 특화 |
| 사람인 | ~500자 | 자기소개서 형식 | 범용 |
| 잡코리아 | ~500자 | 자기소개서 형식 | 사람인과 유사 |
| 링크드인 | ~2600자 | 경험별 상세 | 글로벌, 영문 필수 |

---

## 사용 방법

### 1. 프로필 생성
```
/platform-profile remember        # 리멤버 전체 생성
/platform-profile wanted profile  # 원티드 프로필만
```

### 2. 전체 동기화
```
/sync-platforms                   # 모든 플랫폼 일괄 업데이트
```

---

## 원본 데이터

모든 콘텐츠는 `my_career_data.md`를 기반으로 자동 생성됩니다.
수정이 필요하면 원본을 수정 후 동기화하세요.
