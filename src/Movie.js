import React from "react";
import PropTypes from "prop-types";

//스테이트가 없어서 클래스 말고 함수만!
function Movie({id, year, title, summary, poster}) {
    return <h5>{title}</h5>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;