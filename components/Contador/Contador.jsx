import { useState, useEffect } from "react"
import ContadorView from "./ContadorView"
import Titulo from "./Titulo"

const Contador = () => {
  const [contador, setContador] = useState(0)
  const [toggle, setToggle] = useState(true)

  const aumentarContador = () => {
    if (contador < 10) {
      setContador(contador + 1)
    }
  }

  const alternarToggle = () => {
    setToggle( !toggle )
  }

  useEffect( ()=> {
    console.log("1er useEffect")
  }, [] )

  useEffect( () => {
    console.log("2do useEffect")
  }, [contador] )

  useEffect( () => {
    console.log("3er useEffect")
  } )


  return (
    <>
      <ContadorView contador={contador} aumentarContador={aumentarContador} />
      <div>
        <p>Valor toggle: { toggle.toString() }</p>
        <button onClick={ alternarToggle } >Alternar valor del toggle</button>
        {
          toggle === true && <Titulo />
        }
      </div>
    </>
  )
}
export default Contador