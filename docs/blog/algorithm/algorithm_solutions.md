# 알고리즘 문제 풀이

> **블로그 원문**: https://youn12.tistory.com/category/Algorithm
> **문제 출처**: LeetCode, Programmers
> **사용 언어**: Java

---

## 개요

알고리즘 문제 풀이를 기록한 포스트들입니다. 주로 LeetCode와 Programmers 문제를 Java로 풀이했습니다.

---

## LeetCode 풀이 (7개)

### 1. Reverse Integer

**문제**: [LeetCode 7](https://leetcode.com/problems/reverse-integer/)
**난이도**: Easy
**작성일**: 2020.11.27

#### 문제 설명
정수를 뒤집어서 반환

#### 풀이 접근
StringBuilder를 활용하여 문자열 뒤집기 후 정수 변환

---

### 2. Palindrome Number

**문제**: [LeetCode 9](https://leetcode.com/problems/palindrome-number/)
**난이도**: Easy
**작성일**: 2020.11.27

#### 문제 설명
정수가 회문(Palindrome)인지 확인

#### 풀이 접근
문자열 변환 후 뒤집어서 비교

---

### 3. Running Sum of 1d Array

**문제**: [LeetCode 1480](https://leetcode.com/problems/running-sum-of-1d-array/)
**난이도**: Easy
**작성일**: 2021.01.04

#### 문제 설명
배열의 누적 합 계산

#### 풀이 접근
이전 값에 현재 값을 더해가며 누적

---

### 4. Richest Customer Wealth

**문제**: [LeetCode 1672](https://leetcode.com/problems/richest-customer-wealth/)
**난이도**: Easy
**작성일**: 2021.01.06

#### 문제 설명
2D 배열에서 각 행의 합 중 최대값 찾기

#### 풀이 접근
```java
public int maximumWealth(int[][] accounts) {
    int max = 0;
    for (int[] account : accounts) {
        int sum = 0;
        for (int i : account) {
            sum += i;
        }
        max = Math.max(max, sum);
    }
    return max;
}
```

---

### 5. Kids With the Greatest Number of Candies

**문제**: [LeetCode 1431](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)
**난이도**: Easy
**작성일**: 2021.01.08

#### 문제 설명
추가 사탕을 받았을 때 가장 많은 사탕을 가지게 되는지 판별

#### 풀이 접근
1. 최대값 찾기
2. 각 아이의 사탕 + 추가 사탕 >= 최대값인지 비교

---

### 6. Shuffle the Array

**문제**: [LeetCode 1470](https://leetcode.com/problems/shuffle-the-array/)
**난이도**: Easy
**작성일**: 2021.01.11

#### 문제 설명
배열을 두 부분으로 나누어 번갈아가며 섞기

#### 풀이 접근
```java
public int[] shuffle(int[] nums, int n) {
    int[] result = new int[nums.length];
    for (int i = 0; i < n; i++) {
        result[2*i] = nums[i];      // xi
        result[2*i+1] = nums[i+n];  // yi
    }
    return result;
}
```

---

### 7. Number of Good Pairs

**문제**: [LeetCode 1512](https://leetcode.com/problems/number-of-good-pairs/)
**난이도**: Easy
**작성일**: 2021.02.19

#### 문제 설명
배열에서 값이 같은 쌍의 개수 찾기 (인덱스 중복 없이)

#### 풀이 접근
중첩 루프로 모든 쌍 비교

```java
public int numIdenticalPairs(int[] nums) {
    int count = 0;
    for(int i = 0; i < nums.length; i++){
        for(int j = i+1; j < nums.length; j++){
            if(nums[i] == nums[j]) count++;
        }
    }
    return count;
}
```

**시간 복잡도**: O(n²)

---

## Programmers 풀이 (2개)

### 1. 다리를 지나는 트럭

**문제**: [Programmers Level 2](https://programmers.co.kr/learn/courses/30/lessons/42583)
**난이도**: Level 2
**작성일**: 2021.03.17

#### 문제 설명
트럭이 다리를 건너는 최소 시간 계산

#### 핵심 개념
- 큐(Queue) 자료구조 활용
- 다리 위 트럭 무게 관리
- 시간 단위 시뮬레이션

---

### 2. 신규아이디 추천

**문제**: [Programmers Level 1](https://programmers.co.kr/learn/courses/30/lessons/72410)
**난이도**: Level 1 (2021 카카오 블라인드)
**작성일**: 2021.03.25

#### 문제 설명
카카오 계정 아이디 생성 규칙에 맞게 추천 아이디 생성

#### 풀이 접근
7단계 로직으로 구성:

1. **1단계**: 대문자 → 소문자 변환
2. **2단계**: 소문자, 숫자, `-`, `_`, `.` 제외 문자 제거
3. **3단계**: 연속된 마침표를 단일 마침표로 통합
4. **4단계**: 시작/끝의 마침표 제거
5. **5단계**: 빈 문자열일 경우 "a" 대입
6. **6단계**: 16자 이상일 경우 15자로 자르고 끝 마침표 제거
7. **7단계**: 3자 이상이 될 때까지 마지막 문자 반복 추가

#### 대안
정규식을 활용하면 더 간단하게 구현 가능

---

## 학습 포인트 정리

### 자주 사용되는 패턴

| 패턴 | 활용 문제 |
|------|----------|
| 중첩 루프 비교 | Number of Good Pairs |
| 누적 합 | Running Sum |
| 최대값 찾기 | Richest Customer Wealth, Kids With Candies |
| 문자열 조작 | 신규아이디 추천, Palindrome Number |
| 큐 시뮬레이션 | 다리를 지나는 트럭 |

### Java 유용한 메서드

```java
// 최대값 비교
Math.max(a, b);

// 문자열 뒤집기
new StringBuilder(str).reverse().toString();

// 배열 순회
for (int num : nums) { }

// ArrayList
List<Boolean> list = new ArrayList<>();
```

---

**태그**: `Algorithm`, `LeetCode`, `Programmers`, `Java`
