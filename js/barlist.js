const urlParams = new URLSearchParams(window.location.search);
const area = urlParams.get("location");

// const url = "https://kea2ndsem-4584.restdb.io/rest/barscph";

const url = "https://kea2ndsem-4584.restdb.io/rest/barscph?filter=" + area;

//API-key
const options = {
  headers: {
    "x-apikey": "620a2fc134fd6215658584c2",
  },
};

//fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => handleBarList(data));

function handleBarList(data) {
  data.forEach((bar) => {
    //console.log(bar);
    //Grab template
    const template = document.querySelector(".barListTemplate").content;
    //Clone it
    const clone = template.cloneNode(true);
    //Populate with data
    document.querySelector("h1").textContent = bar.location;
    clone.querySelector("h2").textContent = bar.barname;
    clone.querySelector(".barcontainer img").src = bar.img_url;
    clone.querySelector(".rating").textContent = bar.rating;
    clone.querySelector(".price").textContent = bar.pricerange;
    clone.querySelector("a").href += bar._id;
    clone.querySelector(".barcontainer a").href += bar._id;
    //Append it to the DOM
    const mainEL = document.querySelector("main");
    mainEL.appendChild(clone);
  });
}
