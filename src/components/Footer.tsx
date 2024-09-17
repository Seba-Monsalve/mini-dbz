
export const Footer = () => {
    return (
        <footer className="p-5 bg-slate-300 flex  items-center justify-around gap-2">


            <div className="flex flex-col gap-1 text-white hover:scale-110 transition-all ">
                <span className="text-4xl w-3/5 text-white">Seba</span>
                <span className="text-4xl rotate-3  bg-cyan-300 px-2">Monsalve</span>
            </div>

            <div className="flex flex-col  items-center justify-between">
                <img src="/src/assets/dbz-logo.png" className="h-[50px]  " alt="" />
                <p className="text-center">Proyecto de practica <br /> ReactJs - Typescript - TailwindCss - Zustand</p>
            </div>
        </footer>
    )
}
