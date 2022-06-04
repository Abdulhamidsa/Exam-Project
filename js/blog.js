const url =
  "http://sesejose.com/kea/wp_entremasas/wp-json/wp/v2/article?_embed";

fetch(url)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    handleArticles(data);
  });

function handleArticles(data) {
  data.forEach(showArticle);
}

const template = document.querySelector("#articleTemplate").content;

function showArticle(art) {
  console.log(art);
  const copy = template.cloneNode(true);
  copy.querySelector(".title").textContent = art.title.rendered;
  //   copy.querySelector(".subtitle").textContent = art.description;
  copy.querySelector(".excerpt").textContent = art.excerpt.rendered;
  copy.querySelector(".article_cover a img").src = art.image.guid;

  copy
    .querySelector(".link-article a")
    .setAttribute("href", `article.html?id=${art.id}`);

  copy
    .querySelector(".article_cover a")
    .setAttribute("href", `article.html?id=${art.id}`);

  const parent = document.querySelector("#blog_gallery");
  parent.appendChild(copy);
}
