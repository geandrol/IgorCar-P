import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Categorias from './pages/categorias/Categorias'
import Clientes from './pages/cliente/Clientes'
import Produto from './componentes/form/Pruduto'
import Produtos from './pages/produtos/Produtos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Categorias />} />
        <Route path="/cliente" element={<Clientes />} />
        <Route path="/produto" element={<Produtos />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
