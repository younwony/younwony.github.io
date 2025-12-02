# Java Live-Study 완벽 정리

> **스터디 리더**: 백기선님
> **학습 기간**: 2020.11 ~ 2021.02 (약 3개월)
> **주차**: 총 13주차
> **학습 방식**: 온라인 스터디 + 과제 제출

---

## 📚 목차

1. [스터디 개요](#스터디-개요)
2. [주차별 핵심 정리](#주차별-핵심-정리)
3. [주요 개념 요약](#주요-개념-요약)
4. [실무 활용 가이드](#실무-활용-가이드)

---

## 스터디 개요

백기선님이 진행하신 Java 온라인 스터디로, Java의 기초부터 심화까지 체계적으로 학습한 프로그램입니다.

### 학습 목표
- Java 기본 문법 완전 이해
- JVM 동작 원리 파악
- 객체지향 프로그래밍 핵심 개념 습득
- 멀티스레드, I/O 등 실무 필수 기술 학습

### 커리큘럼 구성
```
Week 1-4: Java 기초 (JVM, 데이터 타입, 연산자, 제어문)
Week 5-8: 객체지향 (클래스, 상속, 패키지, 인터페이스)
Week 9-11: 고급 (예외 처리, 멀티스레드, Enum)
Week 12-13: 심화 (애노테이션, I/O)
```

---

## 주차별 핵심 정리

### Week 1: JVM 이해하기

**학습일**: 2020.11.20

#### JVM의 정의
> "Java Byte Code를 OS에 맞게 해석해주어 컴퓨터가 실행시킬 수 있게 하는 주체"

#### 핵심 개념
- **바이트코드**: `.class` 파일 형식
- **JIT 컴파일러**: 런타임에 바이트코드를 네이티브 코드로 변환
- **클래스 로더**: 바이트코드를 메모리에 로드

#### JVM vs JRE vs JDK

| 구분 | 포함 요소 | 용도 |
|------|---------|------|
| JVM | 실행 엔진 | 바이트코드 실행 |
| JRE | JVM + 라이브러리 | Java 프로그램 실행 |
| JDK | JRE + 개발 도구 | Java 개발 |

#### JVM 메모리 구조
```
JVM 메모리
├── 메서드 영역 (클래스 메타데이터, static 변수)
├── 힙 영역 (객체 인스턴스)
└── 스택 영역 (메서드 호출, 지역 변수)
```

---

### Week 2: 데이터 타입, 변수, 배열

**학습일**: 2020.11.20

#### 기본형 (Primitive Types)

| 타입 | 크기 | 범위 | 기본값 |
|------|------|------|--------|
| boolean | 1 bit | true/false | false |
| byte | 1 byte | -128 ~ 127 | 0 |
| short | 2 bytes | -32,768 ~ 32,767 | 0 |
| int | 4 bytes | -2³¹ ~ 2³¹-1 | 0 |
| long | 8 bytes | -2⁶³ ~ 2⁶³-1 | 0L |
| float | 4 bytes | IEEE 754 | 0.0f |
| double | 8 bytes | IEEE 754 | 0.0d |
| char | 2 bytes | 0 ~ 65,535 | '\u0000' |

#### 참조형 (Reference Types)
- 클래스, 인터페이스, 배열
- 기본값: `null`
- 힙 메모리에 저장

#### 타입 변환
```java
// 자동 형변환 (작은 → 큰)
int i = 100;
long l = i;  // OK

// 명시적 형변환 (큰 → 작은)
long l = 100L;
int i = (int) l;  // 캐스팅 필요
```

#### Java 10+ var 키워드
```java
var message = "Hello";  // String으로 추론
var number = 10;        // int로 추론
```

---

### Week 3: 연산자

**학습일**: 2020.11.23

#### 연산자 분류

| 종류 | 연산자 | 예시 |
|------|--------|------|
| 산술 | +, -, *, /, % | `5 % 2 = 1` |
| 비교 | ==, !=, <, >, <=, >= | `x == y` |
| 논리 | &&, \|\|, ! | `a && b` |
| 비트 | &, \|, ^, ~, <<, >> | `x & y` |
| 대입 | =, +=, -=, *=, /= | `x += 5` |
| 3항 | ? : | `x > 0 ? "양수" : "음수"` |
| instanceof | instanceof | `obj instanceof String` |

#### 연산자 우선순위 (높음 → 낮음)
1. 괄호 `()`
2. 단항 `++`, `--`, `!`, `~`
3. 산술 `*`, `/`, `%` → `+`, `-`
4. 비교 `<`, `>`, `<=`, `>=` → `==`, `!=`
5. 논리 `&&` → `||`
6. 3항 `? :`
7. 대입 `=`, `+=`, `-=`

#### Java 13+ switch 표현식
```java
// 기존 방식
String result;
switch (day) {
    case MONDAY:
        result = "월요일";
        break;
    default:
        result = "기타";
}

// 새로운 방식
String result = switch (day) {
    case MONDAY -> "월요일";
    case TUESDAY -> "화요일";
    default -> "기타";
};
```

---

### Week 4: 제어문

**학습일**: 2020.12.31

#### 조건문

**If 문**
```java
if (condition1) {
    // code 1
} else if (condition2) {
    // code 2
} else {
    // code 3
}
```

**Switch 문**
```java
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default code
}
```

#### 반복문 비교

| 반복문 | 구문 | 사용 시기 | IntelliJ 단축키 |
|--------|------|----------|----------------|
| for | `for(초기; 조건; 증감)` | 횟수가 정해진 반복 | `itar` |
| foreach | `for(타입 변수 : 배열)` | 배열/컬렉션 순회 | `iter` |
| while | `while(조건)` | 조건 기반 반복 | - |
| do-while | `do { } while(조건)` | 최소 1회 실행 보장 | - |

#### break vs continue

```java
// break: 루프 완전 종료
for (int i = 0; i < 10; i++) {
    if (i == 5) break;  // 5에서 종료
}

// continue: 현재 반복만 건너뛰기
for (int i = 0; i < 10; i++) {
    if (i == 5) continue;  // 5 건너뛰고 계속
}
```

---

### Week 5: 클래스

**학습일**: 2021.01.04

#### 클래스 정의
> "객체를 만들기 위한 설계도"

```java
public class Person {
    // 필드 (Field)
    private String name;
    private int age;

    // 생성자 (Constructor)
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 메서드 (Method)
    public void introduce() {
        System.out.println("이름: " + name + ", 나이: " + age);
    }
}
```

#### 객체 생성
```java
Person person = new Person("홍길동", 30);
```

#### 오버로딩 vs 오버라이딩

| 구분 | 오버로딩 | 오버라이딩 |
|------|---------|-----------|
| 정의 | 같은 이름, 다른 매개변수 | 상속받은 메서드 재정의 |
| 발생 | 같은 클래스 내 | 상속 관계 |
| 반환 타입 | 상관없음 | 동일해야 함 |
| 예시 | `println()`, `println(int)` | `toString()` 재정의 |

#### this 키워드
```java
public class Person {
    private String name;

    public Person(String name) {
        this.name = name;  // 1. 필드 참조
    }

    public Person(String name, int age) {
        this(name);  // 2. 다른 생성자 호출
        this.age = age;
    }
}
```

---

### Week 6: 상속

**학습일**: 2021.02.19

#### 상속의 특징
- **단일 상속**: 하나의 부모 클래스만 상속 가능
- **키워드**: `extends`
- **모든 클래스의 부모**: `Object` 클래스

```java
public class Animal {
    public void eat() {
        System.out.println("먹다");
    }
}

public class Dog extends Animal {
    @Override
    public void eat() {
        System.out.println("개가 먹다");
    }

    public void bark() {
        System.out.println("멍멍");
    }
}
```

#### super 키워드
```java
public class Child extends Parent {
    public Child() {
        super();  // 부모 생성자 호출
    }

    @Override
    public void method() {
        super.method();  // 부모 메서드 호출
        // 추가 로직
    }
}
```

#### 다이나믹 메서드 디스패치
> 런타임에 호출할 메서드를 결정하는 메커니즘

```java
Animal animal = new Dog();  // 업캐스팅
animal.eat();  // Dog의 eat() 호출 (동적 바인딩)
```

#### 추상 클래스
```java
public abstract class Shape {
    // 추상 메서드
    public abstract double area();

    // 일반 메서드
    public void print() {
        System.out.println("도형");
    }
}

public class Circle extends Shape {
    private double radius;

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}
```

#### final 키워드

| 적용 대상 | 효과 |
|----------|------|
| 클래스 | 상속 불가 (예: `String`) |
| 메서드 | 오버라이딩 불가 |
| 변수 | 상수 (재할당 불가) |

---

### Week 7: 패키지

**학습일**: 2021.02.19

#### 패키지 정의
> "클래스의 묶음 단위"

```java
package com.example.myapp;

import java.util.List;
import java.util.ArrayList;
```

#### 명명 규칙
- 모두 소문자
- 도메인 역순 (예: `com.company.project`)

#### 접근 제어자

| 제어자 | 같은 클래스 | 같은 패키지 | 자식 클래스 | 모든 곳 |
|--------|-----------|-----------|-----------|---------|
| `private` | ✅ | ❌ | ❌ | ❌ |
| `(default)` | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ | ✅ |

#### 클래스패스
```bash
# 컴파일
javac -cp .:/path/to/lib MyClass.java

# 실행
java -cp .:/path/to/lib MyClass
```

---

### Week 8: 인터페이스

**학습일**: 2021.02.19

#### 인터페이스 정의
```java
public interface Drawable {
    // 추상 메서드 (public abstract 생략 가능)
    void draw();

    // Java 8+ default 메서드
    default void print() {
        System.out.println("그리기");
    }

    // Java 8+ static 메서드
    static void info() {
        System.out.println("Drawable 인터페이스");
    }

    // Java 9+ private 메서드
    private void helper() {
        // 내부 헬퍼 메서드
    }
}
```

#### 구현
```java
public class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("원 그리기");
    }
}
```

#### 추상 클래스 vs 인터페이스

| 구분 | 추상 클래스 | 인터페이스 |
|------|-----------|----------|
| 상속 | 단일 상속 | 다중 구현 |
| 필드 | 인스턴스 변수 가능 | 상수만 가능 |
| 메서드 | 추상/일반 모두 가능 | 추상/default/static |
| 생성자 | 있음 | 없음 |

---

### Week 9: 예외 처리

**학습일**: 2021.02.19

#### Exception vs Error

| 구분 | Exception | Error |
|------|-----------|-------|
| 처리 가능성 | ✅ 가능 | ❌ 불가능 |
| 예시 | `IOException` | `OutOfMemoryError` |
| 대응 방법 | try-catch | 프로그램 종료 |

#### 예외 계층 구조
```
Throwable
├── Exception
│   ├── IOException (Checked)
│   ├── SQLException (Checked)
│   └── RuntimeException (Unchecked)
│       ├── NullPointerException
│       ├── IndexOutOfBoundsException
│       └── IllegalArgumentException
└── Error
    ├── OutOfMemoryError
    └── StackOverflowError
```

#### Checked vs Unchecked

| 구분 | Checked Exception | Unchecked Exception |
|------|------------------|---------------------|
| 처리 강제 | 필수 (try-catch 또는 throws) | 선택 |
| 예시 | `IOException`, `SQLException` | `NullPointerException` |
| 발생 시점 | 컴파일 타임 체크 | 런타임 |

#### try-catch-finally
```java
try {
    // 예외 발생 가능 코드
    FileReader fr = new FileReader("file.txt");
} catch (FileNotFoundException e) {
    // 예외 처리
    System.out.println("파일 없음");
} catch (IOException e) {
    // 다른 예외 처리
    System.out.println("IO 오류");
} finally {
    // 항상 실행 (자원 해제 등)
    // fr.close();
}
```

#### try-with-resources (Java 7+)
```java
try (FileReader fr = new FileReader("file.txt");
     BufferedReader br = new BufferedReader(fr)) {
    // 자동으로 close() 호출
    String line = br.readLine();
} catch (IOException e) {
    e.printStackTrace();
}
```

#### 커스텀 예외
```java
public class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

// 사용
throw new MyException("문제 발생!");
```

---

### Week 10: 멀티스레드 프로그래밍

**학습일**: 2021.02.19

#### 프로세스 vs 스레드

| 구분 | 프로세스 | 스레드 |
|------|---------|--------|
| 정의 | 실행 중인 프로그램 | 프로세스 내 실행 단위 |
| 메모리 | 독립적 | 공유 (힙, 메서드 영역) |
| 생성 비용 | 높음 | 낮음 |
| 통신 | IPC (Inter-Process Communication) | 공유 메모리 |

#### 스레드 생성 방법

**방법 1: Runnable 구현**
```java
Runnable task = () -> {
    System.out.println("스레드 실행");
};
Thread thread = new Thread(task);
thread.start();
```

**방법 2: Thread 상속**
```java
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("스레드 실행");
    }
}

new MyThread().start();
```

#### 스레드 생명 주기

```
NEW → RUNNABLE ⇄ RUNNING → TERMINATED
         ↕          ↓
    BLOCKED/WAITING/TIMED_WAITING
```

| 상태 | 설명 |
|------|------|
| NEW | 생성됨, 아직 시작 안 됨 |
| RUNNABLE | 실행 가능 (CPU 대기 중) |
| RUNNING | 실행 중 |
| BLOCKED | 락 대기 |
| WAITING | 무한 대기 (`wait()`) |
| TIMED_WAITING | 시간 제한 대기 (`sleep()`) |
| TERMINATED | 종료 |

#### 스레드 우선순위
```java
thread.setPriority(Thread.MAX_PRIORITY);  // 10
thread.setPriority(Thread.NORM_PRIORITY); // 5 (기본값)
thread.setPriority(Thread.MIN_PRIORITY);  // 1
```

#### 동기화 (Synchronization)

**synchronized 메서드**
```java
public synchronized void increment() {
    count++;
}
```

**synchronized 블록**
```java
public void method() {
    synchronized(lock) {
        // 임계 영역 (Critical Section)
        count++;
    }
}
```

#### 데드락 (Deadlock)
> 여러 스레드가 서로의 자원을 기다리며 무한 대기하는 상황

**발생 조건**
1. 상호 배제 (Mutual Exclusion)
2. 점유와 대기 (Hold and Wait)
3. 비선점 (No Preemption)
4. 순환 대기 (Circular Wait)

**예방 방법**
- 락 순서 정하기
- 타임아웃 설정
- 데드락 감지 알고리즘

---

### Week 11: Enum

**학습일**: 2021.02.19

#### Enum 정의
> "멤버라 불리는 명명된 값의 집합을 이루는 자료형"

```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// 사용
Day today = Day.MONDAY;
```

#### 생성자와 필드
```java
public enum Day {
    MONDAY("월요일", 1),
    TUESDAY("화요일", 2),
    WEDNESDAY("수요일", 3);

    private final String korean;
    private final int order;

    Day(String korean, int order) {
        this.korean = korean;
        this.order = order;
    }

    public String getKorean() {
        return korean;
    }
}
```

#### 제공 메서드

| 메서드 | 설명 | 예시 |
|--------|------|------|
| `values()` | 모든 상수를 배열로 반환 | `Day.values()` |
| `valueOf()` | 문자열에 해당하는 상수 반환 | `Day.valueOf("MONDAY")` |
| `ordinal()` | 정의된 순서 반환 (0부터) | `Day.MONDAY.ordinal()` // 0 |
| `name()` | 상수 이름 반환 | `Day.MONDAY.name()` // "MONDAY" |

#### EnumSet
```java
// 모든 요일
EnumSet<Day> allDays = EnumSet.allOf(Day.class);

// 특정 요일들
EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);

// 범위 지정
EnumSet<Day> weekdays = EnumSet.range(Day.MONDAY, Day.FRIDAY);
```

**장점**
- 비트 연산 기반으로 메모리 효율적
- null 미지원
- 타입 안전성

---

### Week 12: 애노테이션

**학습일**: 2021.02.19

#### 애노테이션 정의
> "자바 소스코드에 추가하여 사용할 수 있는 메타데이터의 일종"

#### 내장 애노테이션

| 애노테이션 | 설명 | 예시 |
|-----------|------|------|
| `@Override` | 메서드 재정의 표시 | 컴파일 타임 검증 |
| `@Deprecated` | 사용 자제 권고 | 경고 메시지 표시 |
| `@SuppressWarnings` | 경고 억제 | `@SuppressWarnings("unchecked")` |
| `@FunctionalInterface` | 함수형 인터페이스 | 람다 표현식 사용 |

#### 커스텀 애노테이션 정의
```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MyAnnotation {
    String value() default "";
    int number() default 0;
}
```

#### @Retention

| 값 | 설명 | 용도 |
|----|------|------|
| `SOURCE` | 소스 코드까지만 유지 | Lombok 등 |
| `CLASS` | 클래스 파일까지 유지 | 기본값 |
| `RUNTIME` | 런타임까지 유지 | 리플렉션 활용 |

#### @Target

| 값 | 적용 대상 |
|----|----------|
| `TYPE` | 클래스, 인터페이스 |
| `FIELD` | 필드 |
| `METHOD` | 메서드 |
| `PARAMETER` | 매개변수 |
| `CONSTRUCTOR` | 생성자 |
| `LOCAL_VARIABLE` | 지역 변수 |
| `ANNOTATION_TYPE` | 애노테이션 타입 |
| `PACKAGE` | 패키지 |

#### 애노테이션 프로세서
- 컴파일 시점에 애노테이션 처리
- 코드 생성, 검증 등
- 예시: Lombok, QueryDSL

#### 리플렉션 활용
```java
Method method = MyClass.class.getMethod("myMethod");
if (method.isAnnotationPresent(MyAnnotation.class)) {
    MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);
    String value = annotation.value();
}
```

---

### Week 13: I/O

**학습일**: 2021.02.19

#### 스트림 (Stream)
> "자바는 파일이나 콘솔의 입출력을 직접 다루지 않고, 스트림을 통해 처리"

#### 스트림 분류

```
Java I/O
├── 바이트 기반 스트림
│   ├── InputStream
│   │   ├── FileInputStream
│   │   └── BufferedInputStream
│   └── OutputStream
│       ├── FileOutputStream
│       └── BufferedOutputStream
└── 문자 기반 스트림
    ├── Reader
    │   ├── FileReader
    │   └── BufferedReader
    └── Writer
        ├── FileWriter
        └── BufferedWriter
```

#### 바이트 vs 문자 스트림

| 구분 | 바이트 스트림 | 문자 스트림 |
|------|-------------|-----------|
| 단위 | 1 byte | 2 bytes (char) |
| 클래스 | InputStream/OutputStream | Reader/Writer |
| 용도 | 이미지, 동영상 등 | 텍스트 파일 |

#### 파일 읽기
```java
// 바이트 기반
try (FileInputStream fis = new FileInputStream("file.txt")) {
    int data;
    while ((data = fis.read()) != -1) {
        System.out.print((char) data);
    }
}

// 문자 기반 (BufferedReader)
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}
```

#### 파일 쓰기
```java
try (BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {
    bw.write("Hello, World!");
    bw.newLine();
    bw.write("Java I/O");
}
```

#### 버퍼 (Buffer)
> 장치 간 속도 차이를 완화하는 임시 저장 공간

| 클래스 | 버퍼 크기 |
|--------|----------|
| `BufferedInputStream` | 8,192 bytes |
| `BufferedReader` | 8,192 chars |

#### IO vs NIO

| 구분 | IO | NIO |
|------|-----|-----|
| 방향 | 단방향 (InputStream/OutputStream) | 양방향 (Channel) |
| 버퍼 | 없음 또는 보조 스트림 | 필수 (Buffer) |
| 블로킹 | 블로킹 only | 블로킹/논블로킹 |
| 도입 | Java 1.0 | Java 1.4 (NIO), Java 7 (NIO.2) |

#### 표준 스트림
```java
// 표준 입력
Scanner scanner = new Scanner(System.in);
String input = scanner.nextLine();

// 표준 출력
System.out.println("출력");

// 표준 에러
System.err.println("에러");
```

---

## 주요 개념 요약

### 객체지향 4대 원칙

| 원칙 | 설명 | Java 구현 |
|------|------|----------|
| **캡슐화** | 데이터와 메서드를 하나로 묶고 정보 은닉 | private 필드 + getter/setter |
| **상속** | 기존 클래스의 특성을 물려받음 | extends |
| **다형성** | 같은 메시지에 다른 반응 | 오버라이딩, 인터페이스 |
| **추상화** | 공통 특성 추출 | abstract 클래스, 인터페이스 |

### SOLID 원칙

| 원칙 | 설명 |
|------|------|
| **SRP** (Single Responsibility) | 클래스는 하나의 책임만 |
| **OCP** (Open-Closed) | 확장에는 열려 있고 수정에는 닫혀 있어야 |
| **LSP** (Liskov Substitution) | 자식 클래스는 부모 클래스를 대체 가능 |
| **ISP** (Interface Segregation) | 인터페이스를 작게 분리 |
| **DIP** (Dependency Inversion) | 추상화에 의존, 구체화에 의존하지 말 것 |

---

## 실무 활용 가이드

### 즉시 적용 가능
1. ✅ **제네릭 사용**: 타입 안전성 확보
2. ✅ **try-with-resources**: 자원 자동 해제
3. ✅ **Enum 활용**: 상수 관리
4. ✅ **람다 표현식**: 함수형 프로그래밍
5. ✅ **Stream API**: 선언형 데이터 처리

### 설계 단계 적용
1. 📋 인터페이스 기반 설계
2. 📋 의존성 주입 (DI)
3. 📋 예외 처리 전략 수립
4. 📋 멀티스레드 안전성 고려

### 성능 최적화
1. 🎯 StringBuilder/StringBuffer 활용
2. 🎯 BufferedReader/Writer 사용
3. 🎯 동기화 최소화
4. 🎯 불필요한 객체 생성 방지

---

## 학습 회고

### 긍정적 평가
✅ **체계적 학습**
- Java 기초부터 심화까지 단계적 학습
- 백기선님의 명쾌한 설명

✅ **실무 연결**
- 이론과 실무의 연결고리 이해
- 현업에서 자주 사용하는 개념 습득

### 학습 성과
- Java 기본 개념 완전 이해
- JVM 동작 원리 파악
- 멀티스레드 프로그래밍 기초 확립
- 객체지향 설계 원칙 습득

---

## 참고 자료

- **스터디**: 백기선 Java 온라인 스터디
- **원본 블로그**: https://youn12.tistory.com/category/Live-Study
- **Java 공식 문서**: https://docs.oracle.com/en/java/

---

**작성일**: 2025-11-30
**기반**: 12Dev 블로그 Live-Study 13주차 포스팅
