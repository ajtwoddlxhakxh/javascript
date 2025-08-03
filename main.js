// nullish 병합

//const n = 0;

//const num1 = n || 7;

//console.log(num1); //0

// Nullish 병합 연산자를 사용한 경우
//const num2 = n ?? 7;
//console.log(num2); //0
//null undefined 건너뛰고 만나는 데이터를 반환함, 왼에서 오른쪽 읽음
//위 주석 예시를 들어볼게용
//console.log(null ?? 1);
//console.log(undefined ?? 2);
//console.log(null ?? undefined);
// 얘두 마찬가지로 undefined뒤에 피연산자 없어서 얘가 출력된거임
//console.log(null ?? 1 ?? 2);
//console.log(false ?? 2 ?? 1);
//console.log(0 ?? 1 ?? 2);

//이어서 삼항(ternary)

//const a = 1;
//if (a < 2) {
//  console.log("참!");
//} else {
//  console.log("거짓...");
//}

//삼합 연산자 익숙해지자!
//조건 ? 참 : 거짓
//console.log(a < 2 ? "참!" : "거짓...");

//삼항

//function getAlert(message) {
//return message ? message : "메세지가 존쟇지 않습니다!";
//}

//console.log(getAlert("안녕하세요~"));
//console.log(getAlert(""));

// 전개 연산자 (spread Operator)

//const a = [1, 2, 3];

//console.log(a);
//console.log(...a); //위에선 [1, 2, 3]이 나왔는데 얜 1 2 3이 나옴 펼쳐져서
//console.log(1, 2, 3);

//const b = [4, 5, 6];
//만약에 두개 데이터를 병합할떄엔 어떻게 해야할까?
//concat 이라는 매소드를 사용해서 병합가능
//const c = a.concat(b); //[1, 2, 3, 4, 5, 6]
//console.log(c);
//전개가 되는 것을 볼수있음
//const d = [...a, ...b];
//console.log(d); //[1, 2, 3, 4, 5, 6]

// 전개연산자는 첫번째로 배열데이터의 대괄호를 날려줌
// 전개연산자는 배열데이터 외에 객체데이터에도 사용가능

//const a = { x: 1, y: 2 };
//const b = { y: 3, z: 4 };

//const c = Object.assign({}, a, b);
//console.log(c); //{x: 1, y: 3, z: 4}
//y: 2는 왜 없냐 객체데이터에서 속성은 고유하잖아 그래서 같은 기존 y(2)가 새로운 변수 y(3)으로 덮어쓰기 됨.
//const d = { a, b };
//const d = { ...a, ...b };
//console.log(d); //a = { x: 1, y: 2 }, b = { y: 3, z: 4 } 주석처리된 첫번째d변수
//고친후 {x: 1, y: 3, z: 4}

//function fn(x, y, z) {
//console.log(x, y, z);
//}

//fn(1, 2, 3); //1 2 3

//const a = [1, 2, 3];
//fn(a[0], a[1], a[2]); //1 2 3 전개연산자가 없을땐 이렇게 일일이 적어야하지만 알고있다면
//fn(...a); //1 2 3

//  ## 구조 분해 할당
//  ## 구조 분해 할당

//const arr = [1, 2, 3];
//const a = arr[0];
//const b = arr[1];
//const c = arr[2];

//console.log(a, b, c); // 1 2 3

//이걸 구조 분해 할당 구조로 만들어보자

//const arr = [1, 2, 3];
//const [a, b, c] = arr;

//console.log(a, b, c); // 1 2 3
//구조 분해 할당 구조= 객체 혹은 배열 데이터의 구조를 분해해서 그 구조에 맞게 각각의 변수에 맞게 데이터를 할당하는 방식

//let a = 0;
//let b = 0;
//let c = 0;

//const arr = [1, 2, 3];
//[a, b, c] = arr;

//console.log(a, b, c); // 1 2 3
//만약 b 와 c만 값이 출력됐으면 한다면?

//let b = 0;
//let c = 0;

//const arr = [1, 2, 3];
//[, b, c] = arr;

