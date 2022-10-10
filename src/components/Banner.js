import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, { useEffect } from 'react';
import { getMovies } from '../Api';
import "./Banner.css";

export default function Banner() {
    const [movie, setMovies] = React.useState ({});
    const fecthRandomMovie = async (_path) => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name == " netflixOriginals"
            );
            const data = await getMovies (netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setMovie(movies(randomIndex))
        }   catch (error) {
            console.log("Banner fetchRandomMovie error: ", error);
        }
    };

    useEffect (() => {
        
    }, []);
  
    return <div>Banner</div>
}
