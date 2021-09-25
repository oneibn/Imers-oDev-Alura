//          chave, valor.
var rafa = {
  nome:"Rafa",
  usuario: "rafaballerini",
  vitorias:3,
  empates:1,
  derrotas:1,
  pontos:0
};
var paulo = {
  nome:"Paulo",
  usuario: "peas",
  vitorias:1,
  empates:1,
  derrotas: 2,
  pontos: 0
};

var gui = {
  nome:"Gui",
  usuario: "guilhermeonrails"
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3 + jogador.empates);
  return pontos;
}

var jogadores = [rafa, paulo, gui];

for (var i = 0; i < jogadores.length; i++) {
  jogadores[i].pontos = calculaPontos(jogadores[i]);
}

function exibeJogadoresNaTela(jogadores) {
  var elementoTabela = ""
  var somaVitorias = 0
  var somaDerrotas = 0
  for (var i = 0; i < jogadores.length; i++) {
    elementoTabela += `
        <tr>
          <td><img src=https://github.com/${jogadores[i].usuario}.png></td>
          <td>${jogadores[i].nome}</td>
          <td>${jogadores[i].vitorias}</td>
          <td>${jogadores[i].empates}</td>
          <td>${jogadores[i].derrotas}</td>
          <td>${jogadores[i].pontos}</td>
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate()">Empate</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>
    `
    somaVitorias += jogadores[i].vitorias;
    somaDerrotas += jogadores[i].derrotas;
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elementoTabela;

  elementoErro = document.getElementById("erro");
  if (somaVitorias > somaDerrotas) {
    var diferenca = somaVitorias - somaDerrotas;
    elementoErro.innerHTML = `Algo está errado! Há ${diferenca} vitórias a mais do que derrotas!`
  } if (somaVitorias < somaDerrotas) {
    var diferenca = somaDerrotas - somaVitorias;
    elementoErro.innerHTML = `Algo está errado! Há ${diferenca} derrotas a mais do que vitórias!`
  } else {
    elementoErro.innerHTML = ""
  }
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);

  exibeJogadoresNaTela(jogadores);

}

function adicionarEmpate() {
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  }

  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;

  exibeJogadoresNaTela(jogadores);
}

var jogadoresExtras = 0
function adicionarJogador() {
  var divExtra = document.getElementById("extra");
  divExtra.innerHTML += `
    <form id="formulario">
      <label>    Nome:</label><input
        type="text"
        placeholder="Digite o nome"
        id="name"
        /><br>
      <label>Usuário:</label><input
        type="text"
        placeholder="Digite o usuário do Github"
        id="user"
        /><br>
        <button onClick="adicionarObjetoJogador()">Adicionar</button>
        <button onClick="removerForm()"><i class="fas fa-trash-alt"></i></button>
    </form>
    `
}

function zerarPontos() {
  for (var i = 0; i < jogadores.length; i++) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.derrotas = 0;
  jogador.empates = 0;
  jogador.pontos = calculaPontos(jogador);
  }

  exibeJogadoresNaTela(jogadores);
}

function adicionarObjetoJogador() {
  var name = document.getElementById("name").value;
  var user = document.getElementById("user").value;
  var novoJogador = {
    nome: name,
    usuario: user,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  jogadores.push(novoJogador);

  exibeJogadoresNaTela(jogadores);
  removerForm();
}

function removerForm() {
  var divExtra = document.getElementById("extra");
  divExtra.innerHTML = "";
}

exibeJogadoresNaTela(jogadores);
