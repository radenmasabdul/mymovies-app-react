import React, { Component } from 'react'
import Container from '../components/Layout';
import {WithRouter} from "../utils/Navigations"
import axios from 'axios';

class DetailsMovies extends Component {

  state = {
    data : {},
    loading : true,
  };

  componentDidMount () {
    this.fetchData();
  }

  fetchData () {
    const { id_movie } = this.props.params;
    axios
    .get (`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    .then ((res) => {
      const { data } = res;
      this.setState({ data });
    })
    .catch((err) => {
      alert(err.toString());
    })
    .finally (()=> {
      this.setState({ loading : false});
    })
  }

  render() {
    return (
      <Container>
        <div className="max-w-7xl mx-auto mt-8">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 px-20">
              <img src={`https://image.tmdb.org/t/p/w500${this.state.data?.poster_path}`} alt={this.props.title} />
            </div>

            <div className="w-full md:w-1/2 p-4 border-dashed border-2 border-color-black ">
              <p className="font-bold text-4xl max-md mx-auto border-b-2 border-color-black">{this.state.data?.original_title}</p>
              <p className="font-bold text-md max-md mx-auto my-5"> {this.state.data?.overview}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Release Date : {this.state.data?.release_date}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Duration : {this.state.data?.runtime} minute</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Language : {this.state.data?.original_language}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Status : {this.state.data?.status}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Popularity : {this.state.data?.popularity}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Tagline : {this.state.data?.tagline}</p>
            </div>

          </div>
        </div>

      </Container>
    );
  }
};

export default WithRouter(DetailsMovies);