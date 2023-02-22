// 귀찮음의 귀찮음 끝까지 온 경우에 사용. 타입을 :로 지정하는 것이 아니라 = 으로 지정

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

// 타입 알리어스 및 객체 타입
// 타입 별칭을 사용하여 타입을 직접 “생성”할 수 있습니다. 유니온 타입을 저장하는 것만 가능한 것이 아닙니다. 복잡할 수 있는 객체 타입에도 별칭을 붙일 수 있습니다.

// 예:

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!
// 타입 별칭을 사용하면 불필요한 반복을 피하고 타입을 중심에서 관리할 수 있습니다.
// -----------------------------------------------------------------------------------
// 예를 들어, 다음 코드를 아래와 같이 단순화할 수 있습니다.

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// 단순화 후:
// -----------------------------------------------------------------------------------
// type User = { name: string; age: number };

// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }

function add(n1: number, n2: number) {
  return n1 + n2;
}
function printResult(num:number):void{
  console.log('result: ' + num)
}

// 값을 반환하지 않는 함수를 사용하는 경우에는 void를 표준으로함 undefined X
