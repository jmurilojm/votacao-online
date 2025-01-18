const nomes = document.querySelectorAll('li')
const escolha = document.querySelector('#escolha')
const candidatos = document.querySelector('#candidatos')
const btnEnviar = document.querySelector('#btnEnviar')
const apuracao = document.querySelector('#apuracao')
const main = document.querySelector('main')


/*if(localStorage.getItem('statusDoVoto')){
  alert('Você já Votou!')
  main.style.display = 'none'
  apuracao.style.marginTop = '100px'
  apuracao.style.display = 'block'
}*/

for (let i = 0; i < nomes.length; i++) {
  // encaminhar o item
  nomes[i].addEventListener('click', function adicionar() {
    escolha.appendChild(nomes[i])
    nomes[i].removeEventListener('click', adicionar)

    // para voltar o item
    nomes[i].addEventListener('click', function voltar() {
      candidatos.appendChild(nomes[i])
      nomes[i].removeEventListener('click', voltar)
      nomes[i].addEventListener('click', adicionar)
    })
  })
}

function enviar() {
  const lista = []

  // verificar se sobram elementos
  if (candidatos.children.length != 0) {
    //console.log(candidatos.children.length)
    alert(`Relacione todos os Candidatos!`)
    return
  }


  for (let i = 0; i < escolha.children.length; i++) {
    lista.push(`${i+1}º - ${escolha.children[i].textContent}`)
  }

  const vt = lista.join('\n')
  //console.log(vt)
  enviarEmail(vt)
}

function enviarEmail(votos) {
  // Informações do e-mail
  const destinatario = "j.murilo.87@gmail.com";
  const assunto = "Eu voto assim!";
  const corpo = `${votos}`;

  // Criar o link mailto
  const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

  // Abrir o link no navegador
  window.location.href = mailtoLink;

  //localStorage.setItem('statusDoVoto','enviado')
}