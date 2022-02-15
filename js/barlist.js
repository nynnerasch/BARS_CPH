const url = "https://kea2ndsem-4584.restdb.io/rest/barscph";

//res means response
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleBarList(data);
  });

function handleBarList(data) {
  console.log(data);
  //   data.forEach()
}
