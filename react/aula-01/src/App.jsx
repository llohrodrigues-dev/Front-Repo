import './App.css'

function App() {
  return (
    <main className="pagina">
      <p className="etapa">Semana 5 - Aula 01</p>
      <h1>Meu primeiro componente React</h1>
      <p className="introducao">
        Esta página foi criada pelo componente App e escrita com JSX.
      </p>

      <section aria-labelledby="titulo-aprendizado">
        <h2 id="titulo-aprendizado">O que estou praticando</h2>
        <ul>
          <li>entender o que é um componente;</li>
          <li>escrever marcação com JSX;</li>
          <li>usar className para aplicar estilos;</li>
          <li>renderizar o componente principal na página.</li>
        </ul>
      </section>
    </main>
  )
}

export default App
