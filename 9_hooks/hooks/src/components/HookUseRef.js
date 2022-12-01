// a diferença deste hook para o useState é que ele é um objeto. Seu valor é armazenado na propriedade current.

// O useRef não re-renderiza o componente ao ser alterado.

import {useEffect, useState, useRef} from 'react';

const HookUseRef = () => {
    // 1 - useRef
    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    })

    // 2 - useRef e DOM

    const inputRef = useRef();

    const [text, setText] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        setText("")
        inputRef.current.focus();
    }

  return (
    <div>
        <h1>Hook useRef</h1>
            <p>O componente Renderizou: {numberRef.current} vezes</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>increase</button>

            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>increase</button>

            {/* Use Ref E DOM */}
            <h2>useRef e DOM</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    ref={inputRef} 
                    value={text}
                    onChange = {(e) => setText(e.target.value)}
                />
                <input type="submit" value="ENVIAR" />

            </form>

        <hr />
    </div>
  )
}

export default HookUseRef