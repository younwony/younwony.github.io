# Skills 가이드

> 이력서/경력기술서 프로젝트에서 사용 가능한 Claude Code Skills 목록
>
> **최종 업데이트**: 2025-12-26

---

## 카테고리별 Skills

### 문서 작성

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Writing Guide** | `/writing-guide` | STAR+I 기법, 정량화 방식, 시니어 톤 표현, Bad vs Good 사례 |
| **Customize Resume** | `/customize-resume` | JD 또는 기업 유형에 맞춘 맞춤형 이력서 생성 |
| **Create Resume Document** | `/create-resume-document` | PDF 출력에 최적화된 2-3페이지 이력서 작성 |
| **Create Document Set** | `/create-document-set` | 이력서 + 경력기술서 세트 생성 |

### 문서 내보내기

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Export PDF** | `/export-pdf` | PDF 내보내기 (페이지 끊김 방지 최적화) |
| **Export Document** | `/export-document` | PPT, DOCX 등 제출용 문서 내보내기 |
| **Format Converter** | `/format-converter` | HTML, Markdown, DOCX, PDF 포맷 변환 |

### 데이터 관리

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Update Resume** | `/update-resume` | 원본 데이터를 10개 파일에 동기화 |
| **Add Project** | `/add-project` | 새 프로젝트를 STAR+I 형식으로 추가 |
| **Sync Check** | `/sync-check` | 원본과 10개 파일의 동기화 상태 검증 |
| **Work Log** | `/work-log` | 작업 로그 기록 및 이력서 반영 판단 |

### 품질 향상

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Enhance Portfolio** | `/enhance-portfolio` | 아키텍처 다이어그램, 트러블슈팅 상세 등 기술적 깊이 추가 |

### 기타

| Skill | 명령어 | 설명 |
|-------|--------|------|
| **Style Guide** | `/style-guide` | HTML 템플릿과 CSS 스타일 수정 가이드 |
| **Troubleshoot** | `/troubleshoot` | 문제 해결 (다크모드 오류, 동기화 누락 등) |

---

## Skills 상세

### `/writing-guide`

**용도**: 이력서/경력기술서 작성 시 참조

**핵심 내용**:
- STAR+I 프레임워크 (Situation → Task → Action → Result → Impact)
- 7년차 시니어 톤 표현법
- 정량화 방식 (%, 배, 건수)
- Bad vs Good 사례

**사용 시점**: 프로젝트 설명 작성, 성과 정량화 필요 시

---

### `/customize-resume`

**용도**: 맞춤형 이력서 생성

**입력 유형**:
- JD(채용공고) URL 또는 텍스트
- 기업 유형 (스타트업/대기업)
- 도메인 (핀테크/커머스 등)

**출력**: `docs/career/formats/by-jd/{company}_{date}.md`

**사용 시점**: 특정 회사 지원, JD 맞춤형 이력서 필요 시

---

### `/create-resume-document`

**용도**: 2-3페이지 이력서 작성

**특징**:
- PDF 출력 최적화
- 채용 담당자 빠른 스크리닝용
- 핵심 성과 중심 구성

**사용 시점**: 채용 사이트 제출, 이메일 첨부용

---

### `/create-document-set`

**용도**: 이력서 + 경력기술서 세트 생성

**구성**:
- 이력서 (2-3페이지): 핵심 요약, 성과 중심
- 경력기술서 (5페이지+): 프로젝트 상세, STAR+I

**사용 시점**: 채용 지원 시 두 문서 함께 제출

---

### `/export-pdf`

**용도**: PDF 내보내기

**핵심 기능**:
- 페이지 경계 끊김 방지
- 여백/페이지 나눔 최적화
- CSS `page-break-inside: avoid` 적용

**사용 시점**: 최종 제출용 PDF 생성

---

### `/export-document`

**용도**: PPT/DOCX 내보내기

**지원 포맷**:
- PPT: 자기소개 슬라이드 (5장), 경력기술서 슬라이드 (10장)
- DOCX: Pandoc 변환

**사용 시점**: 발표용 PPT, 편집 가능 문서 필요 시

---

### `/format-converter`

**용도**: 다양한 포맷 변환

**지원 변환**:
- HTML → PDF (브라우저/wkhtmltopdf)
- MD → DOCX (Pandoc)
- MD → PDF (Pandoc + LaTeX)
- MD → HTML (Pandoc)

