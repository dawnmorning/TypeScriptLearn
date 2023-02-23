const nico = {
  nickname: "nick",
};

// nico.hello(); error
// [1,2,3,4] + false; error
function divide(a, b) {
  return a / b;
}
// divide("hello"); error

const player = { age: 12 };
// player.age = false; error

let b: boolean = false;
let c: number[] = [1, 2, 3];
// c.push("1");

let d: number[] = [1, 2, 3];
let e: string[] = ["i1", "1"];
let f: boolean[] = [false];

// name은 항상 가지고 있지만 age는 누군가는 안 가지고 있을 때

// 지정해줘야할 객체들이 많을 경우 캡슐화
type Player = {
  name: string;
  age?: number;
};

const kim: Player = {
  name: "JH",
  //   age를 갖든 안 갖든 하려면 ?를 넣어주기
};
if (kim.age && kim.age < 10) {
  console.log("있음");
}
function playerMaker(name: string): Player {
  return {
    // name:name
    name,
  };
}
const pM = (namae : string) : Player = ({namae})

const JH = playerMaker("nico");
// JH.age = 12; 가능해짐, PlayerMaker에 Player 타입 넣어놔서
