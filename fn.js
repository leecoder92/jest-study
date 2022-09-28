const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),
  throwErr: () => {
    throw new Error("xx");
  },
  // 비동기 처리를 위한 함수
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
      // throw new Error("서버 에러");
    });
  },
  // Promise
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
};

module.exports = fn;
