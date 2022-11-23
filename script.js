let outputTexts = new Object();
outputTexts = {
      "html": "HTML (Hypertext Markup Language ou Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.",
      "css": "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML. O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.",
      "js": "O JavaScript é uma linguagem de programação interpretada baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional).",
      "py": "O Python é uma linguagem de programação interpretada, orientada a objetos e de alto nível.",
      "git": "O Git é um software de controle de versão que proporciona versionamento de código."

}

function defaultSettings(e) {
      output.textContent = "";
      e.target.style.opacity = 0.5;
      document.body.style.backgroundImage = `url(imagens/background_default.jpg)`;

}

function setOutputSettings(e) {
      output.textContent = outputTexts[e.target.id];
      e.target.style.opacity = 1.0;
      document.body.style.backgroundImage = `url(imagens/${e.target.id}_background.jpg)`;
}

let output = document.getElementById("output");
let htmlHover = document.getElementById("html");
htmlHover.addEventListener("mouseover", setOutputSettings);
htmlHover.addEventListener("mouseout", defaultSettings);

let cssHover = document.getElementById("css");
cssHover.addEventListener("mouseover", setOutputSettings);
cssHover.addEventListener("mouseout", defaultSettings);

let jsHover = document.getElementById("js");
jsHover.addEventListener("mouseover", setOutputSettings);
jsHover.addEventListener("mouseout", defaultSettings);

let pyHover = document.getElementById("py");
pyHover.addEventListener("mouseover", setOutputSettings);
pyHover.addEventListener("mouseout", defaultSettings);

let gitHover = document.getElementById("git");
gitHover.addEventListener("mouseover", setOutputSettings);
gitHover.addEventListener("mouseout", defaultSettings);
