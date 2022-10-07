import React, { useState, useEffect } from "react";

import {WithRouter} from "utils/Navigations";
import { useTitle } from "utils/hooks/useTitle";
import { useFetchGet } from "utils/hooks/useFetchGet";

import Container from "components/Layout";

const DetailsMovies = (props) => {
  const {id_movie} = props.params;
  const [data] = useFetchGet (`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos`);
  const [videos, setVideos] = useState ([]);
  useTitle(data.title);

  useEffect (() => {
    data.videos !== undefined && setVideos(data.videos.result)
  }, [data]);

    return (
      <Container>
        <div className="max-w-7xl mx-auto mt-8">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 px-20">
              <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={props.title} />
            </div>

            <div className="w-full md:w-1/2 p-4 border-dashed border-2 border-color-black ">
              <p className="font-bold text-4xl max-md mx-auto border-b-2 border-color-black">{data?.original_title}</p>
              <p className="font-bold text-md max-md mx-auto my-5"> {data?.overview}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Release Date : {data?.release_date}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Duration : {data?.runtime} minute</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Language : {data?.original_language}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Status : {data?.status}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Popularity : {data?.popularity}</p>
              <p className="font-bold text-md max-md mx-auto my-2"> Tagline : {data?.tagline}</p>
            </div>

          </div>
        </div>
      </Container>
    );
};

export default WithRouter(DetailsMovies);