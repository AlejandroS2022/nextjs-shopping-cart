import Products from "./Products"

const Tienda = () => {
    return(
        <div className="block flex-initial grid-cols-1 sm:grid-cols-2 p-2 m-3 rounded-xl border-2 border-slate-100">
            <Products />
        </div>
    )
}

export default Tienda;