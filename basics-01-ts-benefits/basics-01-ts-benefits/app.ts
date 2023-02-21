function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // 개발 도중에 끝나는 변수와 매개변수의 타입을 정의하는 것이 TypeScript
  // TypeScript에서는 항상 String 또는 Number 와 같은 타입을 다룸.
  //  주요 원시타입자체는 소문자
  if (showResult) {
    console.log(phrase + n2);
  } else result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is:..";

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
