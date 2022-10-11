import React, { useContext } from "react";

import SearchBar from "./SearchBar";
import { FaSun } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "utils/context";

const Layout = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { isLight, setIsLight } = useContext(ThemeContext);
  
    return (
      <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-color-aqua sticky top-0 z-50">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <button className="font-jakarta-sans text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                My Movies
              </button>
            </Link>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars></FaBars>
            </button>
          </div>

          <div className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-hamburger">

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <span className="ml-2">
                      <SearchBar/>
                    </span>
                </button>
              </li>

              <li className="nav-item">
                <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                onClick={() => setIsLight(!isLight)}>
                  <span className="ml-2">
                    <FaSun className={`text-white text-4xl ${isLight ? "" : "hidden"}`}/>
                    <FaMoon className={`text-white text-4xl ${isLight ? "hidden" : ""}`}/>
                  </span>
                </button>
              </li>

              <li className="nav-item">
                <Link to="/Favorites">
                  <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <span className="ml-2">
                      <MdFavorite className="text-white text-4xl"/>
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full h-full overflow-auto bg-white dark:bg-bg-dark-custom">{children}</div>
    </>
    );
};

export default Layout;