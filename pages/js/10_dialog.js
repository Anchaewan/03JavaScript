const button = document.querySelector("button");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");

button.addEventListener("click", function () {
  dialog.showModal();
});

closeButton.addEventListener("click", function () {
  dialog.close();
});
