function Products( { id, name, about, price } ) {
  return (
    <div className="flex p-3 bg-slate-100">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="image" /></figure>
        <div className="card-body">
          <h2 className="card-title">id: { id }</h2>
          <h2 className="card-title">product: { name }</h2>
          <h1 className="card-title mb-2">price: { price }$</h1>
          <hr></hr>
          <p><span className="font-semibold">about:</span> { about }</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to card</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products