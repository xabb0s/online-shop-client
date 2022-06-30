import axios from "axios"
import { useEffect, useState } from "react"
import Products from "./Products"

function Main() {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then(res => setProducts(res.data))
      .catch(console.error)
  }, [])

  return (
    <div className="w-full flex flex-wrap gap-5">
      { products.map(product => <Products key={product.id} id={product.id} name={product.name} about={product.about} price={product.price} />) }
    </div>
  )
}

export default Main
