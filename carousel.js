import { data } from "./data/data.js";

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".number-button").forEach((el) => {
    el.addEventListener("click", (e) => {
      // get data
      getData(e.target.id);
      // give active class to the clicked button
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      el.className += " active";
    });
  });
});

function getData(eleID) {
  const eleIDInt = parseInt(eleID);
  const pFirst = document.getElementById("text-carousel-one");
  pFirst.innerHTML = "¥" + data[eleIDInt][0].Nav;
  const pSecond = document.getElementById("text-carousel-second");
  pSecond.innerHTML = data[eleIDInt][0].NewAssets + " million";
  const pThird = document.getElementById("text-carousel-third");
  pThird.innerHTML = "¥" + data[eleIDInt][0].DayChanged;
  const pFourth = document.getElementById("text-carousel-fourth");
  pFourth.innerHTML = data[eleIDInt][0].Issued + " shares";
}

window.onload = (event) => {
  // on page load, get the data in index 0
  getData(0);
};
