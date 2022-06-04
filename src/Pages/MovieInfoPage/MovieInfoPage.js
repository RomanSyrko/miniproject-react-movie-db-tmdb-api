import './MovieInfoPage.css'
import {useEffect, useState} from "react";
import {movieService} from "../../Services";

const MovieInfoPage = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const movie_id = urlParams.get('movie_id')
    console.log(movie_id);

    const [movieDetails, setMovieDetails] = useState({});


    useEffect(() => {
        movieService.getMovieDetails(movie_id).then(({data}) => {
            setMovieDetails({...data});
        })
    }, [movie_id])

    console.log(movieDetails);

    return (
        <div>
            <h3>Title: {movieDetails.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title}/>
            <div>Overview: {movieDetails.overview}</div>
        </div>
    );
};

export {MovieInfoPage};