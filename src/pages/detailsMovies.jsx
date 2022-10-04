import React, { Component } from 'react';
import "../styles/App.css";

class DetailsMovies extends Component {
  render() {
    return (
      <div class="md:container md:mx-auto border-2 border-indigo-600">
        <h1 className="text-center border-b-2 border-indigo-500"> Detail Movies </h1>
        <div class="flex flex-wrap ">
          <div className="border-r-2">
              <img src="https://upload.wikimedia.org/wikipedia/id/a/ad/Naruto_-_Shippuden_DVD_season_1_volume_1.jpg" alt="naruto"></img>
          </div>
          <div>
            <h5 className="text-left"> Genre : </h5>
                <h5 className="text-left"> Release Date : </h5>
                <h5 className="text-left"> Duration : </h5>
                <h5 className="text-left"> Companies : </h5>
                <h5 className="text-left"> Status : </h5>
                <h5 className="text-left"> Original Language :</h5>
                <h5 className="text-left"> Overview :</h5>
              </div>
          </div>
        </div>
    )
  }
}

export default DetailsMovies;