//console.log(b, c); // 2 3  자 특정 데이터 값만 출력될려면
// const arr = [1, 2, 3];[, b, c] = arr; 여기서 뒤 매개변수 값만 지우고 쉼표는 유지하는게 뽀인트⁕
// 다른 예제도 예시를 들어보겟다!
//let b = 0;
//let c = 0;

//const arr = [1, 2, 3];
//[, , c] = arr;

//console.log(c);

//const obj = {
// a: 1,
//b: 2,
//c: 3,
//};
//const a = obj.a;
//const b = obj.b;
//const c = obj.c;

//console.log(a, b, c); //1 2 3

// 이렇게 하면 많은 코드를 써야함

//const obj = {
//a: 1,
//b: 2,
//c: 3,
//};

//const { a, b } = obj; //꺼내고 싶은 변수만 선택해서 가능 하지만 밑에 콘솔 로그에도 꺼내고 싶은 변수만 기재

//console.log( a, b); // 1

//const { x } = obj;

//console.log(x); //undefined라 뜸 여기서 이 오브젝트 속성안에 abc값은 있지만 x의 값은 없어서 x의 "기본값" 을 지정해줄수 있다

// 적용한 버전

//const { x = 4 } = obj;

//console.log(x); //4
//만약 오브젝트 속에 x값이 존재한다면
//const obj = {
//a: 1,
//b: 2,
//c: 3,
//x: 7,
//};

//const { x = 4 } = obj;
//console.log(x); //7
// 자 추가로 a라는 데이터를 꺼내쓸려고 한다고 가정해보자

//const { x = 4, a } = obj;

//console.log(x, a); // 7 1
// 그런데 a의 변수명이 마음에 들지않아 그래서 바꿀려함

//const { x = 4, a: osori } = obj;

//console.log(x, a); // 하면 에러가 납니다. 왜? 변수명은 a인데 a에서 osori로 이름을 바꿨으니 찾지 못해서 에러가 남 고쳐보자

//console.log(x, osori); // 7 1

// 자 다른 예제를 봐보자

//const obj = {
//a: 1,
//b: 2,
//c: 3,
//x: 7,
//y: 100,
//};

//const { c, rest } = obj;

//console.log(c, rest); //3 undefined
//rest라는 속성의 이름을 찾을수없어서 undefined가 나옴 그런데 rest앞에 전개연사자를 사용해주면

//const { c, ...rest } = obj;

//console.log(c, rest);    // 3 {a: 1, b: 2, x: 7, y: 100}
// c라는 속성을 제외한 나머지 속성들이 전개연산자를 통해서 rest라는 이름의 변수로 할당되어 사용되는걸 볼 수 있음.

// ***선택적 체이닝***

//const user = {}

//console.log(user.name) //undefined

// ** null **은 점 표기법 자체를 사용할 수 없음

// const user = null;
// console.log(user.name); // Uncaught TypeError: Cannot read properties of null (reading 'name') 이 말이 곧 점 표기법에서 null은 사용불가

// null 말고 ** undefiend ** 작성해도 같은 오류가 발생한다.
// 그래서 null & undefiend 처럼 점 표기법으로 어떤 속성을 조회할 수 없는 이러한 데이터들은 선택적 체이닝을 사용한다.

//const user = null;
//console.log(user?.name); //undefined

// const userA = {
//   name: "osori",
//   age: 22,
//   adress: {
//     country: "korea",
//     city: "seoul",
//   },
// };
// const userB = {
//   name: "sori",
//   age: 21,
// };

//function getCity(user) {
//return user.adress.city;
//}

// function getCity(user) {
//   return user.adress?.city;
// }

