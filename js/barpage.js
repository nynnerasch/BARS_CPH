const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea2ndsem-4584.restdb.io/rest/barscph/" + id;
console.log(urlParams.get("id"));
//API-key
const options = {
  headers: {
    "x-apikey": "620a2fc134fd6215658584c2",
  },
};
//fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showBar(data));
//populate the page
function showBar(bar) {
  console.log(bar);
  document.querySelector(".barname").textContent = bar.barname;
  document.querySelector(".address").textContent = bar.address;
  //document.querySelector(".barimg").src = bar.img_url;
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
