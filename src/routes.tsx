import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SaibaMais from './pages/SaibaMais'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/saibamais" element={<SaibaMais />} />
  </Routes>
)

export default Rotas
