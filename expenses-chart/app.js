//height of chart with foreach and dataset (maybe works)
import * as data from "./data.json" assert { type: "json" };
const graph = document.querySelectorAll(".js-graph");
const money = document.querySelectorAll(".money");
//const container = document.querySelector(".container__spendings__graphs");

money.forEach((graph) => {
  graph.parentElement.addEventListener("click", (e) => {
    if (window.innerWidth >= 1200) {
      graph.classList.toggle("clicked");
    } else {
      e.preventDefault;
    }
  });
});

const day = new Date();
const currentDay = day.getDay();
graph.forEach((day) => {
  if (day.id === currentDay.toString()) {
    day.classList.add("active");
  }
});

money.forEach((amount) => {
  data.default.map((item) => {
    if (amount.dataset.day === item.day) {
      amount.innerHTML = `<p>$${item.amount}</p>`;
    }
  });
});

graph.forEach((elemnt) => {
  data.default.map((item) => {
    if (elemnt.dataset.day === item.day) {
      elemnt.style.height = `${item.amount * 2}px`;
    }
  });
});
