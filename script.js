let inpuGanho = document.querySelector('#valorSalario');
let saidaDesc = document.querySelector('#desc');
let saidaPreco = document.querySelector('#preco');
let p1 = document.getElementById('p1');
let butao = document.getElementById('bnt');
let entradas = [];
let total;
butao.addEventListener("click",()=>{
    entradas.push(inpuGanho.value)
    visualizar()
})

function visualizar(){
    total = 0
    for (let i in entradas){
        total += parseFloat(entradas[i])
    }
    p1.innerHTML = `total dos ganhos: ${total.toFixed(2)} R$`;
    inpuGanho.value = '';
}
