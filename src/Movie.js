import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster}){
    return (
            <>
                <h5>{title, year}</h5>
                <div>{summary}</div>
                <img src={poster} />
            </>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;