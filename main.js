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

// const fruits = ['apple', 'banana', 'cherry']

// function getSecondItem([, , c]) {
//   return c
// }

// console.log(getSecondItem(fruits))

//cherry

// const fruits = ['apple', 'banana', 'cherry']
// const numbers = [1, 2, 3, 4, 5, 6, 7]

// function getSecondItem([, , c]) {
//   return c
// }

//console.log(getSecondItem(fruits))
// console.log(getSecondItem(numbers))
// 3

//// 나머지 매개변수(Rest parameter)

// function sum(...rest) {
//   console.log(rest)
// }

// console.log(sum(1,2))
// console.log(sum(1,2,3,4))

// (2) [1, 2] undefined

// (4) [1, 2, 3, 4] undefined

//undefined는 함수 속에서 return키워드가 없으면 기본적으로 undefinedr가 반환됨.
//다른 형태도 봐보자

// function sum(a,b,...rest) {
//   console.log(rest)
// }

// console.log(sum(1,2))
// console.log(sum(1,2,3,4))

//[] //1,2가 각각 a와b로 할당되어서 전개가 안된 모습
//(2) [3, 4] //1,2가 a와b로 들어가고 나머지 3,4가 전개된 모습

// function sum(...rest) {
//   console.log(rest)
//   return rest.reduce(function (acc, cur) {
//     return acc + cur
//   }, 0)
// }

//console.log(sum(1,2)) //3 , (2) [1, 2]
//console.log(sum(1,2,3,4)) //10 ,(4) [1, 2, 3, 4]

//console.log(sum(1,2,3,4,5,6,7,8,9,10)) //55 ,(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//<코드 해석>
//reduce 메소드는 붙어있는 배열 데이터의 아이템 개수만큼 callback 함수를 실행함
//만약 rest라는 변수가 숫자 1과 2를 가지고 있는 배열데이터라면 이 reduce에 callback함수는 총 2번 호출함.
//첫번째 호출엔 acc(accumulator=값이 누적된다.) 최초값은 callback함수 뒤에 적은 숫자 ,0인 상태 그래서 처음 반복할때 acc는 숫자 0, 그리고 cur(current= 현재)이건 반복되는 첫번째 아이템에 해당하는 값
//console.log(sum(1,2)) 이거의 경우 acc는 0 cur은 1임. 이걸 더하면 숫자 1이 나오고 이걸 return키워드로 반환해서 두번째 반복을 진행.
//이렇게 반환된 숫자 1은 다시 두번째 함수가 반복될 때 acc로 들어가게 됨. cur은 2일테고 더하면 3. 뒤에 더 배열의 아이템이 없어서 반복 X.
//최종 값인 3을 반환.

// function sum(...rest) {
//   console.log(rest);
//   console.log(arguments);
//   return rest.reduce(function (acc, cur) {
//     return acc + cur;
//   }, 0);
// }

// console.log(sum(1, 2)); //3
// console.log(sum(1, 2, 3, 4)); //10
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //55

//argurments = 유사 배열 객채
// 따로 지정안해도 함수 내부에서 사용가능한 객체

// **화살표 함수 (Arrow function)**

// function sum() {}
// const sum = function () {}

// const sum = () => {}

// function sum(a,b) {
//     return a+b
// }
//이걸 화살표 함수로 바꿔보자

// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(1,2)) //3
// console.log(sum(19,1)) //20

// const sum = (a,b) => a+b

// console.log(sum(1,2)) //3

//화살표 함수를 이렇게 한줄로 작성가능

//// **화살표 함수의 다양한 패턴**

// const a = () => {}

// //const b = () => {}
// // 만약 매개변수가 하나라면 매개변수를 감싸고 있는 소괄호 생략 가능.
// //ex)
// const b = x => {}

// const c = (x,y) => {}

// const d = x => {return x * x }
// // 중괄호에 return 키워드로 시작하면 중괄호 랑 return키워드 생략가능!
// const e = x => x * x

// const f = x => {
//     console.log(x * x)
//     return x * x
// }
// console.log(f(2)) //4
// 이 경우는 console.log가 먼저 나와 생략 불가능

// const g = ()

//  => {return {a:1}}
// const h = () => { a: 1} //로 고칠수 있지만 이건 틀렷다. 코드 범위를 나타내는 괄호와 객체데이터 리터럴 방식의 괄호가 같아서 문법이 잘못됌
// const h = () => ({a : 1})

