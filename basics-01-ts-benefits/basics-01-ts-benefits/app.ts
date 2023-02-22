// const person: object = {
//     // key : value가 아니라, key : type으로 작성
//   name: "Maximilian",
//   age: 30,
// };
// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
//   튜플
  role: [number, string];
} = {
  name: "Kim",
  age: 30,
  hobbies: ["Sport", "Cooking"],
  role: [2, "author"],
};
person.role.push("admin");
// person.role에서는 숫자와 문자 같이.
// person.role[1] = 10;

// 배열안에 string이 들어갈 것
let Activities: string[];
Activities = ["Sports"];
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   map은 배열일 때 가능, 문자열은 X
  //   console.log(hobby.map());
}
