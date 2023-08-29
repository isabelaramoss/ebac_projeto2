const form = document.getElementById('form-agenda');
const nomeContato = document.getElementById('nome-contato');
const telContato = document.getElementById('tel-contato');
const totalContatos = document.getElementById('total-contatos');

const nomes = [];
const tel =[];


let linhas = '';

form.addEventListener('submit', function(e){
  e.preventDefault();
  adicionarLinha();
  atualizarTotalContatos();
  formatoNumeroContato();
});


function formatoNumeroContato(formatoNumero){
  if(formatoNumero.lenght < 9) {
    alert(`Verifique o número digitado. Não esqueça do '9' no começo!`);
  } else {
    return telContato;
  }
};

function adicionarLinha() {
  const inputNomeContato = document.getElementById('nome-contato');
  const inputTelContato = document.getElementById('tel-contato');

    if(nomes.includes(nomeContato.value) || tel.includes(telContato.value)) {
      alert(`O nome ${nomeContato.value} ou telefone ${telContato.value} já foram inseridos na lista`)
    } else {
      nomes.push(inputNomeContato.value);
      tel.push(inputTelContato.value);
    
      let linha = '<tr>';
      linha += `<td>${inputNomeContato.value}</td>`;
      linha += `<td>${inputTelContato.value}</td>`;
      linha += `</tr>`;
    
      linhas += linha;
  };

  inputNomeContato.value = '';
  inputTelContato.value = '';
};

function atualizarTotalContatos() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
  let somaTotalContatos = nomes.length;
  totalContatos.innerHTML = somaTotalContatos;
}; 