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
        total = somaEntradas - somaSaidas;
        document.querySelector("#Saida").textContent = somaSaidas.toFixed(2);
        document.querySelector('#entrada').textContent = somaEntradas.toFixed(2);
        document.querySelector("#total").textContent = total.toFixed(2);
    }
    butao.addEventListener("click", () => {
        verificar()
        adicionar()
        calcularEntradas()
        inputGanho.value = '';
        inputdesc.value = '';
        analise()
    });
    bntAdicionar.addEventListener("click",()=> {
        guardar()
        calcularSaidas()
        analise()
        saidaDesc.value = '';
        saidaPreco.value = '';
    })