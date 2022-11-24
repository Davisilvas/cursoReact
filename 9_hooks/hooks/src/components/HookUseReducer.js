import { useReducer, useState } from "react"

const HookUseReducer = () => {
    // 3 - useReducer
    // Assim como o useState ele gerencia valores, porém temos a possibilidade de executar uma função na hora da alteração do valor.
    // Recebe um valor para gerenciar e uma função para alterar esse valor. 

    // dispatch é onde executaremos a função para alterar o valor do number.
    // state é o number
    const [number, dispatch] = useReducer((state, action) =>{
        return Math.random(state);
    })

    // 4 - avançando no useReducer.

    const initialTasks = [
        {id: 1, text: 'Estudar react'},
        {id: 2, text: 'Fazer café'},
        {id: 3, text: 'Ir para a academia'},
    ]

    const taskReducer = (state, action) =>{
        switch(action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                };

                setTaskText("")

                return[...state, newTask]
            
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            
            default:
                return state;
        }
    }

    const [taskText, setTaskText] = useState('')
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)
//estrutura do hook | função q o dispatch ativa | estado inicial do state 
// BIZU: se for consumir um estado no reducer, tem que iniciar ele antes do reducer.

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        dispatchTasks({type:"ADD"})
    }

    const removeTask = (id) => {
        dispatchTasks({type:"DELETE", id: id})
    }


  return (
    <div>
        <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar número</button>
        <hr />

        <h2>useReducer com actions!</h2>
            {/* O useReducer é usado para ações mais complexas com o uso da estrutura switch com as actions. */}
            <h2>Suas tarefas</h2>
            {tasks.map((task)=>(
                <li 
                    key={task.id}
                    onDoubleClick={()=> removeTask(task.id)}
                >
                    {task.text}
                </li>
            ))}
            <p>Para excluir uma tarefa basta dar um Double-click nela!</p>

            <h3>Insira novas tarefas!</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={taskText}
                    onChange={(e)=> setTaskText(e.target.value)}
                />
                <input type="submit" value="Adicionar"/>
            </form>
        <hr />
    </div>
  )
}

// Criar uma função, que pode de alguma forma diferente de uma simples atribuição, mudar o valor do meu estado atual.
export default HookUseReducer