const campoTexto = document.getElementById("campoTexto")
const botaoAdicionar = document.getElementById("botaoAdicionar")
const areaLista = document.getElementById("areaLista")

const valorTotal = document.getElementById("valorTotal")
const valorPendentes = document.getElementById("valorPendentes")
const valorConcluidas = document.getElementById("valorConcluidas")

let registros = []

function atualizarTela() {
  areaLista.innerHTML = ""

  registros.forEach((registro, posicao) => {
    const item = document.createElement("li")
    item.className = "item-tarefa"

    const classeTexto = registro.concluida ? "titulo-tarefa feita" : "titulo-tarefa"
    const classeStatus = registro.concluida ? "etiqueta concluida" : "etiqueta pendente"
    const textoStatus = registro.concluida ? "Concluída" : "Pendente"

    item.innerHTML = `
      <div class="esquerda-item">
        <input 
          type="checkbox"
          ${registro.concluida ? "checked" : ""}
          onchange="alterarStatus(${posicao})"
        >

        <span class="${classeTexto}">
          ${registro.descricao}
        </span>
      </div>

      <div class="direita-item">
        <span class="${classeStatus}">
          ${textoStatus}
        </span>

        <button class="botao-remover" onclick="removerRegistro(${posicao})">🗑</button>
      </div>
    `

    areaLista.appendChild(item)
  })

  atualizarNumeros()
}

function adicionarRegistro() {
  const descricao = campoTexto.value.trim()

  if (descricao === "") {
    alert("Digite uma tarefa.")
    return
  }

  registros.push({
    descricao,
    concluida: false
  })

  campoTexto.value = ""
  atualizarTela()
}

function alterarStatus(posicao) {
  registros[posicao].concluida = !registros[posicao].concluida
  atualizarTela()
}

function removerRegistro(posicao) {
  registros.splice(posicao, 1)
  atualizarTela()
}

function atualizarNumeros() {
  const quantidade = registros.length
  const finalizadas = registros.filter(registro => registro.concluida).length

  valorTotal.textContent = quantidade
  valorConcluidas.textContent = finalizadas
  valorPendentes.textContent = quantidade - finalizadas
}

botaoAdicionar.addEventListener("click", adicionarRegistro)

campoTexto.addEventListener("keydown", evento => {
  if (evento.key === "Enter") {
    adicionarRegistro()
  }
})