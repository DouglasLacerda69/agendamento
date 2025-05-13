import { useState } from 'react'
import './App.css'
import CadEquipamento from './components/CadEquipamento'
import ReaAgendamento from  './components/ReaAgendamento'
import CadAulas from  './components/CadAulas'
import CadTurmas from  './components/CadTurmas'
import CancelAg from './components/CancelAg'
import ExcReserva from './components/ExcReserva'
import Dashboard from './components/dashboard'



function App() {

  const [count, setCount] = useState(0)

  return (
   <>
   <CadEquipamento/>,
   <ReaAgendamento/>
   <CadAulas/>
   <CadTurmas/>
   <CancelAg/>
   <ExcReserva/>
   <dashboard/>
   </>
  )
}
export default App;
