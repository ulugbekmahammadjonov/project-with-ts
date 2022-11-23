import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Store from "./pages/Store"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
