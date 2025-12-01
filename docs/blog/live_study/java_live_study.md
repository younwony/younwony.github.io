# Java Live-Study

> **블로그 원문**: https://youn12.tistory.com/category/Live-Study
> **스터디 기간**: 2020년 11월 ~ 2021년 2월
> **스터디 형태**: 백기선님의 Java 온라인 스터디

---

## 스터디 개요

백기선님이 진행하신 Java 온라인 스터디에 참여하여 Java 기초를 체계적으로 학습한 기록입니다.

총 13주차에 걸쳐 Java의 핵심 개념들을 학습했습니다.

---

## 목차

1. [1주차: JVM](#1주차-jvm)
2. [2주차: 데이터 타입, 변수, 배열](#2주차-데이터-타입-변수-배열)
3. [3주차: 연산자](#3주차-연산자)
4. [4주차: 제어문](#4주차-제어문)
5. [5주차: 클래스](#5주차-클래스)
6. [6주차: 상속](#6주차-상속)
7. [7주차: 패키지](#7주차-패키지)
8. [8주차: 인터페이스](#8주차-인터페이스)
9. [9주차: 예외 처리](#9주차-예외-처리)
10. [10주차: 멀티쓰레드 프로그래밍](#10주차-멀티쓰레드-프로그래밍)
11. [11주차: Enum](#11주차-enum)
12. [12주차: 애노테이션](#12주차-애노테이션)
13. [13주차: I/O](#13주차-io)

---

## 1주차: JVM

**작성일**: 2020.11.20

### JVM이란?
> "Java Byte Code를 OS에 맞게 해석해주어 컴퓨터가 실행시킬 수 있게 하는 주체"

### 주요 내용
- JVM의 정의와 역할
- Java 컴파일 및 실행 방법
- 바이트코드 개념
- JIT 컴파일러
- JVM 아키텍처 구성 요소
- JDK vs JRE 차이점

---

## 2주차: 데이터 타입, 변수, 배열

**작성일**: 2020.11.20

### 주요 내용

#### 기본형 (Primitive Types)
- boolean, byte, short, int, long, float, double, char

#### 참조형 (Reference Types)
- 클래스, 인터페이스, 배열

#### 변수
- 변수 선언 및 초기화
- 변수의 스코프와 생명주기
- 타입 변환 (형변환)

#### 배열
- 배열 선언 및 사용
- 다차원 배열

#### 타입 추론
- Java 10+ var 키워드

---

## 3주차: 연산자

**작성일**: 2020.11.23

### 주요 내용

| 연산자 종류 | 설명 |
|------------|------|
| 산술 연산자 | +, -, *, /, % |
| 비트 연산자 | &, |, ^, ~, <<, >>, >>> |
| 관계 연산자 | ==, !=, <, >, <=, >= |
| 논리 연산자 | &&, ||, ! |
| instanceof | 타입 확인 |
| 대입 연산자 | =, +=, -=, etc. |
| 화살표 연산자 | -> (Lambda) |
| 3항 연산자 | condition ? a : b |

### 연산자 우선순위
연산자별 우선순위와 결합 방향

### Java 13 switch 표현식
새로운 switch 문법

---

## 4주차: 제어문

**작성일**: 2020.12.31

### 선택문 (Conditional Statements)

#### If 문
```java
if(condition 1) {
    code
} else if(condition 2) {
    code 2
} else {
    code 3
}
```

#### 3항 연산자
> "'condition 1'이 true일 경우 'code 1', false일 경우 'code 2'를 실행"

#### Switch 문
표현식과 일치하는 case를 찾아 break 문을 만날 때까지 실행

### 반복문 (Loop Statements)

| 반복문 | 특징 | IntelliJ 자동완성 |
|--------|------|------------------|
| For | 초기문, 조건문, 증감문 | `itar` |
| Foreach | 배열/컬렉션 순회 | `iter` |
| While | 조건이 참일 동안 반복 | - |
| Do While | 먼저 실행 후 조건 검사 | - |

---

## 5주차: 클래스

**작성일**: 2021.01.04

### 클래스 정의
> 객체지향프로그래밍에서 객체를 만들기 위한 설계도

구성 요소:
- 필드 (Field)
- 메서드 (Method)

### 객체 생성
> "new 연산자를 통해 메모리에 할당하면서 인스턴스화"

### 메서드 정의
```java
접근제어자 반환타입 메서드명(매개변수) {
    // 구현
}
```

#### 오버로딩 vs 오버라이딩

| 구분 | 오버로딩 | 오버라이딩 |
|------|----------|-----------|
| 정의 | 같은 이름, 다른 매개변수 | 상속받은 메서드 재정의 |
| 반환타입 | 상관없음 | 동일해야 함 |

### 생성자
- 클래스 이름과 동일
- 반환값 없음
- 오버로딩 가능

### this 키워드
- 인스턴스가 자신을 참조
- 생성자에서 다른 생성자 호출 시 사용

---

## 6주차: 상속

**작성일**: 2021.02.19

### 상속의 특징
- 단일 상속만 지원 (다중 상속 불가)
- extends 키워드 사용

### super 키워드
- 부모 클래스 참조
- 부모 생성자 호출

### 메서드 오버라이딩
상속받은 메서드를 자식 클래스에서 재정의

### 다이나믹 메서드 디스패치
런타임에 호출할 메서드 결정

### 추상 클래스
- abstract 키워드
- 인스턴스화 불가
- 추상 메서드 포함 가능

### final 키워드
- 클래스: 상속 불가
- 메서드: 오버라이딩 불가
- 변수: 상수

### Object 클래스
모든 클래스의 최상위 부모

---

## 7주차: 패키지

**작성일**: 2021.02.19

### 패키지 키워드
클래스의 묶음 단위

### 명명 규칙
- 소문자 사용
- 도메인 역순

### import 문
다른 패키지의 클래스 사용

### 클래스패스
클래스 파일 위치 지정

### 접근 제어자

| 제어자 | 같은 클래스 | 같은 패키지 | 자식 클래스 | 전체 |
|--------|------------|------------|-----------|------|
| private | O | X | X | X |
| (default) | O | O | X | X |
| protected | O | O | O | X |
| public | O | O | O | O |

---

## 8주차: 인터페이스

**작성일**: 2021.02.19

### 인터페이스 정의
```java
public interface MyInterface {
    void method();
}
```

### 구현
```java
public class MyClass implements MyInterface {
    @Override
    public void method() { }
}
```

### Java 8+ 기능

| 기능 | 버전 | 설명 |
|------|------|------|
| default 메서드 | Java 8 | 구현부 포함 가능 |
| static 메서드 | Java 8 | 인터페이스 직접 호출 |
| private 메서드 | Java 9 | 내부 헬퍼 메서드 |

---

## 9주차: 예외 처리

**작성일**: 2021.02.19

### Exception vs Error

| 구분 | Exception | Error |
|------|-----------|-------|
| 처리 | 가능 | 불가능 |
| 예시 | IOException | OutOfMemoryError |

### 예외 계층 구조
- Throwable
  - Exception
    - Checked Exception
    - RuntimeException (Unchecked)
  - Error

### try-catch-finally
```java
try {
    // 예외 발생 가능 코드
} catch (Exception e) {
    // 예외 처리
} finally {
    // 항상 실행
}
```

### 커스텀 예외
```java
public class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}
```

---

## 10주차: 멀티쓰레드 프로그래밍

**작성일**: 2021.02.19

### 프로세스 vs 쓰레드

| 구분 | 프로세스 | 쓰레드 |
|------|---------|--------|
| 정의 | 실행 중인 프로그램 | 프로세스 내 실행 단위 |
| 메모리 | 독립 | 공유 |

### 쓰레드 생성

#### Runnable 구현
```java
Runnable r = () -> System.out.println("Hello");
new Thread(r).start();
```

#### Thread 상속
```java
class MyThread extends Thread {
    @Override
    public void run() { }
}
```

### 쓰레드 상태
- NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED

### 쓰레드 우선순위
- MIN_PRIORITY (1)
- NORM_PRIORITY (5)
- MAX_PRIORITY (10)

### 동기화
```java
synchronized void method() { }
synchronized(lock) { }
```

### 데드락
여러 쓰레드가 서로의 자원을 기다리며 무한 대기

---

## 11주차: Enum

**작성일**: 2021.02.19

### Enum 정의
> "멤버라 불리는 명명된 값의 집합을 이루는 자료형"

Java 1.5부터 지원, 타입 안정성 제공

### 기본 사용법
```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY
}
```

### 생성자와 필드
```java
public enum Day {
    MONDAY("월요일"),
    TUESDAY("화요일");

    private final String korean;

    Day(String korean) {
        this.korean = korean;
    }
}
```

### 제공 메소드

| 메소드 | 설명 |
|--------|------|
| values() | 모든 상수를 배열로 반환 |
| valueOf() | 문자열에 해당하는 상수 반환 |
| ordinal() | 정의된 순서 반환 (0부터) |

### java.lang.Enum
- 모든 열거체의 공통 조상
- 다중 상속 불가능
- == 및 compareTo() 사용 가능

### EnumSet
- 메모리 효율적인 Set 구현체
- 비트 연산 기반
- null 미지원
- 생성 메서드: allOf(), of(), range() 등

---

## 12주차: 애노테이션

**작성일**: 2021.02.19

### 애노테이션 정의
> "자바 소스코드에 추가하여 사용할 수 있는 메타데이터의 일종"

Java 1.5 이상에서 사용 가능

### 내장 애노테이션

| 애노테이션 | 설명 |
|-----------|------|
| @Override | 메서드 재정의 표시 |
| @Deprecated | 사용 자제 권고 |
| @SuppressWarnings | 경고 억제 |

### @Retention
애노테이션 유지 범위

| 값 | 설명 |
|----|------|
| SOURCE | 소스 코드까지만 |
| CLASS | 클래스 파일까지 |
| RUNTIME | 런타임까지 |

### @Target
적용 대상 제한
- TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR 등

### @Documented
JavaDoc 문서에 포함

### 애노테이션 프로세서
- 컴파일 시점에 애노테이션 처리
- Lombok 등에서 활용

### 리플렉션 활용
런타임에 애노테이션 정보 접근

---

## 13주차: I/O

**작성일**: 2021.02.19

### 스트림 (Stream)
> "자바는 파일이나 콘솔의 입출력을 직접 다루지 않고, 스트림(Stream)을 통해 처리"

추상적인 데이터 흐름을 통해 I/O 처리

#### InputStream / OutputStream
- read(), write() 메서드
- BufferedInputStream 등 보조 스트림

### 버퍼 (Buffer)
장치 간 속도 차이를 완화

| 클래스 | 용량 |
|--------|------|
| BufferedInputStream/Reader | 8,192 bytes/chars |
| BufferedOutputStream/Writer | 8,192 bytes/chars |

### 채널 (Channel)
> "채널은 스트림과 달리 양방향으로 입력과 출력이 가능하다"

NIO (New Input/Output) 도입

### IO vs NIO

| 구분 | IO | NIO |
|------|-----|-----|
| 방향 | 단방향 | 양방향 |
| 처리 | 스트림 | 채널 + 버퍼 |
| 블로킹 | 블로킹 | 논블로킹 지원 |

### 바이트 기반 스트림
- FileInputStream
- FileOutputStream

### 문자 기반 스트림
- FileReader
- FileWriter

### 표준 스트림
- System.in
- System.out
- System.err

### 파일 작업
File 클래스와 스트림을 활용한 읽기/쓰기

---

**태그**: `Java`, `Live-Study`, `백기선`, `JVM`, `OOP`
