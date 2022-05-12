import Footer from "./Footer";

const Bienvenida = () => {
    return(
        <>
            <div className="flex-initial sm:grid-cols-2 p-2 m-3">
                <label>
                    <h2 className="text-3xl font-bold mt-4 text-center text-slate-700 md:text-5xl">
                        Bienvenido a 
                        <br className="md:hidden"/> la pagina de inicio.
                    </h2>
                </label>
            </div>
            
            <Footer />
        </>
    )
}

export default Bienvenida;