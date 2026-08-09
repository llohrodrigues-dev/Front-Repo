function ListaTarefas({ tarefas, aoAlternar, aoRemover }) {
  return (
    <section aria-labelledby="titulo-tarefas">
      <div className="resumo">
        <h2 id="titulo-tarefas">Tarefas</h2>
        <span>{tarefas.length} cadastradas</span>
      </div>

      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul className="lista">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
              <label>
                <input type="checkbox" checked={tarefa.concluida} onChange={() => aoAlternar(tarefa.id)} />
                <span>{tarefa.descricao}</span>
              </label>
              <button type="button" className="remover" onClick={() => aoRemover(tarefa.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaTarefas
