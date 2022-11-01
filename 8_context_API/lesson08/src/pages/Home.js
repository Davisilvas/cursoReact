// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// 4 - Refatorando com hook - hook custom de contexto.
import { useCounterContext } from '../hooks/useCounterContext'

// 5 - contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

import ChangeCounter from '../components/ChangeCounter'


const Home = () => {
  // const {counter} = useContext(CounterContext)

  const {counter} = useCounterContext();

  // 5 - state complexo
  const {color, dispatch} = useTitleColorContext();

  // 6 - alterando state complexo
  const setTilteColor = (color) => {
    dispatch({type : color})
  }

  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando o valor do contexto */}
      <ChangeCounter />
      <div>
        {/* aula 6  */}
        <button onClick={() => setTilteColor("RED")}>Vermelho</button>
        <button onClick={() => setTilteColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home