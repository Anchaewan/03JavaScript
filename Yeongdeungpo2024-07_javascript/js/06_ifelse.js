// 조건문
// const isShow = true;
// if (isShow) {
//   console.log("show");
// } else {
//   console.log("hide");
// }
// const myName = prompt("이름을 입력하세요.", "");

// if (inName === "아무개") {
//   console.log(`제 이름은 ${myName}입니다.`);
// } else {
//   console.log(`${myName}님 그 이름이 아닙니다.`);
// }

// const myAge = prompt("현재 나이가 어떻게 되세요?", "");
// const currentAge = 30;
// const numberAge = Number(myAge);
// if (numberAge === currentAge) {
//   console.log(`${myAge}이라구요? 저와 동갑이시네요?`);
// } else if (numberAge > currentAge) {
//   console.log(`${myAge}이라구요? 저보다 나이가 많으시네요?`);
// } else if (numberAge < currentAge) {
//   console.log(`${myAge}이라구요? 저보다 나이가 적으시네요?`);
// }

// 물음표 연산자

const age = prompt("성인이신가요? 나이를 입력하세요.", "");
// const result = age ? 참 : 거짓;
const result = age > 19 ? console.log("성인인증완료") : console.log("어려서안되요");
