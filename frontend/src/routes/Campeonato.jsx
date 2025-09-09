import React from 'react'
import Tabela from '../assets/Tabela.png'

const Campeonato = () => {
  return (
    <main>
      <h2>Campeonato Passa Bola</h2>
      <div>
        <aside>
          <h3>Regras</h3>
          <p>
            Cada Equipe deve conter no mínimo 11 Jogadoras
            Idade Máxima conforme a categoria.
            Documentação Obrigatória para a inscrição.
          </p>
        </aside>
        <aside>
          <h2>Tabela do Campeonato</h2>
          <img src={Tabela} alt='Tabela'></img>
        </aside>
      </div>
      <div>
        <article>
          <h3>Inscreva-se</h3>
          <input
            type='text'
            placeholder='Nome da Equipe'
          />
          <input
            type='text'
            placeholder='Nome do Técnico'
          />
          <input
            type='text'
            placeholder='Email'
          />
          <input
            type='text'
            placeholder='Telefone'
          />
          <button>Fazer Inscrição</button>
        </article>
        <div>
          <h3>Informações do Campeonato</h3>
          <label>Data: 15 de Julho de 2024</label>
          <label>Estádio Municipal</label>
          <label>16 Times</label>
          <label>Eliminação Direta</label>
          <label>Sub-15, Sub-17, Sub-20</label>
        </div>
      </div>
    </main>
  )
}

export default Campeonato
