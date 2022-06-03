import {useEffect, useState} from "react";

import {movieService} from "../../Services";
import {Movies} from "../../Components";
import './HomePage.css'
import {Reducer} from "../../Reducer/Reducer";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll().then(({data}) => setMovies(data.results))
    }, [])

    return (
        <div>
            <div className={"wrap"}>
                {movies.map(movie => <Movies key={movie.id} movie={movie}/>)}
            </div>
            <Reducer/>
        </div>
    );
};


export {HomePage};