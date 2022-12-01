// pode ser usado para alterações no DOM à req HTTP.
// utilizado para controlar quantas vezes tal coisa acontece. 
// func a ser exec -> arr de dependencias.

import { useEffect, useState } from "react"

const HookUseEffect = () => {    
    const [number, setNumber] = useState(0);
    const [anotherNumber, setAnotherNumber] = useState(0);

    const addNumber = () => {
        setNumber(number + 1);
    }

    const decreaseNumber = () => {
        setNumber(number - 1);
    }

    // 1 - useEffect sem dependências.
    useEffect(()=>{
        console.log('Estou sendo executado. E serei executado sempre que houver alguma alteração em algum state.')   
    })

    // 2 - array de dependências vazio
    useEffect(()=>{
        console.log('Serei executado apenas uma vez')
    }, [])

    // 3 - com array de dependências.

    useEffect(() => {

        if(anotherNumber > 0){
            console.log('Bah meu mas agora tu mexeu no state anotherNumber')
        }

    }, [anotherNumber])
    
    const increaseAnotherNumber = () =>{
        setAnotherNumber(anotherNumber + 1);
    }

    // 4 - cleanup com useEffect

    // useEffect(() =>{

    
    //     const timer = setTimeout(()=>{
    //         console.log('Hello World.')

    //         setAnotherNumber(anotherNumber + 1)
    //     }, 2000)            
        
    //     return () => clearTimeout(timer)

    // },[anotherNumber])

  return (
    <div>
        <h2>Hook useEffect</h2>
        
        <p>Númmero: {number}</p>
        <button onClick={addNumber}>Add + 1</button>
        <br />
        <button onClick={decreaseNumber}>Decrease - 1</button>
        
        <p>Outro númmero: {anotherNumber}</p>
        <button onClick={increaseAnotherNumber}>Add + 1</button>

        <hr />
    </div>
  )
}

export default HookUseEffect