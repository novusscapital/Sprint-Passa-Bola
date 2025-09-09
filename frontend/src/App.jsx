import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import Error from './routes/Error'
import Nav from './components/Nav'

function App() {

  return (
    <BrowserRouter>
      <Nav />

      <main>
        <Routes>

          <Route path='*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />

        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
