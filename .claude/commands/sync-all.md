# 전체 동기화

`docs/career/my_career_data.md` 원본을 읽고 아래 파일들을 모두 동기화하세요.

> **내용 가이드**: 필수 포함 내용, 키워드, 수치는 `/content-spec` 스킬 참조

---

## 대상 파일 (22개)

### Markdown (2개)
- `docs/career/resume.md`
- `docs/career/career_portfolio.md`

### HTML 템플릿 - Resume (4개)
- `templates/resume/default.html`
- `templates/resume/minimal.html`
- `templates/resume/modern.html`
- `templates/resume/corporate.html`

### HTML 템플릿 - Career (4개)
- `templates/career/default.html`
- `templates/career/minimal.html`
- `templates/career/modern.html`
- `templates/career/corporate.html`

### PDF 출력용 템플릿 (4개)
- `templates/export/pdf/resume-2page.html`
- `templates/export/pdf/resume-modern.html`
- `templates/export/pdf/career-portfolio.html`
- `templates/export/pdf/career-portfolio-modern.html`

### 리멤버 플랫폼 (8개)
- `docs/career/platforms/remember/profile-basic.md`
- `docs/career/platforms/remember/profile-jobseek.md`
- `docs/career/platforms/remember/careers/guhada-basic.md`
- `docs/career/platforms/remember/careers/guhada-jobseek.md`
- `docs/career/platforms/remember/careers/interpark-basic.md`
- `docs/career/platforms/remember/careers/interpark-jobseek.md`
- `docs/career/platforms/remember/careers/korealit-basic.md`
- `docs/career/platforms/remember/careers/korealit-jobseek.md`

---

## 실행 순서

```
1. 원본 읽기
   └── docs/career/my_career_data.md

2. 콘텐츠 스펙 확인
   └── /content-spec (필수 키워드, 수치)

3. 핵심 파일 동기화
   ├── resume.md
   └── career_portfolio.md

4. HTML 템플릿 동기화 (12개)
   ├── templates/resume/*.html
   ├── templates/career/*.html
   └── templates/export/pdf/*.html

5. 리멤버 플랫폼 동기화 (8개)
   └── docs/career/platforms/remember/

6. 검증
   └── /sync-check
```

---

## 동기화 원칙

| 원칙 | 설명 |
|------|------|
| **SSOT** | my_career_data.md가 유일한 원본 |
| **STAR+I** | 모든 프로젝트는 STAR+I 형식 유지 |
| **서비스 구분** | 구하다(커머스) / Seeding(인플루언서) 분리 |
| **프로젝트 순서** | 원본 데이터 순서 유지 |
| **톤** | basic=차분, jobseek=성과 강조 |
| **글자수** | profile-basic 500자, 나머지 5000자 |

---

## 참조 스킬

| 스킬 | 용도 |
|------|------|
| `/content-spec` | 필수 포함 내용, 키워드, 수치 정의 |
| `/writing-guide` | STAR+I 작성 가이드, 시니어 톤 |
| `/sync-check` | 동기화 상태 검증 |
| `/update-resume` | formats, interview_script, work-logs 포함 |
| `/sync-platforms` | 플랫폼별 프로필 일괄 동기화 |

---

## 완료 후

```bash
git add docs/career/ templates/
```
