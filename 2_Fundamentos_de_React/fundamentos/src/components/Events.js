const Events = () =>{
    
    const handleMyEvent = (e) => {
        // console.log(e)
        console.log('Ativou o Evento')
    };

    const renderSomething = (x) =>{
        if(x){
            return(
                <div>
                    <h1>Tem x em</h1>
                </div>
            )
        }else{
            return(
                <div>
                    <h1>Não tem x em</h1>
                </div>
            )
        }
    }
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>click here</button>
            </div>
            <div>
                <button onClick={()=>{
                    console.log('função 2')
                }}>Clique Aqui</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events