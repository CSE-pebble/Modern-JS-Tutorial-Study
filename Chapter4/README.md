## helloObject

### 객체야 안녕?

다음 각 동작을 한 줄씩, 코드로 작성해보세요.

1. 빈 객체 user를 만듭니다.
2. user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
3. user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
4. name의 값을 Pete로 수정해보세요.
5. user에서 프로퍼티 name을 삭제하세요.

## checkIsEmpty

### 객체가 비어있는지 확인하기

객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

아래와 같이 동작해야 합니다.

```js
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
```

## 변하지 않는 객체?

const와 함께 선언한 객체를 변경하는 게 가능할까요? 생각을 공유해주세요!

```js
const user = {
  name: "John",
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete";
```

> 정답 : 에러 없이 실행된다. <br><br> 변수 user는 객체 참조 값을 저장하고 있는데, const는 이 값이 변경되는걸 막는 것이지, 객체의 내용(프로퍼티)을 변경하는 건 막지 않는다.

## getTotalProperty

### 프로퍼티 합계 구하기

모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.

```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
```

모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요. sum엔 390이 저장되어야겠죠?

주의: salaries가 비어있다면 sum에 0이 저장되어야 합니다.

## valueTimesTwo

### 프로퍼티 값 두 배로 부풀리기

객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

```js
// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
```

multiplyNumeric은 아무것도 반환하지 않아도 괜찮습니다. 객체 자체를 수정해주기만 하면 됩니다.

힌트: typeof를 사용하면 프로퍼티 값이 숫자인지 확인할 수 있습니다.

## 객체 리터럴에서 'this' 사용하기

함수 makeUser는 객체를 반환합니다.

이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?

```js
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // 결과가 어떻게 될까요?
```

> 정답 : 에러가 발생한다. <br><br> 기억하자. `this` 값은 **함수 호출 시점**에 결정된다.<br> 주석에 쓴 코드 라인 (\*)을 보면 알 수 있듯 함수를 호출하는 시점에 `this`에 객체가 할당된다. 하지만 해당 시점에 `this`가 참조할 만한 객체가 존재하지 않으므로 `this`에는 `undefined`가 할당된다. 즉 `user.ref`는 `undefined` 값이 할당되고, 그에 따라 `undefined`의 프로퍼티에 접근하려고 하니까 에러가 발생하는 것이다.

## calculator

### 계산기 만들기

calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.

read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
sum()은 저장된 두 값의 합을 반환합니다.
mul()은 저장된 두 값의 곱을 반환합니다.

```js
let calculator = {
  // ... 여기에 답안 작성 ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
```

## chaining

### 체이닝

올라가기(up)와 내려가기(down) 메서드를 제공하는 객체 ladder가 있습니다.

```js
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert(this.step);
  },
};
```

메서드를 연이어 호출하고자 한다면 아래와 같이 코드를 작성할 수 있습니다.

```js
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```

`up`, `down`, `showStep`을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.

## makeSameObj

### 함수 두 개로 동일한 객체 만들기

new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?

```js
function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
```

만약 가능하다면, 실행 가능한 예시를 작성해 보세요.

## calculatorWithConstructor

### 계산기 만들기

아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.

- `read()` – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
- `sum()` – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
- `mul()` – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.

예시:

```js
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
```

## accumulator

### 누산기 만들기

생성자 함수 Accumulator(startingValue)를 만들어 보세요.

Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.

- 프로퍼티 value에 현재 값(current value)을 저장합니다. 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
- 메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.

프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다.

데모를 위한 코드는 다음과 같습니다.

```js
let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
```
