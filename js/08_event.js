// 이벤트 생성
const button = document.querySelector("button");

// button.addEventListener("이벤트", 함수);
button.addEventListener("click", function () {
  console.log("나 클릭했어?");
});
// 이벤트 종류
const box = document.querySelector(".box");
const log = document.querySelector(".log");
box.addEventListener("click", () => {
  log.insertAdjacentHTML("beforeend", `click이 되었습니다.<br />`);
});
box.addEventListener("mouseenter", () => {
  log.insertAdjacentHTML("beforeend", `마우스가 진입 되었습니다.<br />`);
});
box.addEventListener("mouseleave", () => {
  log.insertAdjacentHTML("beforeend", `마우스가 벗어났습니다.<br />`);
});
box.addEventListener("input", (event) => {
  //   log.insertAdjacentHTML("beforeend", `입력되고있습니다.<br />`);
  console.log(event.target.value);
});
box.addEventListener("change", () => {
  log.insertAdjacentHTML("beforeend", `입력값이 변경되었습니다.<br />`);
});

// 기본동작 취소

const link = document.querySelector(".link");
link.addEventListener("click", (event) => {
  event.preventDefault();
  const text = e.target.textContent;
  console.log("클릭되었습니다.");
});

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
// event target
