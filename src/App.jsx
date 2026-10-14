// rfce cria uma função parecida

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {

  const [produtos, setProdutos] = useState([]); // usar set antes de qualquer variável modificadora
  
  function buscarProdutos(){
    fetch("https://fakestoreapi.com/products") // retorna readable stream
    .then((response) => {return response.json()}) // converte pra .json
    .then((response) => { 
        setProdutos(response)
    })
  }

  function filtrarPorCategoria(categoria){
    if (categoria != "All"){
        let filtrados = produtos.filter((produto) => {
        return produto.category == categoria.toLowerCase();
    });
    setProdutos(filtrados);

    } else{
        setProdutos(produtos);
    }
  }

useEffect(() => {
  buscarProdutos();
}, [])

  return (
    <>
      <Header filtrarPorCategoria={filtrarPorCategoria} />
      <main className="p-15">
        <div className="grid grid-cols-4 gap-4">
          {
            produtos.map((produto) => (
              <Card
          key={produto.id} 
          title={produto.title}
          image={produto.image} 
          category={produto.category}
          price={produto.price}
          rate={produto.rating.rate} 
          />
            ))
          }
        </div>
    </main>
    </>
  );
}

export default App;