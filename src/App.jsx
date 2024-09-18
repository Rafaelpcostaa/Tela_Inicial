import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Components/menu'
import Pesquisa from './Components/pesquisa'
import Info1 from './Components/Infor'
import Info2 from './Components/info2'
import Info3 from './Components/info3'
import Info4 from './Components/info4'
import Info5 from './Components/info5'
import imagen from './Components/Img/por-do-sol1.jpg'
import MenuFinal from './Components/menu_final'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Menu/>
      <Pesquisa/>
      <br />
      <br />
      <Info1 imagen={imagen}/>
      <br />
      <Info2 imagen={imagen}/>
      <br />
      <Info3/>
      <br />
      <Info4/>
      <br />
      <Info5/>
      <br />
      <MenuFinal/>
    </>
  )
}

export default App
