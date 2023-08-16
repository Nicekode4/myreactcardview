import { useEffect, useState } from "react";
import Card from "./Components/Card/Card"; // Import the Card component

function App() {
  const [products, setProducts] = useState([]); // State variable for the product array from dummyjson

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products'); // Fetch products from dummyjson
        const data = await response.json(); // Convert the response to JSON format
        setProducts(data.products); // Update the state with the products data
        console.log(data); // Display the fetched data in the console
      } catch (error) {
        console.error("Error fetching data:", error); //Throws back or catches an error if the error viable is not empty
      }
    }

    fetchData(); // Execute the fetchData function
  }, []);

  console.log(products); // Display the data in the 'products' state

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3vw' }} className="App">
      {products.map((product, index) => (
        <Card key={index} product={product} /> // Render the Card component with each product
      ))}
    </div>
  );
}

export default App;
