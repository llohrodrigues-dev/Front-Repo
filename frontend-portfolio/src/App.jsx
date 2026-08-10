import Cabecalho from './components/Cabecalho.jsx'
import CartaoProjeto from './components/CartaoProjeto.jsx'
import Repositorios from './components/Repositorios.jsx'
import './App.css'

const projetos = [
  { numero: '01', nome: 'Conecta Soluções', descricao: 'Site institucional criado primeiro com HTML e depois adaptado com CSS responsivo.', tecnologias: ['HTML', 'CSS'], link: 'https://github.com/llohrodrigues-dev/Front-Repo/tree/Main/css/projeto-semana-1' },
  { numero: '02', nome: 'Minha lista de tarefas', descricao: 'Aplicação para adicionar e remover tarefas usando eventos e manipulação do DOM.', tecnologias: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/llohrodrigues-dev/Front-Repo/tree/Main/javascript/projeto-js-dom' },
  { numero: '03', nome: 'Busca de livros', descricao: 'Pesquisa de livros com estados de carregamento, resultado vazio e erro.', tecnologias: ['JavaScript', 'Fetch API'], link: 'https://github.com/llohrodrigues-dev/Front-Repo/tree/Main/api/projeto-api' },
  { numero: '04', nome: 'Estante aberta', descricao: 'Projeto integrado em React que consulta o catálogo público da Open Library.', tecnologias: ['React', 'API', 'CSS'], link: 'https://github.com/llohrodrigues-dev/Front-Repo/tree/Main/projeto-integrado' },
]

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className="inicio" id="inicio" aria-labelledby="titulo-principal">
          <p className="destaque">Front-End em formação</p>
          <h1 id="titulo-principal">Construindo interfaces e aprendendo em cada projeto.</h1>
          <p className="introducao">Este portfólio reúne minha evolução em HTML, CSS, JavaScript, consumo de APIs e React.</p>
          <a className="botao" href="#projetos">Conhecer projetos</a>
        </section>

        <section className="secao sobre" id="sobre" aria-labelledby="titulo-sobre">
          <div><p className="rotulo">Sobre</p><h2 id="titulo-sobre">Uma trilha construída passo a passo</h2></div>
          <div><p>Comecei estudando a estrutura das páginas e avancei para estilos responsivos, interações com JavaScript, dados externos e componentes React.</p><p>Procuro escrever códigos simples, acessíveis e fáceis de explicar, mantendo cada exercício como registro da minha evolução.</p></div>
        </section>

        <section className="secao" id="projetos" aria-labelledby="titulo-projetos">
          <p className="rotulo">Projetos selecionados</p>
          <h2 id="titulo-projetos">Prática que acompanha o aprendizado</h2>
          <div className="grade-projetos">{projetos.map((projeto) => <CartaoProjeto key={projeto.numero} projeto={projeto} />)}</div>
        </section>

        <section className="secao" id="repositorios" aria-labelledby="titulo-repositorios">
          <p className="rotulo">Consumo de API</p>
          <h2 id="titulo-repositorios">Repositórios recentes do GitHub</h2>
          <p className="apoio">Esta lista é carregada pela API pública do GitHub.</p>
          <Repositorios />
        </section>
      </main>
      <footer><p>Desenvolvido durante a Trilha Front-End Júnior.</p><a href="https://github.com/llohrodrigues-dev" target="_blank" rel="noreferrer">GitHub</a></footer>
    </>
  )
}

export default App
