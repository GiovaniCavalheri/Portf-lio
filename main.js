const title = document.querySelector(".digitando");
const cursor = document.querySelector(".cursor");

function toWrite(elemento) {
  const arrText = elemento.textContent.replace("|", "").split("");
  elemento.textContent = ""; // limpa o conteúdo

  arrText.forEach((letra, i) => {
    setTimeout(() => {
      elemento.textContent += letra;
    }, 75 * i);
  });
}

toWrite(title);