// const i = () => { return [1, 2, 3] }
// const j = () => [1, 2, 3]
// const [a, b, c] = [1, 2, 3]

// console.log (j()[0])

// **즉시실행함수(IIFE, Immediately-Invoked Function Expression)

// const a = 7

// const double = () => {
//     console.log(a * 2)
// }
// double()
// //14

// ;(() => {
//     console.log(a * 2)
// })()
//14

// **즉시실행함수 다양한 형태**

// (1)    ;(() => {})()       // (F)()
// (2)    ;(function () {})() // (F)()
// (3)    ;(function () {}()) // (F())
// (4)    ;!function () {}()  // !F()
// (5)    ;+function () {}()  // +F()

// ;(() => {console.log(a * 2)})()       // (F)()
// ;(function () {console.log(a * 2)})() // (F)()
// ;(function () {console.log(a * 2)}()) // (F())
// ;!function () {console.log(a * 2)}()  // !F()
// ;+function () {console.log(a * 2)}()  // +F()

//**예제**

// ;((a,b) => {
//     console.log(a)
//     console.log(b)
// })(1,2)

//두번째 소괄호로 들어가는 각각의 데이터들을 즉시 실행하는 해당함수에 매개변수로 전달 할 수있음.

// 콜백 (callback)

//함수가 실행될 때 인수로 들어가는 또 하나의 함수를 우리는 콜백이라고 부른다.

// const a = () => {
//     console.log('A')
// }
// const b = () => {
//     console.log('b')
// }

// a(b)

// A

// <코드해석>
// 함수a를 호출하고 b라는 함수 데이터가 인수로 들어간다.
//변수a는 호출당했고 인수로 b가들어가도 A만을 출력(매개변수없이 선언되어서)
//

//-------------------------------------------------------------------------------

// **헷갈리는거 잡고 가자.**
// const a = () => {} 자 변수 a속 함수가 있는 꼴
// 이때 변수a는 매개변수가 없이 선언되었어. 괄호() 안에 아무것도 없지. 그래서 ()안에 인수로 뭘 받아도 무시.

// const greet = (name) => {
//     console.log("안녕, " + name);
// };

//얘는 매개변수가 있는 변수 속 함수. greet라는 변수속 기명함수의 매개변수가 name으로 들어갔지
//그래서 호출해보면 greet('osori') ---> 안녕, osori

//--------------------------------------------------------------------------------

// const a = callback => {
//     console.log('A')
//     callback()
// }
// const b = () => {
//     console.log('B')
// }

// a(b)
// A
// B

//결국 callback은 함수가 실행될 때 이렇게 인수로 넣어주는 개념으로
//a라는 함수가 호출될 때 b는 콜백이라는 이름의 매개변수로 들어가고 언제든지 소괄호를 열고 닫아서 실행이 가능
// 그 소괄호는 const b = () => {.......} 속 ()를 말함.
// 그래서 결과값이 A,B 둘다 나온것.

//CALLBACK = "함수가 실행될때 매개변수로 들어가 그 함수속에서 매개변수로 들어간 값의 함수를 실행함"

// const sum = (a, b) => a + b

// console.log(sum(1, 2)) //3

//여기서 더 나아가 1초 뒤에 값을 반환하는 코드를 만들어보겠다

// const sum = (a, b, c) => {
//     setTimeout(() => {
//       c(a + b)
//     },1000)
// }

// sum(1, 2, value => {
//     console.log(value)
// })

// 3

// <코드해석>
// sum 함수가 호출되고, a = 1, b = 2, c = value => { console.log(value) } 가 인수로 들어감
// setTimeout은 비동기 함수로, 내부에 있는 콜백 함수가 1초(1000ms) 뒤에 실행됨
// 콜백 함수 안에서 c(a + b) 실행 → 즉, c(3)
// c는 위에서 넘긴 함수(value => console.log(value)) 이므로,
// 결국 1초 뒤에 console.log(3) 실행됨

//callback을 활용해서 이미지 로드를 기다릴 수 있는 예제

// https://www.gstatic.com/webp/gallery/4.jpg

// const loadImage = (url, callback) => {
//   const imgEL = document.createElement("img");
//   imgEL.src = url;
//   imgEL.addEventListener("load", () => {
//     setTimeout(() => {
//       callback(imgEL);
//     }, 1000);
//   });
// };

