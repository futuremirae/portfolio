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
  home.style.opacity = 1 - window.scrollY / homeHeight;
  // opacity 를 정밀하게 조절해야하므로 ~ 직접적으로 스타일 적용
});

//Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrow = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY >= homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

// Navbar 토글 버튼 클릭처리
const navbarMenu = document.querySelector(".header_menu");
const navbarToggle = document.querySelector(".header_toggle");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

//Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
