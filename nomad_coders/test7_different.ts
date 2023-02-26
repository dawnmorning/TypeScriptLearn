type d_Player = {
  name: string;
};
// 합치는 법 type에서.
type d_Player2 = d_Player & {
  lastName: string;
};
// const d_player: d_Player = { 에서
const d_player: d_Player2 = {
  name: "kim",
  lastName: "bell",
};
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
const palyerB: PlayerBB = {
  name: "kim",
  lastName: "bell",
};

type exampleA = {
  firstName: string;
};
interface exampleB {
  firstName: string;
}
// class U implements exampleA 가능
class U implements exampleA {
  constructor(public firstName: string) {}
}
