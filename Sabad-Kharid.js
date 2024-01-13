const number = document.getElementById("h11");
const m = document.getElementById("btn1");
const r = document.getElementById("btn2");
const b = document.getElementById("btn3");

let newNumber;

m.addEventListener("click", () => {
  document.querySelector("h1").style.color = "red";
  newNumber = Number(number.innerHTML) - 1;
  number.innerHTML = newNumber;
});

r.addEventListener("click", () => {
  document.querySelector("h1").style.color = "white";
  number.innerHTML = 0;
});

b.addEventListener("click", () => {
  document.querySelector("h1").style.color = "green";
  newNumber = Number(number.innerHTML) + 1;
  number.innerHTML = newNumber;
});
