//게시물 갯수를 처리하는 함수
// const postsNumber = (매개변수) => {
const postsNumber = (tableName, countElement, isDivide) => {
  const tr = document.querySelectorAll(`${tableName} tbody tr`);
  const count = document.querySelector(countElement);
  let trLength;
  if (isDivide) {
    trLength = tr.length / 2; //tr갯수 / 2
    // console.log("나누기하겠습니다.");
  } else {
    trLength = tr.length; //tr갯수
    // console.log("나누기 하지않겠습니다.");
  }
  //   console.log(trLength);
  //   const trLength = tr.length / 2; //tr갯수 /2
  count.innerText = trLength; //총 게시물수 변경
};

//FAQ게시판 기능함수
const Faq = (activeClass) => {
  const title = document.querySelectorAll(".faq-board a"); //링크
  const tr = document.querySelectorAll(".faq-board tbody tr");
  const count = document.querySelector(".count b");

  //   postsNumber(인수);
  postsNumber(".faq-board", ".count b", true);

  title.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const isAnswer = event.target.parentElement.parentElement.nextElementSibling;
      console.log(isAnswer);
      tr.forEach((item) => {
        item.classList.remove(activeClass);
      });
      isAnswer.classList.add(activeClass);
    });
  });
};

//자유게시판 기능
const FreeBoard = () => {
  const freeboardTr = document.querySelector(".free-board tbody tr");
  const count = document.querySelector(".count2 b");

  // postsNumber(tr선택자, 카운트 된 텍스트 삽입할 선택자);
  postsNumber(".free-board", ".count2 b", false);
};

Faq("--active");
FreeBoard();
