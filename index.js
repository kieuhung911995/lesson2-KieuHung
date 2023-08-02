//page
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
