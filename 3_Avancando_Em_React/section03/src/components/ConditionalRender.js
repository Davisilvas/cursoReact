import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState('Davi')

  return (
    <div>
        <h2>Renderização condicional</h2>

        <h2>Isso será exibido?</h2>
        {/* forma mais simples abaixo, é a condicional mais simples que tem no react! */}
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h2>If ternário abaixo</h2>
        {name === 'Davi' ? (
            <div>
                <p>O nome é Davi</p>
            </div>
        ) : (
            <div>
                <p>O nome não é Davi</p>
            </div>
        )}
        <button onClick={() => setName('Maria')}>Clica Aqui!</button>
    </div>
  )
}

export default ConditionalRender