const baseURL = process.env.REACT_APP_URL;

const urls = {
    popularMovie: `/movie/popular`,
    searchMovie: '/search/movie',
    movieDetails: `/movie`,
    genre: '/genre/movie/list',
    getMoviesByGenre: 'discover/movie'
}

export default baseURL
export {
    urls
}