import GlobalStyle from "./GlobalStyle"

import Home from "./pages/Home"
import Header from "./components/Header"
import MenuHam from "./components/MenuHam"
import PhoneNav from "./components/PhoneNav"
import Slider from "./components/Slider"

import { slides } from "./components/slides"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <MenuHam/>

      <Home/>
      <Slider slides={slides}/>

      <PhoneNav/>
    </> 
  )
}

export default App
