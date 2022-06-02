import {useEffect, useState} from "react";

import {movieService} from "../../Services";
import {Movie} from "../../Components";


const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll().then(({data}) => setMovies(data.results))
    }, [])

    console.log(movies);
    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};


export {HomePage};