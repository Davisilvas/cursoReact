// o useCallback memoriza uma função, fazendo ela não ser reconstruída a cada renderização do componente.
// o primeiro caso é quando estamos prezando pela perfomance, então queremos que uma função muito complexa não seja reconstruída toda vez.
// já o segundo é quando o próprio react nos indica que uma função deveria estar contida em um useCallback para evitar problemas de perfomance.

import { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {
    const [counter, setCounter] = useState(0)

    const getItemsFromDatabase = useCallback( () => {
        return ['Davi', 'Maria', 'Doly']
    }, [])


  return (
    <div>
        <h1>Hook useCallback</h1>
            <List getItems={getItemsFromDatabase} />
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Alterar</button>

        <hr />
    </div>
  )
}

export default HookUseCallback