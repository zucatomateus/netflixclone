import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, { useEffect } from 'react';
import { getMovies } from '../Api';
import "./Banner.css";
import categories from "../Api";

export default function Banner() {
    const [movie, setMovie] = React.useState ({});

    const fecthRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name == "netflixOriginals"
            );
            const data = await getMovies (netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies(randomIndex))
        }   catch (error) {
            console.log("Banner fetchRandomMovie error: ", error);
        }
    };

    useEffect (() => {
        fecthRandomMovie();
    }, []);
  
    return (
    
    <header 
        className="banner-container" 
        syle={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center"
        }}
    >

    <div className="banner-content">
        <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name }
        </h1>

        <div className="banner-buton-container">
            <div className="banner-botton">

            </div>  
            <div className="banner-botton">
                    
            </div>
        </div>
        <div className="banner-description">

        </div>
    </div>
    </header>
)};
