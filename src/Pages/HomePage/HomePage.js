import {useEffect, useState} from "react";

import {movieService} from "../../Services";
import {Movies} from "../../Components";
import {PageButtons} from "../../Buttons";
import './HomePage.css'

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [pages, setPages] = useState(0);


    useEffect(() => {
        movieService.getAllPopularMovie(1).then(({data}) => {
            setPages(data.total_pages > 20 ? 20 : data.total_pages);
            setMovies(data.results);
        })
    }, [])

    const onPageClick = (page) => {
        movieService.getAllPopularMovie(page).then(({data}) => {
            setMovies([...data.results]);
        })
    };

    useEffect(() => {
        movieService.getGenres().then(({data}) => {
            setGenres([...data.genres]);
        })
    }, [])

    const getMoviesByGenre = (id) => {
        movieService.getMoviesByGenre(id).then(({data}) => {
            setPages(data.total_pages > 20 ? 20 : data.total_pages);
            setMovies([...data.results]);
        })
    }


    return (
        <div className={"wrap"}>
            <div className={"DFlex"}>
                {genres.map(genre =>
                    <button key={genre.id} onClick={() => getMoviesByGenre(genre.id)}>
                        {genre.name}
                    </button>)}
            </div>
            <div className={"DColumn"}>
                <div className={"MovieWrap"}>
                    {movies.map(movie => <Movies key={movie.id} movie={movie}/>)}
                </div>
                <PageButtons onPageClick={onPageClick} pages={pages}/>
            </div>
        </div>
    );
};


export {HomePage};