import GlobalStyle from "./GlobalStyle"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { proyectos } from "./components/proyectos";
const {id} = proyectos

import Bg from "./components/Bg";
import Home from "./pages/Home"
import Header from "./components/Header"
import MenuHam from "./components/MenuHam"
import PhoneNav from "./components/PhoneNav"
import Footer from "./components/UI/Footer"
import Proyectos from "./pages/Proyectos";
import ProyectoPage from "./components/ProyectoPage";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router basename="/">
        <Bg/>
        <Header/>
        <MenuHam/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/proyectos' element={<Proyectos/>}/>
          <Route path='/proyectos/:id' element={<ProyectoPage/>}/>
        </Routes>

        <PhoneNav/>
        <Footer/>
      </Router>
    </> 
  )
}

export default App
