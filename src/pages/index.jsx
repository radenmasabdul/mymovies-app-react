import { Component } from "react";
import "../styles/App.css";
import axios from "axios";

import { WithRouter } from "../utils/Navigations";

import Layout from "../components/Layout";
import Cards from "../components/Cards";
import { ButtonsLoad } from "../components/Buttons";

class App extends Component {
  state = {
    title: "NOW PLAYING",
    datas: [],
    loading: true,
    page : 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState ({loading : true});
    axios
      .get (
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${this.state.page}`
      )
      .then ((res) => {
        const { results } = res.data;
        const newPage = this.state.page + 1;
        const temp = [...this.state.datas];
        temp.push(...results);
        this.setState({datas : temp, page : newPage});
      })
      .catch ((err) => {
        console.log(err);
      })
      .finally (() => {
        this.setState ({ loading : false});
      });
  }

  fetchPopular() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${this.state.page}`
    )
      .then((response) => response.json())
      .then((res) => {
        const { results } = res; // destructuring
        // const results = res.data.results;
        const newPage = this.state.page + 1;
        const temp = [...this.state.datas]; // spread operator
        temp.push(...results); // spread operator
        this.setState({ datas: temp, page: newPage });
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  handleFav(movie) {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      /*
      cek film yang diinputkan ada di local storage atau tidak (saran menggunakan method .find)
      if movie.id === data.id

      - kalau gak ada, push ke parsedMovies
      - kalau ada, kasih alert (film sudah ditambahkan sebelumnya)
      */
      parsedMovies.push(movie);
      const temp = JSON.stringify(parsedMovies);
      localStorage.setItem("favMovies", temp);
    } else {
      const temp = JSON.stringify([movie]);
      localStorage.setItem("favMovies", temp);
    }
  }

  render() {
    return (
      <Layout>
        <div>
          <h1 className="text-color-black text-3xl font-jakarta-sans text-center py-5"> {this.state.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4">
            {this.state.datas.map((data) => (
              <Cards
              key = {data.id}
              image = {data.poster_path}
              title = {data.title}
              onNavigate={() =>
                this.props.navigate(`/detail/${data.id}`)
              }
              addFavorite={() => this.handleFav(data)}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center py-5">
            <div>
            <ButtonsLoad label="Load More" onClick={() => this.fetchData()} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default WithRouter(App);
