# Skills 가이드

> 이력서/경력기술서 프로젝트에서 사용 가능한 Claude Code Skills 목록
>
> **최종 업데이트**: 2026-01-04
> **총 스킬 수**: 17개

---

## 디렉토리 구조

```
.claude/skills/
├── README.md                          # 이 파일 (스킬 가이드)
├── write/                             # 문서 작성
│   ├── guide/SKILL.md                 # /writing-guide
│   ├── jd-match/SKILL.md              # /jd-match (회사 조사 + JD 분석)
│   ├── resume/SKILL.md                # /create-resume-document
│   ├── career/SKILL.md                # /write-career
│   ├── integrated/SKILL.md            # /write-integrated (신규: 통합 지원서)
│   ├── portfolio/SKILL.md             # /write-portfolio
│   ├── svg-diagram/SKILL.md           # /svg-diagram
│   └── mermaid-diagram/SKILL.md       # /mermaid-diagram
├── export/SKILL.md                    # /export (PDF + PPT)
├── data/                              # 데이터 관리
│   ├── update/SKILL.md                # /update-resume
│   ├── add-project/SKILL.md           # /add-project
│   ├── sync-check/SKILL.md            # /sync-check
│   ├── content-spec/SKILL.md          # /content-spec
│   ├── work-log/SKILL.md              # /work-log
│   ├── work-logs-sync/SKILL.md        # /work-logs-sync
│   ├── platform-profile/SKILL.md      # /platform-profile
│   └── sync-platforms/SKILL.md        # /sync-platforms
└── util/                              # 유틸리티
    └── style/SKILL.md                 # /style-guide
```

---

## 카테고리별 Skills

### 문서 작성 (write/)

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Writing Guide** | `/writing-guide` | STAR+I 기법, 정량화 방식, 시니어 톤 표현, Bad vs Good 사례 |
| **JD Match** | `/jd-match` | JD 분석, **회사 조사(비전/인재상)**, 지원 동기, 맞춤형 지원서 |
| **Resume** | `/create-resume-document` | 이력서 작성 (2-3페이지), JD 맞춤형, 이력서+경력기술서 세트 |
| **Career Portfolio** | `/write-career` | 경력기술서 작성 (5페이지+), 아키텍처/트러블슈팅 상세 |
| **Integrated** | `/write-integrated` | **통합 지원서 HTML** (경력기술서+지원동기), 표준 템플릿 스타일 |
| **Portfolio** | `/write-portfolio` | 포트폴리오 작성 (10-15페이지), 기술 백서 형식, Decision Log |
| **SVG Diagram** | `/svg-diagram` | SVG 아키텍처 다이어그램 생성 (Before/After, 시스템 구성도) |
| **Mermaid Diagram** | `/mermaid-diagram` | Mermaid 다이어그램 생성 (플로우차트, 시퀀스, ER) |

### 문서 내보내기 (export/)

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Export** | `/export` | PDF/PPT 내보내기 (페이지 끊김 방지 최적화) |

### 데이터 관리 (data/)

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Update Resume** | `/update-resume` | 원본 데이터를 10개 파일에 동기화 |
| **Add Project** | `/add-project` | 새 프로젝트를 STAR+I 형식으로 추가 |
| **Sync Check** | `/sync-check` | 원본과 10개 파일의 동기화 상태 검증 |
| **Content Spec** | `/content-spec` | 필수 포함 내용, 키워드, 수치 정의 (sync-all 참조용) |
| **Work Log** | `/work-log` | 작업 로그 기록 및 이력서 반영 판단 |
| **Work Logs Sync** | `/work-logs-sync` | work-log 템플릿 변경 시 기존 파일 일괄 동기화 |
| **Platform Profile** | `/platform-profile` | 채용 플랫폼별 프로필/경력 생성 |
| **Sync Platforms** | `/sync-platforms` | 모든 플랫폼 파일 일괄 동기화 |

### 유틸리티 (util/)

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Style Guide** | `/style-guide` | HTML 템플릿과 CSS 스타일 수정 가이드 |

---

## Skills 상세

### `/writing-guide`

**용도**: 이력서/경력기술서 작성 시 참조

**핵심 내용**:
- STAR+I 프레임워크 (Situation → Task → Action → Result → Impact)
- 8년차 시니어 톤 표현법
- 정량화 방식 (%, 배, 건수)
- Bad vs Good 사례

---

### `/jd-match`

**용도**: JD(채용공고) 분석 및 맞춤형 지원서 작성

**실행 순서**:
1. **회사 조사** (비전, 성장 지표, 인재상) ⭐
2. JD 분석 (필수/우대 요건, Pain Point)
3. 경험 매칭
4. **지원 동기 작성** ⭐
5. 파일 생성

