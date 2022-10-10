import React from "react";

function ButtonsFav (props) {
    return (
      <button
        className="p-3 border rounded-lg bg-color-grey text-white text-center font-jakarta-sans font-bold cursor-pointer"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
};

function ButtonsLoad (props) {
    return (
        <button className="p-3 border rounded-lg bg-gray-500 text-white text-center font-jakarta-sans font-bold cursor-pointer"
        onClick={props.onClick}>
            Load More {props.btnLoad}
        </button>
    );
};

export { ButtonsFav, ButtonsLoad };