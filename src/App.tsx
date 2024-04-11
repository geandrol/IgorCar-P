import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Clientes from './pages/cliente/Clientes'

import Home from './pages/home/Home'
import Estoque from './pages/estoque/Estoque'
import ListCategorias from './pages/categorias/ListCategorias'
import ListProdutos from './pages/produtos/ListProdutos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cliente" element={<Clientes />} />
        <Route path="/listarCategoria" element={<ListCategorias />} />
        <Route path="/listarProduto" element={<ListProdutos />} />
        <Route path="/estoque" element={<Estoque />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
