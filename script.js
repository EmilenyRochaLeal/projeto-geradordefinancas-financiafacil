const tbody = document.querySelector("tbody");
let inputdesc = document.querySelector("#descGanho");
let inputGanho = document.querySelector('#valorSalario');
let saidaDesc = document.querySelector('#desc');
let saidaPreco = document.querySelector('#preco');
let butao = document.getElementById('bnt');
let bntAdicionar = document.querySelector('#butaoAdicionar')
let dados = new Array();
let despesas = new Array();
let somaEntradas;
let valorGanho;
let gasto;
let somaSaidas;
let total;

function verificar(){
    if (localStorage.hasOwnProperty("dados")){
        dados = JSON.parse(localStorage.getItem("dados"));
    }
}
function adicionar(){
    dados.push({descricao: inputdesc.value, preco: inputGanho.value})
    localStorage.setItem("dados", JSON.stringify(dados))
}
function calcularEntradas(){
    somaEntradas = 0
    for (let i  in dados){
        if (dados.hasOwnProperty(i)){
            valorGanho = parseFloat(dados[i].preco);
            if (!isNaN(valorGanho)){ 
                dados[i].preco = valorGanho;
                somaEntradas += valorGanho;
        }else{
            dados[i].preco = 0
        }}
    }
}

function tabelaGanhos() {
    var table = document.querySelector('#tabelaEntrada');
    table.innerHTML = '';

    for (var i = 0; i < dados.length; i++) {
      var descricao = dados[i].descricao;
      var preco = dados[i].preco;

      var row = document.createElement('tr');

      var descricaoCell = document.createElement('td');
      descricaoCell.textContent = descricao;
      row.appendChild(descricaoCell);

      var precoCell = document.createElement('td');
      precoCell.textContent = preco;
      row.appendChild(precoCell);

      var acoesCell = document.createElement('td');

      var excluirIcon = document.createElement('i');
      excluirIcon.className = 'fas fa-trash-alt';
      excluirIcon.style.cursor = 'pointer';
      excluirIcon.addEventListener('click', excluirGanho.bind(null, i)); // Chama a função excluirGanho passando o índice como argumento
      acoesCell.appendChild(excluirIcon);

      row.appendChild(acoesCell);

      table.appendChild(row);
    }
  }

  function excluirGanho(index) {
    dados.splice(index, 1);
    localStorage.setItem('dados', JSON.stringify(dados))
    tabelaGanhos(); // Atualiza a tabela após excluir o item
  }


function guardar(){
    if (localStorage.hasOwnProperty("despesas")){
        despesas = JSON.parse(localStorage.getItem("despesas"));
    }
    despesas.push({descricao: saidaDesc.value, preco: saidaPreco.value})
    localStorage.setItem("despesas", JSON.stringify(despesas))
}
function calcularSaidas(){
    somaSaidas = 0
    for (let i  in despesas){
        if (despesas.hasOwnProperty(i)){
            gasto = parseFloat(despesas[i].preco);
            if (!isNaN(gasto)){ 
                despesas[i].preco = gasto;
                somaSaidas += gasto;
            }else{
                despesas[i].preco = 0
            }}
        }
    }
    function analise(){
        calcularEntradas()
        calcularSaidas()
        total = somaEntradas - somaSaidas;
        document.querySelector('#entrada').textContent = somaEntradas.toFixed(2);
        document.querySelector("#Saida").textContent = somaSaidas.toFixed(2);
        document.querySelector("#total").textContent = total.toFixed(2);
    }
    function tabelaDespesas() {
        var table = document.querySelector('#tabelaDes');
        table.innerHTML = '';
  
        for (var i = 0; i < despesas.length; i++) {
          var descricao = despesas[i].descricao;
          var preco = despesas[i].preco;
  
          var row = document.createElement('tr');
  
          var descricaoCell = document.createElement('td');
          descricaoCell.textContent = descricao;
          row.appendChild(descricaoCell);
  
          var precoCell = document.createElement('td');
          precoCell.textContent = preco;
          row.appendChild(precoCell);
  
          var acoesCell = document.createElement('td');
  
          var excluirIcon = document.createElement('i');
          excluirIcon.className = 'fas fa-trash-alt';
          excluirIcon.style.cursor = 'pointer';
          excluirIcon.addEventListener('click', excluirItem.bind(null, i)); // Chama a função excluirItem passando o índice como argumento
          acoesCell.appendChild(excluirIcon);
  
          row.appendChild(acoesCell);
  
          table.appendChild(row);
        }
      }
  
      function excluirItem(index) {
        despesas.splice(index, 1);
        localStorage.setItem('despesas', JSON.stringify(despesas))
        tabelaDespesas(); // Atualiza a tabela após excluir o item
      }
    
    butao.addEventListener("click", () => {
        verificar()
        adicionar()
        tabelaGanhos()
        inputGanho.value = '';
        inputdesc.value = '';
        analise()
    });
    bntAdicionar.addEventListener("click",()=> {
        guardar()
        tabelaDespesas()
        saidaDesc.value = '';
        saidaPreco.value = '';
        analise()
    })