// console.log(getCity(userA));
// console.log(getCity(userB));
// seoul &  Uncaught TypeError: Cannot read properties of undefined (reading 'city')
// 이러면 userB에는 adress 객체데이터가 없어서 읽을수 없어 오류가 발생
// address가 undifined라는 데이터에서 점 표기법을 사용하는 것이 가능하지않아서 에러가 남 그래서 선택적 체이닝을사용
//물음표 기호를 앞에다가 붙여서 혹시 이 address가 자바스크립트의 null undifined라면 뒤쪽의 내용을 실행하지 않고 undefiend란 데이터만 반원하도록 하는것
// 그래서 userB에는 undefined가 뜰 것이다.
// seoul
// undefined

// *If 조건문*

//if (조건) {
//조건이 참일때
//}

//if (조건) {
//조건이 참
//} else {
//혹은 거짓
//}

//if (조건) {
//
//} else if (조건) {
//
//} else if (조건) {
//
//} else {
// 조건을 여러개 제공해서 그때 상황마다 맞게 해당 코드들이 실행되도록 만들수도 있음
//}

//function isPositive(number) {
//if (number > 0) {
//return "오소리";
//}
//}

//console.log(isPositive(1)); //오소리
//console.log(isPositive(0)); //undefined
// 기본적으로 함수는 return키워드를 사용안하면 undefined데이터가 반환되는 구조를 가짐.
//function isPositive(number) {
//if (number > 0) {
//return "오소리";
//} else {
//return "바부";
//}
//}

//console.log(isPositive(-1)); //바보
//console.log(isPositive(0));//바보 -->0은 음수가 아니니깐 0인경우에 데이터가 반환되도록 따로 더 만들겠음

//function isPositive(number) {
//if (number > 0) {
//return "오소리";
//} else if (number < 0) {
//return "바부";
//} else {
//return "카와이";
//}
//}

//console.log(isPositive(0)); //카와이

// **SWITCH 조건문**

//switch (조건) {
//case 값1:
// 조건이 '갑1'일 때 실행
//break;
//case 값2:
// 조건이 '값2'일 때 실행
//break;
//default:
// 조건이 '값1'도 '값2'도 아닐 때 실행
//}
//switch (조건) {
//case 값1:
// 조건이 '갑1'일 때 실행
//break;
//case 값2:
// 조건이 '값2'일 때 실행
//break;
//default:
// 조건이 '값1'도 '값2'도 아닐 때 실행
//}

//주의 할 점
//스위치문 같은 경우 내부에 case, break, default라는 키워드를 사용
//스위치를 통해 조건을 추가하고 조건이 특정한 값에 해당하면 해당하는 값의 case코드가 실행
//case 값?: 이후 꼭 콜론(:)기호를 붙여줘야함
//case이후 꼭 break를 적어주자. break키워드가 없으면 조건이 값1인 경우를 확인하고 그 다음으로 넘어가기때문

// switch 조건문 예제

//function price(fruit) {
//switch (fruit) {
//case "apple":
//p = 1000;
//break;
//case "banana":
//p = 1500;
//break;
//case "cherry":
//p = 2000;
//break;
//default:
//p = 0;
//}

//return p;
//}

//console.log(price("apple")); // 1000
//console.log(price("banana")); // 1500
//console.log(price("cherry")); // 2000
//console.log(price("pineapple")); // 0

// 상황에 따라 break키워드를 제거하고 p값 대신 바로 return을 넣을수도 있다

//function price(fruit) {
//   switch (fruit) {
//     case "apple":
//       return 1000;
//     case "banana":
//       return 1500;
//     case "cherry":
//       return 2000;
//     default:
//       return 0;
//   }
//}

// console.log(price("apple")); // 1000
// console.log(price("banana")); // 1500
// console.log(price("cherry")); // 2000
// console.log(price("pineapple")); // 0

//다른 버전 (취향에 따라 위 버전 아래 버전 골라서 사용하자.)

// function price(fruit) {
//   if (fruit === "apple") {
//     return 1000;
//   } else if (fruit === "banana") {
//     return 1500;
//   } else if (fruit === "cherry") {
//     return 2000;
//   } else {
//     return 0;
//   }
// }
// console.log(price("apple")); // 1000
// console.log(price("banana")); // 1500
// console.log(price("cherry")); // 2000
// console.log(price("pineapple")); // 0

