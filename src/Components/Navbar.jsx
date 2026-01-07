import React from 'react';
import { NavLink } from 'react-router';
import githubIcon from '../assets/github.svg';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to="/home" className={({isActive}) => isActive ? "text-purple-600" : ""}>Home</NavLink></li>
                    <li><NavLink to="/apps" className={({isActive}) => isActive ? "text-purple-600" : ""}>Apps</NavLink></li>
                    <li><NavLink to="/installation" className={({isActive}) => isActive ? "text-purple-600" : ""}>Installation</NavLink></li>
          </ul>
        </div>
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <div className="text-blue-600 text-3xl font-bold">
              <img src="/src/assets/logo.png" alt="HERO.IO" className="h-8" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#642de3] to-[#9f62f2] bg-clip-text text-transparent">HERO.IO</span>
          </div>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 font-medium text-black">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-[#642de3] underline underline-offset-4 decoration-2" : "hover:text-[#642de3] transition-colors"
              }>Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "text-[#642de3] underline underline-offset-4 decoration-2" : "hover:text-[#642de3] transition-colors"
              }> Apps</NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? "text-[#642de3] underline underline-offset-4 decoration-2" : "hover:text-[#642de3] transition-colors"
              }>Installation</NavLink>
          </li>
        </ul>
       
      </div>
      <div className="navbar-end">
    <a 
        href="https://github.com" 
        className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] border-none text-white normal-case rounded-lg px-6 gap-2 flex items-center"><img src={githubIcon} alt="GitHub" className="w-5 h-5 invert" />Contribute
    </a>
</div>
    </div>
  );
};

export default Navbar;