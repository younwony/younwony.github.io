---
name: troubleshoot
description: 이력서/경력기술서 작업 중 발생하는 문제를 해결합니다. 다크모드 오류, 동기화 누락, STAR 형식 깨짐 등 문제 해결이 필요할 때 사용합니다.
---

# 문제 해결 가이드

## 자주 발생하는 문제

### 문제 1: 다크모드가 일부 요소에만 적용됨

**증상:**
- 다크모드 전환 시 일부 텍스트/배경색이 변경되지 않음
- 특정 섹션만 라이트모드로 보임

**원인:** 인라인 스타일 사용

**진단:**
```bash
# 인라인 스타일 검색
grep -r "style=" templates/
```

**해결:**
```html
<!-- ❌ Before -->
<h3 style="color: #1a1a2e;">제목</h3>

<!-- ✅ After -->
<h3 class="section-title">제목</h3>
```

```css
/* CSS 추가 */
.section-title {
    color: var(--primary-dark);
}
```

---

### 문제 2: 10개 파일 업데이트 누락

**증상:**
- 일부 템플릿에 최신 내용이 반영되지 않음
- resume와 career 내용이 불일치

**원인:** 수동 작업 시 일부 파일 누락

**진단:**
```bash
# 파일별 변경 확인
git diff docs/career/resume.md
git diff templates/resume/default.html
git status
```

**해결:**

`/sync-check` 스킬 실행 후 불일치 파일 수정

또는 아래 스크립트로 확인:
```bash
files=(
    "docs/career/resume.md"
    "docs/career/career_portfolio.md"
    "templates/resume/default.html"
    "templates/resume/minimal.html"
    "templates/resume/modern.html"
    "templates/resume/corporate.html"
    "templates/career/default.html"
    "templates/career/minimal.html"
    "templates/career/modern.html"
    "templates/career/corporate.html"
)

for file in "${files[@]}"; do
    echo "=== $file ==="
    git diff "$file" | head -10
done
```

---

### 문제 3: STAR+I 형식 깨짐

**증상:**
- 프로젝트 설명이 불완전함
- Situation/Task/Action/Result/Impact 중 일부 누락

**원인:** 자동 생성 시 형식 미준수

**진단:**
각 프로젝트에서 아래 섹션 확인:
- 📌 Situation (배경)
- 🎯 Task (과제)
- ⚡ Action (해결)
- ✅ Result (성과)
- 💡 Impact (비즈니스 효과)

**해결:**

올바른 형식:
```markdown
#### 프로젝트: [프로젝트명]

**📌 Situation (배경):**
- 명확한 배경/문제점 설명

**🎯 Task (과제/목표):**
- 구체적인 목표 (수치 포함)

**⚡ Action (해결 방법):**
- 기술적 의사결정 (Why & How)
- 사용한 기술 및 방법론

**✅ Result (성과):**
- **정량적 성과** (숫자 포함)

**💡 Impact (비즈니스 효과):**
- 조직/비즈니스에 미친 영향
```

---

### 문제 4: 정량적 성과 누락

**증상:**
- "개선했습니다", "빨라졌습니다" 같은 정성적 표현만 있음
- 숫자가 없음

**진단:**
```bash
# 정량적 표현 검색
grep -E "[0-9]+%" docs/career/my_career_data.md
grep -E "[0-9]+배" docs/career/my_career_data.md
```

**해결:**

**❌ Before (정성적):**
```
- 시스템 성능을 개선했습니다
- 검색이 빨라졌습니다
```

**✅ After (정량적):**
```
- 시스템 응답 속도 **80% 개선** (5초 → 1초)
- 검색 성능 **100배 개선** (10초 → 0.1초)
```

---

### 문제 5: "담당했습니다" 표현 사용

**증상:**
- 수동적인 표현 사용
- 시니어 톤이 아님

**진단:**
```bash
grep -r "담당" docs/career/
grep -r "수행" docs/career/
```

**해결:**

| 피해야 할 표현 | 권장 표현 |
|---------------|----------|
| 담당했습니다 | **달성/개선/안정화했습니다** |
| 구현했습니다 | **제약 조건을 해소했습니다** |
| 기술 사용했습니다 | **기술을 선택·설계했습니다** |
| 개발했습니다 | **아키텍처를 설계하고 구현했습니다** |

---

### 문제 6: git add 후 staging 누락

**증상:**
- 변경사항이 commit에 포함되지 않음
- git status에서 unstaged 파일 있음

**진단:**
```bash
git status
```

**해결:**
```bash
# 특정 파일 staging
git add docs/career/resume.md

# 전체 변경사항 staging
git add .

# staging 상태 확인
git status
```

---

## 복구 명령어

### 실수로 파일 수정한 경우
```bash
# 특정 파일 복구
git checkout HEAD -- <file>

# 예시
git checkout HEAD -- docs/career/resume.md
```

### staging 취소
```bash
git restore --staged <file>
```

### 최근 변경사항 확인
```bash
git log --oneline -5
git diff HEAD~1
```

---

## 검증 체크리스트

문제 해결 후 확인:

- [ ] 원본(my_career_data.md)과 일치하는가?
- [ ] 10개 파일 모두 동기화되었는가?
- [ ] STAR+I 형식이 유지되는가?
- [ ] 정량적 성과가 포함되어 있는가?
- [ ] 다크모드가 정상 작동하는가?
- [ ] git status가 깨끗한가?
