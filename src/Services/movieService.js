import {axiosService} from "./axios.service";

import {urls} from "../Constants";

const movieService = {
    getAll: () => axiosService.get(urls.popularMovie),
    getById: (id) => axiosService.get(`${urls.selectedMovie}/${id}`)

}

export {movieService}