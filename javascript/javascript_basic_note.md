### 콘솔

* prompt()
  - 메세지 보여주고, 문자열 입력 받음
* console.log()
  - 콘솔창에서 내용 확인 가능

### 변수

* 변수

```javascript
var a
var num = 1
var string = "Hello"
var boolean = true
```

* 자료형 : number / string / boolean

  * number

    * integer
    * float

  * string

    ```javascript
    var a = "string"
    var b = 'string \"A\"'
    
    var c = "\\ 를 문자로 사용"
    var d = "줄을 \n바꿔요"
    ```

* typeof()

  - 자료형을 알 수 있다

### 객체

* 객체

  * 속성(property)의 집합

  ```javascript
  var object = {};
  
  var man = {
      name:"홍길동",
      age:20,
      height:180
  }
  ```

  * 객체에 접근

    ```javascript
    man.name
    
    man["name"] = "이몽룡"
    ```

* `undefined` / `null`

* parseInt,parseFloat()

  - 정수, 실수으로 자료형 변환
  - NaN(not a number), infinity

* Math.pow(A,b) 

  - A의 b승

* Math.sqrt(A)

  - A의 제곱근

* Math.random()

  - 0~1사이의 임의의 난수

  - Math.pow(A,b) 
    - A의 b승
  - Math.sqrt(A)
    - A의 제곱근
  - Math.random()
    - 0~1사이의 임의의 난수

### 연산자와 함수

* 이항연산자 `+` / `-` / `*` / `/` / `%`

* 단항 연산자 `++` / `--`

* 함수의 정의

  ```javascript
  function func(arg1, arg2){
      var result = arg1 + arg2
      return result
  }	
  ```

* 관계 연산자

  * `<` / `>` / `<=` / `>=` / `==` / `!=`

* 논리 연산자

  * `&&` / `||` / `!`

* 연산자 우선 순위

  * `++`,`--` > `!` > `*`, `/`,`%` > `+`,`-` > `<`,`<=`,`>`,`>=` > `==`, `!=` > `&&` >`||`

### String

- .length
  - 문자열 길이 알아내기
- str1.concat(str2)
  - 문자열 붙이기
  - str1 + str2
- .charAt()
  - 특정 위치의 문자열 알아내기
  - 첫번째 문자는 `str.charAt(0)`
  - 마지막 문자는 `str.charAt(str.length)-1`
  - 대괄호 사용 가능 : `str[0]`, `str[str.length-1]` 
- .substring(pos1, pos2)
  - pos1 에서 pos2 까지의 부분 문자열 반환
- .substr(pos, length)
  - pos에서 length길이 만큼의 부분 문자열 반환
- indexOf(str): , lastIndexOf(str)
  - 문자열 검색

### 배열

* 배열

  ```javascript
  var empty_arr = [];
  var arr = [1,2,3,4,5];
  var mixed_arr = [1, true, "string"]
   
  mixed_arr.length	// 배열의 길이 
  
  arr[0]	// 배열의 엘리먼트에 접근
  ```

* 배열 엘리먼트 추가/삭제

  * .push(element) : 배열의 뒤에 엘리먼트 추가
  * .pop() : 배열의 뒤에서 엘리먼트 삭제하고 리턴
  * .shift() : 배열의 앞에서 엘리먼트 삭제하고 리턴
  * .unshift(element) : 배열의 앞에 엘리먼트 추가

* 배열 붙이기, 검색하기

  * arr1.concat(arr2) : arr1과 arr2 붙임
  * arr.indexOf(element) : arr에서 element가 있는 첫 위치 검색
  * arr.lastIndexOf(element) : arr에서 element가 있는 마지막 위치 검색

* .split(",")

  * 구분자로 나눠서 각각을 담은 배열을 반환해주는 함수

### 주석

* `//`
  * 여러줄은 `/* */`

### 조건문: if 문 

```javascript
if(/*조건식*/){
    /*실행될 코드*/
}
elseif(/*조건식*/){
    /*실행될 코드*/
}
else{
    /*실행될 코드*/
}
```

### 조건문: switch문

```javascript
switch(){
    case /*값1*/:
    	/*비교할 값이 값1인 경우 실행할 코드*/
    case /*값2*/:
    	/*비교할 값이 값2인 경우 실행할 코드*/
    default:
    	/*비교할 값이 위의 모든 갑소가 다른 경우 실행할 코드*/
    	break;
}
```

### 반복문: while문

```
while(/*조건식*/){
	/*반복 실행될 코드*/
}
```

* continue : 반복실행될 코드를 skip
* break : 반복문에서 즉시 탈출