const PageHeader = () => {
    return(
        <div className="sticky z-50 flex-none top-0 p-1 font-sans bg-white w-full md:p-3">
            <div className="font-semibold text-xl text-slate-800 mx-4 md:text-4xl">
                <label className="relative flex items-center border-b border-slate-200 py-3 md:border-0">
                    <span className="font-bold p-1 text-slate-100 bg-cyan-500">Next JS</span> Carrito de compras
                    <span className="ml-2 -my-1 md:hidden">
                        <button className="absolute flex inset-y-4 right-0 items-center justify-center w-7 h-7 px-2 py-1 text-slate-900 bg-slate-200">
                            =
                        </button>
                    </span>
                </label>
            </div>
        </div>
    )
}

export default PageHeader;