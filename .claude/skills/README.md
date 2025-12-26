# Skills 가이드

> 이력서/경력기술서 프로젝트에서 사용 가능한 Claude Code Skills 목록
>
> **최종 업데이트**: 2025-12-26
> **총 스킬 수**: 9개

---

## 디렉토리 구조

```
.claude/skills/
├── README.md                          # 이 파일 (스킬 가이드)
├── write/                             # 문서 작성
│   ├── guide/SKILL.md                 # /writing-guide
│   ├── resume/SKILL.md                # /create-resume-document
│   └── career/SKILL.md                # /write-career
├── export/SKILL.md                    # /export (PDF + PPT)
├── data/                              # 데이터 관리
│   ├── update/SKILL.md                # /update-resume
│   ├── add-project/SKILL.md           # /add-project
│   ├── sync-check/SKILL.md            # /sync-check
│   ├── work-log/SKILL.md              # /work-log
│   └── work-logs-sync/SKILL.md        # /work-logs-sync
└── util/                              # 유틸리티
    └── style/SKILL.md                 # /style-guide
```

---

## 카테고리별 Skills

### 문서 작성 (write/)

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Writing Guide** | `/writing-guide` | STAR+I 기법, 정량화 방식, 시니어 톤 표현, Bad vs Good 사례 |
| **Resume** | `/create-resume-document` | 이력서 작성 (2-3페이지), JD 맞춤형, 이력서+경력기술서 세트 |
| **Career Portfolio** | `/write-career` | 경력기술서 작성 (5페이지+), 아키텍처/트러블슈팅 상세 |

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
| **Work Log** | `/work-log` | 작업 로그 기록 및 이력서 반영 판단 |
| **Work Logs Sync** | `/work-logs-sync` | work-log 템플릿 변경 시 기존 파일 일괄 동기화 |

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
- 7년차 시니어 톤 표현법
- 정량화 방식 (%, 배, 건수)
- Bad vs Good 사례

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
  /create-resume-document   # 이력서 (2-3페이지, JD 맞춤형, 세트)
  /write-career             # 경력기술서 (5페이지+, 상세)

내보내기:
  /export                   # PDF/PPT 내보내기

데이터 관리:
  /update-resume            # 10개 파일 동기화
  /add-project              # 새 프로젝트 추가
  /sync-check               # 동기화 검증
  /work-log                 # 작업 로그 기록
  /work-logs-sync           # work-log 형식 일괄 동기화

유틸리티:
  /style-guide              # CSS 스타일 가이드
```

---

## 변경 이력

| 날짜 | 변경 내용 |
|------|----------|
| 2025-12-26 | Skills 구조 개편: 14개 → 9개로 통합, 카테고리별 그룹화 |
| 2025-12-26 | DOCX 내보내기 제거, enhance-portfolio를 write-career에 통합 |
| 2025-12-26 | 디렉토리 구조: write/, export/, data/, util/ |
