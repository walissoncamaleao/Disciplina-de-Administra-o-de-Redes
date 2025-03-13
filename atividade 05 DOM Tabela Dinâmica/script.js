const tabelaDados = document.getElementById('tabelaDados');
const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const botaoAdicionar = document.getElementById('adicionarLinha');

function adicionarLinha(){
    const nome = inputNome.value.trim();
    const idade = inputIdade.value.trim();

    if (nome && idade){
        const novaLinha = document.createElement('tr');

        const colunaNome = document.createElement('td');
        colunaNome.textContent = nome;
        
        const colunaIdade = document.createElement('td');
        colunaIdade.textContent = idade;

        const colunaAcoes = document.createElement('td');
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('remover');
        botaoRemover.addEventListener('click', () =>{
            tabelaDados.removeChild(novaLinha);
        });
        colunaAcoes.appendChild(botaoRemover);

        novaLinha.appendChild(colunaNome);
        novaLinha.appendChild(colunaIdade);
        novaLinha.appendChild(colunaAcoes);
        tabelaDados.appendChild(novaLinha);

        inputNome.value = '';
        inputIdade.value = '';

    }
}
botaoAdicionar.addEventListener('click', adicionarLinha);