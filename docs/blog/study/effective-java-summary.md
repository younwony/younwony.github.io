# Effective Java 3/E 정리

> **원서**: Effective Java, Third Edition
> **저자**: Joshua Bloch
> **학습 기간**: 2023.04 - 2023.05
> **포스팅 수**: 4개

---

## 📚 목차

1. [1장 - 들어가기](#1장---들어가기)
2. [2장 - 객체 생성과 파괴](#2장---객체-생성과-파괴)
3. [3장 - 모든 객체의 공통 메서드](#3장---모든-객체의-공통-메서드)
4. [4장 - 클래스와 인터페이스](#4장---클래스와-인터페이스)

---

## 1장 - 들어가기

**작성일**: 2023.04.18

### 책의 핵심 원칙 7가지

#### 1. 명료성 (Clarity)
- 코드는 명확하고 이해하기 쉬워야 함
- 독자가 코드를 읽고 즉시 의도를 파악할 수 있어야 함

#### 2. 단순성 (Simplicity)
- 복잡한 해결책보다 단순한 해결책 선호
- 필요 이상으로 복잡하게 만들지 말 것

#### 3. 컴포넌트는 예측 가능한 동작만 수행
- 예상치 못한 부작용 방지
- 사용자가 기대하는 대로 동작해야 함

#### 4. 재사용성 (Reusability)
- 코드는 재사용 가능하도록 작성
- 일반화된 솔루션 제공

#### 5. 의존성 최소화
- 클래스 간 결합도를 낮춤
- 인터페이스를 활용한 느슨한 결합

#### 6. 오류는 빨리 잡아야 함
- 컴파일 타임에 오류 발견이 이상적
- 런타임 오류보다 컴파일 오류 선호

#### 7. 문서화의 중요성
- 명확한 JavaDoc 작성
- API 사용자를 위한 충분한 설명

---

## 2장 - 객체 생성과 파괴

**작성일**: 2023.04.30

### 아이템 1: 생성자 대신 정적 팩터리 메서드를 고려하라

#### 장점
1. **이름을 가질 수 있다**
```java
// ❌ 생성자 - 의미 불명확
BigInteger bi = new BigInteger(int, int, Random);

// ✅ 정적 팩터리 - 의미 명확
BigInteger bi = BigInteger.probablePrime(int, Random);
```

2. **호출될 때마다 인스턴스를 새로 생성하지 않아도 된다**
```java
public static Boolean valueOf(boolean b) {
    return b ? Boolean.TRUE : Boolean.FALSE;  // 미리 생성된 객체 반환
}
```

3. **반환 타입의 하위 타입 객체를 반환할 수 있다**
```java
public static <E extends Enum<E>> EnumSet<E> noneOf(Class<E> elementType) {
    // 원소 개수에 따라 다른 구현체 반환
    if (elementType.getEnumConstants().length <= 64)
        return new RegularEnumSet<>(elementType);
    else
        return new JumboEnumSet<>(elementType);
}
```

4. **입력 매개변수에 따라 매번 다른 클래스의 객체를 반환할 수 있다**

5. **정적 팩터리 메서드를 작성하는 시점에는 반환할 객체의 클래스가 존재하지 않아도 된다**
   - 서비스 제공자 프레임워크의 근간 (JDBC 등)

#### 단점
1. 상속을 하려면 public/protected 생성자 필요
2. 정적 팩터리 메서드는 프로그래머가 찾기 어려움

#### 명명 규칙
- `from`: 매개변수 하나 받아 해당 타입의 인스턴스 반환
- `of`: 여러 매개변수를 받아 적합한 타입의 인스턴스 반환
- `valueOf`: from과 of의 더 자세한 버전
- `instance` / `getInstance`: 인스턴스 반환 (같은 인스턴스임을 보장하지 않음)
- `create` / `newInstance`: 매번 새로운 인스턴스 생성
- `getType`: getInstance와 같으나 다른 클래스의 팩터리 메서드
- `newType`: newInstance와 같으나 다른 클래스의 팩터리 메서드
- `type`: getType과 newType의 간결한 버전

---

### 아이템 2: 생성자에 매개변수가 많다면 빌더를 고려하라

#### 빌더 패턴
```java
public class NutritionFacts {
    private final int servingSize;
    private final int servings;
    private final int calories;
    private final int fat;

    public static class Builder {
        // 필수 매개변수
        private final int servingSize;
        private final int servings;

        // 선택 매개변수 - 기본값으로 초기화
        private int calories = 0;
        private int fat = 0;

        public Builder(int servingSize, int servings) {
            this.servingSize = servingSize;
            this.servings = servings;
        }

        public Builder calories(int val) {
            calories = val;
            return this;
        }

        public Builder fat(int val) {
            fat = val;
            return this;
        }

        public NutritionFacts build() {
            return new NutritionFacts(this);
        }
    }

    private NutritionFacts(Builder builder) {
        servingSize = builder.servingSize;
        servings = builder.servings;
        calories = builder.calories;
        fat = builder.fat;
    }
}

// 사용
NutritionFacts cocaCola = new NutritionFacts.Builder(240, 8)
    .calories(100)
    .fat(35)
    .build();
```

#### 장점
- 읽기 쉽고 쓰기 쉬움
- 불변성 보장 가능
- 계층적으로 설계된 클래스와 함께 사용하기 좋음

---

### 아이템 3: private 생성자나 열거 타입으로 싱글턴임을 보증하라

#### 방법 1: public static final 필드
```java
public class Elvis {
    public static final Elvis INSTANCE = new Elvis();
    private Elvis() { }
}
```

#### 방법 2: 정적 팩터리 메서드
```java
public class Elvis {
    private static final Elvis INSTANCE = new Elvis();
    private Elvis() { }
    public static Elvis getInstance() { return INSTANCE; }
}
```

#### 방법 3: 열거 타입 (Best Practice)
```java
public enum Elvis {
    INSTANCE;

    public void leaveTheBuilding() { ... }
}
```

---

### 아이템 4: 인스턴스화를 막으려거든 private 생성자를 사용하라

```java
public class UtilityClass {
    // 인스턴스화 방지
    private UtilityClass() {
        throw new AssertionError();
    }

    public static String doSomething() { ... }
}
```

---

### 아이템 5: 자원을 직접 명시하지 말고 의존 객체 주입을 사용하라

```java
// ❌ 나쁜 예 - 정적 유틸리티
public class SpellChecker {
    private static final Lexicon dictionary = ...;
    private SpellChecker() {}  // 인스턴스화 방지
}

// ✅ 좋은 예 - 의존 객체 주입
public class SpellChecker {
    private final Lexicon dictionary;

    public SpellChecker(Lexicon dictionary) {
        this.dictionary = Objects.requireNonNull(dictionary);
    }
}
```

---

### 아이템 6: 불필요한 객체 생성을 피하라

```java
// ❌ 나쁜 예
String s = new String("bikini");  // 매번 새 인스턴스 생성

// ✅ 좋은 예
String s = "bikini";  // 문자열 리터럴 재사용
```

---

### 아이템 7: 다 쓴 객체 참조를 해제하라

```java
// ❌ 메모리 누수 발생
public class Stack {
    private Object[] elements;
    private int size = 0;

    public Object pop() {
        if (size == 0)
            throw new EmptyStackException();
        return elements[--size];  // 참조 유지
    }
}

// ✅ 참조 해제
public Object pop() {
    if (size == 0)
        throw new EmptyStackException();
    Object result = elements[--size];
    elements[size] = null;  // 참조 해제
    return result;
}
```

---

### 아이템 8: finalizer와 cleaner 사용을 피하라

- 예측 불가능하고 느리며 일반적으로 불필요
- 대안: AutoCloseable 구현 및 try-with-resources 사용

---

### 아이템 9: try-finally보다는 try-with-resources를 사용하라

```java
// ❌ try-finally - 지저분함
BufferedReader br = new BufferedReader(new FileReader(path));
try {
    return br.readLine();
} finally {
    br.close();
}

// ✅ try-with-resources - 깔끔함
try (BufferedReader br = new BufferedReader(new FileReader(path))) {
    return br.readLine();
}
```

---

## 3장 - 모든 객체의 공통 메서드

**작성일**: 2023.05.07

### 아이템 10: equals는 일반 규약을 지켜 재정의하라

#### equals 재정의가 필요 없는 경우
- 각 인스턴스가 본질적으로 고유함 (Thread 등)
- 인스턴스의 논리적 동치성을 검사할 일이 없음
- 상위 클래스에서 재정의한 equals가 하위 클래스에도 적합
- 클래스가 private이거나 package-private이고 equals를 호출할 일이 없음

#### equals 재정의 규약
1. **반사성(reflexivity)**: x.equals(x) = true
2. **대칭성(symmetry)**: x.equals(y) = y.equals(x)
3. **추이성(transitivity)**: x.equals(y), y.equals(z) → x.equals(z)
4. **일관성(consistency)**: 반복 호출해도 같은 결과
5. **null-아님**: x.equals(null) = false

---

### 아이템 11: equals를 재정의하려거든 hashCode도 재정의하라

```java
@Override
public int hashCode() {
    return Objects.hash(lineNum, prefix, areaCode);
}
```

#### 규약
- equals가 true인 두 객체의 hashCode는 같아야 함
- equals가 false여도 hashCode가 다를 필요는 없음 (하지만 다르면 성능 향상)

---

### 아이템 12: toString을 항상 재정의하라

```java
@Override
public String toString() {
    return String.format("%03d-%03d-%04d", areaCode, prefix, lineNum);
}
```

---

### 아이템 13: clone 재정의는 주의해서 진행하라

- Cloneable 인터페이스는 문제가 많음
- 복사 생성자나 복사 팩터리 사용 권장

```java
// 복사 생성자
public Yum(Yum yum) { ... }

// 복사 팩터리
public static Yum newInstance(Yum yum) { ... }
```

---

### 아이템 14: Comparable을 구현할지 고려하라

```java
public class PhoneNumber implements Comparable<PhoneNumber> {
    @Override
    public int compareTo(PhoneNumber pn) {
        int result = Short.compare(areaCode, pn.areaCode);
        if (result == 0) {
            result = Short.compare(prefix, pn.prefix);
            if (result == 0)
                result = Short.compare(lineNum, pn.lineNum);
        }
        return result;
    }
}
```

---

## 4장 - 클래스와 인터페이스

**작성일**: 2023.05.23

### 아이템 15: 클래스와 멤버의 접근 권한을 최소화하라

#### 접근 제한자 활용
- **private**: 멤버를 선언한 톱레벨 클래스에서만 접근
- **package-private**: 같은 패키지 안에서만 접근 (기본값)
- **protected**: package-private + 하위 클래스
- **public**: 모든 곳에서 접근

#### 원칙
- 모든 클래스와 멤버의 접근성을 가능한 한 좁혀라
- public 클래스의 인스턴스 필드는 되도록 public이 아니어야 함

---

### 아이템 16: public 클래스에서는 public 필드가 아닌 접근자 메서드를 사용하라

```java
// ❌ 나쁜 예
public class Point {
    public double x;
    public double y;
}

// ✅ 좋은 예
public class Point {
    private double x;
    private double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double getX() { return x; }
    public double getY() { return y; }

    public void setX(double x) { this.x = x; }
    public void setY(double y) { this.y = y; }
}
```

---

### 아이템 17: 변경 가능성을 최소화하라

#### 불변 클래스 만드는 5가지 규칙
1. 객체의 상태를 변경하는 메서드를 제공하지 않음
2. 클래스를 확장할 수 없도록 함 (final 클래스)
3. 모든 필드를 final로 선언
4. 모든 필드를 private으로 선언
5. 자신 외에는 내부의 가변 컴포넌트에 접근할 수 없도록 함

```java
public final class Complex {
    private final double re;
    private final double im;

    public Complex(double re, double im) {
        this.re = re;
        this.im = im;
    }

    public Complex plus(Complex c) {
        return new Complex(re + c.re, im + c.im);  // 새 객체 반환
    }
}
```

---

### 아이템 18: 상속보다는 컴포지션을 사용하라

```java
// ❌ 상속 - 취약함
public class InstrumentedHashSet<E> extends HashSet<E> {
    private int addCount = 0;

    @Override
    public boolean add(E e) {
        addCount++;
        return super.add(e);
    }
}

// ✅ 컴포지션 - 안전함
public class InstrumentedSet<E> extends ForwardingSet<E> {
    private int addCount = 0;

    public InstrumentedSet(Set<E> s) {
        super(s);
    }

    @Override
    public boolean add(E e) {
        addCount++;
        return super.add(e);
    }
}
```

---

### 아이템 19: 상속을 고려해 설계하고 문서화하라. 그러지 않았다면 상속을 금지하라

- 상속용 클래스는 재정의할 수 있는 메서드들을 내부적으로 어떻게 이용하는지 문서화
- 클래스 내부 동작 과정 중간에 끼어들 수 있는 훅(hook)을 선별하여 protected 메서드로 공개
- 상속용으로 설계하지 않은 클래스는 상속을 금지 (final 또는 private 생성자)

---

### 아이템 20: 추상 클래스보다는 인터페이스를 우선하라

#### 인터페이스 장점
- 기존 클래스에도 손쉽게 새로운 인터페이스 구현 가능
- 믹스인(mixin) 정의에 적합
- 계층구조가 없는 타입 프레임워크 구축 가능
- 래퍼 클래스와 함께 사용하면 기능 향상 안전

---

### 아이템 21: 인터페이스는 구현하는 쪽을 생각해 설계하라

- 디폴트 메서드는 기존 구현체에 런타임 오류 발생 가능
- 인터페이스 설계 시 세심한 주의 필요

---

### 아이템 22: 인터페이스는 타입을 정의하는 용도로만 사용하라

```java
// ❌ 상수 인터페이스 안티패턴
public interface PhysicalConstants {
    static final double AVOGADROS_NUMBER = 6.022_140_857e23;
}

// ✅ 상수 유틸리티 클래스
public class PhysicalConstants {
    private PhysicalConstants() { }  // 인스턴스화 방지

    public static final double AVOGADROS_NUMBER = 6.022_140_857e23;
}
```

---

### 아이템 23: 태그 달린 클래스보다는 클래스 계층구조를 활용하라

```java
// ❌ 태그 달린 클래스
class Figure {
    enum Shape { RECTANGLE, CIRCLE };
    final Shape shape;
    // ...
}

// ✅ 클래스 계층구조
abstract class Figure {
    abstract double area();
}

class Circle extends Figure {
    final double radius;
    @Override double area() { return Math.PI * (radius * radius); }
}

class Rectangle extends Figure {
    final double length;
    final double width;
    @Override double area() { return length * width; }
}
```

---

### 아이템 24: 멤버 클래스는 되도록 static으로 만들라

- 멤버 클래스가 바깥 인스턴스에 접근할 일이 없다면 무조건 static
- static을 생략하면 바깥 인스턴스로의 숨은 외부 참조 생성

---

## 핵심 정리

### Effective Java의 핵심 교훈

#### 1. 명확성과 단순성
- 복잡한 코드보다 단순하고 명확한 코드 우선
- 예측 가능한 동작만 수행

#### 2. 불변성 추구
- 가능한 한 불변 객체로 설계
- 변경 가능성 최소화

#### 3. 상속보다 컴포지션
- 상속은 강한 결합 초래
- 컴포지션과 전달(forwarding)로 유연성 확보

#### 4. 인터페이스 우선
- 추상 클래스보다 인터페이스
- 타입 정의 용도로 사용

#### 5. 접근 권한 최소화
- 정보 은닉의 중요성
- 가능한 한 좁은 접근 제한자 사용

---

## 실무 적용 가이드

### 즉시 적용 가능
1. ✅ 정적 팩터리 메서드 활용
2. ✅ 빌더 패턴으로 가독성 향상
3. ✅ try-with-resources 사용
4. ✅ equals/hashCode 함께 재정의
5. ✅ toString 재정의

### 설계 단계 적용
1. 📋 불변 클래스 우선 고려
2. 📋 상속보다 컴포지션
3. 📋 인터페이스로 타입 정의
4. 📋 접근 권한 최소화

### 리팩터링 적용
1. 🎯 생성자를 빌더 패턴으로 전환
2. 🎯 상속을 컴포지션으로 변경
3. 🎯 태그 클래스를 계층구조로 변경
4. 🎯 불필요한 객체 생성 제거

---

## 참고 자료

- **원서**: Effective Java, Third Edition
- **저자**: Joshua Bloch
- **출판사**: Addison-Wesley (2017)
- **원본 블로그**: [youn12.tistory.com/category/Study/Effective Java](https://youn12.tistory.com/)

---

**작성일**: 2025-11-30
**기반**: 12Dev 블로그 Effective Java 4개 포스팅
