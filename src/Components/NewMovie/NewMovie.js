/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FileUploader from "../FileUploader/FileUploader";
import './NewMovie.css';
// import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {AgeRatingOptions, GenreOptions} from '../../utils/dropdown'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { useNavigate } from "react-router-dom";

const NewMovie = ({ parent }) => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!JSON.parse(localStorage.getItem('userData'))) {
        navigate('/admin/login');
      }
    }, []);
    const animatedComponents = makeAnimated();
    const update = 'Update Movie';
    const create = 'Upload Movie '
    const [data, setData] = useState({});
    const [releaseYear, setReleaseYear] = useState();
    const [duration, setDuration] = useState();
    const formData = new FormData();
    function AddDataField(key, value) {
        setData({ ...data, [key]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const { MovieTitle, Genre, Imdb, Discription, AgeRating } = document.forms[0];
        const Genrelist =[];
        for(let i in Genre){
            if(Genre[i].value)
            {
                Genrelist.push(Genre[i].value)
            }
        }
        setData({ ...data, MovieTitle: MovieTitle.value, Genre: Genrelist, Imdb: Imdb.value, Discription: Discription.value, AgeRating: AgeRating.value,Year: releaseYear, Duration: duration  });
    }
    function handleDate(dateyear){
        setReleaseYear((new Date(dateyear)).getFullYear())
    }
    function handleDuration(duration){
        setDuration((new Date(duration)).toLocaleTimeString())
    }
    useEffect(() => {
        Object.entries(data).forEach(([key, value]) => {
            formData.append([key], value)
        });
        for (var key of formData.entries()) {
            console.log(key[0] + ': ' + key[1])
        }
        // console.log(data)
    },[data]);
    return (
        <div className="new__movie">
            {
                parent !== 'EditMovie' ? <h1 className="new__user__title">New Movie</h1> : ''
            }
            <form className="new__user__form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="new__user__item">
                    <label htmlFor="">MovieTitle</label >
                    <input  type="text" placeholder="John" name="MovieTitle" required />
                </div>
                <div className="new__user__item">
                    <label htmlFor="">Thumbnail</label>
                    <FileUploader type={'image'} name={'Thumbnail'} AddDataField={AddDataField} />
                </div>
                <div className="new__user__item">
                    <label htmlFor="">Trailer </label>
                    <FileUploader type={'video'} name={'Trailer'} AddDataField={AddDataField} />
                </div>
                <div className="new__user__item">
                    <label >Poster </label>
                    <FileUploader type={'image'} name={'Poster'} AddDataField={AddDataField} />
                </div>
                <div className="new__user__item">
                    <label htmlFor="">Genre</label>
                    <Select
                    styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          height: "50px",
                          borderColor:"gray",

                        }),
                      }}
                        name='Genre'
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        isMulti
                        options={GenreOptions}
                        required
                    />
                </div>
                <div className="new__user__item">
                    <label htmlFor="">Imdb</label>
                    <input type="number" placeholder="4.5" name='Imdb' step="0.1" required />
                </div>

                <div className="new__user__item">
                    <label htmlFor="">Discription</label>
                    <textarea  className="textareaform" style={{height:"56%"}} type="" placeholder="Enter Discription here..." name='Discription' required />
                </div>
                {/* dropdown */}
                <div className="new__user__item">
                    <label htmlFor="">Age Rating </label>
                    <Select
                     styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          height: "50px",
                          borderColor:"gray",

                        }),
                      }}
                        name='AgeRating'
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        options={AgeRatingOptions}
                        required
                    />
                </div>
                <div className="new__user__item">
                    <label htmlFor="">Release Year</label>
                    <Datetime className="yearSelector" name="Year" onChange={handleDate} inputProps={{placeholder:' YYYY'}} dateFormat="YYYY" timeFormat={false}/>
                </div>
                <div className="new__user__item">
                    <label htmlFor="">Duration</label>
                    <Datetime className="yearSelector" onChange={handleDuration} inputProps={{placeholder:' HH:MM:SS'}} name="Duration" dateFormat={false} timeFormat='hh:mm:ss' />
                </div>
                <div className="submit__btn__div">
                    <button type="submit" className="new__user__btn">{parent ? update : create}</button>
                </div>
            </form>
        </div>
    );
}

export default NewMovie;