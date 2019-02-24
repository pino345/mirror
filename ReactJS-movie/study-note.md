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
    - 항상 같은 방향/단방향 데이터흐름: 데이터->UI(o), UI->데이터(x)
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
- 리액트의 state / props
- props를 통해서 부모/자식간 상속
- 부모 컴포넌트가 자식 컴포넌트에 props를 통해 정보를 줄 수 있다
    - app.js(부모)가 영화 타이틀, 영화 이미지에 대한 데이터를 다 가지고 있다
    - movie.js(자식)에 movieTitles, movieImages를 props로 가져올 수 있다.
- `{}` : JSX에서 명령을 실행시키려면 괄호 꼭 넣기!

- App.js
```
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Bohemian rhapsody",
  "Inception",
  "The great gatsby"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
  "https://i.redd.it/lp0b1ev8exs11.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/c/c2/TheGreatGatsby2013Poster.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
```
- Movie.js
```
import React, {Component} from 'react';
import './Movie.css';


class Movie extends Component {
    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render(){
        return(
            <img src={this.props.poster}></img>
        )
    }
}
export default Movie
```



### List with .map
- 리스트 만들기
    - API에서 많은 양의 영화정보를 불러올 때 `array`를 만들자
- `map()`
    -syntax
    ```
    const movies = [{title: "1", poster: "11"}, {title: "2", poster: "22"}];
    const app = movies.map(movie => {movie.title}, {movie.poster});
    ```
```
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
  },
  {
    title: "Bohemian rhapsody",
    poster: "https://i.redd.it/lp0b1ev8exs11.jpg"
  },
  {
    title: "Inception",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "The great gatsby",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/TheGreatGatsby2013Poster.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
```



### Validating Props with Prop Types
- array에 있는 각 차일드는 반드시 고유한 key prop를 가져야한다. key는 unique 해야한다!
- `key={index}`를 통해서 고유값을 부여한다.
```
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}
```

- props에 내가 원하는 값을 출력하고 싶다면 어떻게 할까? => static propTypes 작성
    - `$ yarn add prop-types` 실행하고 내용 추가해야함!
```
import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import './Movie.css';


class Movie extends Component {

    static propTypes = {
        title: PropTypes.string,
        poster: PropTypes.string
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render(){
        return(
            <img src={this.props.poster}></img>
        )
    }
}
export default Movie
```

- `.string` / `.number` 등을 통해 요소를 검사할 수 있다.
- `.isRequired`로 필수 요소를 지정할 수 있다.



### Lifecycle Events on React
- 컴포넌트는 여러 기능을 정해진 순서대로 실행한다.
- **render**
```
componentWillMount() -> render() -> componentDidMount()
```
    - 사이클 시작, api에 작업 요청 -> 컴포넌트 인식 -> 컴포넌트가 자리잡음, 화면에 나타남, 데이터 작업

- **update**
```
Update componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate()
```
    - 컴포넌트가 새로운 props를 받음
    - old props와 새로운 props를 비교하여 다를 경우, update == true
    - 업데이트를 하겠다 -> 렌더 -> 업데이트 완료

- 컴포넌트는 많은 function을 가지고, 그들은 순서대로, 자동으로 작동한다.



### Thinking in React: Component State
- state: 리액트 컴포넌트 안에 있는 오브젝트
    - 컴포넌트 안의 state가 바뀔 때마다, render가 발생
- 직접적으로 state를 변경하면 render 설정이 작동하지 않는다. (`setTimeout`에 `state`를 직접 사용하면 에러)
- state를 바꿀 때는 `setState`를 설정하고, 업데이트할 때마다 render가 새로운 state와 함께 작동할 것이다.
```
class App extends Component {

  state = {
    greeting: 'Hello!'
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}
```



