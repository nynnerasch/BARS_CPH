const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea2ndsem-4584.restdb.io/rest/barscph" + id;
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showBar(data));

//populate the page
function showBar(bar) {
  console.log(bar);
  document.querySelector(".barname").textContent = bar.barname;
  document.querySelector(".location").textContent = bar.location;
  document.querySelector(".address").textContent = bar.address;
  document.querySelector(".barimg").src = bar.img_url;
  document.querySelector(".vibe").textContent = bar.vibe;
}

if ((smoking = true)) {
  ("yes");
} else {
  ("no");
}

if ((outdoor = true)) {
  ("yes");
} else {
  ("no");
}
