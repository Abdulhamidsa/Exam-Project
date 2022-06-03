const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url =
  "http://sesejose.com/kea/wp_entremasas/wp-json/wp/v2/combo/" + id + "?_embed";

console.log(url);

fetch(url)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    showArticle(data);
  });

function showArticle(combo) {
  console.log(combo);

  document.querySelector(".image-modal img").src = combo.image.guid;

  const parent = document.querySelector("main");
  parent.appendChild("main");
}
