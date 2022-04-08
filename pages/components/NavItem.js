const NavItem = ({ children }) => {
    return(
        <li className={"flex flex-initial items-center w-36 h-14 hover:bg-cyan-500"}>
            <div className="flex-auto p-2 font-semibold text-center uppercase text-slate-50">
                {children}
            </div>
        </li>
    )
}

export default NavItem;