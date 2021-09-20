var filmeDiv = 0;
var listaFilmes = [];
var listaNomes = [];

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var nomeFilmeFavorito = document.getElementById("nomeFilme").value;

    if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
        listaFilmes.push(filmeFavorito);
        listaNomes.push(nomeFilmeFavorito);

        listarFilmesNaTela(filmeFavorito, nomeFilmeFavorito);

        erro = document.getElementById("erroInserirFilme");
        erro.innerHTML = "";
    } else {
        erro = document.getElementById("erroInserirFilme");
        erro.innerHTML = "Não é um endereço válido";
    }

    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
}

function listarFilmesNaTela(filme, nomeFilme) {
    var elementoFilmeFavorito = `
      <div id=filme${filmeDiv} class="filme-container" name="nomeFilme">
        <h2 class="nomeFilme">${nomeFilme} <button onclick="removerFilme(${filmeDiv})"><i class="fas fa-trash"></i></button></h2>
        <img src=${filme} class="filme">
      </div>
    `;
    var elementolistaFilmes = document.getElementById("listaFilmes");
        elementolistaFilmes.innerHTML += elementoFilmeFavorito;
        filmeDiv++;
}

function removerFilme(filmeId) {
    var filmeElement = document.getElementById("filme" + filmeId);
    var nomeFilmeRemovido = filmeElement.name;
    var indice = listaNomes.indexOf(nomeFilmeRemovido);

    filmeElement.parentNode.removeChild(filmeElement); 

    listaFilmes.splice(indice, 1);
    listaNomes.splice(indice, 1);
}

