import React from "react";
import NewMovie from "../NewMovie/NewMovie";
import './EditMovie.css'

const EditMovie = ({ id }) => {
    return (
        <div className="new__movie" >
            <h2 className="edit_movie">Edit Movie</h2>
            <div className="movie-details-heading">
                <div className="edit-movie-heading">
                    <img className="Thumbnail-Image" src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="" />
                    <h3 className="Movie-Name">
                        Breaking Bad 2
                    </h3>
                </div>
                <div className="movie-Details">
                    <h5>
                        <strong>
                            ID : &nbsp;
                        </strong>
                        3221321321321312
                    </h5>
                    <h5>
                        <strong>
                            Genre : &nbsp;
                        </strong>
                        horror , Action
                    </h5>
                    <h5>
                        <strong>
                            Year : &nbsp;
                        </strong>
                        2004
                    </h5>
                    <h5>
                        <strong>
                            Age Limit : &nbsp;
                        </strong>
                        14
                    </h5>
                    <h5>
                        <strong>
                            Poster Image : &nbsp;
                        </strong>
                        dasdasdasdas.png
                    </h5>
                </div>
                <div>

                </div>
            </div>
            <NewMovie parent={'EditMovie'} />
        </div>
    )
}

export default EditMovie;