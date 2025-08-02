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

const userA = {
  name: "osori",
  age: 22,
  adress: {
    country: "korea",
    city: "seoul",
  },
};
const userB = {
  name: "sori",
  age: 21,
};

//function getCity(user) {
//return user.adress.city;
//}

function getCity(user) {
  return user.adress?.city;
}

console.log(getCity(userA));
console.log(getCity(userB));
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

const fruits = ["apple", "banana", "cherry"];

for (const a of fruits) {
  console.log(a);
}
// main.js:439 apple
// main.js:439 banana
// main.js:439 cherry

const users = [
  {
    name: "osori",
    age: 22,
  },
  {
    name: "sori",
    age: 20,
  },
  {
    name: "ori",
    age: 21,
  },
];

for (let i = 0; i < users.length; i += 1) {
  console.log(users[i]);
}

for (const user of users) {
  console.log(user);
}
