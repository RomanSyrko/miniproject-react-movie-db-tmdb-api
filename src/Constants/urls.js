const baseURL = process.env.REACT_APP_URL;

const urls = {
    popularMovie: `/movie/popular`,
    topRated: '/movie/top_rated',
    movieDetails: `/movie`,
    genre: '/genre/movie/list',
    getMoviesByGenre: 'discover/movie'
}

export default baseURL
export {
    urls
}