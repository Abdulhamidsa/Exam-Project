let = traditional = 0;
let = dulce = 0;
let = cream = 0;
let = alfajor = 0;

//FUNCTIONS
start();
// deleteProduct();

//Pick Up Pastry

function start() {
  console.log("Start");
  document
    .querySelector("#product1")
    .addEventListener("click", loadTraditional);
  document.querySelector("#product2").addEventListener("click", loadDulce);
  document.querySelector("#product3").addEventListener("click", loadCream);
  document.querySelector("#product4").addEventListener("click", loadAlfajor);
}

//Function create Div in the grid.

//Handle Functions

function loadTraditional() {
  console.log("Traditional Function Works");
  let = div1 = document.createElement("div");
  div1.classList.add("add-traditional");
  document.querySelector("#custom-grid").appendChild(div1);
}

function loadDulce() {
  console.log("Dulce Function Works");
  let = div2 = document.createElement("div");
  div2.classList.add("add-dulce");
  document.querySelector("#custom-grid").appendChild(div2);
}
function loadCream() {
  console.log("Cream Function Works");
  let = div3 = document.createElement("div");
  div3.classList.add("add-cream");
  document.querySelector("#custom-grid").appendChild(div3);
}

function loadAlfajor() {
  console.log("Alfajor Function Works");
  let = div4 = document.createElement("div");
  div4.classList.add("add-alfajor");
  document.querySelector("#custom-grid").appendChild(div4);
}
