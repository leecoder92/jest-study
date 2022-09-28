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

// // 테스트 전후 작업
// let num = 0;

// beforeEach(() => {
//   num = 0;
// });

// afterEach(() => {
//   num = 0;
// });

// test("0 + 1 equals 1", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });

// test("0 + 2 equals 2", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

// let user;

// beforeAll(async () => {
//   user = await fn.connectUserDb();
// });
// afterAll(() => {
//   return fn.disconnectDb();
// });

// test("이름은 Mike", () => {
//   expect(user.name).toBe("Mike");
// });
// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });
// test("성별은 남성", () => {
//   expect(user.gender).toBe("male");
// });

// describe("Car 관련 작업", () => {
//   let car;
//   beforeAll(async () => {
//     car = await fn.connectCarDb();
//   });
//   afterAll(() => {
//     return fn.disconnectCarDb();
//   });

//   test("이름은 z4", () => {
//     expect(car.name).toBe("z4");
//   });
//   test("브랜드는 bmw", () => {
//     expect(car.brand).toBe("bmw");
//   });
//   test("색상은 red", () => {
//     expect(car.color).toBe("red");
//   });
// });

// // 실행 순서
// beforeAll(() => console.log("밖 beforeAll")); // 1
// beforeEach(() => console.log("밖 beforeEach")); // 2, 6
// afterEach(() => console.log("밖 afterEach")); // 4, 10
// afterAll(() => console.log("밖 afterAll")); // 마지막

// test("0 + 1 = 1", () => {
//   console.log("밖 test");
//   expect(fn.add(0, 1)).toBe(1); // 3
// });

// describe("안쪽", () => {
//   beforeAll(() => console.log("안 beforeAll")); // 5
//   beforeEach(() => console.log("안 beforeEach")); // 7
//   afterEach(() => console.log("안 afterEach")); // 9
//   afterAll(() => console.log("안 afterAll")); // 마지막 - 1

//   test("0 + 1 = 1", () => {
//     console.log("안 test");
//     expect(fn.add(0, 1)).toBe(1); // 8
//   });
// });

// // skip, only
// let num = 0;

// test.skip("0 + 1 = 1", () => {
//   expect(fn.add(num, 1)).toBe(1);
// });

// test.only("0 + 2 = 2", () => {
//   expect(fn.add(num, 2)).toBe(2);
// });

// Mock 함수
// const mockFn = jest.fn();
// mockFn();
// mockFn(1);

// test("함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });

// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다.", () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// });

// const mockFn = jest.fn();

// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     mockFn(num + 1);
//   });
// }

// forEachAdd1([10, 20, 30]);

// test("함수 호출은 3번 됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("전달된 값은 11, 21, 31입니다.", () => {
//   expect(mockFn.mock.calls[0][0]).toBe(11);
//   expect(mockFn.mock.calls[1][0]).toBe(21);
//   expect(mockFn.mock.calls[2][0]).toBe(31);
// });

// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("함수 호출은 3번 됩니다.", () => {
//   console.log(mockFn.mock.results);
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("10에서 1 증가한 값이 반환된다.", () => {
//   expect(mockFn.mock.results[0].value).toBe(11);
// });

// test("20에서 1 증가한 값이 반환된다.", () => {
//   expect(mockFn.mock.results[1].value).toBe(21);
// });

// test("30에서 1 증가한 값이 반환된다.", () => {
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

// const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValue(true);

// const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

// test("홀수는 1, 3, 5", () => {
//   expect(result).toStrictEqual([1, 3, 5]);
// });

// Mock 함수에서 비동기 처리
// const mockFn = jest.fn();
// mockFn.mockResolvedValue({ name: "Mike" });

// test("받아온 이름은 마이크", () => {
//   mockFn().then((res) => {
//     expect(res.name).toBe("Mike");
//   });
// });

// db에 유저 생성하지 않고 테스트할 때
// jest.mock("./fn");

// fn.createUser.mockReturnValue({ name: "Mike" });

// test("create user", () => {
//   const user = fn.createUser("Mike");
//   expect(user.name).toBe("Mike");
// });

// 몇 가지 유용한 matchers
const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한번 이상 호출?", () => {
  expect(mockFn).toBeCalled();
});

test("정확히 세 번 호출?", () => {
  expect(mockFn).toBeCalledTimes(3);
});

test("10이랑 20 전달받은 함수가 있는가?", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});

test("마지막 함수는 30이랑 40을 받았는가?", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
