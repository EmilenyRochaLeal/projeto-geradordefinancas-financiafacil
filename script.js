let inputdesc = document.querySelector("#descGanho");
let inputGanho = document.querySelector('#valorSalario');
let saidaDesc = document.querySelector('#desc');
let saidaPreco = document.querySelector('#preco');
let p1 = document.getElementById('p1');
let butao = document.getElementById('bnt');
let dados = new Array();
let total = 0;

function verificar(){
    if (localStorage.hasOwnProperty("dados")){
        dados = JSON.parse(localStorage.getItem("dados"));
    }
}
function adicionar(){
    dados.push({descricao: inputdesc.value, preco: inputGanho.value})
    localStorage.setItem("dados", JSON.stringify(dados))

}

butao.addEventListener("click", () => {
    verificar()
    adicionar()
});
