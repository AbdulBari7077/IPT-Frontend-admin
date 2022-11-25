import React from 'react';
import './App.css'
import AdminHome from './Components/AdminHome/AdminHome'
import UserList from './Components/UserList/UserList'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MovieList from './Components/MovieList/MovieList';
import NewMovie from './Components/NewMovie/NewMovie';
import EditMovie from './Components/EditMovie/EditMovie';
import Login from './Components/Login/Login';
import { Wrapper } from './Wrapper';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/admin" />} />
        <Route path='/admin' element={ <Wrapper element={<AdminHome/>} />}/>
        <Route path='/admin/users' element={<Wrapper element={<UserList />} />}/>
        <Route path='/admin/movies' element={<Wrapper element={<MovieList />} />}/>
        <Route path='/admin/newMovie' element={<Wrapper element={<NewMovie />} />}/>
        <Route path='/admin/editMovie/:movieId' element={<Wrapper element={<EditMovie />} />}/>
        <Route path='/admin/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}