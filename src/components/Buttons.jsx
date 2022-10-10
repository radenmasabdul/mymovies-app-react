import React from "react";

function ButtonsFav (props) {
    return (
      
      <button className="p-3 border rounded-lg bg-color-white text-rose-600 text-center font-jakarta-sans font-bold cursor-pointer"
      onClick={props.onClick}>
        {props.label}
      </button>
    );
};

function ButtonsLoad (props) {
    return (
        <button className="p-3 border rounded-lg bg-color-white text-rose-600 text-center font-jakarta-sans font-bold cursor-pointer"
        onClick={props.onClick}>
            Load More {props.btnLoad}
        </button>
    );
};

export { ButtonsFav, ButtonsLoad };