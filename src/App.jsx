import { React } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/navigation'
import Home from './pages/home'
import Crew from './pages/crew'
import Destinations  from './pages/destinations'
import Tech  from './pages/tech'
import './App.css'

function App() {
  
  return (
    <div >
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/tech' element={<Tech />} />
      </Routes>
    </div>
  )
}

export default App
