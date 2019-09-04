# **33가지 자바스크립트**

## 1.**호출스택 Call Stack**

* 호출제어의 역할 수행, 스택은 LlFO 방식
* 스크립트가 함수를 호출하면,  이를 콜스택에 추가한다.
* 해당함수가 호출하는 모든 함수는 콜스택에 추가된다.

추가 1) 비동기 처리는 콜백함수,  콜백함수는 콜스택이 실행되는 동안 이벤트 루프에 의해 추가된다.

필요: 이벤트 루프, 테스크 큐 설명 추가

추가 2) Hoisting이란?
함수/변수 메모리 셋업,  함수들이 메모리에 올라가기 전까지 변수들은 undefined상태이다

추가 3) SetTimer는 웹브라우저에서 제공한다.

## 2.**원시 자료형 Primitive Type**

* Object를 제외한 모든 타입들은 immutable valves로 정의되어 있으며 Primitive Type 이라고부른다.
* Primitive 7개와 Object 로 나눌 수 있다.

(boolean,  null,  undefined,  Number,  Bigint,  symbol,  string)

추가1) Symbol 타입 변경 불가능한 원시 타입
주로 충돌 위험이 없는 유일한 객체의 property key 로 만들기 위해 사용한다

추가2) Object. freeze () - immutableObject
또는 const 에서 Get/Set 설정하기

## 3.**값타입과 참조타입 Value Types and Reference Types**

* Object의 경우 대입 시 참조 타입을 가져간다.
* 실제 메모리 값은 한 곳에 기록됨

## 4.**명시적, 암시적변환 그리고 (Nominal, implicit, Explicit, Structuring, DuckTyping)**

* 타입 변환을 특별히 사용하지 않고 변환 시 암시적
* Nominal은 이름이 다른 같은 구조의 클래스에 new를 통한 할당이 불가능하다. Structual은 반대
* Duck Typing 은 "오리처럼 걷고 오리처럼 꽥꽥 거리면 오리다 "에서 나온 말이다.

인자가 어떤 타입인지 상관없이 객체가 동작할 수 있는지 판단한다

추가1) NaN = Not a Number (number 형변환 실패 시),  NaN !== NaN, .isNaN (ES6)

## 5.**비교 == VS === vs typeof**

* 케이스가 많다.===은 정확한 비교, 테스트 후 사용 권장

## 6.**범위 Function Scope, Block Scope and Lexical Scope**

* 중첩된 함수에서 내부 함수가 외부 함수의 변수 접근이 가능한 것을 Lexical Scope라고 한다

추가1) 중첩된 함수의 내부 함수가 클로저(Closure)이다.
내부 함수에서 반환 시 상태가 그대로 반환된다. 반환 후에도 외부 함수 내 변수 접근이 가능하다.
사이드 이펙트를 관리하거나 프라이빗 변수 용도로 사용한다.

## 7. E**xpression vs Statement**

* 함수선언은 function으로 시작하며 Hoisting(선언이 먼저 그 후 로직 진행)이 적용된다.
* 변수에 대입한 함수 또는 즉시 실행 함수는 function expression으로 사용되어 Hoisting적용이 다르다.

## 8.**IIFE,  Module,  Namespace**

* IFFE는 즉시 실행함수로 클로저를 사용하여 상태와 구조를 캡슐화시켜 private 하게 만들수 있다.
* ObjectLiterals는 CurryBrace 안에 콤마와 구분되는 키 값을 배치하여 리턴하고 모듈패턴으로 사용된다.
* Export/Import로 GlobalScope를 어지럽히지 않고 사용이 가능하다

## 9.**메시지큐와 이벤트 루프 Message Queue andevent loop**

* SetTimer로 A함수 호출 시 콜 스택에서 시작해 브라우저에 의해 실행된 다음 메시지큐에서 대기하고 이벤트루프에 의해서 다시 콜스택으로 A함수가 추가된다.
* Promise는 micro task에 의해 관리되면 SetTimer보다 대부분 브라우저에서 우선 작업된다.

