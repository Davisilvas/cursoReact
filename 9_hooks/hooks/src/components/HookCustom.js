import { useState } from "react"
import { usePrevious } from "../hooks/usePrevious"

const HookCustom = () => {
    const [number, setNumber] = useState(0);
    const previuosValue = usePrevious(number);

  return (
    <div>
        <h1>Consumindo Hook Custom</h1>
        <p>valor atual: {number}</p>
        <p>Valor anterior: {previuosValue}</p>
        <button onClick={() => setNumber(Math.random())}>Alterar</button>
        <hr />
    </div>
  )
}

export default HookCustom