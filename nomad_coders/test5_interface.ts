type N = string;
type Health = number;
type Friends = Array<string>;
type P = {
  nickname: string;
  healthBar: number;
};
const bells: P = {
  nickname: "JH",
  healthBar: 10,
};

type Food = string;
const pasta: Food = "delicious";

type Team = "red" | "blue" | "yellow";
type H = 1 | 5;
type P2 = {
  nickname: string;
  team: Team;
  health: H;
};
// type 키워드느 interface 키워드에 비해 좀 더 활용할 수 있는 것이 많다.
// interface P2 {
//   nickname: string;
//   team: Team;
//   health: H;
// }

// interface Hello = string  불가능,
// interface는 오로지 오브젝트의 모양을 타입스크립트에게 설명해 주기 위해서만 사용되는 키워드

const jong: P2 = {
  nickname: "bell",
  // 에러
  // team : "pink"
  team: "red",
  health: 5,
};

interface Users {
  // readonly name : string
  name: string;
}
interface flayer extends Users {}
const cat: flayer = {
  name: "dog",
};
