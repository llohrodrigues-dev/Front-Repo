import CardLivro from './CardLivro.jsx'

function ListaLivros({ livros }) {
  if (livros.length === 0) return null

  return (
    <section aria-labelledby="resultados">
      <h2 id="resultados">Livros encontrados</h2>
      <ul className="grade-livros">
        {livros.map((livro) => <CardLivro key={livro.key} livro={livro} />)}
      </ul>
    </section>
  )
}

export default ListaLivros
