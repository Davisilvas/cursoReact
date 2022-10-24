import './App.css';

import {useState, useEffect} from "react";
// custom hook
import {useFetch} from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {  
  const [products, setProducts] = useState([]);
  // 4 custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');


  // aula 1 resgatando dados
  // useEffect(() =>{
    
  //   async function fetchData(){  
  //     //fetch serve para puxar os dados de uma api.
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);  
  //   }
  //   fetchData()
  // }, [])

  // 2 adicionando produtos ao banco de dados.

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 carregamento dinâmico
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando o POST
    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }
  // console.log(products)

  const handleRemove = (id) =>{
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Aprendendo requisições http!</h1>
      {/* 6 LOADING */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && 
        <ul>
        {items && 
          items.map((product) =>(
            <li key={product.id}>
              {product.name} - R$:{product.price} -  
              <button onClick={()=> handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      }
       <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text" 
              value={name} 
              name="name" 
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input 
              type="number" 
              value={price} 
              name="price" 
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
       </div>
    </div>
  );
}

export default App;
