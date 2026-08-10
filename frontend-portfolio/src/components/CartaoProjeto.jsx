function CartaoProjeto({ projeto }) {
  return (
    <article className="cartao-projeto">
      <p className="numero">{projeto.numero}</p>
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
      <ul aria-label={`Tecnologias do projeto ${projeto.nome}`}>
        {projeto.tecnologias.map((tecnologia) => <li key={tecnologia}>{tecnologia}</li>)}
      </ul>
      <a href={projeto.link}>Ver código no repositório</a>
    </article>
  )
}

export default CartaoProjeto