// **FOR 반복문 **

//특정 코드를 원하는 횟수만큼 반복해서 실행할 때 사용하는 구문

// for (초기화; 조건; 증감) {
//   //반복 실행할 코드
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
//   //i는 0으로 시작하고 10보다 작으면 반복되는데 한번 반복되면 1이 증가되는 구조
// }
// main.js:395 0
// main.js:395 1
// main.js:395 2
// main.js:395 3
// main.js:395 4
// main.js:395 5
// main.js:395 6
// main.js:395 7
// main.js:395 8
// main.js:395 9

// for (let i = 9; i > -1; i -= 1) {
//   if (i % 2 === 0) {
//     continue; //반복문 내에서 현재 반복만 건너뛰고 다음 반복 진행
//   }
//   console.log(i);
// }

// main.js:415 9
// main.js:415 7
// main.js:415 5
// main.js:415 3
// main.js:415 1

// ** for of 반복문 **

// const fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits[i]);
// }

// main.js:429 apple
// main.js:429 banana
// main.js:429 cherry

// const fruits = ["apple", "banana", "cherry"];

// for (const a of fruits) {
//   console.log(a);
// }
// main.js:439 apple
// main.js:439 banana
// main.js:439 cherry

// const users = [
//   {
//     name: "osori",
//     age: 22,
//   },
//   {
//     name: "sori",
//     age: 20,
//   },
//   {
//     name: "ori",
//     age: 21,
//   },
// ];

// for (let i = 0; i < users.length; i += 1) {
//   console.log(users[i]);
// }

// for (const user of users) {
//   console.log(user);
// }
// 출력결과는 모두 객체이다 그래서 점표기법을 사용가능

// const users = [
//   {
//     name: "osori",
//     age: 22,
//   },
//   {
//     name: "sori",
//     age: 20,
//   },
//   {
//     name: "ori",
//     age: 21,
//   },
// ];

// for (let i = 0; i < users.length; i += 1) {
//   console.log(users[i].name);
// }

// for (const user of users) {
//   console.log(user);
// }

// **for & for of 반복문 차이점**

// const arr = ['x', 'y', 'z'];

// for
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);  // 인덱스 필요할 때
// }

// 0 x / 1 y / 2 x

// for...of
// for (const value of arr) {
//   console.log(value);  // 값만 필요할 때
// }

// x y z

// for 반복문
//인덱스를 직접 제어가능 (i 사용)
// 반복 횟수를 세거나 일부만 반복할 때 유리
// 모든 배열/객체에서 가능하지만 복잡해짐

//for of 반복문
//이터러블 객체(배열, 문자열, Set, Map 등)만 사용 가능
// 값(value)에 바로 접근 (인덱스 필요 없음)
// 더 간결하고 직관적

//이터리블: 하나씩 순서대로 꺼낼 수 있는 값들의 모음
//ex)
//배열
//const arr = [10, 20, 30];

// for (const num of arr) {
//   console.log(num);
// }

//10
//20
//30

//문자열
// const word = "hi";

// for (const char of word) {
//   console.log(char);
// }

//h
//i

//이어서
// **for in 반복문**

// const user = {
//   name: "osori",
//   age: 22,
//   isValid: true,
//   email: "a01024784424@gmail.com",
// };

//for (const key in user) {
//console.log(key);
//main.js:565 isValid
// main.js:568 true
// main.js:565 email
// main.js:568 a01024784424@gmail.com
//console.log(user[key]);
//main.js:565 name
// main.js:568 osori
// main.js:565 age
// main.js:568 22
//}

// console.log(user.name);
// console.log(user.age);

// console.log(user["name"]);
//console.log(user[key]); //main.js:581  Uncaught ReferenceError: key is not defined at main.js:581:18 key가 정의안되서 에러가 남 그래서 키를 정의 해준 위에선 에러없이 작동
// 여기서 헷갈린점
// '[]'대괄호 어떨때 사용해야하는지
// 객체 속성 접근, 배열 요소 접근, 문자열 문자 접근 시 사용가능
//map, set은 대괄호 XX

