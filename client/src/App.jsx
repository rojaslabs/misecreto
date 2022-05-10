import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import useLocalStorage from 'use-local-storage'
import Leer from './views/Leer';
import Contar from './views/Contar';
import Administrar from './views/Administrar';
import NotFound from './components/NotFound';
import SecretDetail from './components/SecretDetail';

function App() {

  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  // const switchTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light"
  //   setTheme(newTheme);
  //   document.body.setAttribute("data-theme", theme)
  // }

  // useEffect(() => {
  //   document.body.setAttribute("data-theme", theme)
  // }, []);

  return (
    <div className="container">
      <header>
        <h1><i className="fa-solid fa-eye-low-vision"></i><span className='logo-bold'>mi</span>secreto</h1>
        <div className="dark-light">
          <button onClick={() => document.body.setAttribute("data-theme", "dark")}>Dark</button>
          <span>/</span>
          <button onClick={() => document.body.setAttribute("data-theme", "light")}>Light</button>
        </div>
      </header>
      {/* <button onClick={switchTheme}>Switch to {theme === "light" ? "Light" : "Dark"} Theme</button> */}
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
