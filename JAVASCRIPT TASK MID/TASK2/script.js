let images = [
  "IMG/1.jpg",
  "IMG/2.jpg",
  "IMG/3.jpg",
  "IMG/4.jpg",
  "IMG/5.jpg"
];

let index = 0;

let sliderImage = document.getElementById("sliderImage");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

function updateImage() {
  sliderImage.src = images[index];
}

nextBtn.addEventListener("click", function () {
  index = (index + 1) % images.length;
  updateImage();
});

prevBtn.addEventListener("click", function () {
  index = (index - 1 + images.length) % images.length;
  updateImage();
});

setInterval(function () {
  index = (index + 1) % images.length;
  updateImage();
}, 3000);

updateImage();