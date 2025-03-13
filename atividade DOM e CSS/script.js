const caixa = document.getElementById('caixa');

function mudarCor(){
    caixa.style.backgroundColor = 'lightgreen';
}

function adicionarBorda(){
caixa.classList.add('nova-borda');
}

function mudarTamanho(){
 caixa.classList.add('tamanho-grande')
}
function mudarId(){
    caixa.id= 'nova-caixa';
    console.log(caixa);
}
