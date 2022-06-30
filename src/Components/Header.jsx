import axios from "axios"
import { useEffect, useState } from "react"
import Categories from "./Categories"

function Header() {

  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/categories')
    .then(res => setCategories(res.data.categories))
    .catch(console.error)
  }, [])

  return (
    <div className="flex gap-5 p-3 w-full overflow-y-auto bg-slate-100">
      { categories.map(category => <Categories key={category.id} name={category.name} />) }
    </div>
  )
}

export default Header
