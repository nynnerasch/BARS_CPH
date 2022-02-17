const urlParams = new URLSearchParams(window.location.search);

const area = urlParams.get("location");

// const area = "Vesterbro";
// ?q={"$distinct": "age"}&sort=age
// const url = `https://kea2ndsem-4584.restdb.io/rest/barscph?q={"location" : {"$in" : ["${area}"]}}`;
const url = `https://kea2ndsem-4584.restdb.io/rest/barscph?q={"$distinct": "location"}`;

console.log(url);
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
  //grab the template
  const template = document.querySelector("#mainTemplate").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector(".area a").href += area.location;
  // copy
  //   .querySelector("a")
  //   .setAttribute("href", "barlist.html?location=" + area.location);

  copy.querySelector("p").textContent = `${area.location}`;

  //grab parent
  const parent = document.querySelector("main");

  //append it
  parent.appendChild(copy);

  //change content
  // document
  //   .querySelector(".chris a")
  //   .setAttribute("href", `barlist.html?location=${area.Christianshavn}`);
  // document.querySelector(".chris a").href += area.location;
}
