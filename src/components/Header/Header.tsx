import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="absolute w-full h-[4rem] py-4">
            <nav className="flex items-center justify-end sm:justify-center w-full px-6">
                <div className="sm:hidden">
                    <button
                        className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse"
                        onClick={toggleMenu}
                    >
                        &#9776;
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="flex flex-col sm:hidden bg-gray-800 p-4 rounded absolute right-0 top-[4rem]">
                        <NavLink
                            className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse mb-4"
                            to={"/creative"}
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse mb-4"
                            to={"/creative/about"}
                            onClick={toggleMenu}
                        >
                            About
                        </NavLink>
                        <NavLink
                            className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse mb-4"
                            to={"/creative/contact"}
                            onClick={toggleMenu}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                )}

                <div className="hidden sm:flex items-center justify-center space-x-10">
                    <NavLink
                        className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse"
                        to={"/creative"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse"
                        to={"/creative/about"}
                    >
                        About
                    </NavLink>
                    <NavLink
                        className="text-[#98ec65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse"
                        to={"/creative/contact"}
                    >
                        Contact Us
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;