### Practicing this.setState()
- 컴포넌트 외부에 있는 무비 리스트를 state 안으로 옮겨보기!
- setTimeout: ~시간 후에 ~작업을 수행시킨다
- `function()` 대신 `() => `로 작성해도 된다
```
componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Spider man",
            poster: "https://images-na.ssl-images-amazon.com/images/I/71HQ7lBgbGL._SY679_.jpg"
          }
        ]
      })
    }, 5000)
  }
```
- `...this.state.movies`
    - 이전 영화 리스트를 그대로 두고, 한 개의 영화를 추가
    - 삭제하면 state 자체가 한 개의 영화로 바뀜
    - 새로 추가하는 영화 다음에 적으면 추가하는 영화가 리스트의 첫번째로 나온다
- state를 활용하여 infinity scroll 효과를 볼 수 있다. (=끝까지 스크롤하면 20개 영화를 추가한다)



### Loading States
- 데이터가 없을때 '로딩'을 띄우고, 있으면 영화정보가 보이도록 한다.
    - 데이터없이 컴포넌트가 로딩, 데이터를 위해 API를 불러서 데이터를 받으면 컴포넌트의 state를 업데이트한다.
- `_renderMovies`에서 `_`는 리액트 자체 기능이 많아서 리액트 자체 기능과 커스텀한 기능에 차이를 두기 위해 사용한다.
```
class App extends Component {

  state = {
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
          },
          {
            title: "Bohemian rhapsody",
            poster: "https://i.redd.it/lp0b1ev8exs11.jpg"
          },
          {
            title: "Inception",
            poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
          },
          {
            title: "The great gatsby",
            poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/TheGreatGatsby2013Poster.jpg"
          },
          {
            title: "Spider man",
            poster: "https://images-na.ssl-images-amazon.com/images/I/71HQ7lBgbGL._SY679_.jpg"
          }
        ]
      })
    }, 5000)
  }


  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}
```



### Smart vs Dumb Components
- `smart` : state가 있는 컴포넌트 
- `dumb` : state가 없는 stateless functional 컴포넌트, props 밖에 없다. 
    - 어떤 컴포넌트는 그냥 return을 하기 위해 존재한다.
    - 1개의 props와 1개의 html 태그만 있으면 된다.
    - state, function render, 라이프사이클이 없다! return만 갖는다
```
function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" />
    )
}
```



### Ajax in React
- Asynchronous('비동기적인') JavaScript and XM
- ajax를 쓰는 이유: 뭔가를 불러올 때마다 페이지 새로고침을 하고 싶지 않으니까!
- 요즘은 XML은 잘 안쓰고, JSON을 주로 쓴다. (JSON: JavaScript Object Notation)
- JSON: "속성-값" 쌍으로 이루어진 오브젝트를 javascript 문법으로 작성한 포맷

