import React, { Component } from 'react';

export class ButtonsFav extends Component {
  render() {
    return (
      <button
        className="p-3 border rounded-lg bg-gray-500 text-white text-center font-jakarta-sans font-bold cursor-pointer"
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export class ButtonsLoad extends Component {
  render() {
    return (
        <button className="p-3 border rounded-lg bg-gray-500 text-white text-center font-jakarta-sans font-bold cursor-pointer"
        onClick={this.props.onClick}>
            Load More {this.props.btnLoad}
        </button>
    )
  }
}

// export { ButtonsFav, ButtonsLoad };