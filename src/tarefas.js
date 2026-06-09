function adicionarTarefa(conjunto, descricao) {
  const textoTratado = descricao ? descricao.trim() : ""

  if (textoTratado === "") {
    return conjunto
  }

  return conjunto.concat({
    descricao: textoTratado,
    concluida: false
  })
}

function concluirTarefa(conjunto, posicao) {
  const novaColecao = [...conjunto]

  if (novaColecao[posicao]) {
    novaColecao[posicao] = {
      ...novaColecao[posicao],
      concluida: true
    }
  }

  return novaColecao
}

function excluirTarefa(conjunto, posicao) {
  return conjunto.filter((_, indiceAtual) => indiceAtual !== posicao)
}

module.exports = {
  adicionarTarefa,
  concluirTarefa,
  excluirTarefa
}