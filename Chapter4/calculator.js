"use strict";

let calculator = {
  read() {
    // 굳이 a, b 프로퍼티를 따로 선언해주지 않아도 this로 바로 생성 가능
    this.a = Number(prompt("더하고 싶은 첫 번째 값을 입력해주세요."));
    this.b = Number(prompt("더하고 싶은 두 번째 값을 입력해주세요."));
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
