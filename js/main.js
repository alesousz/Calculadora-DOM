const botoes = document.querySelectorAll("button");
const input = document.querySelector(".inputFieldDark");
const igual = document.getElementById("igual");
const reset = document.getElementById("reset");
const registroDaConta = document.querySelector(".conteudo-registros");

// botões de número
botoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    input.value += this.value;
    if (botao.className === "reset") {
      input.value = " ";
    } else if (botao.className === "igual") {
      calcular();
    }
  });
});

function calcular() {
  const result = eval(input.value);
  registroDaConta.innerHTML += `<div class="registro-conta">${input.value} = ${result}</div>`;
}

//trocando cor

document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector("main");
  const divRegistros = document.querySelector(".conteudo-registros");
  const botao = document.querySelector(".trocaDeCor");
  const imagem = botao.querySelector("img");
  const p = botao.querySelector("p");
  const divRegistrosDentro = document.querySelectorAll(".registro-conta");

  // Definir a imagem inicial com base na classe atual do main
  imagem.src =
    main.className === "dark"
      ? "/assets/brilho-do-sol.png"
      : "/assets/forma-de-meia-lua.png";

  p.innerText = main.className === "dark" ? "Modo Claro" : "Modo Escuro";

  botao.addEventListener("click", function () {
    if (main.className === "dark") {
      main.className = "claro";
      divRegistros.className = "conteudo-registros-claro";
      divRegistros.className = "conteudo-registros claro";
      imagem.src = "/assets/forma-de-meia-lua.png";
      p.innerText = "Modo Escuro";
    } else {
      main.className = "dark";
      divRegistros.className = "conteudo-registros";
      divRegistros.className = "conteudo-registros dark";
      imagem.src = "/assets/brilho-do-sol.png";
      p.innerText = "Modo Claro";
    }
  });
});
