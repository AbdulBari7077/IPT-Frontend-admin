import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../../api/api";
import NewMovie from "../NewMovie/NewMovie";
import './EditMovie.css'

const EditMovie = ({ id }) => {
    const {movieId} = useParams();
    const [state, setState] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
      if (!JSON.parse(localStorage.getItem('userData'))) {
        navigate('/admin/login');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        async function fetchData() {
          const { data , status}  = (await getMovie(movieId)).data;
          console.log(data);
          if (status) {
              const movieData = {
                movieId: data.Movie.movieId,
                title: data.Movie.title,
                thumbnailUrl: data.Movie.thumbnailUrl,
                posterUrl :data.Movie.posterUrl,
                trailerUrl :data.Movie.trailerUrl,
                movieRating: data.Movie.movieRating,
                imdb: data.Movie.imdb,
                description: data.Movie.description,
                genres: data.Movie.genres.join(', '),
                year: data.Movie.year,
                duration: data.Movie.duration,
                rating : data.Movie.rating
              }
            setState(movieData);
          }
        }
        fetchData();
      }, []);
    return (
        <div className="new__movie" >
            <h2 className="edit_movie">Edit Movie</h2>
            <div className="movie-details-heading">
                <div className="edit-movie-heading">
                    <img className="Thumbnail-Image" src={state.thumbnailUrl} alt="" />
                    <h3 className="Movie-Name">
                        {state.title}
                    </h3>
                </div>
                <div className="movie-Details">
                    <h5>
                        <strong>
                            ID : &nbsp;
                        </strong>
                        {state.movieId}
                    </h5>
                    <h5>
                        <strong>
                            Genre : &nbsp;
                        </strong>
                       {state.genres}
                    </h5>
                    <h5>
                        <strong>
                            Year : &nbsp;
                        </strong>
                        {state.year}
                    </h5>
                    <h5>
                        <strong>
                            Age Limit : &nbsp;
                        </strong>
                        {state.movieRating}
                    </h5>
                    <h5>
                        <strong>
                            Poster Image : &nbsp;
                        </strong>
                        {state.posterUrl?.split("%2F")[2]?.split('?')[0]}
                    </h5>
                    <h5>
                        <strong>
                            Thumbnail Image : &nbsp;
                        </strong>
                        {state.thumbnailUrl?.split("%2F")[2]?.split('?')[0]}
                    </h5>
                    <h5>
                        <strong>
                            Trailer Image : &nbsp;
                        </strong>
                        {state.trailerUrl?.split("%2F")[2]?.split('?')[0]}
                    </h5>
                    <h5>
                        <strong>
                           Duration : &nbsp;
                        </strong>
                        {state.duration}
                    </h5>
                    <h5>
                        <strong>
                           Imdb : &nbsp;
                        </strong>
                        {state.imdb}
                    </h5>
                    <h5>
                        <strong>
                           User Rating : &nbsp;
                        </strong>
                        {state.rating}
                    </h5>
                </div>
                <div>

                </div>
            </div>
            <NewMovie parent={'EditMovie'} id={state.movieId}/>
        </div>
    )
}

export default EditMovie;