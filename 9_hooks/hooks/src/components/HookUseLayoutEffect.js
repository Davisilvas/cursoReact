// é muito parecido com o useEffect. A grande diferença é que esse hook roda antes de renderizar o componente. Ou seja é um hook síncrono, bloqueando o carregamento da página para o sucesso da sua funcionalidade. 
// a sua ideia é uxecutar algo antes que o usuário veja a página.


import {useState, useEffect, useLayoutEffect} from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState('Algum nome')

    useEffect(() => {
        console.log("2")
        setName('Mudou de novo')
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    }, [])

    console.log(name)
    

  return (
    <div>
        <h1>Hook useLayoutEffect</h1>
        <p>Nome: {name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect