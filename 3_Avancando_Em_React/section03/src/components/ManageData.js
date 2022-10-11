import {useState} from "react";
// aula de useState

const ManageData = () => {
    let someData = 10;

    const[number, setNumber] = useState(15)

  return (
    <div>
        <h2>useState hook</h2>
        <p>Valor: {someData}</p>
        <button onClick={() =>{someData =15}}>Mudar variável</button>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Clique aqui para adicionar +1</button>
    </div>
  )
}

export default ManageData