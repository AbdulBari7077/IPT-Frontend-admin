import React, { useEffect, useState } from 'react';
import './MovieList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteMovie, getAllMovies } from '../../api/api';

const MovieList = () => {
    const navigate = useNavigate();
    const [state, setState] = useState([]);
    function handleEdit(id){
        navigate(`/admin/editMovie/${id}`);
    }
    async function handleDelete(id){
        const response = await DeleteMovie(id);
        if(response.data.status)
        {
            console.log("MOVIE DELETED");
            window.location.reload(false);
            return;
        }
        return ;
    }
    useEffect(() => {
        async function fetchData() {
          const response = await getAllMovies();
          console.log(response, "RESPONSE")
          let movieList = [];
          if (response.data.status) {
            response?.data.data.Movies.map((movie) => {
              const movieRow = {
                id: movie.movieId,
                title: movie.title,
                thumbnailUrl: movie.thumbnailUrl,
                year: movie.year,
                duration: movie.duration,
                rating : movie.rating
              }
              return movieList.push(movieRow);
            })
            setState(movieList);
          }
        }
        fetchData();
      }, []);
    useEffect(() => {
      if (!JSON.parse(localStorage.getItem('userData'))) {
        navigate('/admin/login');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const columns = [
        { field: 'id', headerName: 'Movie Id', width: 90 },
        {
            field: 'thumbnailUrl', headerName: 'Movie Title ', renderCell: (cellValues) => {
                return (
                    <div className="movie__list__movie">
                        <img className="movie__list__img" src={cellValues.row.thumbnailUrl} alt={cellValues.row.title} />
                        {cellValues.row.title}
                    </div>
                )
            }, width: 200
        },
       
        {
            field: 'year',
            headerName: 'Year',
            width: 120,
        },
        {
            field: 'duration',
            headerName: 'Duration',
            width: 120,
        },
        {
            field: 'rating',
            headerName: 'User Rating',
            width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            renderCell: (cellValues) =>
            <>
                <button  className="btn" onClick={()=>handleEdit(cellValues.row.id)}>
                    <EditIcon className="movie__edit" />
                </button>
                <button  className="btn" onClick={()=>handleDelete(cellValues.row.id)}>
                    <DeleteOutlineIcon className="movie__delete" />
                </button>
            </>,
            width: 150,
        },
    ];


    return (
        <div className="movie__list">
            <DataGrid rows={state} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
        </div>
    )
}

export default MovieList;