**출력 파일**:
- `COMPANY_RESEARCH.md`: 회사 조사 결과 ⭐
- `JD_ANALYSIS.md`: JD 분석
- `MOTIVATION.md`: 지원 동기 ⭐
- `COVER_LETTER.md`: 자기소개서
- `RESUME_JD.md`: JD 맞춤형 이력서

**핵심 포인트**:
> JD만 보고 지원서를 쓰지 않는다. **회사의 비전/인재상을 먼저 파악**하고, 내 경험과 연결하여 지원 동기를 작성한다.

---

### `/create-resume-document`

**용도**: 이력서 작성 (2-3페이지)

**작성 유형**:
1. 기본 이력서
2. JD 맞춤형 이력서
3. 이력서 + 경력기술서 세트

**사용 시점**: 채용 사이트 제출, 이메일 첨부용

---

### `/write-career`

**용도**: 경력기술서 작성 (5페이지+)

**특징**:
- STAR+I 상세 프로젝트 설명
- 아키텍처 다이어그램
- 트러블슈팅 상세
- 구현 상세 / 도전 과제

**사용 시점**: 상세 역량 검증, 시니어 수준 포트폴리오

---

### `/write-integrated`

**용도**: JD 기반 통합 지원서 HTML 작성 (경력기술서 + 지원동기)

**특징**:
- 표준 템플릿 스타일 적용
- 5페이지 A4 구성 (Summary → 프로젝트 → 지원동기)
- JD 키워드 태그 (`jd-tag`) 강조
- PDF 출력 최적화 (Edge headless)

