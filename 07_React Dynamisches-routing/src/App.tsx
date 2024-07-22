import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/:muffin' element={<DetailPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
