function burgerMenu() {
  console.log("burgerMenu");
  let burger = document.querySelector(".burgerContent");
  if (burger.style.display === "block") {
    burger.style.display = "none";
  } else {
    burger.style.display = "block";
  }
}

document.querySelector("#burger").addEventListener("click", burgerMenu);
