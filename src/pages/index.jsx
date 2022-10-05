import { Component } from "react";
import "../styles/App.css";
import axios from "axios";

import Layout from "../components/layout";
import Cards from "../components/cards";
import { ButtonsLoad } from "../components/buttonsFav";

class Home extends Component {
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
              judul = {data.title}
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

export default Home;
