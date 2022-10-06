import React, { Component } from "react";

import { WithRouter } from "../utils/Navigations";

import Container from "../components/Layout";
import Cards from "../components/Cards"

export class Favorites extends Component {
  state = {
    title: "MY FAVORITE MOVIES",
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      this.setState({ datas: parsedMovies, loading: false });
    }
  }

  handleRemoveFav() {
    /*
    fungsi untuk menghapus film dari list favorite, clue-nya pake method filter.
    Setelah di filter, rubah state (this.state.datas) nya dengan yang sudah di filter dan juga localStorage.setItem lagi dengan value yang sudah di filter.
    */
  
    


  }

  render() {
    return (
      <Container>
        <h1 className="text-color-black text-3xl font-jakarta-sans text-center py-5"> {this.state.title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
          {this.state.datas.map((data) => (
                <Cards
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  onNavigate={() => this.props.navigate(`/detail/${data.id}`)}
                  addFavorite={() => this.handleRemoveFav(data)}
                /> // <~ Self closing tag
              ))}
        </div>
      </Container>
    );
  }
}

export default WithRouter(Favorites);
