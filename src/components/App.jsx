import { Route, Routes } from 'react-router-dom'
import EntryForm from './EntryForm'
import FakeFact from './FakeFact'
import Info from './Info'
import Error from './Error'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<EntryForm />} />
      <Route path='/info' element={<Info />} />
      <Route path='/result' element={<FakeFact />} /> 
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
