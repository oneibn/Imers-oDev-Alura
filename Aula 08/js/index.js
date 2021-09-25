var cartas = [
{
  nome: "Yusuke Urameshi",
  imagem: "https://static.wikia.nocookie.net/yuyuhakusho/images/0/0d/Yusuke_Urameshi.png/revision/latest?cb=20150617033243&path-prefix=pt-br",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 10
  }
},
{
  nome: "Kazuma Kuwabara",
  imagem: "https://static.wikia.nocookie.net/yuyuhakusho/images/c/cb/KuwabaraOfficial.png/revision/latest?cb=20140127025746",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 7
  }
},
{
  nome: "Kurama",
  imagem: "https://static.wikia.nocookie.net/yuyuhakusho/images/f/f3/KuramaOfficial.png/revision/latest?cb=20140127025833",
  atributos: {
    ataque: 7,
    defesa: 7,
    magia: 11
  }
},
{
  nome: "Hiei",
  imagem: "https://http2.mlstatic.com/D_NQ_NP_630126-MLB26203105860_102017-O.jpg",
  atributos: {
    ataque: 11,
    defesa: 5,
    magia: 9
  }
},
{
  nome: "Gouki",
  imagem: "https://pm1.narvii.com/6619/99371db1096830cf5d17ea76b8fbea7d00aee048_hq.jpg",
  atributos: {
    ataque: 9,
    defesa: 10,
    magia: 6
  }
},
{
  nome: "Lando",
  imagem: "https://2.bp.blogspot.com/-Yl9i6_vyrZs/WTCE4b0rjWI/AAAAAAAAG14/j1cXE7BVNQQR6aGHEpt2FA1zD3f6ZrEBgCLcB/s1600/13.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 10
  }
}
];

var cartaMaquina;
var cartaJogador;
var opcoes = document.getElementById("opcoes");
var elementoResultado = document.getElementById("resultado");
var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

var cartasRestantes = JSON.parse(JSON.stringify(cartas));

function sortearCarta() {

  var numCartaMaq = parseInt(Math.random() * cartasRestantes.length);
  cartaMaquina = cartasRestantes[numCartaMaq];
  cartasRestantes.splice(numCartaMaq, 1);

  var numCartaJog = parseInt(Math.random() * cartasRestantes.length);
  cartaJogador = cartasRestantes[numCartaJog];
  cartasRestantes.splice(numCartaJog, 1);

  document.getElementById("carta-maquina").style.backgroundImage = "";
  document.getElementById("carta-maquina").innerHTML = moldura;
  document.getElementById("instrucao").innerHTML = "Escolha o seu atributo";
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCarta(cartaJogador, "jogador");
}

function obtemAtributoSelecionado() {
  var opcoesAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < opcoesAtributos.length; i++) {
    if (opcoesAtributos[i].checked) {
      return opcoesAtributos[i].value;
    } else {
      var opcaoAleatoria = parseInt(Math.random() * opcoesAtributos.length);
      return opcoesAtributos[opcaoAleatoria].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = "";
  atributoSelecionado = obtemAtributoSelecionado();
  var atributoJogador = cartaJogador.atributos[atributoSelecionado];
  var atributoMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (atributoJogador > atributoMaquina) {
    elementoResultado.innerHTML = `<p class="resultado-final">Você venceu! A carta do inimigo era ${cartaMaquina.nome} e sua força no atributo ${atributoSelecionado} era ${atributoMaquina}.</p>`;
  } else if (atributoJogador < atributoMaquina) {
    elementoResultado.innerHTML = `<p class="resultado-final">Você perdeu! A carta do inimigo era ${cartaMaquina.nome} e sua força no atributo ${atributoSelecionado} era ${atributoMaquina}.</p>`;
  } else {
    elementoResultado.innerHTML = `<p class="resultado-final">Empate! A carta do inimigo era ${cartaMaquina.nome}.</p>`;
  }


  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  exibirCarta(cartaMaquina, "maquina");
}

// function exibirCartaJogador() {
//   var divCartaJogador = document.getElementById("carta-jogador");
//   divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
//   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
//   var tagHTML = "<div id='opcoes' class='carta-status'>";
//
//   var opcoesTexto = "";
//   for (var atributo in cartaJogador.atributos) {
//     opcoesTexto += `
//     <input type="radio" name="atributo" value=${atributo}><label>${atributo}: ${cartaJogador.atributos[atributo]}</label><br>
//     `;
//   }
//   var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
//
//   divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
// }
//
// function exibirCartaMaquina() {
//   var divCartaMaquina = document.getElementById("carta-maquina");
//   divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
//   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
//   var tagHTML = "<div id='opcoes' class='carta-status'>";
//
//   var opcoesTexto = "";
//   for (var atributo in cartaMaquina.atributos) {
//     opcoesTexto += `
//     <p type="text" name="atributo" value="">${atributo}: ${cartaMaquina.atributos[atributo]}</p>
//     `;
//   }
//   var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
//
//   divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
// }

function exibirCarta(cartaAlvo, alvo) {
  var divCarta = document.getElementById("carta-" + alvo);
  divCarta.style.backgroundImage = `url(${cartaAlvo.imagem})`;
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  if (cartaAlvo === cartaMaquina) {
    for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `
    <p type="text" name="atributo" value="">${atributo}: ${cartaMaquina.atributos[atributo]}</p>
    `;
    }
  } else {
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += `
      <input type="radio" name="atributo" value=${atributo}><label>${atributo}: ${cartaJogador.atributos[atributo]}</label><br>
      `;
    }
  }
  var nome = `<p class="carta-subtitle">${cartaAlvo.nome}</p>`

  divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
