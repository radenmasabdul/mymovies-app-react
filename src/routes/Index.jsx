import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Index";
import DetailMovies from "../pages/DetailsMovies";
import Favorites from "../pages/Favorites";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/detail/:id_movie" element={<DetailMovies /> } />
          <Route path="*" element={<div>Error 404 Not Found</div>} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        </BrowserRouter>
    );
  }
}

export default App;