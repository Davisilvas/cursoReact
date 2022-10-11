import MyComponent from "./MyComponent";

const TemplateExpressions = () =>{
    var v1 = 5;
    var v2 = 3;
    var r = v1*v2
    return(
        <div>
            <p>A multiplicação entre x e y é igual a {r} </p>
            <MyComponent />
            {/* Para executar Js no JSX basta por as {} e escrever o código */}
        </div>
    );
}

export default TemplateExpressions