import {NavLink} from "react-router-dom";

import './Movies.css'

const Movies = ({movie}) => {

    const {title, poster_path} = movie;

    return (
        <NavLink to={'details'} className={"MoviesMargin box"}>
            <div className={"MoviesCenter"}>
                <p className={"MoviesTitle"}> {title}</p>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title}/>
            </div>
        </NavLink>
    );
};


export {Movies};