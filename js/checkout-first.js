/* TO FORCE THE PAGE TO POSITION AT THE TOP OF THE PAGE WHEN RELOADING*/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
const step1method1 = document.getElementById("next-button-cheackout1");
step1method1.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "var(--brown)";
  document.querySelector(".line1").style.backgroundColor = "var(--brown)";
  /*   document.querySelector(".extra-line").style.visibility = "visible";
   */
});
const step1method2 = document.getElementById("next-button-cheackout1-method2");
step1method2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "var(--brown)";
  document.querySelector(".line1").style.backgroundColor = "var(--brown)";
});
const step2 = document.getElementById("prev-button-delivery");
step2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "#b0b0b0";
  document.querySelector(".line1").style.backgroundColor = "#b0b0b0";
  /*   document.getElementById("checkout-step1").scrollIntoView(true);
   */
});
const step3 = document.getElementById("next-button-payment");
step3.addEventListener("click", function onClick(event) {
  document.querySelector(".line2").style.backgroundColor = "var(--brown)";
  document.querySelector("#circle3").style.backgroundColor = "var(--brown)";
});
const step4 = document.getElementById("prev-button-summary");
step4.addEventListener("click", function onClick(event) {
  document.querySelector(".line2").style.backgroundColor = "#b0b0b0";
  document.querySelector("#circle3").style.backgroundColor = "#b0b0b0";
});

const step5 = document.getElementById("next-button-finish-pay");
step5.addEventListener("click", function onClick(event) {
  document.querySelector(".line3").style.backgroundColor = "var(--brown)";
  document.querySelector("#circle4").style.backgroundColor = "var(--brown)";
  document.querySelector(".slider-checkout").style.display = "none";
});

function displayMore() {
  let x = document.getElementById("delivery-info");
  let y = document.getElementById("delivery-info2");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}

/* function displayMore2() {
  let text = document.getElementById("delivery-info2");
  if (text.style.opacity === "0") {
    text.style.opacity = "1";
  } else {
    text.style.opacity = "0";
  }
} */
const step1option1 = document.getElementById("next-button-cheackout2");
step1option1.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "var(--brown)";
  document.querySelector(".line1").style.backgroundColor = "var(--brown)";
  /*   document.querySelector(".extra-line").style.visibility = "visible";
   */
});
const step1option2 = document.getElementById("next-button-cheackout2-method2");
step1option2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "var(--brown)";
  document.querySelector(".line1").style.backgroundColor = "var(--brown)";
});
const step2option2 = document.getElementById("prev-button-delivery2");
step2option2.addEventListener("click", function onClick(event) {
  document.querySelector("#circle2").style.backgroundColor = "#b0b0b0";
  document.querySelector(".line1").style.backgroundColor = "#b0b0b0";
});

const step3option2 = document.getElementById("next-button-payment2");
step3option2.addEventListener("click", function onClick(event) {
  document.querySelector(".line2").style.backgroundColor = "var(--brown)";
  document.querySelector("#circle3").style.backgroundColor = "var(--brown)";
});
const step4option2 = document.getElementById("prev-button-summary2");
step4option2.addEventListener("click", function onClick(event) {
  document.querySelector(".line2").style.backgroundColor = "#b0b0b0";
  document.querySelector("#circle3").style.backgroundColor = "#b0b0b0";
});

/* const step5option2 = document.getElementById("next-button-finish-pay");
step5option2.addEventListener("click", function onClick(event) {
  document.querySelector(".line3").style.backgroundColor = "var(--brown)";
  document.querySelector("#circle4").style.backgroundColor = "var(--brown)";
  document.querySelector(".slider-checkout").style.display = "none";
});
 */
