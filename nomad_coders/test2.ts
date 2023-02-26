const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1) 불가
const names: readonly string[] = ["1", "2"];
// JavaScript에서는 쓰이지 않음. 단지 array로 보임. 적어도 TS에서는 보호받을 수 있다.

// Tuple은 arrary를 생성해줌
const player: [string, number, boolean] = ["nico", 1, false];
// player[0] = 1 불가, string자리이기 때문
const player2: readonly [string, number, boolean] = ["nico", 1, false];
// player2[0] = "종혁" readonly라 불가능

// 선택적 타입
// let a : undefined = undefined
// let b : null = null

// number || undefined
// type Player = {
//     age?: number
// }

// any 타입은 TS의 보호장치들을 완전히 제거해버림. 사용에 유의

// let a: unknown;
// if (typeof a === "number") {
//   let b = a + 1;
// }
// if (typeof a === "string") {
//     // 가능
//   let b = a.toUpperCase();
// }

// void는 아무것도 return하지 않는 함수
// function hello(){
//     console.log('x')
// }
// const a = hello()
// // a.toUpperCase() 오류

// never
// function hello(): never {
//   // return "x"오류
//   throw new Error("xxx");
// }

// never는 실행되지 않음
function hello(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
    // 여기 타입은 never, 절대 실행되지 않는 곳
  }
}
