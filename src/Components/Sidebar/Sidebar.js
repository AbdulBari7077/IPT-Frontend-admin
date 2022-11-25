import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate= useNavigate();
    function handleLogout(){
        localStorage.clear();
        navigate('/admin/login');
    }
    function itemClicked(event) {
        const sidebarItems = document.querySelectorAll(".sidebar__item")
        console.log(sidebarItems);
        for (const item of sidebarItems) {
            item.classList.remove("active");
        }
        event.target.classList.add("active");
    }
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Dashboard</h3>
                </div>
                <ul className="sidebar__items">
                    <Link to="/admin" className="link">
                        <li className="sidebar__item active" onClick={event => itemClicked(event)}>
                            <HomeIcon className="icon" /> Home
                        </li>
                    </Link>
                </ul>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Quick Menu</h3>
                </div>
                <ul className="sidebar__items">
                    <Link to="/admin/users" className="link">
                        <li className="sidebar__item" onClick={event => itemClicked(event)}>
                            <PeopleIcon className="icon" /> Users
                        </li>
                    </Link>
                    <Link to="/admin/movies" className="link">
                        <li className="sidebar__item" onClick={event => itemClicked(event)}>
                            <MovieIcon className="icon" /> Movies
                        </li>
                    </Link>
                </ul>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">New</h3>
                </div>
                <ul className="sidebar__items">

                    <Link to="/admin/newMovie" className="link">
                        <li className="sidebar__item" onClick={event => itemClicked(event)}>
                            <MovieIcon className="icon" /> Movie
                        </li>
                    </Link>
                </ul>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Account</h3>
                </div>
                <ul className="sidebar__items">
                    <span className="link" onClick={handleLogout}>
                        <li className="sidebar__item" >
                            <LogoutIcon className="icon" /> logout
                        </li>
                    </span>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;