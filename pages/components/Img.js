const Img = ({ imgSrc }) => {
    return(
        <div className="flex-none w-48 relative">
            <img src={imgSrc} alt="" className="relative inset-0 w-full h-full object-cover md:absolute" />
        </div>
    )
}

export default Img;