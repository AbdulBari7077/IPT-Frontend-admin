import React from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import AdminHome from './Components/AdminHome/AdminHome'
import UserList from './Components/UserList/UserList'
import { BrowserRouter , Routes ,Route ,Navigate } from "react-router-dom";
import MovieList from './Components/MovieList/MovieList';
import NewMovie from './Components/NewMovie/NewMovie';
import EditMovie from './Components/EditMovie/EditMovie';

export const App = () =>{
  return (
    <BrowserRouter>
      <Header/>
      <div className="main" id='app'>
        <Sidebar/>
        <Routes >
          <Route path="/" element={<Navigate replace to="/admin" />} />
          <Route path='/admin' element={<AdminHome/>} />
          <Route path='/admin/users' element={<UserList/>} />
          <Route path='/admin/movies' element={<MovieList/>} />
          <Route path='/admin/newMovie' element={<NewMovie/>} />
          <Route path='/admin/editMovie/:movieId' element={<EditMovie/>} />
        </Routes >
      </div>
    </BrowserRouter>
  );
}