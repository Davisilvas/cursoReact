import { useState } from 'react'

const HookUseState = () => {
    // useState
    let userName = 'Doly';
    const [name, setName] = useState("Davi");

    const changeNames = () =>{
        userName = 'Doly Maria'
        setName("Davi Santos")
    }

    // 2 - useState e inputs
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault(); // tem que ter isso pois o Default do submit é recarregar a página.
        console.log(age)
    }

  return (
    <div>
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>State: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        <hr />
        <h2>useState e input</h2>
        <p>Digite a sua idade!</p>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={age}
                onChange = {(e) => setAge(e.target.value)}
            />
            <input type="submit" value="Enviar" />
        </form>
        <p>{name} tem {age} anos!</p>
        <hr />
    </div>
  )
}

export default HookUseState;