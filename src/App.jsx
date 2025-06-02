import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import TelaCadastroUsuario from './components/TelaCadastroUsuario'
import ReaAgendamento from  './components/ReaAgendamento'
import TelaLogin from  './components/TelaLogin'
import TelaEsqueciSenha from  './components/TelaEsqueciSenha'
import CancelAg from './components/CancelAg'
import ExcReserva from './components/ExcReserva'




function App() {


  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/TelaLogin" />} />
        <Route path="/TelaLogin" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastroUsuario />} />
        <Route path="/agendamento" element={<ReaAgendamento />} />
        <Route path="/esqueci-senha" element={<TelaEsqueciSenha />} />
        <Route path="/cancelar-agendamento" element={<CancelAg />} />
        <Route path="/excluir-reserva" element={<ExcReserva />} />
      </Routes>
    </Router>
   </>
  )
}
export default App;
