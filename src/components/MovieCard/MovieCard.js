import React from 'react'
import "./MovieCard.css"
import StarRatingComponent from 'react-star-rating-component';



const MovieCard = ({movie}) => {
    return (
        <div>
            <div className="wrapper">
                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>{movie.title}</h1>
                            <div className="card_cat">
                                <StarRatingComponent  editing={false} value={movie.rating}  />
                            </div>
                            <p className="disc">{movie.description}</p>
                            <a href="https://www.imdb.com/title/tt4912910/" >Read More</a>
                            <div className="social-btn">
                                {/* WATCH TRAILER*/}
                                <button>
                                    <i className="fas fa-play" /> SEE TRAILER
                                </button>
                                {/* GET*/}
                                <button>
                                    <i className="fas fa-download" /> DOWNLOAD
                                </button>
                                <button>
                                    <i className="fas fa-thumbs-up" /> 97%
                                </button>
                                <button>
                                    <i className="fas fa-star" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card_right">
                        <div className="img_container">
                            <img src={movie.posterUrl} alt={movie.title} />
                        </div>
                        <div className="play_btn">
                            <a href="https://www.imdb.com/title/tt4912910/">
                                <i className="fas fa-play-circle" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
