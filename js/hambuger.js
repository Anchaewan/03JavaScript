// 1. 선택자 정의

const openButton = document.querySelector(".btn-menu");
const closeButton = document.querySelector(".btn-close");
const navigation = document.querySelector(".mobile");

// 2. 메뉴 클릭

openButton.addEventListener("click", () => {
  // 3. 메뉴 보이기
  navigation.classList.add("--active");
});

// 4. 메뉴 닫기 클릭
closeButton.addEventListener("click", () => {
  // 5. 메뉴 닫히기
  navigation.classList.remove("--active");
});
