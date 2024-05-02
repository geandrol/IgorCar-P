import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Clientes from './pages/cliente/Clientes'

import Home from './pages/home/Home'
import Estoque from './pages/estoque/Estoque'
import ListCategorias from './pages/categorias/ListCategorias'
import ListProdutos from './pages/produtos/ListProdutos'
import Rota from './pages/categorias/Rota'
import RotaP from './pages/produtos/RotaP'


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
        <Route path="/rotas" element={<Rota />} />
        <Route path="/rotasP" element={<RotaP />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