```
componentDidMount(){
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'))
  }
```
- [영화API](https://yts.am/api)
    - `https://yts.am/api/v2/list_movies.json` + `?sort_by=rating` : 별점순으로 리스트 보기

- `fetch` : Ajax를 React에 적용하는 간단한 방법!
    - fetch request 만들기 (=fetch를 이용해서 url에서 뭔가를 get하는 방법)

- 개발자도구-network에서 가져온 url을 확인할 수 있다.



### Promises
```
componentDidMount(){
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'))
  }
  console.log(fetch('anime_api')
```
- 영화 데이터를 다 불러와야 애니메이션 데이터를 읽기 시작한다.
- promise는 asynchronous, 첫번째 라인이 끝나든 말든 두번째 라인을 작업한다.

```
componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }
```
- promise 시나리오를 관리할 수 있다.
1. fetch : url을 가져와라
2. then : 위의 작업이 완료되면, ()를 해라
3. catch : (에러가 있으면 '잡아서(catch)' 콘솔창에 보여줘)

- fetch로 받은 response의 body를 ReadableStream(바이트로 이루어진 상태)에서 json 형식으로 바꿔주기



### Async Await in React
- 어플리케이션이 크면 then 안에 then이 이어지면서, 'callback hell!'에 빠진다 => 새로운 function을 만들자
- `componentDidMount`의 사이즈를 키우기 보다는, 작은 function들을 각기 다른 장소에 두고 불러오는 것이 좋다.

```
componentDidMount(){
  this._getMovies();
}
```

- asynchronous function인 `_getMovies`는 movies라는 variable을 갖고있다.
- movies의 value는 `_callApi`라는 function을 await 모드에서!
- await는 `_callApi` 기능의 '성공적으로 수행'이 아니라 '끝나기'를 기다린다. `_callApi`의 return value를 movies에 set한다.
- 이 컴포넌트의 setState를 movies(`_callApi`의 return value)로 한다.
- setState는 `_callApi`작업이 완료되기 전까지 실행되지 않는다.
```
_getMovies = async () => {
  const movies = await this._callApi()
  this.setState({
    movies
  })
}
```

- `_callApi`는 fetch라는 이름의 promise를 return한다.
- 영화의 모든 데이터를 json 형식으로 return
```
_callApi = () => {
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  .then(response => response.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err))
}
```

- state 안에 movies가 있으면 renderMovies라는 function을 불러오고, 아니면 'Loading'중을 띄운다.
```
render() {
  return (
    <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading'}
    </div>
  );
}
```

- 컴포넌트의 key를 인덱스에서 movie.id로 바꿔준다. 인덱스는 느리기 때문에 사용하지 않는 것이 좋다.
```
_renderMovies = () => {
  const movies = this.state.movies.map(movie => {
    return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
  })
  return movies
}
```

- await를 쓸때 async를 까먹지말자!



### Updating Component
- 컴포넌트를 업데이트하자!
  1. 데이터 받기
  2. css

- App.js) console.log(movie)해서 우리가 필요한 데이터인 포스터, 제목, 장르, 평점, 설명 부분을 확인하고 수정한다.
```
_renderMovies = () => {
  const movies = this.state.movies.map(movie => {
    console.log(movie)
    return <Movie
      title={movie.title_english}
      poster={movie.medium_cover_image}
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}
    />
  })
  return movies
}
```

- Movie.js) props를 추가
```
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
```

- html 작업, 클래스명추가, 장르 array 맵핑
```
function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
          <div className="Movie_columns">
            <MoviePoster poster={poster} alt={title}/>
          </div>
          <div>
            <h1>{title}</h1>
            <div className="Movie_Genres">
              {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
            </div>
            <p className="Movie_Synopsis">
              {synopsis}
            </p>
          </div>
        </div>
    )
}
```

- 장르를 맵핑할때 새로운 컴포넌트를 만들었다.
- 모든 걸 컴포넌트로 쪼개고, 작게 만드는 것이 더 세련된 방법!
```
function MovieGenre({genre}){
  return (
    <span className="Movie_Genre">{genre}</span>
  )
}
```



### Giving some CSS to
- state에 movie가 있으면 div의 className을 App으로, 없으면 App--loading으로 한다.
```
render() {
  const { movies } = this.state;
  return (
    <div className={movies ? "App" : "App--loading"}>
      {movies ? this._renderMovies() : 'Loading'}
    </div>
  );
}
```

- `LinesEllipsis`라는 컴포넌트를 다운받는다
```
$ yarn add react react-lines-ellipsis
```
- 긴 텍스트를 받아서 원하는 최대라인값, 이 값을 넘었을때 어떻게 표현할지 설정한다.  
```
<div className="Movie_Synopsis">
  <LinesEllipsis
    text={synopsis}
    maxLine='3'
    ellipsis="..."
    trimRight
    basedOn='letters'
  />
</div>
```



### building for production
- 프로젝트 시작하기
```
$ yarn start (=npm run start)
```

- css와 js를 압축한 파일을 build 폴더 안에 생성한다.
- build 작업을 하면 압축, 최적화되어 속도를 향상시킨다.
```
$ yarn build
```

1. package.json 파일에 깃헙페이지 주소 추가하고,
2. yarn build하기
3. yarn add --dev gh-pages
4. package.json 파일에 스크립트 추가
5. yarn run deploy
```
$ yarn build
$ yarn add --dev gh-pages
```

- 새로운 브런치가 생긴 것을 확인할 수 있다.
