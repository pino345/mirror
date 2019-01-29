# 초보자를 위한 바닐라 JavaScript
> 작은 프로젝트들과 최종 프로젝트 크롬 앱 'momentum'을 만들어보자!

## 1. THEORY
### 1.1 Why JS
- JavaScript
  - frontend 영역에서 쓸 수 있는 단 하나의 언어!
  - 웹을 interactive하게
  - 웹이 빠르게 발전하면서 JS도 빠르게 발전하고 있다.

### 1.2 Super Powers of JS
- 자바스크립트로 할 수 있는 일
  - 내 위치와 날씨 가져오기
  - 할일 목록 저장하기 (새로고침해도 기록되있게!)
  - realtime
  - 모바일앱 만들기 (nomad movies는 100% js로 만들어졌다!)
  - 비디오게임
    - impact JS
  - three.js
    - world draw
- 웹사이트를 만드는 용도로만 사용되지 않고, interactive한 게임, 앱 다양한 것을 만들 수 있다.

### 1.3 ES5, ES6
- ECMAScript : specification
- ES6 = ECMAScript6
- vanillaJS : Library가 없는 자바스크립트

### 1.4 VanillaJS
- [vanillaJS]([http://vanilla-js.com](http://vanilla-js.com/))는 ‘패러디’사이트!
- Speed comparison에서 vanillaJS와 다른 프로그램에서 실행하는 코드를 비교할 수 있다.

### 1.5 Hello World with Javascript
- JS파일은 body의 제일 마지막에 있어야한다.
- 경고메세지 띄우기
```
alert('hello world')
```
- 콘솔창에 띄우기
```
console.log('hello world')
```

### 1.5.1 What are we learning
- 언어의 컨셉은 비슷하다. Function을 배우고, Variable을 배우고, 이벤트, Class, Object, Arrays 등등 모든 걸 배우는 것!
- 만약 python이었다면, `console.log()` 대신 `print()` 를 쓴다.

### 1.6 Your first JS Variable
- 변수 Variables: 변경되거나 변경될 수 있는 것
```
let a = 221;
let b = a- 5;
a = 4;
console.log(b, a);
```
- 모든 expression은 한 줄에 있어야 한다!
- expression이 끝나면 세미콜론(;)을 쓴다.
- 변수사용법 : create / initialize / use
- `let`은 변수를 초기화하거나 생성할 때 사용
- 자바스크립트는 위에서 아래로 실행하기 때문에 b = 216, a = 4 를 콘솔창에서 확인할 수 있다.

### 1.7 let, const, var
- const: 상수(constant), 변하지 않는 값
```
let a = 221;
let b = a- 5;
a = 4;
console.log(b, a);
```
- assignment to constant variable .....3:3
  - 상수 변수에 대입, 3번째 줄 3번째에 문제가 있다.

- let
```
let a = 221;
let b = a- 5;
let a = 4;
console.log(b, a);
```
- identifier 'a' has already been declared
  - 이미 변수를 선언했다고 알려준다

- var: variable
  - 예전에는 var만 쓸 수 있었다. const나 let이 없었다.
```
var a = 221;
let b = a- 5;
var a = 4;
console.log(b, a);
```
- 216 4 의 결과를 보여준다

### 1.8 Data Types on JS
- 주석
```
// to do : finish this

/*
multi
line
comment
*/
const what = ???
```

- 변수를 선언할 때, 기본은 const를 쓰자

1. String
- 텍스트
```
const what = "nicolas";
```

2. Boolean
- true(1) / false(0)
```
const wat = true;
```

3. Number
```
const wa = 123;

// float
const float = 123.4;
```

### 1.9 Organizing Data with Arrays
- Array
  - 데이터를 저장하는 곳, 리스트 같이 저장하는 것
```
// camelCase: 소문자로 시작해서 스페이스 대신 대문자 쓰기
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek[2]);
// > Wed
```

### 1.10 Organizing Data with Objects
- Object
  - 각 value에 이름을 줄 수 있다. (=저장할 데이터에 라벨을 줄 수 있다.)
  - object 안에 array, array 안에 object를 만들 수 있다.
```
const nicoInfo = {
  name: "nicolas",
  age: 33,
  gender: "Male",
  isHuman: true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    {
      name: "Kimchi",
      fatty: false
    },
    {
      name: "Cheese burger",
      fatty: true
    }
  ]
}

// 변경할 수 있다.
nicoInfo.gender = "Female"

console.log(nicoInfo.name);
console.log(nicoInfo.favFood[0].name)
```
- nicoInfo 안의 값은 바꿀 수 있지만, nicoInfo 자체는 바꿀 수 없다.

## 2. Practice
### 2.1 Your first JS Function
- 함수란 어떤 걸 수행하려는 한 부분, 원하는 만큼 쓸 수 있는 코드!
- 내장함수(built-in function)
  - console.log, alert...
  - `console`은 object, `log`라는 함수인 키가 있다.
  ```
  // 오브젝트 console이 가진 값을 확인할 수 있다.
  console.log(console)
  ```

- function 함수이름 (argument) {}
  - argument : 인자, 우리가 주는 값을 저장, 함수에게 외부에 있는 데이터를 주는 방법
```
function sayHello(potato, age){
  console.log('Hello!', potato!, " you have". age, "years of age.");
}

sayHello("Nico", 15);
console.log("hi!")
```

### 2.1.1 More Function Fun
- 새로운 스트링 방식
```
console.log(`Hello ${name} you are ${age} years old.`);
```

- console.log와 return의 차이 확인해보기
  - 콘솔창에 로그를 찍어주는 것과 값을 반환해주는 것의 차이를 확인할 수 있다.
```
function sayHello(name, age) {
  // console.log(`Hello ${name}, you are ${age} years old.`);
  return `Hello ${name}, you are ${age} years old.`;
}

const greetNico = sayHello("Nico", 15)

console.log(greetNico)
```
-return
  - '돈을 내면 잔돈을 받는다' 같은 개념

- math객체 만들기
```
const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a/ b;
  },
  pow: function(a, b) {
    return a ** b;
  }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiply = calculator.multiply(5, 5);
const divide = calculator.divide(5, 5);
const pow = calculator.pow(5, 5);

const result = `plus = ${plus}, minus = ${minus}, multi = ${multiply}, div = ${divide}, pow = ${pow}`;
console.log(result)
```
