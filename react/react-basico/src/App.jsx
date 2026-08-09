import { useState } from 'react'
import Cabecalho from './components/Cabecalho.jsx'
import FormularioTarefa from './components/FormularioTarefa.jsx'
import ListaTarefas from './components/ListaTarefas.jsx'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, descricao: 'Revisar componentes', concluida: true },
    { id: 2, descricao: 'Praticar propriedades', concluida: false },
  ])
  const [novaTarefa, setNovaTarefa] = useState('')
  const [mensagem, setMensagem] = useState('')

  function adicionarTarefa(evento) {
    evento.preventDefault()
    const descricao = novaTarefa.trim()
    if (descricao === '') {
      setMensagem('Digite uma tarefa antes de adicionar.')
      return
    }
    setTarefas([...tarefas, { id: Date.now(), descricao, concluida: false }])
    setNovaTarefa('')
    setMensagem('Tarefa adicionada.')
  }

  function alternarTarefa(id) {
    setTarefas(tarefas.map((tarefa) => tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa))
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
    setMensagem('Tarefa removida.')
  }

  return (
    <main className="painel">
      <Cabecalho />
      <FormularioTarefa
        novaTarefa={novaTarefa}
        aoAlterar={setNovaTarefa}
        aoEnviar={adicionarTarefa}
      />
      <p className="mensagem" role="status" aria-live="polite">{mensagem}</p>
      <ListaTarefas tarefas={tarefas} aoAlternar={alternarTarefa} aoRemover={removerTarefa} />
    </main>
  )
}

export default App
