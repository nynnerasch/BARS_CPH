/* what i did on product thing
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;
fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".productName").textContent =
    product.productdisplayname;
  document.querySelector("p.productName").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
} */
