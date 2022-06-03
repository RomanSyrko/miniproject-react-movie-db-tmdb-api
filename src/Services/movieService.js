import {axiosService} from "./axios.service";

import {urls} from "../Constants";

const movieService = {
    getAll: () => axiosService.get(urls.popularMovie),
    getOne: (id) => axiosService.get(`${urls.movieDetails}/${id}`)
}

export {movieService}