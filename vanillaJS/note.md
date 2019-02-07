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
- [vanillaJS](http://vanilla-js.com/)는 ‘패러디’사이트!
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
let b = a - 5;
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
const a = 221;
let b = a- 5;
a = 4;
console.log(b, a);
```
- assignment to constant variable .....3:3
  - 상수 변수에 대입, 3번째 줄 3번째에 문제가 있다.

- let: 변수 선언
```
let a = 221;
let b = a- 5;
a = 4;        // a 값을 다시 설정할 수 있다.
let a = 4;    // a를 다시 선언할 수 없다.
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

- 데이터 타입
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
console.log(nicoInfo.favFood[0].name);
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
  console.log(console);
  ```

- function 함수이름 (argument) {}
  - argument : 인자, 우리가 주는 값을 저장, 함수에게 외부에 있는 데이터를 주는 방법
```
function sayHello(potato, age){
  console.log('Hello!', potato!, " you have". age, "years of age.");
}

sayHello("Nico", 15);
console.log("hi!");
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

console.log(greetNico);
```
- return
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
console.log(result);
```

### 2.2 JS DOM Functions
- javascript에 있는 함수로 HTML 다루기
```
console.log(document);    // document에 접근

const title = document.getElementById("title");
console.log(title);        // 아이디가 title인 요소를 보여준다
```

- DOM : Document Object Model
  - 자바스크립트는 html에 있는 모든 요소를 가지고 와서 객체로 바꾼다.
  - 객체는 많은 키를 가진다 ex) console .log, .error, ...
```
const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";  
// 자바스크립트로 선택한 것은 '객체'가 된다
```

### 2.3 Modifying the DOM with JS
- HTML을 DOM 객체로 바꿀 수 있다.
  - class 추가, 애니메이션 변경, click 감지 등등

- title로 할 수 있는 것들 확인해보기
```
console.dir(title);

title.style.color = "purple";

document.title = 'I own you now'
```

- querySelector : 노드의 첫번째 자식 반환
```
const title = document.querySelector("#title");
// document의 모든 자식들 중에 id(#) title인 요소
```

### 2.4 Events and event handlers
- 자바스크립트는 이벤트에 반응하기 위해 만들어졌다!
- 이벤트: click, resize, submit, input, change, load, before, closing, printing...등등

- `.addEventListener("이벤트", 함수(listener))`
```
function handleResize() {
  console.log("I have been resized")
}

window.addEventListener("resize", handleResize);
// 윈도우 사이즈가 변경되면 함수 호출!
// handleResize() 쓰면 지금 바로 호출하라는 뜻이다
```

- event: 이벤트를 다룰 함수를 만들 때마다 자바스크립트는 자동으로 함수를 객체에 붙인다.
  - 이벤트가 발생할 때마다 이벤트 객체가 호출되는 것을 확인해보자!
```
function handleResize(event) {
  console.log(event)
}

window.addEventListener("resize", handleResize(event));
```

- 클릭 이벤트
```
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "purple";
}

title.addEventListener("click", handleClick);
```

### 2.5 If, else, and, or
- if/else, if/else if/else
```
if(condition){
  block
} else if {
  block
} else {
  block
}
```

- 다양한 연산자
  - &&, ||,
```
if(20 > 5 && "nico" === "nico") {
  console.log("yes");
} else {
  console.log("no");
}
```

- 미성년자 검사하는 if/else문 만들기
```
const age = prompt("How old are you?");
// prompt는 html로 섹시하게(?) 대체할 수 있기 때문에 이번 한번만 사용!

if (age >= 18 && age <=21) {
  console.log("you can drink but you should not");
} else if(age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
```

### 2.6 DOM - if else - Function Practice
- 문자열 '상수'는 대문자로 명명, 다른 변수와 차이를 둔다
- 자바스크립트는 컬러코드를 받아서 rgb값으로 바꾼다. (오류주의!)
```
const BASE_COLOR = "rgb(52, 73, 94)";
```

- [MDN-JS Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)  

### 2.7 DOM - if else - Function Practice Two
- 자바스크립트에서의 css를 가지고 작업하는 것은 좋지 않다.
- 자바스크립트가 로직을 처리하게 만들자
- `.className`으로 클래스를 바꾸면 기존의 class는 모두 지워진다.
```
function handleClick() {
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}
```
- `.classList`로 클래스 추가/제거, 존재유무 확인과 토글을 사용할 수 있다.
```
function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}
```
```
function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}
```

## 3. Make your first JS App
### 3.1 Making a JS Clock part One
- 시간 함수
```
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}
```

### 3.2 Making a JS Clock part Two
- `setInterval(fn, 1000)`
```
function init() {
    getTime();
    setInterval(getTime, 1000);
}
```
- 삼항연산자 `조건식 ? 피연산자1 : 피연산자2`
```
clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
```