// **while 반복문**

// let n = 0;
// while (조건) {
//   console.log(조건);
// }

// let n = 0;
// while (n < 4) {
//   console.log(n);
//   n += 1;
// }
//while문은 기본적으로 계속 반복이 되고 조건이 거짓이 되야 멈출수있다. 조건이 거짓이 안되면 무한반복이 되어 브라우저가 튕길수도..

// **Do while 반복문**

//let n = 0;
// while (n) {
//   console.log(n)
// }

// 위 예제는 콘솔창에 아무것도 출력이 안된다. 왜? 0은 대표적인 거짓이니깐 이때 이걸 콘솔창에 출력시킬려면 어떻게 해야할까
// 아래 예제를 봐보자

//let n = 0;

// do {
//   console.log(n);
// } while (n);

// 0
//do while 반복문은 조건을 먼저 보지않고 do라는 키워드를 가진 부분의 중괄호 블럭을 먼저 실행한다. 그래서 숫자 0이 출력됨.
//그 다음에 while키워드로 넘어가서 조건을 보는데 조건에 해당하는 n = 0 거짓이니깐 중괄호를 다 실행 하지않아서 하나만 출력됨.

//다른 예제

//let n = 0;

// do {
//   console.log(n);
//   n += 1;
// } while (n < 4);

// 우선 0에서 출발, 콘솔로그 n을 통해서 숫자 0이 출력되고 그 다음에 변수 n에다가 1이 더해지고 그다음에 조건으로 넘어감. n의값이 4보다 작을땐 이 과정이 반복됨.

// main.js:622 0
// main.js:622 1
// main.js:622 2
// main.js:622 3
 











// **함수 (FUnction)**

// 함수 선언문(declaration)
// function hello() {}

// 함수 표현식(expression)

// const hello = function () {};

//함수 선언문과 함수 표현식은 생김새가 다른게 아니고 호이스팅이라는 개념에서 차이점이 발생함

// 호이스팅

// function hello() {
//   console.log("안녕");
// }

// hello(); //안녕

//만약 함수 hello부분을 잘라서 호출하는 hello();보다 아래에 작성하면 어떨까
//이런식으로

// hello();

// function hello() {
//   console.log("안녕");
// }

// 자 보통 코드는 위에서 부터 아래로 작성 및 해석을 해. 그런데
// 정의된 함수는 더 아랫쪽에 존재함.=> 정의되지않는 함수를 사용을 하는 모습

//이 현상을 "호이스팅 현상" 때문에 발생
//호이스팅이라는 것은 함수가 선언되어져 있는 부분을 코드의 최상단으로 끌어올리는 현상
// 그래서 함수 선언문은 어디에 작성하든지 상관없이 호출이 가능함

// hello();

// const hello = function () {
//   console.log("안녕");
// };

//Uncaught ReferenceError: Cannot access 'hello' before initialization at main.js:672:1
//hello()함수가 호출될때 아직 hello함수가 만들어지기전인데 hello함수를 호출하고 있다는거임
//이렇게 표현식같은 경우에는 호이스팅 현상 XX

// 함수의 표현과 선언은 기본적으로 같은 함수를 만드는 행위지만 서로 호이스팅의 발생 유무 차이가 있다는걸 알아야 함.

//  hello();

//  const world = function hello() {
//   console.log('hi')
//  }

 // main.js:684  Uncaught ReferenceError: hello is not defined
//hello라는 함수는 정의가 되어있지않다.
// 우리가 할당연산자(=)를 통해 함수를 표현식으로 만들게 되면 기명함수라도 기존 이름은 제거되고 새롭게 world라는 이름을 사용해야함.

// 수정해보자

//  const world = function hello() {
//   console.log('hi')
//  }

//  world();

//hi








// **함수의 반환 및 종료**

// function hello() {
//   return 'hi!'
// }

// console.log(hello())
//hi!

// function hello() {
//   return 'hi!'
// }

// console.log(hello)

// 출력부분

