import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Main from './components/Main'
import './style/main.css'
import Products from './components/Products'
import Stockin from './components/Stockin'
import Stockout from './components/Stockout'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/stockin' element={<Stockin/>}/>
      <Route path='/stockout' element={<Stockout/>}/>
      </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