**사용 시점**: 특정 포맷으로 변환 필요 시

---

### `/update-resume`

**용도**: 원본 데이터 동기화

**대상 파일 (10개)**:
- `resume.md`, `career_portfolio.md`
- `templates/resume/*.html` (4개)
- `templates/career/*.html` (4개)
- `work-logs/` 관련 파일

**사용 시점**: `my_career_data.md` 수정 후 전체 반영

---

### `/add-project`

**용도**: 새 프로젝트 추가

**프로세스**:
1. 프로젝트 정보 수집 (STAR+I)
2. `my_career_data.md`에 추가
3. `work-logs/`에 상세 작업 로그 작성
4. 10개 파일 동기화

**사용 시점**: 새로운 프로젝트 경험 추가

---

### `/sync-check`

**용도**: 동기화 상태 검증

**검증 항목**:
- 프로젝트명, 기간, 역할
- 성과 수치 (%, 배, 건수)
- 기술 스택
- STAR+I 형식 준수

**사용 시점**: 파일 간 불일치 의심 시

---

### `/work-log`

**용도**: 작업 로그 기록

**프로세스**:
1. 작업 내용 수집
2. 프로젝트별 작업 로그 작성 (`work-logs/{company}/`)
3. 이력서 반영 여부 판단
4. 필요 시 이력서 업데이트

**사용 시점**: 작업 완료 후 기록, 이력서 반영 검토

---

### `/enhance-portfolio`

**용도**: 경력기술서 기술적 깊이 강화

**추가 섹션**:
- Architecture (아키텍처 다이어그램)
- Data Flow (데이터 플로우)
- Troubleshooting (트러블슈팅 상세)
- Implementation Details (구현 상세)
- Challenges & Solutions (도전 과제)

**사용 시점**: 경력기술서 품질 향상, 시니어 수준 상세 필요 시

---

### `/style-guide`

**용도**: CSS/HTML 스타일 수정

**핵심 원칙**:
- 인라인 스타일 금지
- CSS 변수 우선 사용
- 다크모드 자동 적용

**사용 시점**: 템플릿 스타일 변경, 다크모드 수정

---

### `/troubleshoot`

**용도**: 문제 해결

**해결 가능 문제**:
- 다크모드가 일부 요소에만 적용됨
- 10개 파일 업데이트 누락
- STAR+I 형식 깨짐
- 정량적 성과 누락
- git staging 문제

**사용 시점**: 작업 중 문제 발생 시

---

## Quick Reference

```
문서 작성:
  /writing-guide         # STAR+I 작성 가이드
  /customize-resume      # JD 맞춤형 이력서
  /create-resume-document # 2-3페이지 이력서
  /create-document-set   # 이력서+경력기술서 세트

내보내기:
  /export-pdf           # PDF 내보내기
  /export-document      # PPT/DOCX 내보내기
  /format-converter     # 포맷 변환

데이터 관리:
  /update-resume        # 10개 파일 동기화
  /add-project          # 새 프로젝트 추가
  /sync-check           # 동기화 검증
  /work-log             # 작업 로그 기록

품질 향상:
  /enhance-portfolio    # 기술적 깊이 강화

기타:
  /style-guide          # CSS 스타일 가이드
  /troubleshoot         # 문제 해결
```

---

## 디렉토리 구조

```
.claude/skills/
├── README.md                    # 이 파일 (스킬 가이드)
├── add-project/SKILL.md
├── create-document-set/SKILL.md
├── create-resume-document/SKILL.md
├── customize-resume/SKILL.md
├── enhance-portfolio/SKILL.md   # NEW
├── export-document/SKILL.md
├── export-pdf/SKILL.md
├── format-converter/SKILL.md
├── style-guide/SKILL.md
├── sync-check/SKILL.md
├── troubleshoot/SKILL.md
├── update-resume/SKILL.md
├── work-log/SKILL.md
└── writing-guide/SKILL.md
```

---

## 변경 이력

| 날짜 | 변경 내용 |
|------|----------|
| 2025-12-26 | `/enhance-portfolio` 스킬 추가 (14개 스킬) |
| 2025-12-26 | README.md 문서 생성 (13개 스킬 정리) |
