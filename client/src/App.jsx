import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Leer from './views/Leer';
import Contar from './views/Contar';
import Administrar from './views/Administrar';
import NotFound from './components/NotFound';
import SecretDetail from './components/SecretDetail';

document.body.setAttribute("data-theme", "dark");

const switchTheme = () => {
  document.body.getAttribute("data-theme") === "dark" ?
    document.body.setAttribute("data-theme", "light") :
    document.body.setAttribute("data-theme", "dark");
}

function App() {
  return (
    <div className="container">
      <div className="dark-light">
        <button onClick={() => switchTheme()}><i className="fas fa-adjust"></i></button>
      </div>
      <header>
        <h1><i className="fa-solid fa-eye-low-vision"></i><span className='logo-bold'>mi</span>secreto</h1>
      </header>
      <BrowserRouter>
        <nav>
          <Link to="/">Leer</Link>
          <Link to="contar">Confesar</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Leer />} />
          <Route path="/contar" element={<Contar />} />
          <Route path="/leer/:id" element={<SecretDetail />} />
          <Route path="/admin" element={<Administrar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <a href='https://github.com/rojaslabs' target="_blank" rel="noreferrer">github.com/rojaslabs</a>
      </footer>
    </div>
  );
}

export default App;
