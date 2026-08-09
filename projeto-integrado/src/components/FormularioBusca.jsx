function FormularioBusca({ termo, aoAlterar, aoBuscar, carregando }) {
  return (
    <form className="busca" onSubmit={aoBuscar} noValidate>
      <label htmlFor="termo">Título do livro</label>
      <div>
        <input id="termo" type="search" value={termo} onChange={(evento) => aoAlterar(evento.target.value)} maxLength="80" />
        <button type="submit" disabled={carregando}>{carregando ? 'Buscando...' : 'Buscar'}</button>
      </div>
    </form>
  )
}

export default FormularioBusca
