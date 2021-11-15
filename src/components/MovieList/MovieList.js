import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movieList}) => {
    return (
        <div>
            List
            {movieList.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export default MovieList