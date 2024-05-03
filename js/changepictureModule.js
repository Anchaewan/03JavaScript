const ChangePicture = (activeClass, parentEl) => {
  const button1 = document.querySelectorAll(`${parentEl}, button`);
  const big1 = document.querySelector(`${parentEl}, bigsize img`);

  button.forEach((element) => {
    element.addEventListener("click", (event) => {
      const isSrc = event.target.getAttribute("src");
      const isAlt = event.target.getAttribute("alt");
      button.forEach((item) => {
        item.classList.remove("--active");
      });
      event.target.parentElement.classList.add(activeClass);

      big.setAttribute("src", isSrc);
      big.setAttribute("alt", isAlt);
    });
  });
};

ChangePicture("--active", ".pictures");
