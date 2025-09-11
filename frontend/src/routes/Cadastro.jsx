import React from 'react'

const Cadastro = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <section className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Cadastro
        </h1>

        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="text"
          placeholder="Telefone"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <button className="w-full bg-green-700 text-white py-3 rounded-full font-semibold hover:bg-green-800 transition">
          Registrar
        </button>
      </section>
    </main>
  )
}

export default Cadastro
