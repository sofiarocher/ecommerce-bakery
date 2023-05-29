import Navbar from './components/Navbar'
import "./App.css"
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Shop from './components/Shop'

function App() {
 

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path='/shop' element={<Shop/>}/> 
        </Routes>
      </Router>
    </>
  )
}

export default App
