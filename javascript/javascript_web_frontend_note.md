### window object

* 가장 상위에 존재하는 객체

* 웹 페이지의 정보에 접근하거나 변경할 수 있다

  ```javascript
  window.location			 // 현재 브라우저 창의 주소를 나타냄
  window.location.href 	 // 브라우저 창에 입력된 주소, 변경 가능
  window.navigator	 	// 브라우저 자체에 대한 정보
  window.screen			// 디스플레이의 사이즈
  window.document			// 웹 페이지 문서의 html, css 에 대한 접근 가능
  ```



### DOM(Document Object Model)

* document object : `document`로 접근 가능

* Element API

  ```javascript
  document.children			// 해당 object의 자식 노드에 대한 배열
  document.parentNode			// 부모 노드
  document.firstElementChild	// 첫 자식 엘리먼트
  document.lastElementChild	// 마지막 자식 엘리먼트
  
  document.nextElementSibling	// 같은 레벨의 형제 엘리먼트에 접근
  document.previosElementSibling
  ```