**스타일 요소**:
- Company Header: 검정 배경 (#000)
- Metrics Row: border-left 2px solid #000
- Context Grid: 배경/문제 2열 그리드
- Tech Decision: 기술 선택 이유 박스
- Values Header: 지원동기 페이지 헤더

**사용 시점**: `/jd-match` 완료 후 최종 제출용 문서 작성

**참조 템플릿**: `templates/export/pdf/integrated-application.html`

---

### `/write-portfolio`

**용도**: 포트폴리오 작성 (10-15페이지)

**특징**:
- 8년차 시니어의 **기술 백서(White Paper)** 형식
- 아키텍처 다이어그램 (Before/After)
- Decision Log (기술 선택 근거)
- Why NOT (선택하지 않은 기술)
- Failure & Lessons Learned

**사용 시점**: 테크 리드/CTO 대상 면접, 시니어 포지션 지원

---

### `/svg-diagram`

**용도**: SVG 아키텍처 다이어그램 생성

**적합한 경우**:
- Before/After 시스템 비교
- 데이터 파이프라인 구성도
- 정교한 레이아웃이 필요한 경우

**저장 위치**: `docs/career/portfolio/images/`

---

### `/mermaid-diagram`

**용도**: Mermaid 기반 다이어그램 생성

**적합한 경우**:
- 플로우차트 (비즈니스 로직)
- 시퀀스 다이어그램 (API 호출 흐름)
- ER 다이어그램 (DB 스키마)
- C4 다이어그램 (시스템 컨텍스트)

**저장 위치**: `docs/career/portfolio/images/`

---

### `/export`

**용도**: PDF/PPT 내보내기

**지원 포맷**:
- **PDF**: 페이지 끊김 방지 최적화
- **PPT**: 자기소개 슬라이드 (5장), 경력기술서 슬라이드 (10장)

**사용 시점**: 최종 제출용 PDF, 발표용 슬라이드

---

### `/update-resume`

**용도**: 원본 데이터 동기화

**대상 파일 (10개)**:
- `resume.md`, `career_portfolio.md`
- `templates/resume/*.html` (4개)
- `templates/career/*.html` (4개)

**사용 시점**: `my_career_data.md` 수정 후 전체 반영

---

### `/add-project`

**용도**: 새 프로젝트 추가

**프로세스**:
1. 프로젝트 정보 수집 (STAR+I)
2. `my_career_data.md`에 추가
3. `work-logs/`에 상세 작업 로그 작성
4. 10개 파일 동기화

---

### `/sync-check`

**용도**: 동기화 상태 검증

**검증 항목**:
- 프로젝트명, 기간, 역할
- 성과 수치 (%, 배, 건수)
- 기술 스택
- STAR+I 형식 준수

---

### `/content-spec`

**용도**: 동기화 시 필수 포함 내용 정의

**핵심 내용**:
- **Core Competencies** 8개 항목 (누락 방지)
- **프로젝트별 필수 수치** (정확한 값)
- **필수 키워드** (프로젝트별)
- **검증 체크리스트**

**사용 시점**: `/sync-all`, `/update-resume` 실행 시 참조

**주요 항목**:
```
Core Competencies: 8개 전체 포함 (Reliability Engineering, Quality & Testing 누락 주의)
큐레이션 시스템: 14개 위치 (7개 아님), 기간 2023.01-02
인플루언서 플랫폼: 200만 건, 10배 개선
Dynamic Pricing: 매출 10% 상승
```

---

### `/work-log`

**용도**: 작업 로그 기록

**프로세스**:
1. 작업 내용 수집
2. 프로젝트별 작업 로그 작성 (`work-logs/{company}/`)
3. 이력서 반영 여부 판단
4. 필요 시 이력서 업데이트

---

### `/work-logs-sync`

**용도**: work-log 템플릿 형식 일괄 동기화

**사용 시점**:
- `/work-log` 스킬 가이드(템플릿)가 변경되었을 때
- 기존 work-logs 파일들을 새 형식에 맞게 일괄 변환

---

### `/platform-profile`

**용도**: 채용 플랫폼별 프로필/경력 생성

**지원 플랫폼**:
- 리멤버, 원티드, 사람인, 잡코리아, 링크드인

**파라미터**:
- `platform`: remember, wanted, saramin, jobkorea, linkedin
- `type`: profile, career, all (기본: all)
- `mode`: basic, jobseek (기본: basic)

**사용 예시**:
```
/platform-profile remember           # 리멤버 전체
/platform-profile wanted profile     # 원티드 프로필만
/platform-profile linkedin           # 링크드인 전체
```

---

### `/sync-platforms`

**용도**: 모든 플랫폼 파일 일괄 동기화

**사용 시점**:
- `my_career_data.md` 수정 후 전체 플랫폼 반영
- 새 프로젝트 추가 후 플랫폼별 업데이트

**동작**:
1. 원본 변경사항 확인
2. 5개 플랫폼 순차 동기화
3. 변경 리포트 출력

---

### `/style-guide`

**용도**: CSS/HTML 스타일 수정

**핵심 원칙**:
- 인라인 스타일 금지
- CSS 변수 우선 사용
- 다크모드 자동 적용

---

## Quick Reference

```
문서 작성:
  /writing-guide            # STAR+I 작성 가이드
  /jd-match                 # JD 분석 + 회사 조사 + 지원 동기 ⭐
  /create-resume-document   # 이력서 (2-3페이지, JD 맞춤형, 세트)
  /write-career             # 경력기술서 (5페이지+, 상세)
  /write-integrated         # 통합 지원서 HTML (경력기술서+지원동기) ⭐ NEW
  /write-portfolio          # 포트폴리오 (10-15페이지, 기술 백서)

다이어그램:
  /svg-diagram              # SVG 아키텍처 다이어그램 (Before/After)
  /mermaid-diagram          # Mermaid 다이어그램 (플로우, 시퀀스, ER)

내보내기:
  /export                   # PDF/PPT 내보내기

데이터 관리:
  /update-resume            # 10개 파일 동기화
  /add-project              # 새 프로젝트 추가
  /sync-check               # 동기화 검증
  /content-spec             # 필수 내용/키워드/수치 정의
  /work-log                 # 작업 로그 기록
  /work-logs-sync           # work-log 형식 일괄 동기화
  /platform-profile         # 플랫폼별 프로필/경력 생성
  /sync-platforms           # 플랫폼 일괄 동기화

유틸리티:
  /style-guide              # CSS 스타일 가이드
```

---

## 변경 이력

| 날짜 | 변경 내용 |
|------|----------|
| 2026-01-04 | `/write-integrated` 스킬 추가: **통합 지원서 HTML** (경력기술서+지원동기), 표준 템플릿 스타일 가이드 |
| 2026-01-04 | `/jd-match` 스킬 강화: **회사 조사 프로세스 추가** (비전, 인재상, 성장 지표), 지원 동기 작성 가이드 |
| 2026-01-04 | `/write-portfolio`, `/svg-diagram`, `/mermaid-diagram` 스킬 추가 (포트폴리오 + 다이어그램) |
| 2026-01-02 | `/content-spec` 스킬 추가, `/sync-all` 구조 분리 (관심사 분리) |
| 2025-12-29 | `/platform-profile`, `/sync-platforms` 스킬 추가 (채용 플랫폼 지원) |
| 2025-12-26 | Skills 구조 개편: 14개 → 9개로 통합, 카테고리별 그룹화 |
| 2025-12-26 | DOCX 내보내기 제거, enhance-portfolio를 write-career에 통합 |
| 2025-12-26 | 디렉토리 구조: write/, export/, data/, util/ |
