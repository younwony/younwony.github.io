# 이력서/경력기술서 PDF 내보내기

이력서/경력기술서를 PDF로 내보냅니다.

> **상세 가이드**: `.claude/skills/export/SKILL.md` 참조

## 출력 파일 (총 4개)

파일명 형식: `윤원희_[문서타입]_YYYY-MM-DD.pdf`
- **YYYY-MM-DD**: 현재 날짜 기준 (예: 오늘이 2026-01-15면 → 2026-01-15)

```
output/
├── 윤원희_이력서_YYYY-MM-DD.pdf           # 기본 (컬러풀)
├── 윤원희_이력서_Modern_YYYY-MM-DD.pdf    # 모던 (흑백)
├── 윤원희_경력기술서_YYYY-MM-DD.pdf       # 기본 (컬러풀)
└── 윤원희_경력기술서_Modern_YYYY-MM-DD.pdf # 모던 (흑백)
```

## 실행 순서

### 1. output 폴더 생성

```powershell
powershell -Command "if (-not (Test-Path 'C:\workspace\younwony.github.io\output')) { New-Item -ItemType Directory -Path 'C:\workspace\younwony.github.io\output' }"
```

### 2. 현재 날짜 확인

현재 날짜를 확인하여 `YYYY-MM-DD` 형식으로 파일명에 사용합니다.

### 3. PDF 생성 (Edge Headless)

**4개 PDF를 모두 생성하세요** (YYYY-MM-DD를 현재 날짜로 교체):

```bash
# 이력서 - 기본
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="C:\workspace\younwony.github.io\output\윤원희_이력서_YYYY-MM-DD.pdf" --no-margins "file:///C:/workspace/younwony.github.io/templates/export/pdf/resume-2page.html"

# 이력서 - 모던
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="C:\workspace\younwony.github.io\output\윤원희_이력서_Modern_YYYY-MM-DD.pdf" --no-margins "file:///C:/workspace/younwony.github.io/templates/export/pdf/resume-modern.html"

# 경력기술서 - 기본
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="C:\workspace\younwony.github.io\output\윤원희_경력기술서_YYYY-MM-DD.pdf" --no-margins "file:///C:/workspace/younwony.github.io/templates/export/pdf/career-portfolio.html"

# 경력기술서 - 모던
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="C:\workspace\younwony.github.io\output\윤원희_경력기술서_Modern_YYYY-MM-DD.pdf" --no-margins "file:///C:/workspace/younwony.github.io/templates/export/pdf/career-portfolio-modern.html"
```

### 4. 생성 확인

```powershell
powershell -Command "Get-ChildItem 'C:\workspace\younwony.github.io\output\*.pdf' | Select-Object Name, Length, LastWriteTime"
```

## 템플릿 파일

| 문서 | 템플릿 경로 |
|------|------------|
| 이력서 (기본) | `templates/export/pdf/resume-2page.html` |
| 이력서 (모던) | `templates/export/pdf/resume-modern.html` |
| 경력기술서 (기본) | `templates/export/pdf/career-portfolio.html` |
| 경력기술서 (모던) | `templates/export/pdf/career-portfolio-modern.html` |

## 체크리스트

- [ ] 이력서 - 기본 형식 생성
- [ ] 이력서 - 모던 형식 생성
- [ ] 경력기술서 - 기본 형식 생성
- [ ] 경력기술서 - 모던 형식 생성
- [ ] output 폴더에 4개 PDF 확인
