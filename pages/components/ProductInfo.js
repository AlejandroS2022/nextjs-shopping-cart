const ProductInfo = ({ name, price }) => {
    return(
        <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {name}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
                ${price}
            </div>
        </div>
    )
}

export default ProductInfo;