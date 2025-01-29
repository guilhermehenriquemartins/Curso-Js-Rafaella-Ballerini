class ListaTarefas {
  constructor() {
    this.container = document.querySelector('.container')
    this.mensagem = document.querySelector('#mensagem')
    this.inputTarefa = document.querySelector('#tarefa')
    this.adicionarTarefa = document.querySelector('#botao')
    this.eventos()
  }

  eventos() {
    this.container.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    const validarTarefa = this.checaTarefa()
    if(!validarTarefa) {
      e.preventDefault()
      alert('Selecione um item na sua lista de tarefas')
    }
  }
  
  checaTarefa() {
    if(!this.inputTarefa.value) return false
    this.criaTarefa(this.mensagem, this.inputTarefa.value)
    return true
  }

  criaTarefa(mensagem, tarefa) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.textContent = tarefa
    ul.appendChild(li)
    mensagem.appendChild(ul)
  }
}

const adicionar = new ListaTarefas()