//ƒ hello() {
//   return 'hi!'
// }

//return키워드는 함수내부에서 함수 밖으로 데이터를 반환하는 것뿐만 아니고 함수의 동작을 멈추는 역할도 함.
//그래서 return키워드가 나왔으면 그 다음에 작성되는 코드는 동작하지않는다.

// function hello() {
//    return 'hi!'
//    console.log('wow')
// }

//  console.log(hello())
//hi!

//만약 return키워드 뒤에다가 아무것도 작성하지 않는다면 어떻게 될까

// function hello() {
//    return
// }

//  console.log(hello())

 //undefined //undefined는 자바스크립트가 자동으로 데이터를 채우는 용도의 값이라 배움(명시적이지 않고 암시적이다.)
 //추가로 return키워드를 작성하지않아도 함수가 동작하고 나면 undefined라는 데이터가 나옴.

//  function hello() {

// }

//  console.log(hello())  //undefined

// function plus(num) {
//   return num + 1
// }

//console.log(plus(2))  //3
//console.log(plus(7))  //8
//console.log(plus()) //NaN 
//콘솔로그를 통해 plus함수를 호출했고 num매개변수에 데이터값이 없어서 자바스크립트가 자동으로 값을 넣을거고 그 값은 undefiend고 이 값에서 +1을 하지만 숫자로 표기못함 그래서 NaN

// function plus(num) {
//   if (typeof num !== 'number') {
//     console.log('숫자를 입력해주세요')
//     return 0
//   }
//   return num + 1
// }

// console.log(plus())

// [!==] => "값과 타입이 모두 다르면 true
// 코드 해석: 콘솔로그창 plus함수 호출시 안에 있는 데이터가 우선 if조건에 보내지고 만약 숫자라면 false가 되어 아래 num + 1로 넘어가고 숫자가 아니라면 걸리게되어 0과 숫자를 입력해주세요가 반환되고 함수실행이 끝난다.







// **매개변수 패턴(Parameter pattern)**


//// 기본값 (Default value)

// function sum(a,b) {
//   return a + b
// }

// console.log(sum(1,2))
// 3

// NaN //이렇게 b라는 변수의 데이터가 아무것도 들어오지않으면 undefiend일거고 더하면 위에서 봤던 예제처럼 NaN이 나옴.

//또 이렇게 b에는 데이터가 없는 상황이다. 데이터가 없을시 사용하라고 기본값을 지정해줄수있다.

// function sum(a,b = 2) {
//   return a + b
// }
// console.log(sum(8))
//10
//console.log(sum (3,4))
//  //7 //a와b의 데이터값이 있는 경우니깐 기본값은 사용되지않음.

 //매개변수에서 equal기호를 사용해서 해당하는 매개변수의 기본값을 지정해줄수있다.




 //// 구조 분해 할당(Destructuring assignment)

//  const user = {
//   name: 'osori',
//   age: 22
//  }

//  function getName(user) {
//   return user.name
//  }

//  console.log(getName(user))

//osori

//이렇게도 작성은 할수있지만 return키워드 위에다가 const키춰드로 객체 구조 분해 할당 문법을 사용해볼거다

//  const user = {
//   name: 'osori',
//   age: 22
//  }

//  function getName(user) {
//   const {name} = user
//   return name
//  }


// function getName({name}) {
//   return name
//  }

//  console.log(getName(user))

 //osori
 //위는 객체 구조 분해와 함수 매개변수 구조 분해를 활용해서 코드를 짧고 가독성을 높인 예시.

//   const user = {
//   name: 'osori',
//   age: 22,
//   email: 'a01024784424@gmail.com'
//  }

//  function getName({name}) {
//   return name
//  }
// function getEmail ({email = '이메일을 입력ㄱㄱㄱ'}) {
//   return email
// }

// console.log(getEmail(user))

//const user 변수안에 email값이 없다면 '이메일을 입력ㄱㄱㄱ'이 출력되고 email값이 있다면 a01024784424@gmail.com이 출력








//// 구조 분해 할당 (배열)

const fruits