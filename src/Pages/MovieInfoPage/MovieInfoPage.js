import {useEffect, useState} from "react";

import {movieService} from "../../Services";
import './MovieInfoPage.css'

const MovieInfoPage = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const movie_id = urlParams.get('movie_id')

    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        movieService.getMovieDetails(movie_id)
            .then(({data}) => {
                setMovieDetails({...data});
            })
    }, [movie_id])

    return (
        <div className={"MovieInfoPage"}>
            <h3 className={"colorText"}>{movieDetails.title}</h3>
            <div className={"DFlexDetails"}>
                <div>
                    <h2 className={"colorText"}>Overview</h2>
                    <p className={"textOverview colorText"}>{movieDetails.overview}</p>
                    <div className={"DFlexDetails space"}>
                        <div>
                            <p className={"colorText"}>Original Language: {movieDetails.original_language}</p>
                            <p className={"colorText"}>Budget: {movieDetails.budget}$</p>
                        </div>
                        <div className={"DFlexDetails"}>
                            <img className={"imdb"}
                                 src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                                 alt={movieDetails.vote_average}/>
                            <h2 className={"colorText"}>{movieDetails.vote_average}</h2>
                        </div>
                    </div>
                </div>
                <img src={`https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`} alt={movieDetails.title}/>
            </div>
        </div>
    );
};

export {MovieInfoPage};