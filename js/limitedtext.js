// 1. 선택자정의
const input = document.querySelector(".board-write textarea");
const text = document.querySelector(".limited");
const error = document.querySelector(".error");

// 2. 글자수 한계 정의
//html <textarea maxlength="@"></textarea>로도 가능하다. (각각 제어해야해서 불편함.)
const max = 20;
// input.setAttribute(속성명,속성값);
input.setAttribute("maxlength", max);
text.innerText = `0 / ${max}`;

// 3. 실시간 글자수 확인
input.addEventListener("input", (event) => {
  const value = event.target.value.length;
  // console.log(value);
  // 4. 실시간 글자수 삽입
  text.innerText = `${value} / ${max}`;

  // 5. 글씨가 초과되면 경고 메세지
  if (value > max) {
    error.innerText = "글자수가 초과되었습니다.";
  } else {
    error.innerText = "";
  }
});
