import React, { Component } from 'react';
import { ButtonsFav } from './Buttons';
import { Link } from "react-router-dom";

class Cards extends Component {

  render() {
    return (
          <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border">
            <div className="w-full h-full" onClick={this.props.onNavigate}>
            <img src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.title} />
            <p className="text-color-black font-jakarta-sans text-center py-3">{this.props.title}</p>
            </div>
            <div className="flex flex-wrap justify-center">
            <Link to="/favorites">
            <ButtonsFav label="Add to Favorite" 
          onClick={this.props.addFavorite}/>
            </Link>
            </div>
          </div>
    )
  }
}

export default Cards;