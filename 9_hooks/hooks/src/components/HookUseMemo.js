// o useMemo é usado para garantir a referência de um objeto. Fazendo com que algo possa ser atrelado a referência e não a um valor. 
// com isso conseguimos condicionar useEffects a uma variável de uma maneira mais inteligente.

import { useMemo, useEffect, useState } from "react"

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)


    //const premiumNumbers = ['0', '100', '200'];
    const premiumNumbers = useMemo(()=>{
        return ['0', '100', '200']
    },[])

    useEffect(()=>{
        console.log('premiumNumbers foi alterado.')
    },[premiumNumbers])

  return (
    <div>
        <h1>Hook useMemo</h1>
            <p>Advinhe o número especial!</p>
            <input 
                type="text" 
                onChange={(e) => setNumber(e.target.value)}
            />
            {premiumNumbers.includes(number) ? <p>Acertou mizeravi, o número especial é {number}</p> : ''}
        <hr />
    </div>
  )
}

export default HookUseMemo