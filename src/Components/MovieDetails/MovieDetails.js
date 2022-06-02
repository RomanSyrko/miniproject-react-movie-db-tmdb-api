const MovieDetails = ({movie}) => {
    const {title, img} = movie;
    return (
        <div>
            <h3>title: {title}</h3>
            <h4>img: {img}</h4>
        </div>
    );
};

export {MovieDetails};