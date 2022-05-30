/* document.getElementById("circle1").addEventListener("click", progressLine1());
document.getElementById("circle2").addEventListener("click", progressLine2());

function progressLine1() {
  document.querySelector("#circle1").style.backgroundColor = "blue";
}
function progressLine2() {}
 */

const circle1 = document.getElementById("next");
circle1.addEventListener("click", function onClick(event) {
  document.querySelector("#circle1").style.backgroundColor = "#b0b0b0";
});
const circle2 = document.getElementById("prev");
circle2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle1").style.backgroundColor = "black";
});
/* const progress2 = document.getElementById("next");
progress2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "black";
});
 */
