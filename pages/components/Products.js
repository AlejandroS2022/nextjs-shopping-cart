import { useSelector, useDispatch } from "react-redux"
import { addToCart, decrement } from "../features/product/productSlice"
import Image from "./Image"
import ProductInfo from "./ProductInfo"

const Products = () => {
    const products = useSelector((state) => state.product.products);
    const cart = useSelector((state) => state.product.cart);
    const dispatch = useDispatch();

    return(
        <>
        { products.map((product, index) => {
            return(
                <div className="flex flex-initial font-sans p-3 m-2" key={index}>
                    <Image imgSrc={product.img} />
                    <div className="flex-auto p-6">
                        <ProductInfo name={product.name} price={product.price} />
                        <div className="flex space-x-4 mb-6 mt-4 text-sm font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:bg-slate-300" type="button" onClick={() => dispatch(addToCart(product.id, product.name, product.price))}>
                                    Agregar al carrito
                                </button>
                                { cart.length > 0 ? (
                                    cart.map((prodCart, index) => {
                                        if (prodCart.id == product.id && prodCart.qty > 0) {
                                            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:bg-slate-300" type="button" onClick={() => dispatch(increment(product.id, product.name, product.price))}>
                                                Quitar del carrito
                                            </button>
                                        }
                                    })
                                ) : (
                                    <div />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
        </>
    )
}

export default Products;