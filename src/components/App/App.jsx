import { Route, Routes } from 'react-router-dom'
import './App.css'
import EntryForm from '../EntryForm/EntryForm'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<EntryForm />} />
      <Route path='/results' element={<FakeNews />} />
    </Routes>
  )
}

export default App