// const containerEl = document.querySelector(".container");
// loadImage("https://www.gstatic.com/webp/gallery/4.jpg", (imgEL) => {
//   containerEl.innerHTML = "";
//   containerEl.append(imgEL);
// });

// 첨 보는 태그들 or 코드들

//loadImage , document, createElement, imgEl, containerEl, document.QuerySelector,
// containerEl.innerHTML, containerEl.append

//loadImage : 그냥 함수 선언명
//document : 웹페이지 전체 문서를 나타내는 객체(HTML 전체)
//createElement : 얜 혼자 못쓰고 document.create.Element(...)으로 객체와 사용해야함. 새로운 요소를 만듦
//imgEl : 만든 <img>태그를 변수imgEl에 담은 것 (나중에 src를 넣을수 있음)
//containerEl : HTML에서 <const containerEl = document.querySelector('.container')> .container라는 클래스를 가진 요소를 찾아서 변수에 담는것.
//html속 <div class="container"></div> 이걸 자바스크립트에서 쓰고 싶을때 containerEl을 써 라는 의미
//document.querySelector : css선택자처럼 .클래스명, #아이디, 태그명으로 html 요소를 찾는 함수
//containerEl.innerHTML = '' : .container 안의 내용 비우기
//containerEl.append(imgEl) : document.createElement로 만든 HTML을 실제 화면에 붙여주는 역할
//append : HTML 요소를 다른 요소 안에 붙이는 역할

//<코드해석>

// 자 이미지를 로드하면 imgEL이 콜백되서 html안에 img태그가 생성되고 태그안에 url이 저장되는데
//이 사진이 로딩되면 1초뒤 이미지가 웹에 생성.

// **재귀(Recursion)**
// 하나의 함수에서 그 함수 자기 자신을 다시 내부에서 호출하는 것을 재귀라고 한다.

// const a = () => {
//     console.log('A');
//     a();
// }

// a()

// 이런 재귀는 무한정 함수가 동작하기 때문에 멈춰줘야 한다.

// let i = 0;
// const a = () => {
//   console.log("A");
//   i += 1;
//   if (i < 4) {
//     a();
//   }
// };

// a();

// A
// A
// A
// A

// <코드해석>
// 변수 i를 0으로 초기화하고, 함수 a를 정의
// 함수 a는 "A"를 출력하고 i를 1씩 증가시킴
// 만약 i가 4보다 작으면, 즉 0, 1, 2일 때는 다시 함수 a를 호출
// 이렇게 하면 "A"가 총 4번 출력됨
// 재귀는 반복문처럼 특정 조건을 만족할 때까지 계속해서 함수를 호출하는 방식으로 동작
// 재귀는 반복문과 비슷한 역할을 하지만, 함수가 자기 자신을 호출하는 방식으로 동작한다.

// 다른 예제

// const userA = { name: "a", parent: null };
// const userB = { name: "b", parent: userA };
// const userC = { name: "c", parent: userB };
// const userD = { name: "d", parent: userC };

// const getRootUser = (user) => {
//   if (user.parent) {
//     return getRootUser(user.parent);
//   }
//   return user;
// };

// console.log(getRootUser(userD)); // { name: 'a', parent: null }

// </코드해석>
// userD는 parent속성에 userC를 가지고 있으니깐 if조건에 걸려서 다시 getRootUser(user.parent)로 넘어감
// userC가 인수로 들어가고 userB를 parent속성으로 가지고 있으니깐 다시 if조건에 걸려서 getRootUser(user.parent)로 넘어감
// userB가 인수로 들어가고 userA를 parent속성으로 가지고 있으니깐 다시 if조건에 걸려서 getRootUser(user.parent)로 넘어감
// userA가 인수로 들어가고 parent속성에 null을 가지고 있으니깐 if조건에 안걸려서 return user;로 넘어감
// userA가 반환됨

// 함수 스케줄링 (Scheduling a function call)
// setTimeout, setInterval
// setTimeout(콜백함수, 지연시간(밀리초))
// setInterval(콜백함수, 지연시간(밀리초))
// setTimeout : 일정 시간이 지난 후에 콜백함수를 실행
// setInterval : 일정한 간격으로 콜백함수를 반복 실행

