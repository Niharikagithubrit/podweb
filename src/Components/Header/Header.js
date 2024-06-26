import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Podbutton from '../Podbutton.js';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar_block">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><img src="header_images/Frame6.svg" alt="header-img" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown">Features</NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="">Features 1</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">Discover</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">Contact Us</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Podbutton pdbtn="Download App" />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
