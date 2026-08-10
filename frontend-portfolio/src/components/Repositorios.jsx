import { useEffect, useState } from 'react'

function Repositorios() {
  const [repositorios, setRepositorios] = useState([])
  const [estado, setEstado] = useState('carregando')

  useEffect(() => {
    async function carregarRepositorios() {
      try {
        const resposta = await fetch('https://api.github.com/users/llohrodrigues-dev/repos?sort=updated&per_page=6')
        if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`)
        const dados = await resposta.json()
        setRepositorios(dados)
        setEstado(dados.length === 0 ? 'vazio' : 'sucesso')
      } catch (erro) {
        console.error(erro)
        setEstado('erro')
      }
    }

    carregarRepositorios()
  }, [])

  if (estado === 'carregando') return <p role="status">Carregando repositórios...</p>
  if (estado === 'erro') return <p role="alert">Não foi possível carregar os repositórios agora.</p>
  if (estado === 'vazio') return <p role="status">Nenhum repositório público encontrado.</p>

  return (
    <ul className="lista-repositorios">
      {repositorios.map((repositorio) => (
        <li key={repositorio.id}>
          <h3>{repositorio.name}</h3>
          <p>{repositorio.description || 'Projeto de estudos Front-End.'}</p>
          <span>{repositorio.language || 'Estudos'}</span>
          <a href={repositorio.html_url} target="_blank" rel="noreferrer">Abrir no GitHub</a>
        </li>
      ))}
    </ul>
  )
}

export default Repositorios
