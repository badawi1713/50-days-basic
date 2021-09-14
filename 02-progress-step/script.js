// script
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const stepImages = document.querySelectorAll(".step-img");

let currentActive = 0;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 0) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((item, index) => {
    if (index < currentActive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  stepImages.forEach((item, index) => {
    console.log(item);
    if (index < currentActive) {
      item.classList.add("img-active");
    } else {
      item.classList.remove("img-active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 0) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
