function adjustMenuLayout() {
  const nav = document.querySelector("nav");
  const ul = nav.querySelector("ul");
  const main = document.querySelector("main");

  if (window.innerWidth <= 768) {
    ul.classList.add("vertical");
    main.classList.add("shifted");
  } else {
    ul.classList.remove("vertical");
    main.classList.remove("shifted");
  }
}
window.addEventListener("load", adjustMenuLayout);
window.addEventListener("resize", adjustMenuLayout);