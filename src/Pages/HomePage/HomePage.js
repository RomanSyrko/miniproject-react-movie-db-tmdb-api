import {useEffect, useState} from "react";

import {movieService} from "../../Services";
import {Movies} from "../../Components";
import {PageButtons} from "../../PageButtons/PageButtons";
import './HomePage.css'

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const [pages, setPages] = useState(0);


    useEffect(() => {
        movieService.getAll(1).then(({data}) => {
            setPages(data.total_pages > 20 ? 20 : data.total_pages);
            setMovies(data.results);
        })
    }, [])

    const onPageClick = (page) => {
        movieService.getAll(page).then(({data}) => {
            setMovies([...data.results]);
        })
    };

    return (
        <div>
            <div className={"wrap"}>
                {movies.map(movie => <Movies key={movie.id} movie={movie}/>)}
            </div>
            <PageButtons onPageClick={onPageClick} pages={pages}/>
        </div>
    );
};


export {HomePage};