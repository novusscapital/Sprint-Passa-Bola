import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import Campeonato from "./routes/Campeonato";
import Noticias from "./routes/Noticias";
import Peneiras from "./routes/Peneiras";
import Login from "./routes/Login";
import Cadastro from "./routes/Cadastro";
import Error from "./routes/Error";
import Admin from './components/Admin';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token || role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <header className="nav">
        <div className="nav__wrap">
          <Nav />
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Campeonato" element={<Campeonato />} />
          <Route path="/Noticias" element={<Noticias />} />
          <Route path="/Peneiras" element={<Peneiras />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}