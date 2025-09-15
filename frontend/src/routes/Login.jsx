import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido!');
        
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);

        if (data.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro desconhecido.');
      }
    } catch (err) {
      setError('Não foi possível conectar ao servidor.');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <section className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Login</h1>

        {error && <p className="text-red-500 text-center mb-6 text-lg">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-4 text-xl rounded-full font-semibold hover:bg-green-800 transition"
          >
            Fazer Login
          </button>
        </form>
        <p className="mt-6 text-center text-green-700 text-lg font-medium">
          Ainda não fez o{" "}
          <button
            onClick={() => navigate("/Cadastro")}
            className="underline text-green-800 hover:text-green-900 transition"
          >
            Cadastro?
          </button>
        </p>
      </section>
    </main>
  );
};

export default Login;