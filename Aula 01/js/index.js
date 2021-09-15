// Código editado por Onei de Barros neto, com base no cedido pela Alura na Imersão Dev
var nome = "Onei de Barros Neto";
console.log("Bem vindo(a) " + nome);

function calculate() {
  var soma = 0;
  var notas = document.querySelectorAll('input[oninput="calculate()"]');
    for(var x=0; x<notas.length; x++){
       var nota = parseFloat(notas[x].value);
       soma += parseFloat(nota);
    }
  
 var notaFinal = soma/4;
  document.querySelector('#mean').value = notaFinal.toFixed(1);
}

function convert() {
  var fahrenheit = 0;
  var celsius = document.querySelector('input[oninput="convert()"]').value;
  fahrenheit = (celsius*1.8)+32;
  document.querySelector("#fahrenheit").value = fahrenheit.toFixed(1);
}

function openCalculator() { // Função para abrir a calculadora de médias ao clicar no botão
  var content = document.getElementById("content-container"); 
  content.innerHTML = `
  	<div id="calculator" class="calculator-container">
          <form action="">
            <p><strong>Calculadora de média</strong><p>
            Nota 1:<input type="number" id="nota1" class="input-notas" oninput="calculate()" value="0"/><br>
            Nota 2:<input type="number" id="nota2" class="input-notas" oninput="calculate()" value="0"/><br>
            Nota 3:<input type="number" id="nota3" class="input-notas" oninput="calculate()" value="0"/><br>
            Nota 4:<input type="number" id="nota4" class="input-notas" oninput="calculate()" value="0"/><br>
            <p><strong>Média:<output type="text" id="mean"/><br></strong><p>
          </form>
        </div>
		`;
}

function openTempConversor() { // Função para abrir o Conversor ao clicar no botão
  var content = document.getElementById("content-container"); 
  content.innerHTML = `
  	<div id="temp-conversor" class="calculator-container">
          <form action="">
            <p><strong>Conversor de Temperatura</strong><p>
            Célsius(°C):<input type="number" id="celsius" class="input-temp" oninput="convert()" value="0"/><br>
            <p><strong>Fahrenheit(°F):<output type="text" id="fahrenheit"/><br></strong><p>
            </form>
        </div>
		`;
}

// Fim do código
