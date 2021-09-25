var btn = document.getElementById("botao-tema");

function DarkMode() {
  btn.setAttribute("onClick", "LightMode()");
  btn.innerHTML = "Tema Claro";
  document.body.classList.toggle("dark");
}

function LightMode() {
  btn.setAttribute("onClick", "DarkMode()");
  btn.innerHTML = "Tema Escuro";
  document.body.classList.toggle("dark");
}
