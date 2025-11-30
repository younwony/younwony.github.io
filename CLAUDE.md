# Claude Code 작업 지침

이 문서는 Claude Code가 이력서/경력기술서 작업 시 참조하는 프로젝트별 가이드입니다.

---

## 📁 문서 구조

모든 문서는 `docs/` 디렉토리 아래에 체계적으로 구성되어 있습니다.

```
docs/
├── README.md                          # 문서 구조 안내
├── career/                            # 경력 관련 문서
│   ├── my_career_data.md             # 경력 원본 데이터 (STAR 형식)
│   ├── resume.md                     # 간결한 이력서
│   └── career_portfolio.md           # 상세 경력기술서
├── references/                        # 참고 자료
│   ├── resume_writing_guide.md       # 이력서 작성 가이드
│   └── resume_examples.md            # 이력서 예시
└── analysis/                          # 분석 자료
    ├── tech_blog_analysis.md         # 기술 블로그 분석
    └── github_analysis.md            # GitHub 분석 (예정)
```

**자세한 내용은 `docs/README.md`를 참조하세요.**

---

## 🎯 핵심 원칙

### 1. 단일 진실 공급원 (Single Source of Truth)
- **원본**: `docs/career/my_career_data.md`
- **생성물**: `resume.md`, `career_portfolio.md`, 템플릿 HTML 파일들
- 모든 수정은 `my_career_data.md`에만 적용하고, 나머지는 자동 생성

### 2. 이력서 작성 가이드
- **참조 문서**: `docs/references/resume_writing_guide.md`
- STAR 기법 (Situation, Task, Action, Result)
- 정량적 성과 중심
- 기술 선택 의도 명시

### 3. 업데이트 프로세스
**"이력서 업데이트 해줘" 요청 시:**

#### Step 1: 변경사항 확인
```bash
git diff docs/career/my_career_data.md
```

#### Step 2: 업데이트 대상 (10개 파일)
- `docs/career/resume.md`
- `docs/career/career_portfolio.md`
- `templates/resume/*.html` (4개)
- `templates/career/*.html` (4개)

#### Step 3: 변경된 섹션만 업데이트
- **변경된 프로젝트/섹션만** 찾아서 교체
- 변경되지 않은 부분은 **절대 수정하지 않음**
- STAR 형식 그대로 반영

#### Step 4: 검증
- [ ] 변경 사항만 반영되었는가?
- [ ] 10개 파일 모두 업데이트되었는가?
- [ ] 사용하지 않은 기술은 제거되었는가?

---

## 📚 참고 문서

### 작성 가이드
`docs/references/resume_writing_guide.md`에서 다음 내용을 확인하세요:
- Professional Summary 작성법
- 기술 스택 분류 방법
- STAR 기법 활용 예시
- 정량적 성과 작성법

### 분석 자료
- **Tech Blog**: `docs/analysis/tech_blog_analysis.md`
  - 블로그 카테고리 및 포스팅 현황
  - 주요 기술 스택
  - 학습 패턴 및 인사이트

---

## ⚠️ 주의사항

### ❌ 하지 말아야 할 것
- `resume.md`, `career_portfolio.md`를 직접 수정 (자동 생성되므로)
- 변경되지 않은 프로젝트를 임의로 수정
- 사용하지 않은 기술 추가

### ✅ 해야 할 것
- 항상 `docs/career/my_career_data.md`만 수정
- 변경 후 `git diff`로 변경 범위 확인
- 10개 파일 모두 일관되게 업데이트
- STAR 형식 준수

---

## 🔄 워크플로우 예시

```
1. git diff docs/career/my_career_data.md 실행
   → 프로젝트 2의 Situation, Task, Action, Result 변경 확인

2. docs/career/resume.md 업데이트
   → 프로젝트 2 섹션만 교체

3. docs/career/career_portfolio.md 업데이트
   → 프로젝트 2 섹션만 교체

4. Task 도구로 템플릿 8개 병렬 업데이트
   → resume 템플릿 4개: 프로젝트 2만 업데이트
   → career 템플릿 4개: 프로젝트 2만 업데이트

5. 완료 확인
   → 프로젝트 1, 3은 그대로인지 확인
   → 10개 파일 모두 업데이트되었는지 확인
```

---

## 📝 추가 정보

- **문서 구조 상세**: `docs/README.md`
- **이력서 작성법**: `docs/references/resume_writing_guide.md`
- **블로그 분석**: `docs/analysis/tech_blog_analysis.md`

---

**최종 업데이트**: 2025-11-30
**문서 버전**: 2.0 (docs 구조 개편)
