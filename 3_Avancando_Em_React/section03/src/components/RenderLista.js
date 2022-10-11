import {useState} from "react";

// -> Normalmente as arrow functions são feitas com {}, mas dentro do JSX elas devem ser feitas com os (). Logo temos (x) => ()

const RenderLista = () => {
    const [list] = useState(['Davi', 'Maria', 'Doly', 'Thor'])

    const [users, setUsers] = useState([
        {id:1 , name: 'Davi', age:21},
        {id:2 , name: 'Maria', age:23},
        {id:3, name: 'Doly', age:13}
    ])

    const deleteRandom = () => {
        //previous state
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>{
            return prevUsers.filter((user)=> randomNumber !== user.id)
        })
    }

  return (
    <div>
        <h2>Render de lista usando a func map</h2>
        <ul>
            {list.map((item, i)=> (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <p>Lista com ids específicos para serem o valor de key.</p>
        <p>(O mais comum de ser usado, normalmente o id vem do DB)</p>
        {/* sempre evitar de usar o index do objeto como key. O index tá sempre sujeito a mudanças */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete um usuário aleatório</button>
    </div>
  )
}

export default RenderLista