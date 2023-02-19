const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// 타입스크립트는 우리가 의도를 더 명확히하고 코드를 다시 확인하도록 요구
function add(num1: number, num2: number) {
  // 추가부분, JS의 타입 인식 방법
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}
// TS 설치
// npm install -g typescript

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
