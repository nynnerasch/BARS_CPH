const url = "https://kea2ndsem-4584.restdb.io/rest/barscph";

//API-key
const options = {
  headers: {
    "x-apikey": "620a2fc134fd6215658584c2",
  },
};

//res means response
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //We have the data
    console.log(data);
    handleBarList(data);
  })
  .catch((e) => {
    //Woops, something went wrong
    console.error("An error occured:", e.message);
  });

function handleBarList(data) {
  data.forEach((bar) => {
    //console.log(bar);
    //Grab template
    const template = document.querySelector(".barListTemplate").content;
    //Clone it
    const clone = template.cloneNode(true);
    //Populate with data
    clone.querySelector("h2").textContent = bar.barname;
    clone.querySelector(".barcontainer img").src = bar.img_url;
    clone.querySelector(".rating").textContent = bar.rating;
    clone.querySelector(".price").textContent = bar.pricerange;

    //Append it to the DOM
    const mainEL = document.querySelector("main");
    mainEL.appendChild(clone);
  });
}
