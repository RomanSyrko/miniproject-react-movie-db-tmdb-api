const MovieDetails = ({movie}) => {
    const {title, poster_path} = movie;
    return (
        <div>
            Hello!!
            <p className={"title"}> {title}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
        </div>
    );
};

export {MovieDetails};