// setTimeout(() => {
//   console.log("어지럽당");
// }, 2000);

// const osori = () => {
//   console.log("오소리");
// };

// setTimeout(osori, 3000);

// const osori = () => {
//   console.log("오소리");
// };

// const Timeout = setTimeout(osori, 3000);
// clearTimeout(Timeout);

// const osori = () => {
//   console.log("오소리");
// };

// const timeout = setTimeout(osori, 2000);
// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => {
//   console.log("뭘 기대한거야! 바보!");
//   clearTimeout(timeout);
// });

// const osori = () => {
//   console.log("오소리");
// };

// const timeout = setInterval(osori, 2000);
// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => {
//   console.log("뭘 기대한거야! 바보!");
//   clearInterval(timeout);
// });

// **this**
// this는 함수가 호출되는 방식에 따라 값이 달라짐
// 일반 함수에서의 this는 호출 위치에서 정의
// 화살표 함수에서의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의

// const user = {
//   firstName: "osori",
//   lastName: "sori",
//   age: 22,
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user.getFullName()); //osori sori

function user() {
  return {
    firstName: "kawaii",
    lastName: "neko",
    age: 22,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const lewis = {
  firstName: "Lewis",
  lastName: "Hamilton",
};

const u = user();
console.log(u.getFullName());
console.log(u.getFullName.call(lewis));

// 코드해석
// user함수를 호출해서 반환된 객체를 u라는 변수에 담음
// u.getFullName() 호출 시, this는 u 객체를 가리켜 "kawaii neko" 반환
// u.getFullName.call(lewis) 호출 시, call 메서드를 사용해 this를 lewis 객체로 지정
// 따라서 "Lewis Hamilton" 반환

// const timer = {
//   title: "TIMER!",
//   timeout() {
//     console.log(this.title);
//     setTimeout(() => {
//       console.log(this.title);
//     }, 2000);
//   },
// };
// timer.timeout();

// ** prototype **

// const fruits = ["apple", "banana", "cherry"];
// const fruits = new Array("apple", "banana", "cherry");

// console.log(fruits);
// // (3) ['apple', 'banana', 'cherry']
// console.log(fruits.length); //3
// console.log*fruits.includes("banana"); //true
// console.log*fruits.includes("orange"); //false

// // 자 이렇게 new Array() 생성자 함수를 통해 만든 배열 데이터는 length, includes와 같은 매소드를 사용할 수 있다.
// // 그리고 length, includes 매소드들은 prototype 속성 혹은 prototype 매소드라고 부른다.
// // 즉 프로토타입이란 new 키워드를 통해서 만드는 생성자 함수에서 반환된 결과, 위 예시론 fruits라는 하나의 배열 데이터 이걸 다른 말로
// // 인스턴스라고 부름. 이 인스턴스가 공통적으로 가지고 있는 속성이나 메소드를 프로토타입이라고 부른다.
// Array.prototype.osori = function () {
//   console.log(this);
// }

// fruits.osori();
// // (3) ['apple', 'banana', 'cherry']

// const osori = {
//   firstname: 'osori',
//   lastname: 'sori',
//   fullname() {
//     return `${this.firstname} ${this.lastname}`
//   }
// }
// const neko = {
//   firstname: 'kawaii',
//   lastname: 'neko',
// }

// console.log(osori.fullname.call(neko)) //kawaii neko
// console.log(osori.fullname()) //osori sori

// 이런 방식으로 getFullname이라는 하나의 함수 다른말로 메소드를 만들어서 같은 구조의 여러가지 객체에서 활용을 할수있는데,
//즉, getFullname을 한번만 만들어서 재활용을 하면 된다. 그런데 재활용하는 코드가 하나밖에 없으면 불편하다. 해당하는
//메소드를 빌릴때마다 call메소도를 같이 넣어줘야하고 getFullname메소드가 있는 osori객체를 사용해야하기 때문이다.
// 그래서 이럴때 프로토타입을 사용한다. 프로토타입은 공통적으로 사용하는 속성이나 메소드를 미리 만들어서
// 객체가 생성될때 자동으로 사용할수있게 하는 방법이다.

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const osori = new User("osori", "sori");

// console.log(osori); //User {firstName: 'osori', lastName: 'sori'}
// console.log(osori.getFullName()); //osori sori
