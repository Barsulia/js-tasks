const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const item = document.querySelectorAll(".item");

const computedStyles = getComputedStyle(items);
const step = parseInt(getComputedStyle(item[0]).width);
const shownItems = 300/ step;
const minRight = 0;
const maxRight = (item.length - shownItems)* step;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", e => {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step
    items.style.right = `${currentRight}px`;
  }
});

left.addEventListener("click", e => {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step
    items.style.right = `${currentRight}px`;
  }
});