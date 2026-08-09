import { useState } from 'react'
import FormularioBusca from './components/FormularioBusca.jsx'
import ListaLivros from './components/ListaLivros.jsx'
import './App.css'

function App() {
  const [termo, setTermo] = useState('')
  const [livros, setLivros] = useState([])
  const [mensagem, setMensagem] = useState('Digite um título para começar.')
  const [carregando, setCarregando] = useState(false)

  async function buscarLivros(evento) {
    evento.preventDefault()
    const busca = termo.trim()

    if (busca.length < 2) {
      setMensagem('Digite pelo menos dois caracteres.')
      setLivros([])
      return
    }

    setCarregando(true)
    setMensagem('Buscando livros...')
    setLivros([])

    try {
      const campos = 'key,title,author_name,first_publish_year'
      const endereco = `https://openlibrary.org/search.json?title=${encodeURIComponent(busca)}&fields=${campos}&limit=9&lang=pt`
      const resposta = await fetch(endereco)
      if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`)

      const dados = await resposta.json()
      setLivros(dados.docs)
      setMensagem(dados.docs.length === 0 ? `Nenhum livro encontrado para “${busca}”.` : `${dados.docs.length} livros encontrados.`)
    } catch (erro) {
      console.error(erro)
      setMensagem('Não foi possível realizar a busca. Tente novamente mais tarde.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="aplicacao">
      <header className="apresentacao"><p>Semana 7 - Projeto integrado</p><h1>Estante aberta</h1><span>Pesquise livros no catálogo público da Open Library.</span></header>
      <FormularioBusca termo={termo} aoAlterar={setTermo} aoBuscar={buscarLivros} carregando={carregando} />
      <p className="estado" role="status" aria-live="polite">{mensagem}</p>
      <ListaLivros livros={livros} />
    </main>
  )
}

export default App
