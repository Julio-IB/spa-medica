import './App.css'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Services from './pages/services'
import Location from './pages/location'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/servicios' element={<Services />} />
      <Route path='/ubicacion' element={<Location />} />
    </Routes>
  )
}

export default App
