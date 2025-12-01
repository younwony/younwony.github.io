# IntelliJ IDEA 팁 & 설정

> **블로그 원문**: https://youn12.tistory.com/category/IDE
> **IDE**: IntelliJ IDEA Ultimate

---

## 개요

IntelliJ IDEA 사용 중 유용한 설정, 팁, 이슈 해결 방법을 정리한 포스트들입니다.

---

## 목차

1. [소스 실시간 반영](#1-소스-실시간-반영)
2. [CUBRID Database Tool 연결 (방법 1)](#2-cubrid-database-tool-연결-방법-1)
3. [CUBRID Database Tool 연결 (방법 2)](#3-cubrid-database-tool-연결-방법-2)
4. [VCS Repository URL 한글 URL 삭제](#4-vcs-repository-url-한글-url-삭제)
5. [실행 Jar 생성](#5-실행-jar-생성)
6. [sout 단축키 팁](#6-sout-단축키-팁)
7. [File Size Exceeds 이슈 해결](#7-file-size-exceeds-이슈-해결)
8. [Slf4j Live Template 설정](#8-slf4j-live-template-설정)

---

## 1. 소스 실시간 반영

**작성일**: 2020.12.02

### 문제
개발 중 소스 변경 시 서버 재시작 필요

### 해결 방법
IntelliJ 설정에서 클래스와 리소스의 자동 업데이트 활성화

---

## 2. CUBRID Database Tool 연결 (방법 1)

**작성일**: 2021.01.04

### 개요
IntelliJ의 Database Tool을 통해 CUBRID 데이터베이스 연결

### 방법
External JAR 파일을 직접 추가하여 JDBC 드라이버 설정

---

## 3. CUBRID Database Tool 연결 (방법 2)

**작성일**: 2021.01.06

### 개요
IntelliJ 내 JDBC-drivers 설정을 통한 연결

### 5단계 절차

1. **jdbc-drivers.xml 설정**
   - CUBRID 아티팩트 정보를 XML 파일에 추가

2. **드라이버 등록**
   - IntelliJ에서 CUBRID 드라이버 등록

3. **데이터소스 연결**
   - `CUBRIDDriver` 클래스로 설정

4. **데이터소스 등록**
   - 사용자 자격증명 및 URL 입력
   - 특수 형식: `:::` 포함

5. **연결 확인**
   - 테스트 연결로 성공 여부 검증

---

## 4. VCS Repository URL 한글 URL 삭제

**작성일**: 2021.03.03

### 문제
실수로 입력한 한글 Repository URL 삭제 불가

### 해결 방법
IntelliJ 설정 파일에서 직접 수정

---

## 5. 실행 Jar 생성

**작성일**: 2021.04.02
**환경**: IntelliJ IDEA Ultimate 2020.3.3, OpenJDK 1.8

### 개요
외부 의존성을 포함한 실행 가능한 JAR 파일 생성

### 단계별 가이드

1. **Resources 디렉토리 생성**
   - `src/main/resources` 생성
   - MANIFEST.MF 파일 저장 위치

2. **Artifacts 생성**
   - Project Structure → Artifacts
   - Main Class 지정

3. **의존성 관리**
   - "Extract into Output Root" 선택
   - 라이브러리를 JAR 내부에 포함

4. **빌드**
   - Build → Build Artifacts 메뉴 실행

5. **실행**
   ```bash
   java -jar [path]/execute_jar.jar
   ```

### 트러블슈팅
**NoClassDefFoundError** 발생 시:
- 의존성이 제대로 포함되었는지 확인
- Extract 옵션 확인

---

## 6. sout 단축키 팁

**작성일**: 2021.07.08

### System.out.println() 자동 완성

| 키워드 | 출력 |
|--------|------|
| `sout` | `System.out.println()` |
| `soutv` | 변수 출력 |
| `soutm` | 메서드명 출력 |
| `soutp` | 파라미터 출력 |

---

## 7. File Size Exceeds 이슈 해결

**작성일**: 2021.09.13
**환경**: IntelliJ Ultimate 2021.2.1

### 문제
> "The file size exceeds the configured limit. Code insight features are not available."

코드 파일 크기가 기본 제한값을 초과할 때 발생

### 해결 방법 (4단계)

1. **설치 경로 확인**
   - ToolBox: Settings → Configuration → Install location
   - "Show..." 버튼으로 바로 이동

2. **idea.properties 파일 찾기**
   - 설치 폴더 내 `bin` 디렉토리
   - 텍스트 에디터로 열기

3. **설정값 수정**
   ```properties
   # 기본값: 2500
   idea.max.intellisense.filesize=25000
   ```

4. **재시작**
   - IntelliJ 완전히 재시작

---

## 8. Slf4j Live Template 설정

**작성일**: 2021.11.24
**환경**: IntelliJ Ultimate 2021.2.3

### 목적
> "log.info, log.debug 등 Slf4j의 Log를 자동 생성하기"

`sout`처럼 `logv`로 로깅 코드 자동 완성

### 설정 단계

1. **Live Templates 접근**
   - Settings → Editor → Live Templates

2. **Java 템플릿 생성**
   - Template Group: Java
   - **Abbreviation**: `logv`
   - **Description**: 템플릿 설명
   - **Template text**: log.info 템플릿 작성
   - **Application Contexts**: Java 선택

3. **Edit Variables 설정**

   | 항목 | Expression | Default |
   |------|-----------|---------|
   | EXPR | `variableOfType("")` | "expr" |
   | EXPR_COPY | `escapeString(EXPR)` | (공백) |

### 사용 방법
`logv` 입력 후 Tab → 자동으로 SLF4J 로깅 코드 생성

---

## 유용한 단축키 모음

| 단축키 | 기능 |
|--------|------|
| `Ctrl + Shift + F` | 전체 검색 |
| `Ctrl + Shift + R` | 전체 치환 |
| `Ctrl + Alt + L` | 코드 포맷팅 |
| `Ctrl + Alt + O` | import 정리 |
| `Alt + Enter` | Quick Fix |
| `Ctrl + N` | 클래스 검색 |
| `Ctrl + Shift + N` | 파일 검색 |
| `Shift + Shift` | 전체 검색 |

---

**태그**: `IntelliJ`, `IDE`, `설정`, `팁`
