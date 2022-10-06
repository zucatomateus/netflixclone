<<<<<<< HEAD
import "./Row.css";
import React, { useEffect } from 'react';
import { getMovies } from '../Api';

const imageHost = "http://image.tmdb.org/t/p/original/";
function Row ({ title, path }) {
    const [movies, setMovies] = React.useState([]);

    const fetchMovies = async (_path ) => {
        try {
            const data = await getMovies(_path);
            console.log("data", data);
            setMovies(data?.results);
        } catch (error) {
            console.log("fetchMovies error:", error);
        }
    };

    useEffect(() => {
      fetchMovies(path);
    }, [path]);
    

    return (
    <div className="row-container">
        <h2 className="row-header">{title}</h2>
        <div className="row-cards">
            {movies?.map((movie) => {
                return (
                    <img
                    className="movie-card"
                    key={movie.id}
                    src={`${imageHost}${movie.poster_path}`}
                    alt={movie.name}
                    ></img>
                );
            })}
        </div>
    </div>
    );
=======
import React, { useEffect } from 'react';
import { getMovies } from '../Api';

function Row ({ title, path }) {
    const [movies, setMovies] = React.useState([]);

    const fetchMovies = async (_path ) => {
        try {
            const data = await getMovies(_path);
            console.log("data", data);
            setMovies(data?.results);
        } catch (error) {
            console.log("fetchMovies error:", error);
        }
    };

    useEffect(() => {
      fetchMovies(path);
    }, [path]);
    

    return <div>Row</div>
>>>>>>> b55964899f85775a7e6fb3e08f4df66dca0557b3
}

export default Row;