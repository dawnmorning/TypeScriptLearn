// npm install -g typescript, tsc --init

// function add(a: number, b: number) {
//   return a + b;
// }
// const add = (a: number, b: number) => a + b;

// call signatures
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
// type Add = {
//     (a:number, b:number) : number
// }
// -------------------------------

// Overloading
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
const add2: Add2 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};
const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path, config.state);
  }
};

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  // (a:number, b:number ,c?:number)가능
};
const add3: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
add3(1, 2);
add3(1, 2, 3);

// polymorphsim(다형성)
type SuperPrint = {
  // callsignature
  //   <TypePlaceholder>(arr: TypePlaceholder[]): void;
  <T, M>(arr: T[], b: M): T;
  //   const a = superPrint([1, 2, 3, 4], "x");
  //   gerneric 사용하겠다고 말하기 <T> or <뭐시기 아무거든>
  //   (arr: boolean[]): void;

  //   (arr: (number|boolean)[]):void
  //   (arr: string[]): void; 도 되지만, 다형성을 활용하기
  // generic type..
};
// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((i) => console.log(i));
// };
const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], "x");
const h = superPrint([true, false, true, true], 1);
// superPrint(["1", "b"]); 불가능
const i = superPrint([1, 2, true, false], 1);
const j = superPrint(["1", 1, true], false);

function superPrint2<V>(a: V[]) {
  return a[0];
}
const z = superPrint2([1, 2, 3, 4]);
// const z = superPrint2<boolean>([1, 2, 3, 4]);

type Test<E> = {
  name: string;
  extraInfo: E;
};

const jH: Test<{ favFood: string }> = {
  name: "JH",
  extraInfo: {
    favFood: "kimchi",
  },
};
const rin: Test<null> = {
  name: "rin",
  extraInfo: null,
};

type jonghyeokExtra = {
  favFood: string;
};
type Jonghyeok = Test<jonghyeokExtra>;
const Jh: Jonghyeok = {
  name: "JH",
  extraInfo: {
    favFood: "kimchi",
  },
};

function printAllNum(arr: Array<number>) {
  return null;
}
printAllNum([1, 2, 3]);
// React.js에서
// useState<number>();
