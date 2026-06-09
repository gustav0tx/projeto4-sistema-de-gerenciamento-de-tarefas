const {
  adicionarTarefa,
  concluirTarefa,
  excluirTarefa
} = require("../src/tarefas")

test("adiciona tarefa valida", () => {
  const resultado = adicionarTarefa([], "Estudar JavaScript")

  expect(resultado.length).toBe(1)
  expect(resultado[0].descricao).toBe("Estudar JavaScript")
  expect(resultado[0].concluida).toBe(false)
})

test("nao adiciona tarefa vazia", () => {
  const resultado = adicionarTarefa([], "   ")

  expect(resultado.length).toBe(0)
})

test("conclui uma tarefa", () => {
  const listaInicial = adicionarTarefa([], "Fazer atividade")
  const listaAtualizada = concluirTarefa(listaInicial, 0)

  expect(listaAtualizada[0].concluida).toBe(true)
})

test("remove uma tarefa", () => {
  const listaInicial = adicionarTarefa([], "Apagar tarefa")
  const listaAtualizada = excluirTarefa(listaInicial, 0)

  expect(listaAtualizada.length).toBe(0)
})