import {useEffect, useState} from "react";

import {movieService} from "../../Services";
import {MovieDetails} from "../../Components";

const MovieInfoPage = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        movieService.getOne().then(({data}) => setMovie(data))
    }, [])

    return (
        <div>
            {movie && <MovieDetails movie={movie}/>}
        </div>

    );
};

export {MovieInfoPage};