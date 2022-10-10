/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { WithRouter } from "utils/Navigations";
import { useTitle } from "utils/hooks/useTitle";

import Container from "components/Layout";
import Loading from "components/Loading";
import {CardsFavorite} from "components/Cards";
import Swal from "sweetalert2";

function Favorites (props) {
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  useTitle("My Favorite Movies");

  useEffect (() => {
    fetchData();
  }, []);

  function fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      setDatas(parsedMovies);
      setLoading(false);
    }
  }
  
  function handleRemoveFav(movie) {
    /*
    fungsi untuk menghapus film dari list favorite, clue-nya pake method filter.
    Setelah di filter, rubah state (this.state.datas) nya dengan yang sudah di filter dan juga localStorage.setItem lagi dengan value yang sudah di filter.
    */
    let deleteMovies = JSON.parse(localStorage.getItem("favMovies"));
    deleteMovies = deleteMovies.filter((item) => item.id !== movie.id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("favMovies", JSON.stringify(deleteMovies));
        localStorage.removeItem(deleteMovies);
        fetchData();

        Swal.fire(
          'Deleted!',
          'Your file has been deleted & reload your browser!',
          'success'
        )
      }
    })
  };

    return (
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
        {loading
          ? skeleton.map(
              (item) => <Loading key={item} />
            )
          : datas.map((data) => (
                <CardsFavorite
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  onNavigate={() => props.navigate(`/detail/${data.id}`)}
                  remove={() => handleRemoveFav(data)}
                />
              ))}
        </div>
      </Container>
    );
};

export default WithRouter(Favorites);
