import { Route, Routes } from 'react-router-dom'
import EntryForm from './EntryForm'
import FakeFact from './FakeFact'
import Info from './Info'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<EntryForm />} />
      <Route path='/result' element={<FakeFact />} />
      <Route path='/info' element={<Info />} />
    </Routes>
  )
}

export default App
