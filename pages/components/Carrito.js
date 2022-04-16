import { useSelector } from "react-redux"

const Carrito = () => {
    const cart = useSelector((state) => state.product.cart);
    const total = useSelector((state) => state.product.total);

    return(
        <>
        { cart.length > 0 ? (
            <div className="table flex-auto mx-auto p-2 w-3/4 m-3 border-2 border-slate-100">
                <div className="table-header-group font-semibold">
                    <div className="table-row">
                        <div className="table-cell flex-initial mx-auto p-3">Producto</div>
                        <div className="table-cell flex-initial mx-auto p-3">Cantidad</div>
                        <div className="table-cell flex-initial mx-auto p-3">Precio individual</div>
                        <div className="table-cell flex-initial mx-auto p-3">Precio acumulado</div>
                    </div>
                </div>
            { cart.map((prodCart, index) => {
                return(
                    <div className="table-row" key={index}>
                        <div className="table-cell flex-initial mx-auto p-3">{prodCart.name}</div>
                        <div className="table-cell flex-initial mx-auto p-3">{prodCart.qty}</div>
                        <div className="table-cell flex-initial mx-auto p-3">{prodCart.price}</div>
                        <div className="table-cell flex-initial mx-auto p-3">{prodCart.sum}</div>
                    </div>
                );
            })}
                <div className="table-row font-semibold">
                    <div className="table-cell flex-initial mx-auto p-3">Total a pagar</div>
                    <div className="table-cell flex-initial mx-auto p-3">{" "}</div>
                    <div className="table-cell flex-initial mx-auto p-3">{" "}</div>
                    <div className="table-cell flex-initial mx-auto p-3">{total}</div>
                </div>
            </div>
        ) : (
            <div className="flex-initial mx-auto p-2 w-1/2 m-3">
                <p className="text-center text-2xl font-medium p-2"><label>Aún no se agregaron productos al carrito.</label></p>
            </div>
        )}
        </>
    )
}

export default Carrito;