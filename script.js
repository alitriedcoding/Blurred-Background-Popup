const btnEl = document.querySelector(".btn");
const formcontainerEl = document.querySelector(".register_container");
const wellcomcontainerEl = document.querySelector(".wellcom_container");
const exitBtnEl = document.querySelector(".exit_btn");

btnEl.addEventListener("click", () => {
  formcontainerEl.classList.toggle("second-active");
  wellcomcontainerEl.classList.add("fist_active");
});

exitBtnEl.addEventListener("click", () => {
  formcontainerEl.classList.toggle("second-active");
  wellcomcontainerEl.classList.remove("fist_active");
});
