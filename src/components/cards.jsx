import React, { Component } from 'react';
import { ButtonsFav, ButtonsDetails } from './buttonsFav';

class Cards extends Component {

  render() {
    return (
          <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border">
                <img src={this.props.image} alt={this.props.title} />
                <p className="text-color-black font-jakarta-sans text-center py-3">{this.props.title}</p>
                
                <div className="flex flex-wrap justify-center">
                <div><ButtonsFav label={`${this.props.btnFav}`}/></div>
                <div><ButtonsDetails label={`${this.props.btnDetails}`}/></div>
                </div>
          </div>
    )
  }
}

export default Cards;