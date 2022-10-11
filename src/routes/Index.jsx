import React, { useState, useMemo, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "pages/Index";
import DetailMovies from "pages/DetailsMovies";
import Favorites from "pages/Favorites";

import { ThemeContext } from "utils/context";
import { setFavorites } from "utils/redux/reducers/reducer";

function App () {
  const dispacth = useDispatch ();
  const [isLight, setIsLight] = useState (true);
  const theme = useMemo (() => ({ isLight, setIsLight}), [isLight]);

  useEffect (() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  useEffect (() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispacth(setFavorites(JSON.parse(getMovies)));
    }
  }, []);

    return (
      <ThemeContext.Provider value={theme} >
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/detail/:id_movie" element={<DetailMovies /> } />
          <Route path="*" element={<div>Error 404 Not Found</div>} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
};

export default App;