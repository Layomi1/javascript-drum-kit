const keys = document.getElementsByClassName("keys");
const key = document.querySelectorAll("button");
console.log(key);

key.forEach((element) =>
  element.addEventListener("click", (e) => {
    e.classList.add("playing");
  }),
);
