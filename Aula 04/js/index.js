var nomesFilmes = [
  "Interestelar",
  "O Senhor dos Aneis: A Sociedade do Anel",
  "O Senhor dos Aneis: As Duas Torres",
  "O Senhor dos Aneis: O Retorno do Rei",
  "O Hobbit: Uma Jornada Inesperada",
  "O Hobbit: A Desolação de Smaug",
  "O Hobbit: A Batalha dos Cinco Exércitos",
];

var listaFilmes = [
  "https://images-na.ssl-images-amazon.com/images/I/91kFYg4fX3L.jpg",
  "https://img.elo7.com.br/product/zoom/2692717/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo02-90x60-cm-presente-geek.jpg",
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/15350-cartaz.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/92/91/47/20224867.jpg",
  "https://static.wikia.nocookie.net/terramedia/images/f/fe/Hobbit_jornadainesperada_46.jpg/revision/latest?cb=20141210190655", // não carrega no codepen
  "https://br.web.img3.acsta.net/pictures/210/571/21057125_20131112201221324.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmbccv6K55oFiqzdo2sBYYgyTvAzgwZRPZVbTOw7WqA9_pNfORbBqMTZObeOQgib-Ctc&usqp=CAU"
];

var filmesElement = document.getElementById("filmes-container");

for (var i = 0; i < listaFilmes.length; i++) {
    filmesElement.innerHTML += "<img src=" + listaFilmes[i] + ' class="filmes">';
};
