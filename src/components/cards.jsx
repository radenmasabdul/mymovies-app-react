import React from "react";
import { ButtonsFav } from "./Buttons";
import { Link } from "react-router-dom";

function Cards (props) {

    return (
          <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border">
            <div className="w-full h-full" onClick={props.onNavigate}>
              <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={props.title} />
                <p className="text-color-black font-jakarta-sans text-center py-3 dark:text-white">{props.title}</p>
            </div>

            <div className="flex flex-wrap justify-center">
              <Link to="/favorites">
                <ButtonsFav label="Add to Favorite" onClick={props.addFavorite}/>
              </Link>
            </div>
          </div>
    );
};

export default Cards;