import GlobalStyle from "./GlobalStyle"

import Home from "./pages/Home"
import Header from "./components/Header"
import MenuHam from "./components/MenuHam"
import PhoneNav from "./components/PhoneNav"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <MenuHam/>

      <Home/>

      <PhoneNav/>
    </> 
  )
}

export default App
