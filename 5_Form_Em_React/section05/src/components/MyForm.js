import './MyForm.css'
import {useState} from 'react';

const MyForm = ({user}) => {
    // 6 - controlled inputs - normalmente usados quando queremos fazer alterações no cadastro de um usuário por exemplo. -formulários de edição-

    
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Enviando o formulário')
        console.log(name, '-', email, '-', bio, '-', role)

        // a limpeza do form normalmente é feita após passos como validação e envio do formulário.

        // 7 - limpando o form
        setEmail("")
        setName("")
        setBio("")
    }

    //4 - Alterando state inline (foi feito no input do email.)

    //  if(email){
    //     console.log(email)
    // }

    // if(name){
    //     console.log(name)
    // }
    

  return (
    <div>
        {/* 1 - Criação de form */}
        {/* 5 - envio de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" 
                placeholder="Digite o seu nome" 
                value={name}
                onChange={handleName}/>
            </div>

            {/* 2- Label envolvendo o input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" 
                placeholder="Insira seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </label>

            {/* 8 - textarea */}
            
            <label>
                <span>Bio: </span>
                <textarea name="bio"
                placeholder='Descrição do usuário '
                onChange={(e) => setBio(e.target.value)}
                value={bio}></textarea>
            </label>

            {/* 9 - Select no react */}
            <label>
                <span>Função no sistema</span>
                <select name="role " id=""
                onChange={(e) => setRole(e.target.value)}
                value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">administrador</option>
                </select>
            </label>
            
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm