import GlobalStyle from "./GlobalStyle"

import Home from "./pages/Home"
import Header from "./components/Header"
import MenuHam from "./components/MenuHam"
import PhoneNav from "./components/PhoneNav"
import Footer from "./components/UI/Footer"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <MenuHam/>

      <Home/>

      <PhoneNav/>
      <Footer/>
    </> 
  )
}

export default App
