import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'

const Products = () => {
    const cart = useSelector((state) => state.product.cart);
    
    return(
        <>
        { cart.length > 0 ? (
            <div className="flex-initial text-center fixed bottom-0 left-0 right-0 bg-yellow-500">
                <div className="flex-initial text-sm font-medium p-2">
                    Hay objetos actualmente en el carrito
                </div>
                <NavLink to="/carrito">
                    <button className="w-50 h-10 px-6 mb-2 mx-auto justify-start font-semibold rounded-md border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-slate-100" type="button">
                        Ir al carrito
                    </button>
                </NavLink>
            </div>
        ) : (
            <div />
        )}
        </>
    )
}

export default Products;