const urlParams = new URLSearchParams(window.location.search);

const area = urlParams.get("location");

const url = "https://kea2ndsem-4584.restdb.io/rest/barscph" + area;

//API-key
const options = {
  headers: {
    "x-apikey": "620a2fc134fd6215658584c2",
  },
};
//fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showArea(data));

//changing area headers

function showArea(area) {
  console.log(area);

  //change content
  document.querySelector("section.theAreas a").textContent = area.area;
}
