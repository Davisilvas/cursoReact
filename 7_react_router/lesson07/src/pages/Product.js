import { useParams, Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // 4 - rotas dinâmicas
    const {id} = useParams();

    // 5 - carregamento de dados individual
    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url)

    console.log(product)

  return (
    <div>
        <p>Id do produto: {id}</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando dados do produto</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <h2>R$:{product.price}</h2>
                {/* 6 - nested routes */}
                <Link to = {`/products/${product.id}/info`}>Mais informações sobre o produto</Link>
            </div>
        )}
    </div>
  )
}

export default Product