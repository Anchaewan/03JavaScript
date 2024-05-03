//1. 선택자정의
const tabButton = document.querySelectorAll(".tab li");
const tabContent = document.querySelectorAll(".tab-content > div");
const active = "--active";

//2. 탭이벤트 정의
tabButton.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    const isButton = event.target.parentElement;

    //4. 탭버튼 나머지 비활성화
    tabButton.forEach((el) => {
      el.classList.remove(active);
    });

    //3. 탭버튼 활성화
    // const isButton = event.target;
    // console.log(isButton);
    isButton.classList.add(active);
    //5. 탭버튼의 갯수 나열하고, 탭내용의 n번째와 비교한다.
    tabContent.forEach((el, idx) => {
      //6. 탭내용을 모두 비활성화한다.
      el.classListremove(active);
      if (index === idx) {
        //7. 두 수가 일치하는 탭내용을 활성화한다.
        el.classList.add(active);
      }
    });
  });
});
