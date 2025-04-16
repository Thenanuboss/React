
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Form from './Form'
import Datashow from './Datashow'

function App() {


  return (
    <>
    <Routes>

      <Route path='/' element={<Form/>} />
      <Route path='/datashow' element={<Datashow/>} />

    </Routes>


    </>
  )
}

export default App
