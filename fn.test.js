const fn = require("./fn");

// test("1은 1이야.", () => {
//   expect(1).toBe(1);
// });

// test("2 더하기 3은 5야.", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("3 더하기 3은 5가 아니야.", () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });

// test("2 더하기 3은 5야.", () => {
//   expect(fn.add(2, 3)).toEqual(5);
// });

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// test("null은 null", () => {
//   expect(null).toBeNull();
// });

// test("0 is false", () => {
//   expect(fn.add(1, -1)).toBeFalsy();
// });

// test("비어있지 않은 문자열은 true", () => {
//   expect(fn.add("hello", "world")).toBeTruthy();
// });

// test("ID는 10자 이하여야 합니다.", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeLessThanOrEqual(10);
// });

// test("비밀번호 4자리", () => {
//   const pw = "1234";
//   expect(pw.length).toEqual(4);
// });

// 소수점 비교
// test("0.1 + 0.2 = 0.3?", () => {
//   expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });

// test("Hello world에 a 라는 글자가 있는가?", () => {
//   expect("Hello world").toMatch(/h/i);
// });

// test("유저 리스트에 Mike가 있는가?", () => {
//   const user = "Mike";
//   const userList = ["Tom", "Mike", "Kyle"];
//   expect(userList).toContain(user);
// });

// 에러 테스트
// test("이거 에러 나나요?", () => {
//   expect(() => fn.throwErr()).toThrow("xx");
// });

// 비동기 테스트
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   fn.getName(callback);
// });

// test("3초 후에 받아온 나이는 30", () => {
//   return fn.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// });

// resolves, rejects
// test("3초 후에 받아온 나이는 30", () => {
//   return expect(fn.getAge()).resolves.toBe(30);
// });

// async await
// test("3초 후에 받아온 나이는 30", async () => {
//   const age = await fn.getAge();
//   expect(age).toBe(30);
// });

// test("3초 후에 받아온 나이는 30", async () => {
//   await expect(fn.getAge()).resolves.toBe(30);
// });

// 테스트 전후 작업
let num = 0;

beforeEach(() => {
  num = 0;
});

afterEach(() => {
  num = 0;
});

test("0 + 1 equals 1", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0 + 2 equals 2", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});

let user;

beforeAll(async () => {
  user = await fn.connectUserDb();
});
afterAll(() => {
  return fn.disconnectDb();
});

test("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});
test("나이는 30", () => {
  expect(user.age).toBe(30);
});
test("성별은 남성", () => {
  expect(user.gender).toBe("male");
});

describe("Car 관련 작업", () => {
  let car;
  beforeAll(async () => {
    car = await fn.connectCarDb();
  });
  afterAll(() => {
    return fn.disconnectCarDb();
  });

  test("이름은 z4", () => {
    expect(car.name).toBe("z4");
  });
  test("브랜드는 bmw", () => {
    expect(car.brand).toBe("bmw");
  });
  test("색상은 red", () => {
    expect(car.color).toBe("red");
  });
});

// 실행 순서
beforeAll(() => console.log("밖 beforeAll")); // 1
beforeEach(() => console.log("밖 beforeEach")); // 2, 6
afterEach(() => console.log("밖 afterEach")); // 4, 10
afterAll(() => console.log("밖 afterAll")); // 마지막

test("0 + 1 = 1", () => {
  console.log("밖 test");
  expect(fn.add(0, 1)).toBe(1); // 3
});

describe("안쪽", () => {
  beforeAll(() => console.log("안 beforeAll")); // 5
  beforeEach(() => console.log("안 beforeEach")); // 7
  afterEach(() => console.log("안 afterEach")); // 9
  afterAll(() => console.log("안 afterAll")); // 마지막 - 1

  test("0 + 1 = 1", () => {
    console.log("안 test");
    expect(fn.add(0, 1)).toBe(1); // 8
  });
});

// skip, only
let num = 0;

test.skip("0 + 1 = 1", () => {
  expect(fn.add(num, 1)).toBe(1);
});

test.only("0 + 2 = 2", () => {
  expect(fn.add(num, 2)).toBe(2);
});
