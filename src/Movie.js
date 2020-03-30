import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//스테이트가 없어서 클래스 말고 함수만!
function Movie({id, year, title, summary, poster, genres}) {
    return (
    <div className="movie">
        <div className="movie__poster">
            <img src={poster} alt={title} title={title} />
        </div>

        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">{genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}</ul>
            <p className="movie__summary">{summary}</p>
        </div>
        
        
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;