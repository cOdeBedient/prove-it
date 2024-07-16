import { Route, Routes } from 'react-router-dom'
import EntryForm from './EntryForm'
import FakeFact from './FakeFact'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<EntryForm />} />
      <Route path='/result' element={<FakeFact />} />
    </Routes>
  )
}

export default App
