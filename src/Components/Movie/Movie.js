import {Link} from "react-router-dom";
import "./Movie.css"

const Movie = ({movie}) => {

    const {title, poster_path} = movie;

    return (
        <Link to={"movieDetails"}>
            <div>
                <p className={"title"}> {title}</p>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title}/>
            </div>
        </Link>
    );
};


export {Movie};