import {NavLink} from "react-router-dom";

const Header = ()  =>{
    return (
        <header className="absolute w-full h-[4rem] py-4">
            <nav className="flex items-center justify-center space-x-10 w-full px-6">
                <NavLink
                    className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse"
                    to={"/creative"}>Home</NavLink>
                <NavLink
                    className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse"
                    to={"/creative/about"}>About</NavLink>
                <NavLink
                    className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse"
                    to={"/creative/contact"}>Contact Us</NavLink>
            </nav>
        </header>
    )
}

export default Header;

"text-[#fff] font-bold text-[1.1rem] cursor-pointer"