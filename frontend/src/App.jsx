import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import Error from './routes/Error'
import Noticias from './routes/Noticias'
import Peneiras from './routes/Peneiras'
import Sobre from './routes/Sobre'
import Campeonato from './routes/Campeonato'
import Nav from './components/Nav'

function App() {

  return (
    <BrowserRouter>
      <Nav />

      <main>
        <Routes>

          <Route path='*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Campeonato' element={<Campeonato />} />
          <Route path='/Noticias' element={<Noticias />} />
          <Route path='/Peneiras' element={<Peneiras />} />
          <Route path='/Login' element={<Login />} />

        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
