function FormularioTarefa({ novaTarefa, aoAlterar, aoEnviar }) {
  return (
    <form className="formulario" onSubmit={aoEnviar} noValidate>
      <label htmlFor="nova-tarefa">Nova tarefa</label>
      <div className="grupo-campo">
        <input
          id="nova-tarefa"
          value={novaTarefa}
          onChange={(evento) => aoAlterar(evento.target.value)}
          maxLength="80"
        />
        <button type="submit">Adicionar</button>
      </div>
    </form>
  )
}

export default FormularioTarefa
