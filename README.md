# **33가지 자바스크립트**

## 1. **호출스택 Call Stack**

- 호출제어의 역할 수행, 스택은 LlFO 방식
- 스크립트가 함수를 호출하면, 이를 콜스택에 추가한다.
- 해당함수가 호출하는 모든 함수는 콜스택에 추가된다.

추가 1) 비동기 처리는 콜백함수, 콜백함수는 콜스택이 실행되는 동안 이벤트 루프에 의해 추가된다.

필요: 이벤트 루프, 테스크 큐 설명 추가

추가 2) Hoisting이란?
함수/변수 메모리 셋업, 함수들이 메모리에 올라가기 전까지 변수들은 undefined상태이다

추가 3) SetTimer는 웹브라우저에서 제공한다.

## 2. **원시 자료형 Primitive Type**

- Object를 제외한 모든 타입들은 immutable valves로 정의되어 있으며 Primitive Type 이라고부른다.
- Primitive 7개와 Object 로 나눌 수 있다.
(boolean, null, undefined, Number, Bigint, symbol, string)

추가1) Symbol 타입 변경 불가능한 원시 타입
주로 충돌 위험이 없는 유일한 객체의 property key 로 만들기 위해 사용한다

추가2) Object. freeze () - immutableObject
또는 const 에서 Get/Set 설정하기

## 3. **값타입과 참조타입 Value Types and Reference Types**

- Object의 경우 대입 시 참조 타입을 가져간다.
- 실제 메모리 값은 한 곳에 기록됨