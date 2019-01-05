## Learn ReactJS DAY1
> 리액트 공부 첫번째 날!

### Why React?
- 리액트는 페이스북 개발자가 만든 자바스크립트 라이브러리이다.
- 리액트를 사용하는 이유 
  - **리액트는 빠르다.**: 복잡한 업데이트들을 손쉽게 할 수 있고, 빠르고 응답성이 좋다. 
  - **모듈성.**: 간결하고 재사용쉬운 파일들로, 빽빽하고 많은 코드가 필요없다.
  - **규모가변성.**: 변하는 데이터가 많은 디스플레이의 큰 프로그램에서 리액트의 수행 능력은 최고!
  -  **유연함.**: 어떤 프로젝트든 만들 수 있다.



  ------
  *참고*
  [scalable의 뜻-규모가변성](http://occamsrazr.net/tt/3)


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


## Learn ReactJS DAY3
> 리액트 공부 세번째 날!

### JSX Elements and their surroundings
- JSX요소는 자바스크립트 표현식으로 처리된다. 즉, JSX 요소를 변수/객체/배열에 저장하거나 함수에 저장하거나 이름을 지정할 수 있다.
```
const navBar = <nav>I am a nav bar</nav>;
```
```
const myTeam = {
    center: <li>Benzp Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatsh</li>,
    pointGuard: <li>Femi Billon</li>
};
```

### Attribute in JSX
- JSX요소는 HTML처럼 속성을 가질 수 있다.
```
my-attribute-name="my-attribute-value"
```
```
<a href="http://www.example.com">Welcome to the web!</a>;

const title = <h1 id="title">Introduction to React.js: Part 1</h1>;
```
```
const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;
```


## Learn ReactJS DAY4
> 0105 리액트 공부 네번째 날! 행복한 주말 ٩( ᐛ )و 

### Nested JSX
- HTML처럼  JSX 요소 안에 다른 JSX를 중첩시킬 수 있다.
```
<a href="https://www.example.com"><h1>Click me!</h1></a>
````

- JSX 표현식이 둘 이상의 행을 사용하는 경우, 괄호 안에 JSX 표현식을 감싸야 한다.
```
(
    <a href="https://www.example.com">
        <h1>
            Click me!
        </h1>
    </a>
)
````

- 중첩된 JSX 표현식도 변수에 저장되거나 함수에 전달 될 수 있다.
```
const the Example = (
    <a href="https://www.example.com">
        <h1>Click me!</h1>
    </a>
);
````

### JSX Outer Elements
- JSX는 반드시 하나의 바깥 쪽 요소를 가져야한다.
```
const paragraphs = (
    <div id="i-am-the-outermost-element">
        <p>I am a parahraph.</p>
        <p>I, too, am a paragraph.</p>
    </div>
);
```

- 다음은 동작하지 않는다.
```
const paragraphs = (
        <p>I am a parahraph.</p>
        <p>I, too, am a paragraph.</p>
);
```

- JSX 표현식의 시작 태그와 닫는 태그는 동일한 요소에 속해야 한다. 여러 요소가 있는 경우 div로 감싸준다.

### Rendering JSX 
```
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
```

------
*virtual DOM*
[리액트교과서-react 살펴보기](https://velog.io/@kyusung/React-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0)


### ReactDOM.render() 1
- `ReactDOM`은 자바스크립트 라이브러리의 이름이다. 몇 가지 반응 고유의 메소드를 포함하고 있으며, 모든 메소드는 DOM을 어떤 식으로든 처리한다.
- `ReactDOM.render()`: JSX를 렌더링하는 가장 일반적인 방법. JSX 표현식을 사용하여 DOM노드의 해당 트리를 만들고, 추가합니다. 


### ReactDOM.render() 2
```
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));
```
- 첫번째 인자는 화면에 표시된다.
- 첫번째 인자는 두번째 인자에 의해 선택된 요소에 추가된다.


