import {axiosService} from "./axios.service";

import {urls} from "../Constants";

const movieService = {
    getAll: (page) => axiosService.get(`${urls.popularMovie}?page=${page}`),
    getOne: (id) => axiosService.get(`${urls.movieDetails}/${id}`)
}

export {movieService}