const Img = ({ imgSrc }) => {
    return(
        <div className="flex-none w-48 relative">
            <img src={imgSrc} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
    )
}

export default Img;