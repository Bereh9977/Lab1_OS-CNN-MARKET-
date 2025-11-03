document.addEventListener("DOMContentLoaded", newItem);

function newItem() {
  const main = document.querySelector("main");
  if (!main) return;

  const lastDiv = main.lastElementChild;
  if (!lastDiv) return;

  const title = lastDiv.querySelector("h3");
  if (!title) return;

  const span = document.createElement("span");
  span.classList.add("newLabel");
  title.appendChild(span);

  const text = " Новинка!";
  let i = 0;

  function type() {
    if (i < text.length) {
      span.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  type();
}