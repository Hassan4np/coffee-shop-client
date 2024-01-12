
import { Link } from "react-router-dom";
import "./Navbar.css"
import { FaSearch, FaShoppingBag } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <div className="navbar   opacity-75 max-w-screen-xl z-10 h-[104px] text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Menu</a></li>
                            <Link to="/products"><li><a>Products</a></li></Link>
                            <li><a>News</a></li>
                            <li><a>lOCATIONS</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">BARTONS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"><li><a>Home</a></li></Link>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <Link to="/products"><li><a>Products</a></li></Link>
                        <li><a>News</a></li>
                        <li><a>Location</a></li>
                        <Link to="/checkout"><li><a>Checkout</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex p-5 bg-white rounded-full w-[70px] h-[40px] px-3 py-3">
                        <FaSearch className="text-lg mr-5" />
                        <FaShoppingBag className="text-lg " />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;