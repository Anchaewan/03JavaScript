// 선택자
const block = document.querySelectorAll(".block1");
console.log(block);
block.forEach((element, index) => {
  console.log(element, index);
  element.style.border = "1px solid red";
  element.classList.add(`box${index}`);
  console.log(element, index);
});

// 클래스제어
const buttonClass = document.querySelector(".add-class");
const buttonRemove = document.querySelector(".remove-class");
const buttonToggle = document.querySelector(".toggle-class");
const buttonHas = document.querySelector(".has-class");
const boxClass = document.querySelector(".block2");

buttonClass.addEventListener("click", () => {
  boxClass.classList.add("--active");
});
buttonRemove.addEventListener("click", () => {
  boxClass.classList.remove("--active");
});
buttonToggle.addEventListener("click", () => {
  boxClass.classList.toggle("--active");
});
buttonHas.addEventListener("click", () => {
  const isclass = boxClass.contains("--active");
  console.log(isclass);
  if (isclass) {
    boxClass.style.color = "red";
  } else {
    boxClass.style.color = "#000";
  }
});

// Text제어
const text = document.querySelector(".textbox");
// text.textContent = "텍스트입력111";
const saveText = text.textContent;
console.log(saveText);

// 속성제어

const input = document.querySelector(".input");
// input.setAttribute('속성명', '속성값');
input.setAttribute("placeholder", "이름을 입력해주세요.");
const getAttr = input.getAttribute("type");
console.log(`type값은 : ${getAttr}`);

// input.removeAttribute("type");

const hasAttr = input.hasAttribute("type");
console.log(hasAttr);

// CSS제어

const cssBox = document.querySelector(".css-box");
cssBox.style.color = "red";
cssBox.style.backgroundcolor = "pink";
cssBox.style.fontSize = "20px";
cssBox.style.cssText = `
border:1px solid red;
margin-top:20px;
`;
// 탐색
const item = document.querySelector(".item2");
const item5 = document.querySelector(".item5");
// const selector = item.nextElementSibling();
// const selector = item.previousElementSibling();
// const selector = item.parentElement;
// const selector = item.children;
const selector = item.closest("ul");
// item5.innerHTML = '<div><a href="">클릭</a></div>';
item5.innerHTML = `
     <div>
         <a href="">클릭</a>
         <span>안녕</span>
     </div>
         `;
console.log(selector);
