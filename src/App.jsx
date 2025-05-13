import { useState } from 'react'
import './App.css'
import TelaCadastroUsuario from './components/TelaCadastroUsuario'
import ReaAgendamento from  './components/ReaAgendamento'
import TelaLogin from  './components/TelaLogin'
import TelaEsqueciSenha from  './components/TelaEsqueciSenha'
import CancelAg from './components/CancelAg'
import ExcReserva from './components/ExcReserva'
import Dashboard from './components/dashboard'



function App() {

  const [count, setCount] = useState(0)

  return (
   <>
   <TelaCadastroUsuario/>,
   <ReaAgendamento/>
   <TelaLogin/>
   <TelaEsqueciSenha/>
   <CancelAg/>
   <ExcReserva/>
   <dashboard/>
   </>
  )
}
export default App;
