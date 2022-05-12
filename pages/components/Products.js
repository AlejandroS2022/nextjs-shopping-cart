import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../features/product/productSlice"
import Img from "./Img"
import ProductInfo from "./ProductInfo"
import Footer from "./Footer";

const Products = () => {
    const products = useSelector((state) => state.product.products);
    const cart = useSelector((state) => state.product.cart);
    const dispatch = useDispatch();

    return(
        <>
        { products.map((product, index) => {
            return(
                <div className="flex flex-initial font-sans p-3 m-2" key={index}>
                    <Img imgSrc={product.img} />
                    <div className="flex-auto p-6">
                        <ProductInfo name={product.name} price={product.price} />
                        <div className="flex flex-wrap space-x-4 mb-6 mt-4 text-sm font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-10 px-6 font-semibold rounded-md border border-green-500 text-green-500 hover:bg-green-500 hover:text-slate-100" type="button" onClick={() => dispatch(addToCart(product))}>
                                    Agregar
                                </button>
                                { cart.length > 0 ? (
                                    cart.map((prodCart, index1) => {
                                        if (prodCart.id == product.id && prodCart.qty > 0) {
                                            return(
                                                <div key={index1}>
                                                    <button className="h-10 px-6 font-semibold rounded-md border border-red-400 text-red-400 hover:bg-red-500 hover:text-slate-100" type="button" onClick={() => dispatch(removeFromCart(product))}>
                                                        Quitar
                                                    </button>
                                                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                                        En el carrito: {prodCart.qty}
                                                    </div>
                                                </div>
                                            );
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
        
        <Footer />
        </>
    )
}

export default Products;