import React from "react";
import NewMovie from "../NewMovie/NewMovie";
import '../NewMovie/NewMovie.css';
import './EditMovie.css'

const EditMovie =({id})=> {
        return (
            <div className = "new__movie">
                <h1 className="edit_movie">Edit Movie</h1>
                <div className="movie-details-heading">
                   <div className="edit-movie-heading">
                    <img className="Thumbnail-Image" src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="" />
                    <h2 className="Movie-Name">
                        Breaking Bad 2
                    </h2>
                   </div>
                   <div className="movie-Details">
                    <h3>
                        ID : 3221321321321312
                    </h3>
                    <h3>
                        Genre : horror , Action
                    </h3>
                    <h3>
                        Year : 2004
                    </h3>
                    <h3>
                        Age Limit : 14
                    </h3>
                    <h3>
                        Poster Image : dasdasdasdas.png
                    </h3>
                   </div>
                  
                   <div>

                   </div>
                </div>
                <NewMovie parent={'EditMovie'}/>
            </div>
        )
}

export default EditMovie;