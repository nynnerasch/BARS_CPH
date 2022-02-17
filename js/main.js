let home = document.querySelector("#indexBody");
let barlist = document.querySelector("#barlist");
let barpage = document.querySelector("#barpage");

window.addEventListener("load", clickables);

document.querySelector("#burger").addEventListener("click", burgerMenu);

function clickables() {
  if (home) {
    document.querySelector(".downArrow").addEventListener("click", clickarrow);
  } else if ((barlist, barpage)) {
    document.querySelector("#burger").addEventListener("click", burgerMenu);
  }
}

function clickarrow() {
  console.log("clickarrow");
  document.querySelector(".theAreas").scrollIntoView();
}

function burgerMenu() {
  console.log("burgerMenu");
  let burger = document.querySelector(".burgerContent");
  if (burger.style.display === "block") {
    burger.style.display = "none";
  } else {
    burger.style.display = "block";
  }
}
