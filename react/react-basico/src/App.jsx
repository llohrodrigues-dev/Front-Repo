import { useState } from 'react'
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
      <header><p className="etapa">Semana 5 - React</p><h1>Meu painel de estudos</h1><p>Uma lista simples para praticar componentes, eventos e estado local.</p></header>
      <form className="formulario" onSubmit={adicionarTarefa} noValidate>
        <label htmlFor="nova-tarefa">Nova tarefa</label>
        <div className="grupo-campo">
          <input id="nova-tarefa" value={novaTarefa} onChange={(evento) => setNovaTarefa(evento.target.value)} maxLength="80" />
          <button type="submit">Adicionar</button>
        </div>
      </form>
      <p className="mensagem" role="status" aria-live="polite">{mensagem}</p>
      <section aria-labelledby="titulo-tarefas">
        <div className="resumo"><h2 id="titulo-tarefas">Tarefas</h2><span>{tarefas.length} cadastradas</span></div>
        {tarefas.length === 0 ? <p>Nenhuma tarefa cadastrada.</p> : (
          <ul className="lista">
            {tarefas.map((tarefa) => (
              <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
                <label><input type="checkbox" checked={tarefa.concluida} onChange={() => alternarTarefa(tarefa.id)} /><span>{tarefa.descricao}</span></label>
                <button type="button" className="remover" onClick={() => removerTarefa(tarefa.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
