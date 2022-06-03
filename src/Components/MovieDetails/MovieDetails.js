const MovieDetails = ({movie}) => {

    const {title, poster_path} = movie;
    return (
        <div>
            Hello!!
            <h3 className={"title"}> {title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
        </div>
    );
};

export {MovieDetails};