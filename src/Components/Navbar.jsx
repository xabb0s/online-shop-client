function Navbar() {
  return (
    <div class="navbar bg-base-100 justify-between">
      <div class="flex mr-3">
        <a class="btn btn-ghost text-xl active:bg-slate-100 active:text-black">ONLINE-SHOP</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0 gap-3">
          <li><a className="active:bg-slate-100 active:text-black">Home</a></li>
          <li><a className="active:bg-slate-100 active:text-black">Card</a></li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <input type="text" placeholder="Search product by Name" class="input input-bordered input-primary w-full max-w-xs" />
        <button className="btn btn-primary text-white"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default Navbar