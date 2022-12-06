/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FileUploader from "../FileUploader/FileUploader";
import './NewMovie.css';
// import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { AgeRatingOptions, GenreOptions } from '../../utils/dropdown'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { useNavigate } from "react-router-dom";
import { AddMovie, EditMovie } from "../../api/api";
import CircularIndeterminate from "../Spinner/Spinner";


const NewMovie = ({ parent, id }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('userData'))) {
            navigate('/admin/login');
        }
    }, []);
    // useEffect(() => {

    // }, [loading]);
    const animatedComponents = makeAnimated();
    const update = 'Update Movie';
    const create = 'Upload Movie '
    // const [data, setData] = useState({});
    const [data, setData] = useState([]);
    // const [trailor, setTrailor] = useState();
    const [releaseYear, setReleaseYear] = useState();
    const [duration, setDuration] = useState();


    // function AddDataField(key, value){
    //     formData.append(key, value);
    //     // setData({ ...data, [key]: value });
    // }

    const handleSubmit = async (event) => {
        setLoading(true);
        const formData = new FormData();
        event.preventDefault();
        const { MovieTitle, Genre, Imdb, Description, AgeRating } = document.forms[0];
        // const Genrelist =[];
        if (Genre.length > 1) {
            for (let i in Genre) {
                if (Genre[i].value) {
                    // Genrelist.push(Genre[i].value)
                    formData.append("Genre[]", Genre[i].value);
                }
            }
        }
        else {
            formData.append("Genre[]", Genre.value);
        }
        formData.append("MovieTitle", MovieTitle.value);

        formData.append("Imdb", Imdb.value);
        formData.append("Description", Description.value);
        formData.append("AgeRating", AgeRating.value);
        formData.append("Year", releaseYear);
        formData.append("Duration", duration.split(" ")[0]);
        // formData.append( "TrailerFile",trailor);
        data.forEach(item => {
            for (let key in item) {
                // console.log(key, item[key])
                formData.append(key, item[key]);
            }
        })

        for (var key of formData.entries()) {
            console.log(key[0], key[1])
        }
        // const formDataAPI={ ...data, MovieTitle: MovieTitle.value, Genre: Genrelist, Imdb: Imdb.value, Description: Description.value, AgeRating: AgeRating.value,Year: releaseYear, Duration: duration  }
        // console.log(formDataAPI,"---------------------");
        let response = (!parent) ? await AddMovie(formData) : await EditMovie(formData, id);
        if (response?.data?.status) {
            setLoading(false)
            // console.log(response,"RESPONSE");
            if (parent) {
                return navigate(`/admin/editMovie/${id}`)
            }
            else {
                return navigate(`/admin/movies`)
            }
        }
        else{
            return alert(response?.data?.msg);
        }
        // setData({ ...data, MovieTitle: MovieTitle.value, Genre: Genrelist, Imdb: Imdb.value, Description: Description.value, AgeRating: AgeRating.value,Year: releaseYear, Duration: duration  });
        // console.log("hello")
    }
    function handleDate(dateyear) {
        setReleaseYear((new Date(dateyear)).getFullYear())
    }
    function handleDuration(duration) {
        setDuration((new Date(duration)).toLocaleTimeString())
    }

    return (
        <>

            <div className="new__movie">
                {
                    parent !== 'EditMovie' ? <h1 className="new__user__title">New Movie</h1> : ''
                }
                {
                    loading ? <CircularIndeterminate /> :
                        <form className="new__user__form" onSubmit={handleSubmit}>
                            <div className="new__user__item">
                                <label htmlFor="">MovieTitle</label >
                                <input type="text" placeholder="John" name="MovieTitle" required />
                            </div>
                            <div className="new__user__item">
                                <label htmlFor="">Thumbnail</label>
                                <FileUploader type={'image'} name={'ThumbnailFile'} setData={setData} data={data} />
                            </div>
                            <div className="new__user__item">
                                <label htmlFor="">Trailer </label>
                                <FileUploader type={'video'} name={'TrailerFile'} setData={setData} data={data} />
                            </div>
                            <div className="new__user__item">
                                <label >Poster </label>
                                <FileUploader type={'image'} name={'PosterFile'} setData={setData} data={data} />
                            </div>
                            <div className="new__user__item">
                                <label htmlFor="">Genre</label>
                                <Select
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            height: "50px",
                                            borderColor: "gray",

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
                                <input type="number" placeholder="4.5" name='Imdb' step="0.1"  min="0.1"  max="5.0" required />
                            </div>

                            <div className="new__user__item">
                                <label htmlFor="">Description</label>
                                <textarea className="textareaform" style={{ height: "56%" }} type="" placeholder="Enter Description here..." name='Description' required />
                            </div>
                            {/* dropdown */}
                            <div className="new__user__item">
                                <label htmlFor="">Age Rating </label>
                                <Select
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            height: "50px",
                                            borderColor: "gray",

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
                                <Datetime className="yearSelector" name="Year" onChange={handleDate} inputProps={{ placeholder: ' YYYY' }} dateFormat="YYYY" timeFormat={false} />
                            </div>
                            <div className="new__user__item">
                                <label htmlFor="">Duration</label>
                                <Datetime className="yearSelector" onChange={handleDuration} inputProps={{ placeholder: ' HH:MM:SS' }} name="Duration" dateFormat={false} timeFormat='hh:mm:ss' />
                            </div>
                            <div className="submit__btn__div">
                                <button type="submit" className="new__user__btn">{parent ? update : create}</button>
                            </div>
                        </form>
                }
            </div>

        </>

    );
}

export default NewMovie;