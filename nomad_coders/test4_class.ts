// 추상 클래스는 다른 클래스가 상속 받을 수 있는 클래스

// 추상 클래스 안에 추상 메서드를 만들 수 있음
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  //   추상 메소드
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 다른 자식 클래스에서도 사용을 원한다면 private 대신 protected 를 사용
class Example extends User {
  getNickName(): void {
    console.log(this.nickname);
  }
}
const bell = new Example("jh", "kim", "bell");
// public이어야 사용 가능
bell.nickname;
bell.getFullName();

// ---------------------
type Words = {
  [whatever: string]: string;
};

let dict: Words = {
  potato: "food",
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}
const kimchi = new Word("kimchi", "한국의 음식");
const dic = new Dict();

dic.add(kimchi);
dic.def("kimchi");
