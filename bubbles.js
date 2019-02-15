"use strict";
let arr = [];
init();
function init() {
  let counter;
  createBubbles(256);
  colorBubbles();
}
function createBubbles(number) {
  for (let counter = 0; counter < number; counter++) {
    console.log(counter);
    createBubble();
  }
}

function createBubble() {
  const klon = document.querySelector(".bTemplate").content.cloneNode(true);
  const bubble = klon.querySelector(".bubble");
  document.querySelector("#bubbles").appendChild(klon);

  arr.push(bubble);
  console.log(arr);
}

function colorPicker(start, end, step, color) {
  for (let counter = start; counter < end; counter += step) {
    let bub = arr[counter];
    bub.style.backgroundColor = color;
  }
}

function colorBubbles() {
  colorPicker(0, 16, 1, "green");

  colorPicker(16, 32, 1, "red");

  colorPicker(32, 40, 1, "lightgreen");

  colorPicker(46, 50, 1, "lightblue");

  colorPicker(56, 128, 3, "pink");

  colorPicker(56, 128, 5, "orange");

  colorPicker(56, 128, 7, "black");

  for (let counter = 1; counter < 256; counter *= 2) {
    let bub = arr[counter];
    bub.style.backgroundColor = "yellow";
  }
  colorPicker(64, 256, 16, "purple");

  colorPicker(8, 256, 16, "hotpink");

  colorPicker(0, 256, 17, "cyan");
}
