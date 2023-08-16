import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";

function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    async function getData(params) {
      
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {
  setProduct(json.products)
  console.log(json)
})
            

    }

    getData()
  }, [])
  console.log(product);

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3vw'}} className="App">
      {
        product.map((item, index) => (
          <Card key={index} product={item}/>
        ))
      }
    </div>
  );
}

export default App;
