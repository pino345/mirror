## Learn ReactJS DAY2
> 리액트 공부 두번째 날!

### Hello World
```
const h1 = <h1>Hello world</h1>;
```
- html인듯 js인듯 이상한 코드@-@
- 실행해보면 어떻게 될까?

### The Mystery, Revealed
- 위의 코드는 자바스크립트 파일에 속한다.
- html을 닮은 이 부분을 JSX라고 부른다.

### What is JSX?
- JSX는 javascript의 syntax extension이다. react에 사용하도록 작성되었으며, html과 비슷하다.
- syntax extension이란?
  - JSX는 유효한 javascript가 아니다. 웹브라우저에서 읽을 수 없다.
  - 만약 JSX코드를 포함한 js파일이 있다면, 이 파일을 컴파일해야한다. 파일이 웹 브라우저에 도달하기 전에 JSX컴파일러는 JSX를 보통의 js로 변환해야 한다.

### JSX Elements
```
<h1>Hello world</h1>
```
- html과 똑 닮았지만 html파일이 아닌 js파일이다!

### JSX Elements And Their Surroundings
- JSX요소는 자바스크립트 표현식으로 처리된다.
- 자바스크립트 표현식을 사용할 수 있는 어디든 갈 수 있다.
