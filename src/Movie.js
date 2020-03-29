import React from "react";
import PropTypes from "prop-types";

//스테이트가 없어서 클래스 말고 함수만!
function Movie({id, year, title, summary, poster}) {
    return (
    <div class="movies__movie">
        <div class="movie__poster">
            <img src={poster} alt={title} title={title} / >
        </div>
        
        <div class="movie__data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
        
        
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;