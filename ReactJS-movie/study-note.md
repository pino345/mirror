## [ReactJS로 웹 서비스 만들기]

### 준비하기
- npm
- Node.js
- Yarn


### Introduction to React
- Just JavaScript!
- Composition: 리액트의 구조는 요소별로 나눠서 작업할 수 있다.
- Unidirectional Dataflow
    - 데이터는 항상 일정한 장소에 있고, 그 장소에서만 변경할 수 있다.
    - 상태가 변했을 경우, 데이터는 그대로 있고, UI가 업데이트된다.
    - 항상 같은 방향/단방향 데이터프름: 데이터->UI(o), UI->데이터(x)
- mvc에서 리액트는 뷰


### What are we building
- 영화앱 만들기
    - 별점순으로 정렬하기


### Introduction to Create React App
- 리액트 코드를 자바스크립트로 바꿔주는 '툴'이 필요하다. 대표적인 모듈번들러는 `webpack`.
- [create react app](https://github.com/facebook/create-react-app)로 시작하기.
    - 안에 `webpack`이 숨어있다.


### Hello World with React and CRA
- 시작하기
```
$ npx create-react-app my-app
$ cd my-app
$ npm start
```
- react-script가 실행되서 미리 설치된 개발 서버를 볼 수 있다.
- 시작하려면 `src/App.js`소스를 수정하자
```
$ cd my-app
$ code .

# src/App.js
<h2>Hello React</h2> 추가
```


### Creating React Component with JSX
- 리액트 프로젝트를 시작할 때, 첫번째로 컴포넌트를 디자인한다. (=리액트는 컴포넌트에 기반한다.) 컴포넌트 각각 다른 파일에서 작업한다.
    1. 무비 리스트 컴포넌트 (app 컴포넌트)
    2. 무비 컴포넌트 (무비)
    3. 이미지 컴포넌트 (무비커버)

- 실습 시작하기 
```
$ cd my-app
$ code .
$ Yarn start
```

- JSX: 리액트 컴포넌트를 만들때 사용하는 언어
    - class => className
    - {logo}를 적고,위에 logo가 정의되어있는 형태

- 컴포넌트 만들기
    - class > render > return > JSX
```
// App.js
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie />
        <Movie />
        <Movie />
      </div>
    );
  }
}

export default App;
```
```
import React, {Component} from 'react';
import './Movie.css';


class Movie extends Component {
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render(){
        return(
            <img src="https://images-na.ssl-images-amazon.com/images/I/51H7uat%2BYwL._SY445_.jpg"></img>
        )
    }
}
export default Movie
```



### Dataflow with Props
- state / props
- props를 통해서 부모/자식간 상속
- 