import GlobalStyle from "./GlobalStyle"

import Home from "./pages/Home"
import Header from "./components/header"
import MenuHam from "./components/MenuHam"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <MenuHam/>

      <Home/>
    </> 
  )
}

export default App