### Saving the User Name part One
- `.querySelector` : css방식으로 클래스, 태그, 아이디 등 원하는 셀렉터를 가져온다
- `.querySelectorAll` : 모든 것을 가져온다. array 안에 담김.
- `.getElementByID`, `getElementsByTagName`
- `local storage` : 작은 정보를 유저 컴퓨터에 저장하는 방법
  - 개발자도구 - application - storage - localstorage
  - 새로고침해도 남아있다.
  - 저장된 값을 불러올 수 있다.

- 유저이름이 있는 경우 form class에서 SHOWING_CN을 제거하고, 사용자에게 'Hello ${유저이름}'을 보여주자 
``` 
const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
```

### Saving the User Name part Two
- 유저이름이 없는 경우 form class에 SHOWING_CN을 추가하자
- `event.preventDefault` : 이벤트 취소
  - 이벤트는 일종의 거품 같은 것!
  - form을 제출하는 이벤트가 발생하면, document까지 올라가고, 프로그램되어진대로 다른 곳으로 가고, 새로고침된다.
  - 이러한 이벤트의 흐름을 취소할 수 있다. 
- 사용자가 submit했을 때, 입력값을 받아서 paintGreeting을 하고, 입력값을 localStorage에 저장한다. 
```
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
```

### Making a To Do List part One
- html 문서에서 필요한 요소를 상수로 만들고, init() 함수 만들기
```
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySeletor("input"),
    toDoList = document.querySelector(".js-toDoList");

function init() {
    loadToDos();
}

init();
```

- `handleSubmit` : 이벤트를 취소하고, 사용자에게 받은 값을 `paintToDo`에 넘겨준다.
```
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
```

- `.createElement`로 `<li>`를 추가한다.
- `.appendChild`로 <li></li> 안에 내용을 추가한다.
- `toDoList`의 하위요소로 li를 추가한다.
```
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}
```

- `innerHTML` 과 `innerTEXT`의 차이
  - 태그가 있는 경우 innerTEXT는 text가 그대로 들어가고, innerHTML은 태그를 인식한다.

- 로컬 스토리지에 리스트를 저장
```
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
    } 
}
```

### Making a To Do List part Two
- 할 일 목록을 `array`로 만들자
  - 빈 배열을 만들고, 사용자 입력을 배열에 넣기
```
const toDos = [];

function paintToDo(text) {
    // ...
    const toDoObj = {
        text: text,
        id: toDos.length + 1
    };
    toDos.push(toDoObj);
}
```

- toDos를 로컬에 저장
- `.setItem(keyName, keyValue);`
```
function saveToDos() {
    localStorage.setItem(TODOS_LS, toDos);
}
```

- local storage에는 자바스크립트의 데이터를 저장할 수 없다.
- 모든 데이터를 string으로 저장하려고 한다.
```
key   |   value
hello |   true

> localStorage.getItem('hello')
> "true"  // boolean이 아닌 string으로 나온다
```

- `JSON.stringify` : object가 string이 되도록 만든다
```
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
```

- loadedToDos가 null이 아니면 로컬스토리지에 저장된 목록을 보여주자!
- `JSON.parse`를 이용하여 string데이터를 자바스크립트가 다룰 수 있도록 object로 바꿔주기
```
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
    } 
}
```

- `.forEach` : array에 담겨진 것을 각각 한번씩 함수에 실행
```
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    } 
}
```

### Making a To Do List part Three
- html과 local storage에  있는 `to do` 목록 지우고 저장하기
- html의 li 지우기
  1. click 이벤트
  - delBtn을 클릭하면 deleteToDo 실행
  ```
  function deleteToDo(event) {
  console.log(event)
  }

  function paintToDo(text) {
      // ...

      delBtn.addEventListener("click", deleteToDo);
      
      // ...
  }
  ```

  2. `.target`으로 이벤트 요소 가져오기
  ```
  function deleteToDo(event) {
  console.log(event.target)
  }
  ```

  3. 버튼의 부모 li 찾기
  - console.dir로 찾기
  ```
  function deleteToDo(event) {
  console.log(event.target.parentNode)
  }
  ```

  4. `removeChild` : delete child element
  ```
  function deleteToDo(event) {
      const btn = event.target;
      const li = btn.parentNode;
      toDoList.removeChild(li);
  }
  ```

- local strage에서 해당 데이터 지우기
  1. `.filter`로 toDos array의 모든 아이템 중 조건에 맞는 아이템만 골라낸다
  - `parseInt` : string을 숫자로
  ```
  function deleteToDo(event) {
      // ...
      const cleanToDos = toDos.filter(function(toDo){
          // console.log(li.id, toDo.id);
          return toDo.id != parseInt(li.id);
      });
  }
  ```

  2. toDos에 cleanToDos를 저장하고 savaToDos
  - const는 값을 다시 설정할 수 없으므로 let으로 변경하기
  ```
  let toDos = [];

  function deleteToDo(event) {
    // ...
    toDos = cleanToDos
    saveToDos();
  }
  ```

### 3.8 Image Background
- `.random` 랜덤 숫자 생성
- .ceil (올림) / .floor (버림)
```
function genRandom() {
    const number =  Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
```

