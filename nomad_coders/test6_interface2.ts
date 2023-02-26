// abstract class Userr {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class PPlayer extends Userr {
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string) {
//     return `Hello ${name}. My name is ${this.fullName()}`;
//   }
// }

interface Userr {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}
class PPlayer implements Userr, Human {
  // 클래스의 모양을 알려주는 interface
  // privated, protected 불가 public만 가능. 왜?
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

function maekUser(user: Userr) {
  return "hi";
}
maekUser({
  firstName: "jonghyeok",
  lastName: "Kim",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
