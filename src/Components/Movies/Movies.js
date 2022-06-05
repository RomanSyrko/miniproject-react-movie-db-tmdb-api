import {NavLink} from "react-router-dom";

import './Movies.css'

const Movies = ({movie}) => {

    const {title, poster_path, id} = movie;

    return (
        <div>
            <NavLink to={`details?movie_id=${id}`} className={"DFlex"}>
                <div className={"MoviesCenter"}>
                    <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} className={"MoviesImg"}/>
                    <p className={"MoviesTitle"}> {title}</p>
                </div>
            </NavLink>
        </div>
    );
};


export {Movies};