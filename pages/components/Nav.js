const Nav = ({ children }) => {
    return(
        <nav className="flex-auto bg-slate-800">
            <ul className="flex my-3 justify-start">
                {children}
            </ul>
        </nav>
    )
}

export default Nav;