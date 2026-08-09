function CardLivro({ livro }) {
  const autores = livro.author_name?.join(', ') || 'Autoria não informada'
  const ano = livro.first_publish_year || 'Ano não informado'

  return (
    <li className="cartao">
      <h3>{livro.title}</h3>
      <p>{autores}</p>
      <p>Primeira publicação: {ano}</p>
      <a href={`https://openlibrary.org${livro.key}`} target="_blank" rel="noreferrer">
        Ver na Open Library
      </a>
    </li>
  )
}

export default CardLivro
