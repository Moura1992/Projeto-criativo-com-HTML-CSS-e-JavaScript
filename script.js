let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let numberIndicator = container.querySelector(".indicartors .number");
let bullets = container.querySelectorAll(".indicartors ul li");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function updateSlider() {
  // Remove classe 'active' do item anterior
  container.querySelector(".list .item.active").classList.remove("active");
  container.querySelector(".indicartors ul li.active").classList.remove("active");

  // Adiciona classe 'active' ao novo item
  items[active].classList.add("active");
  bullets[active].classList.add("active");

  // Atualiza número do indicador (com zero à esquerda)
  numberIndicator.textContent = (active + 1).toString().padStart(2, "0");
}

prevButton.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  updateSlider();
};

nextButton.onclick = () => {
  active = active + 1 > lastPosition ? firstPosition : active + 1;
  updateSlider();
};
