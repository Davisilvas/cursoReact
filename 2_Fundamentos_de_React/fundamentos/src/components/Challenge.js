const Challenge = () =>{
    var a = 5
    var b = 6

    const handleClick = () => {
        var soma = a + b
        console.log(soma)
    }
    
    return(
        <div>
            <p>O valor A é {a}</p>
            <p>O valor B é {b}</p>
            <button onClick={handleClick}>Clique aqui para somar os valores</button>
        </div>
    )
}

export default Challenge;