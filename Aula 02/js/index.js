function openCurrencyConversor() {
  var content = document.getElementById("content-container");
  content.innerHTML = `<label for="moeda">Insira o valor em Reais</label><br>
      R$<input 
          placeholder="100,00 ou 100"
          arialabel="100,00 ou 100"
          type="number" 
          id="valor" 
          size="2" /><br>
      <div id="valor-convertido-container">
      </div>
      <button type="submit" onclick="Converter()">Converter</button>`;
}

function openTempConversor() {
  var content = document.getElementById("content-container");
  content.innerHTML = `
      <label for="temperatura">Insira a temperatura e escolha a escala:</label><br>
      <form>
      Temperatura:<input 
          placeholder="25"
          aria-label="25"
          type="number" 
          id="valor" 
          size="2" /><br>
      <input type="RADIO" name="escala-temp" value="temp-celsius">Célsius (°C)</input><br>
      <input type="RADIO" name="escala-temp" value="temp-fahrenheit">Fahrenheit (°F)</input><br>
      <input type="RADIO" name="escala-temp" value="temp-kelvin">Kelvin (K)</input><br>
      </form>
      <div id="valor-convertido-container">
      </div>
      <button type="submit" onclick="ConverterTemp()">Converter</button>`;
}

function openKilometerConversor() {
  var content = document.getElementById("content-container");
  content.innerHTML = `
    <form>
    <label for="kilometer">Insira as informações:</label><br>
    Distância:<input 
        placeholder="Distância em km"
        aria-label="Distância em km" 
        type="number" 
        id="valor" 
        size="2">km</input><br>
    Primeiro Local:<input
        placeholder="ex: Sol"
        aria-label="ex: Sol"
        type="text"
        id="local1"/><br>
    Segundo Local:<input
        placeholder="ex: Andrômeda"
        aria-label="ex: Andrômeda"
        type="text"
        id="local2"/><br>
    </form>
    <div id="valor-convertido-container">
    </div>
    <button type="submit" onclick="ConverterKm()">Converter</button>
  `;
}

function Converter() {
  var elementValue = parseFloat(document.getElementById("valor").value);

  var currencyContent = document.getElementById("valor-convertido-container");
  currencyContent.innerHTML = `
        <label for="moeda"><i class="fas fa-dollar-sign"></i> Dolar Americano <i class="fas fa-dollar-sign"></i></label><br>
        <h2 id="valor-dolar"></h2>
        <label for="moeda"><i class="fas fa-euro-sign"></i> Euro <i class="fas fa-euro-sign"></i></label><br>
        <h2 id="valor-euro"></h2>
        <label for="moeda"><i class="fas fa-pound-sign"></i> Libra Esterlina <i class="fas fa-pound-sign"></i></label><br>
        <h2 id="valor-libra"></h2>
        <label for="moeda"><i class="fab fa-bitcoin"></i> Bitcoin <i class="fab fa-bitcoin"></i></label><br>
        <h2 id="valor-bitcoin"></h2>`;

  var dolarValue = elementValue / 5.25;
  var dolarPageElement = document.getElementById("valor-dolar");
  dolarPageElement.innerHTML = dolarValue.toFixed(2) + " USD";

  var euroValue = elementValue / 6.2;
  var euroPageElement = document.getElementById("valor-euro");
  euroPageElement.innerHTML = euroValue.toFixed(2) + " EUR";

  var libraValue = elementValue / 7.27;
  var libraPageElement = document.getElementById("valor-libra");
  libraPageElement.innerHTML = libraValue.toFixed(2) + " GBP";

  var bitcoinValue = elementValue / 250935.13;
  var bitcoinPageElement = document.getElementById("valor-bitcoin");
  bitcoinPageElement.innerHTML = bitcoinValue + " BTC";
}

function ConverterTemp() {
  var options = document.getElementsByName("escala-temp");
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      var selected = options[i].value;
    }
  }
  if (selected === "temp-celsius") {
    var celsius = document.getElementById("valor").value;

    var tempContent = document.getElementById("valor-convertido-container");
    tempContent.innerHTML = `
        <label for="temperatura">Fahrenheit(°F)</label><br>
        <h2 id="fahrenheit"></h2>
        <label for="temperatura">Kelvin(K)</label><br>
        <h2 id="kelvin"></h2>
      `;
    
    var fahrenheit = (celsius * 1.8) + 32;
    var fahrenheitPageElement = document.getElementById("fahrenheit");
    fahrenheitPageElement.innerHTML = fahrenheit.toFixed(1) + " °F";
    
    var kelvin = celsius*1 + 273;
    var kelvinPageElement = document.getElementById("kelvin");
    kelvinPageElement.innerHTML = kelvin.toFixed(1) + " K";

  } else if (selected === "temp-fahrenheit") {
    var fahrenheit = document.getElementById("valor").value;

    var tempContent = document.getElementById("valor-convertido-container");
    tempContent.innerHTML = `
        <label for="temperatura">Célsius(°C)</label><br>
        <h2 id="celsius"></h2>
        <label for="temperatura">Kelvin(K)</label><br>
        <h2 id="kelvin"></h2>
    `

    var celsius = ((fahrenheit*1 - 32) / 1.8);
    var celsiusPageElement = document.getElementById("celsius");
    celsiusPageElement.innerHTML = celsius.toFixed(1) + " °C";

    var kelvin = (celsius*1) + 273;
    var kelvinPageElement = document.getElementById("kelvin");
    kelvinPageElement.innerHTML = kelvin.toFixed(1) + " K";
  } else if (selected === "temp-kelvin") {
    var kelvin = document.getElementById("valor").value;

    var tempContent = document.getElementById("valor-convertido-container");
    tempContent.innerHTML = `
        <label for="temperatura">Célsius(°C)</label><br>
        <h2 id="celsius"></h2>
        <label for="temperatura">Fahrenheit(°F)</label><br>
        <h2 id="fahrenheit"></h2>
      `;

    var celsius = kelvin*1 - 273;
    var celsiusPageElement = document.getElementById("celsius");
    celsiusPageElement.innerHTML = celsius.toFixed(1) + " °C";
    
    var fahrenheit = (celsius * 1.8) + 32;
    var fahrenheitPageElement = document.getElementById("fahrenheit");
    fahrenheitPageElement.innerHTML = fahrenheit.toFixed(1) + " °F";
   
  } else {
    var tempContent = document.getElementById("valor-convertido-container");
    tempContent.innerHTML = `
        <h2 id="error-text"></h2>
    `;
    var errorTextElement = document.getElementById("error-text");
    errorTextElement.innerHTML = "Favor selecionar uma escala de temperatura para fazer a conversão.";

  }
}

function ConverterKm() {
  var km = document.getElementById("valor").value;
   console.log(km);
  var kmContent = document.getElementById("valor-convertido-container");
  kmContent.innerHTML = `
      <h2 id="anos-luz"></h2>
  `;

  var anosLuz = (km*1) / 9460536068.016;
  var localA = document.getElementById("local1").value;
  var localB = document.getElementById("local2").value;
  var anoLuzPageContent = document.getElementById("anos-luz");
  anoLuzPageContent.innerHTML = "O tempo de viagem de " + localA + " para " + localB + " é de " + parseFloat(anosLuz.toPrecision(5)) + " anos-luz."; 
}
