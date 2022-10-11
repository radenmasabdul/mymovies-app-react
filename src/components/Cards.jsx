import React from "react";
import { ButtonsFav } from "./Buttons";
import "styles/App.css";

function Cards (props) {

    return (
          <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border ">
            <div className="w-full h-full" onClick={props.onNavigate}>
              <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={props.title} 
              className="card transition duration-500 hover:scale-125" />
                <p className="text-color-black font-jakarta-sans text-center py-3 dark:text-white">{props.title}</p>
            </div>

            <div className="flex flex-wrap justify-center">
                <ButtonsFav label="Favorites" onClick={props.addFavorite}/>
            </div>
          </div>
    );
};


function CardsFavorite (props) {

  return (
        <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border ">
          <div className="w-full h-full" onClick={props.onNavigate}>
            <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={props.title}
            className="card transition duration-500 hover:scale-125"/>
              <p className="text-color-black font-jakarta-sans text-center py-3 dark:text-white">{props.title}</p>
          </div>

          <div className="flex flex-wrap justify-center">
              <ButtonsFav label="Remove" onClick={props.remove}/>
          </div>
        </div>
  );
};
export {Cards,CardsFavorite};