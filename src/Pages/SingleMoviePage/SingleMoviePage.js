import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {MovieDetails} from "../../Components";
import {movieService} from "../../Services";

const SingleMoviePage = () => {
    const [movie, setMovie] = useState([]);
    const {userID} = useParams();
    useEffect(() => {
        movieService.getById(userID).then(({data}) => setMovie(data))
    }, [userID])

    return (

        <div>
            {movie && <MovieDetails movie={movie}/>}
        </div>

    );
};

export {SingleMoviePage};