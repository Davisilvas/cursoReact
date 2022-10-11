import MyComponent from "./MyComponent";

const FirstComponent = () =>{
    return(
        <div>
            <h1>Meu primeiro componente</h1>
            {/* <p>Aqui eu vou fazer um comentário</p> */
            // template expressions são uma forma de rodar código js entre {} e dentro do JSX
            }
            <MyComponent />
        </div>
    );
};

export default FirstComponent;