# 전체 동기화

`docs/career/my_career_data.md` 원본을 읽고 아래 파일들을 모두 동기화하세요.

## 대상 파일

### 이력서 (2개)
- `docs/career/resume.md`
- `docs/career/career_portfolio.md`

### HTML 템플릿 (8개)
- `templates/resume/{default,minimal,modern,corporate}.html`
- `templates/career/{default,minimal,modern,corporate}.html`

### PDF 출력용 템플릿 (4개)
- `templates/export/pdf/resume-2page.html`
- `templates/export/pdf/resume-modern.html`
- `templates/export/pdf/career-portfolio.html`
- `templates/export/pdf/career-portfolio-modern.html`

### 리멤버 (8개)
- `docs/career/platforms/remember/profile-{basic,jobseek}.md`
- `docs/career/platforms/remember/careers/{guhada,interpark,korealit}-{basic,jobseek}.md`

## 원칙

1. **서비스 구분**: 구하다(커머스) / Seeding(인플루언서) 분리
2. **도메인 명시**: "200만 인플루언서 데이터" 등
3. **STAR+I 형식** 유지
4. **톤**: basic=차분, jobseek=성과 강조
5. **글자수**: profile-basic 500자, 나머지 5000자

## 참고

- `/create-resume-document` - 이력서/경력기술서 작성 가이드
- `/sync-check` - 동기화 상태 검증
- `/update-resume` - formats, interview_script, work-logs 포함 동기화
- `/sync-platforms` - 모든 플랫폼 파일 일괄 동기화

## 완료 후

```bash
git add docs/career/ templates/
```
