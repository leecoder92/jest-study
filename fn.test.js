const fn = require("./fn");

test("1은 1이야.", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5가 아니야.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

test("null은 null", () => {
  expect(null).toBeNull();
});

test("0 is false", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있지 않은 문자열은 true", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

// 소수점 비교
test("0.1 + 0.2 = 0.3?", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello world에 a 라는 글자가 있는가?", () => {
  expect("Hello world").toMatch(/h/i);
});

test("유저 리스트에 Mike가 있는가?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kyle"];
  expect(userList).toContain(user);
});

// 에러 테스트
test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr()).toThrow("xx");
});
