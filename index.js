//open overlay header
let menu = document.querySelector(".header__bar");
let overlay = document.querySelector(".header__overlay");
menu.addEventListener("click", function () {
  this.classList.toggle("change");
  overlay.classList.toggle("change");
});

//check box dropdown
let filterTitle = document.querySelectorAll(".filter-box__title");
let filterContent = document.querySelectorAll(
  ".filter-box__title + .filter-box__content"
);

for (let i = 0; i < filterTitle.length - 1; i++) {
  filterTitle[i].addEventListener("click", function () {
    this.classList.toggle("active");
    filterContent[i].classList.toggle("active");
  });
}
//page open filter
let filter = document.querySelector(".filter-box__icon");
let filterOverlay = document.querySelector(".filter-box__overlay");
filter.addEventListener("click", function () {
  filterOverlay.classList.toggle("active");
});
