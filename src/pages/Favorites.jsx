/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { WithRouter } from "utils/Navigations";
import { useTitle } from "utils/hooks/useTitle";

import Container from "components/Layout";
import Loading from "components/Loading";
import {CardsFavorite} from "components/Cards";
import Swal from "sweetalert2";
import { setFavorites } from "utils/redux/reducers/reducer";

function Favorites (props) {
  const favorites = useSelector ((state) => state.data.favorites);
  const dispatch = useDispatch ();
  useTitle("My Favorite Movies");
  
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
        dispatch(setFavorites([movie]));
        localStorage.setItem("favMovies", JSON.stringify(deleteMovies));
        dispatch(setFavorites(deleteMovies));
        localStorage.removeItem(deleteMovies);

        Swal.fire(
          'Deleted!',
          'Your file has been deleted!',
          'success'
        )
      }
    })
  };

    return (
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
        {favorites.map((data) => (
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
