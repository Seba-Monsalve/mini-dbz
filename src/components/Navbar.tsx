import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-orange-500 h-[100px] flex flex-row items-center justify-center" >
        <img src="/src/assets/dbz-logo.png" className="h-[80px]" alt="" />
      </nav>
      <div className="w-full bg-slate-600  flex flex-col  items-center justify-center">
        <div className="w-full flex  items-center justify-around p-4">
          <Link className=" text-center opacity-90 hover:opacity-100 p-2 bg-green-500 rounded-lg w-1/5" to={"/"} >
            <button > Personajes</button>
          </Link>
          <Link className=" text-center opacity-90 hover:opacity-100 p-2 bg-green-500 rounded-lg w-1/5" to={"/worlds"} >
            <button > Mundos</button>
          </Link>
        </div>
      </div>
    </>

  )
}
