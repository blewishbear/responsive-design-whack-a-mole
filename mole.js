// // Write your JS here.
// window.addEventListener("DOMContentLoaded", () => {
//   //set interval of one second
//   setInterval(() => {
//     //select ALL mole head classes and store into variable
//     const moleHeads = document.querySelectorAll(".wgs__mole-head");
//     //iterate through key of obj, grabbing each molehead image
//     for (let moleHead of moleHeads) {
//       //if class is hidden, toggle it off. vice versa
//       moleHead.classList.toggle("wgs__mole-head--hidden");
//     }
//   }, 1000);
// });

function popUpRandomMole() {
  let moleHeads = document.querySelectorAll(".wgs__mole-head");
  let randomNum = Math.floor(Math.random() * moleHeads.length);
  let currentMole = moleHeads[randomNum];

  currentMole.classList.remove("wgs__mole-head--hidden");

  setTimeout(() => {
    hideMole(currentMole);
  }, 1000);
}

function hideMole(currentMole) {
  currentMole.classList.add("wgs__mole-head--hidden");
  setTimeout(() => {
    popUpRandomMole();
  }, 1000);
}

// function getRandomNum(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
