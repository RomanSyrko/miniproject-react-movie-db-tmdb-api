import {axiosService} from "./axios.service";

import {urls} from "../Constants";

const movieService = {
    getAllPopularMovie: (page) => axiosService.get(`${urls.popularMovie}?page=${page}`),
    getMovieDetails: (id) => axiosService.get(`${urls.movieDetails}/${id}`),
    getMoviesByGenre: (id) => axiosService.get(`${urls.getMoviesByGenre}?with_genres=${id}`),
    getGenres:() => axiosService.get(urls.genre)
}

export {movieService}