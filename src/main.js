// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height; // 높이 측정

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home section을 아래로 스크롤시 투명하게 처리

const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  // console.log(object)
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
