const form = document.getElementById("formulario");
const fechar = document.getElementById("closed");
let linhas = ''; 
const numerosContatos = [];
const nomes = [];


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

fechar.addEventListener('click', function() {
    if (numerosContatos.length >= 1){
        window.location.reload();
    }
});
function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumeroContato = document.getElementById('numero-tell');

    if ((numerosContatos.includes(inputNumeroContato.value))){
        alert(`O numero: ${inputNumeroContato.value} já foi adicionado.`) 
    }else{
        numerosContatos.push(inputNumeroContato.value);
        nomes.push(inputNome.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    inputNome.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas; 
}