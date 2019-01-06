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


--------
*참고*
[xml](http://www.zdnet.co.kr/view/?no=00000010047874)
[html과 xml의 차이](https://jgj1018.github.io/web/2017/07/01/web1.html)
[jsx란?](https://medium.com/@jang.wangsu/rn-jsx-%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-f967f98ea9df)




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




## Learn ReactJS DAY5
> 0106 리액트 공부 다섯번째 날!

### class vs className
- JSX의 문법은 HTML과 거의 동일하지만 주의해야할 미묘한 차이가 있다. 아마도 가장 빈번하게 나타나는 단어는 `class` 이다.
- JSX에서는 `class`를 사용하지 않는다! 대신 `className`을 사용한다.
    - 이것은 JSX가 자바스크립트로 변환되고, class가 자바스크립트의 예약어이기 때문이다.
    - JSX가 렌더링될때, `className` 속성은 클래스 속성으로 자동으로 렌더링된다.
```
<h1 className="big">Hey</h1>
```

### Self-Closing Tags
- JSX에서는 단일 태그에 슬래시를 포함해야한다. (HTML에서는 단일 태그 작성시, 마지막 괄호의 슬래시는 옵션이다.)
```
Fine in JSX:
<br/>

Not fine at all in JSX
<br>
```

### JavaScript In Your JSX In Your JavaScript
- 자바스크립트 파일 안에, JSX 표현식으로 작성된 일반 자바스크립트에 대해 배워보자!
```
ReactDOM.render(
  <h1>2 + 3</h1>,
  
	document.getElementById('app')
);
```


### curly Braces in JSX
- JSX 요소의 태그 사이에 있는 모든 코드는 일반 자바스크립트가 아닌 JSX로 읽는다!
- 자바스크립트로 취급하려면 중괄호`{}`로 묶어준다.
```
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  
	document.getElementById('app')
);
```


### 20 Digits of Pi in JSX
- 코드 에디터에서, 파이의 처음 20자리를 표시하는 JSX 표현식 쓰기.
```
const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);
```


### Variables in JSX
- 변수가 외부에서 선언된 경우에도 JSX 내부에서 변수에 접근할 수 있다.
```
// Declare a variable:
const name = 'Gerdo';

// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```


### Variable Attributes in JSX
- JSX를 작성할 때, 변수를 사용하여 속성을 정의하는 것이 일반적이다.
    -하나의 요소에 많은 속성이 있는 경우, 코드를 더 쉽게 읽을 수 있다.
```
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```

- 객체 속성은 때때로 속성을 설정하는 데에도 사용된다.
```
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);
```


### Event Listener in JSX
- JSX는 HTML처럼 이벤트 리스너를 가질 수 있다. 리액트에서 프로그래밍은 이벤트 리스너와 지속적으로 작압하는 것을 의미한다.

- JSX 요소에 특수 속성을 지정하여 이벤트 리스너를 만든다.
```
<img onClick={myFunc} />
```

- [유효한 이벤트 이름 목록보기](https://reactjs.org/docs/events.html#supported-events)

- 이벤트 리스너 속성의 값은 다른 곳에서 정의된 유효한 함수여야 한다.
```
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />
```

- JSX에서 이벤트 리스너의 이름은 camleCase로 작성된다. HTML에서는 모두 소문자로 작성한다.


### JSX Conditionals: If Statements That Don't Work
- 알아두어야 할 규칙: if문을 JSX식에 삽입할 수 없다.
- 그렇다면 특정 상황에서만 JSX 표현식을 렌더링하려면 어떻게 해야할까. JSX에서 조건문을 작성하는 몇 가지 방벙을 살펴보자.


### JSX Conditionals: If Statements That Do Work
- JSX에서 조건문을 표현하는 일반적인 방법.
```
if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
```


### JSX Conditionals: The Ternary Operator
- 삼항연산자: JSX에서 조건문을 작성하는 간단한 방법.
- `x ? y : z`, JSX에서의 표현법.
```
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```


### JSX Conditionals: &&
- &&연산자: JSX에서 조건문을 작성하는 마지막 방법.
```
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
```


### .map in JSX
- 배열 메소드 `.map()`은 리액트에서 자주 나타난다.
- JSX 요소 목록을 만들때 `.map()`이 가장 좋은 방법이다.
    - `{listItems}`는 배열로 평가된다.
```
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```
```
// This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

const liArray = [
  <li>item 1</li>, 
  <li>item 2<li>, 
  <li>item 3</li>
];

<ul>{liArray}</ul>
```


### Keys
- JSX에서 목록을 만들때, 목록에 `keys`라고 하는 항목이 필요할 때가 있다.
```
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```

- `key`는 JSX 속성이다. id속성과 마찬가지로 고유해야한다.
- `key`는 리액트가 목록을 추적하기 위해 내부적으로 사용한다. 만약 `key`를 사용하지 않는다면, 리액트가 목록-항목을 잘못된 순서로 뒤섞을 수도 있다.
- 다음 중 하나에 해당되면 목록에 `key`가 있어야 한다.
    - 목록-항목에는 한 렌더링에서 다음 렌더링까지 메모리가 있다. 예를 들어, to-do 리스트가 렌더링될 때, 각 항목은 체크 표시 여부를 "기억"해야한다. 항목을 렌더링할 때, 기억 상실해서는 안된다.
    - 목록의 순서가 섞여있을 수 있다. 에를 들어, 검색 결과 목록을 한 렌더링에서 다음 렌더링으로 섞을 수 있다.
- 위의 조건에 어느 것도 맞지 않으면 키에 대해 걱정할 필요 없다. 확실하지 않다면 결코 사용하지 않는 것이 좋다.


### React.createElement
- JSX를 사용하지 않고 React 코드를 작성할 수 있다!
    -JSX의 표현식.
    ```
    const h1 = <h1>Hello world</h1>;
    ```
    -JSX를 사용하지 않은 표현식.
    ```
    const h1 = React.createElement(
        "h1",           {/* type */}
        null,           {/* [props] */}
        "Hello, world"  {/* [...children] */}
    );
    ```
- JSX요소가 컴파일되면, 컴파일러는 JSX요소를 `React.createElement()`로 변형한다. 모든 JSX요소는 비밀리에 `React.createElement()`를 호출한다.


### JSX Recap