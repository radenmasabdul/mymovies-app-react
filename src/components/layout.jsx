import React from "react";

import SearchBar from "./SearchBar";
import { FaSun } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

function Layout (props) {
    return (
      <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3 sticky top-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <button className="font-jakarta-sans text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                My Movies
              </button>
            </Link>
          </div>

          <div>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <span className="ml-2">
                      <SearchBar></SearchBar>
                    </span>
                </button>
              </li>

              <li className="nav-item">
                <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <span className="ml-2">
                    <FaSun className="text-white text-4xl"></FaSun>
                  </span>
                </button>
              </li>

              <li className="nav-item">
                <Link to="/Favorites">
                  <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <span className="ml-2">
                      <MdFavorite className="text-white text-4xl"></MdFavorite>
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full h-full overflow-auto">{props.children}</div>
    </>
    );
};

export default Layout;
