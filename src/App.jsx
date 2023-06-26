import { useState } from 'react'
import { Header } from './componentes/header/Header'
import { Home } from "./componentes/Home"


function App() {
  
  const [idioma, setIdioma] = useState(true);
  const cambiarIdioma = ()=>{
      setIdioma(!idioma)
  }

  console.log(idioma)

  return (




      <div className='overflow-hidden'>
        <Header setIdioma={setIdioma} idioma={idioma} />
        <Home idioma={idioma}/>
      </div>
  )
}

export default App
