const searchBtn = document.querySelector(".search__btn");
const cancelBtn = document.querySelector(".cancel__btn");
const searchBox = document.querySelector(".search__box");
const searchInput = document.querySelector(".search__box input");
const searchData = document.querySelector(".search__data");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");

  if (searchInput.value != "") {
    searchData.classList.remove("active");
    searchData.innerHTML = `Your just typed <span style="font-weight: 600;">${searchInput.value}</span>`;
  } else {
    searchData.innerHTML = "";
  }
});

cancelBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchData.classList.add("active");
  searchInput.value = "";
});
