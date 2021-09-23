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

function sortearCarta() {
  var cartasRestantes = JSON.parse(JSON.stringify(cartas));

  var numCartaMaq = parseInt(Math.random() * cartasRestantes.length);
  cartaMaquina = cartasRestantes[numCartaMaq];
  cartasRestantes.splice(numCartaMaq, 1);
  console.log(cartaMaquina);

  var numCartaJog = parseInt(Math.random() * cartasRestantes.length);
  cartaJogador = cartasRestantes[numCartaJog];
  cartasRestantes.splice(numCartaJog, 1);  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  var divCarta = document.getElementById("carta");
  var opcoesTexto = `<h2>Escolha o seu atributo</h2>`;

  cartaExibida = `
    <div class="carta-jogador" id="carta-jogador">
      <h3 name="nome">${cartaJogador.nome}</h3><br>
      <div class="carta-imagem">
        <img src="${cartaJogador.imagem}"/>
      </div>
      <div class="carta-status">
      <label>Ataque:</label><input type="text" name="ataque" value=${cartaJogador.atributos.ataque} disabled="true"/><br>
      <label>Defesa:</label><input type="text" name="defesa" value=${cartaJogador.atributos.defesa} disabled="true"/><br>
      <label>Magia:</label><input type="text" name="magia" value=${cartaJogador.atributos.magia} disabled="true"/>
      </div>
    </div>
  `;

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `
      <input type="radio" name="atributo" value=${atributo}> ${atributo}</input>
      `;
  }

  opcoesTexto += "<p>*Se não selecionar a escolha será automática.</p>"
  divCarta.innerHTML = cartaExibida;
  opcoes.innerHTML = opcoesTexto;
  elementoResultado.innerHTML = "";
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
  var atributoSelecionado = obtemAtributoSelecionado();
  var atributoJogador = cartaJogador.atributos[atributoSelecionado];
  var atributoMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (atributoJogador > atributoMaquina) {
    elementoResultado.innerHTML = `Você venceu! A carta do inimigo era ${cartaMaquina.nome} e sua força no atributo ${atributoSelecionado} era ${atributoMaquina}.`;
  } else if (atributoJogador < atributoMaquina) {
    elementoResultado.innerHTML = `Você perdeu! A carta do inimigo era ${cartaMaquina.nome} e sua força no atributo ${atributoSelecionado} era ${atributoMaquina}.`;
  } else {
    elementoResultado.innerHTML = `Empate! A carta do inimigo era ${cartaMaquina.nome}.`;
  }

  opcoes.innerHTML = "";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}
