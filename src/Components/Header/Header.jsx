import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
         <li className="mr-6 font-extrabold text-green-400"><NavLink to={'/'}>Home</NavLink></li>
         <li className="font-bold text-green-400"><NavLink to={'/listed'}>Listed Books</NavLink></li>
         <li className="ml-6 font-bold text-green-400"><NavLink to={'/pages'}>Pages to Read</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
             <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        
                        {links}
                </ul>
                </div>
                <Link className="btn btn-ghost  text-xl btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold" to={'/'} >Book Vibe</Link>
             </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
                <div className="navbar-end">
                    <button className="btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold mr-2">Sign In</button>
                    <button className="btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;