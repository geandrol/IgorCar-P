import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Clientes from './pages/cliente/Clientes'

import Produtos from './pages/produtos/Produtos'
import Home from './pages/home/Home'
import Categorias from './pages/categorias/Categorias'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cliente" element={<Clientes />} />
        <Route path="/categoria" element={<Categorias />} />
        <Route path="/produto" element={<Produtos />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
