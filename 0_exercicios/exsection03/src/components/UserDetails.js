import React from 'react'

const UserDetails = ({name, age, profession}) => {
  return (
    <div>
        <p>
            Este é o(a) {name} que tem {age} anos e atua como {profession}.
        </p>
        {age >= 18 ?(
            <p>{name} está apto(a) a tirar a carteira nacional de habilitação.</p>
        ) : (
            <p>{name} não está apto(a) a tirar a carteira nacional de habilitação.</p>
        )}
        <span>***</span>
    </div>
  )
}

export default UserDetails