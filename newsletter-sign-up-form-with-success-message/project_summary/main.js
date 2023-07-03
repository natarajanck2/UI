const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
const dismiss_btn = document.querySelector(".dismiss-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  card_1.classList.add("hide");
  card_2.classList.remove("hide");
});

dismiss_btn.addEventListener("click", () => {
  card_1.classList.remove("hide");
  card_2.classList.add("hide");
});
