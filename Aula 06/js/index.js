//          chave, valor.
var rafa = {
  nome:"Rafa",
  vitorias:2,
  empates:1,
  derrotas:1,
  pontos:0
};
var paulo = {
  nome:"Paulo",
  vitorias:1,
  empates:1,
  derrotas: 2,
  pontos: 0
};

var gui = {
  nome:"Gui",
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
  for (var i = 0; i < jogadores.length; i++) {

    elementoTabela += `
        <tr>
          <td>${jogadores[i].nome}</td>
          <td>${jogadores[i].vitorias}</td>
          <td>${jogadores[i].empates}</td>
          <td>${jogadores[i].derrotas}</td>
          <td>${jogadores[i].pontos}</td>
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>
    `
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elementoTabela;
  }
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);

}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

exibeJogadoresNaTela(jogadores);
