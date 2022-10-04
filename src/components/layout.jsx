import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div className="grid grid-flow-row auto-rows-max md:auto-rows-min">
        <nav className="w-full p-4 bg-color-brown sticky top-0 flex flex-col md:flex-row gap-2 items-center justify-between">
          <h1 className="text-white font-jakarta-sans text-4xl hover:text-color-grey md:auto-rows-min">Animeku</h1>
        </nav>
        <div className="w-full h-full overflow-auto">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
