# 이력서 업데이트

> `my_career_data.md` 변경 시 10개 파일을 일관되게 업데이트합니다.
> **참조 Skill**: `resume-writing` (STAR+I 기법, 시니어 톤)

---

## 실행 단계

### 1단계: 변경사항 확인

```bash
git diff docs/career/my_career_data.md
```

**확인 사항**:
- 어떤 프로젝트가 수정되었는가?
- 어떤 섹션이 변경되었는가? (S/T/A/R/I)

### 2단계: 업데이트 대상 (10개 파일)

| 분류 | 파일 |
|------|------|
| **MD** | `docs/career/resume.md`, `docs/career/career_portfolio.md` |
| **Resume** | `templates/resume/default.html`, `minimal.html`, `modern.html`, `corporate.html` |
| **Career** | `templates/career/default.html`, `minimal.html`, `modern.html`, `corporate.html` |

### 3단계: 변경 적용

**원칙**:
- **변경된 섹션만** 찾아서 교체
- STAR+I 형식 유지 (Skill 참조)
- **변경되지 않은 부분** 절대 수정 금지

### 4단계: 검증

```bash
git diff docs/career/resume.md
git status
```

**체크리스트**:
- [ ] 변경된 프로젝트만 업데이트되었는가?
- [ ] 10개 파일 모두 업데이트되었는가?
- [ ] STAR+I 형식이 유지되었는가?
- [ ] 정량적 성과가 포함되었는가?

### 5단계: 커밋

```bash
git add docs/career/*.md
git commit -m "docs: 프로젝트 X 업데이트"

git add templates/**/*.html
git commit -m "feat: 템플릿 프로젝트 X 업데이트"
```

---

## 주의사항

- 전체 내용 재작성 금지
- 변경되지 않은 프로젝트 수정 금지
- 사용하지 않은 기술 추가 금지
