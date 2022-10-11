/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "styles/App.css";

import { setFavorites } from "utils/redux/reducers/reducer";
import { WithRouter } from "utils/Navigations";

import Container from "components/Layout";
import {Cards} from "components/Cards";
import Loading from "components/Loading";
import { ButtonsLoad } from "components/Buttons";

import Swal from "sweetalert2";

function App (props) {
  const dispatch = useDispatch ();
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get (
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
      )
      .then ((res) => {
        const { results } = res.data;
        const newPage = page + 1;
        const temp = [...datas];
        temp.push(...results);
        setDatas(temp);
        setPage(newPage);
      })
      .catch ((err) => {
        alert(err.toString());
      })
      .finally (() => {
        setLoading(false);
      });
  }

  function fetchPopular() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
    )
      .then((response) => response.json())
      .then((res) => {
        const { results } = res;
        const newPage = page + 1;
        const temp = [...datas];
        temp.push(...results);
        setDatas(temp);
        setPage(newPage);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleFav (movie) {
    const getMovies = localStorage.getItem("favMovies");

    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      const movieExist = parsedMovies.find(item => item.id === movie.id);

      /*
      cek film yang diinputkan ada di local storage atau tidak (saran menggunakan method .find)
      if movie.id === data.id

      - kalau gak ada, push ke parsedMovies
      - kalau ada, kasih alert (film sudah ditambahkan sebelumnya)
      */
      
      if (movieExist) {
        Swal.fire("Movies are already in favorites!");
      } else {
        parsedMovies.push(movie);
        
      const temp = JSON.stringify(parsedMovies);
      dispatch(setFavorites(parsedMovies));
      localStorage.setItem("favMovies", temp);
      Swal.fire("Movies Added to Favorites!");
      }

    } else {
      const temp = JSON.stringify([movie]);
      dispatch(setFavorites([movie]));
      localStorage.setItem("favMovies", temp);
      Swal.fire("Movies Added to Favorites!");
    }
  }

    return (
      <Container>
        <div className="w-full flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 my-4">
          {loading
              ? skeleton.map(
                  (item) => <Loading key={item} /> // Self Closing tag
                )
            : datas.map((data) => (
              <Cards
              key = {data.id}
              image = {data.poster_path}
              title = {data.title}
              onNavigate={() => props.navigate(`/detail/${data.id}`)}
              addFavorite={() => handleFav(data)}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center py-5">
            <div>
            <ButtonsLoad label="Load More" onClick={() => fetchData()} />
            </div>
          </div>
        </div>
      </Container>
    );
};

export default WithRouter(App);