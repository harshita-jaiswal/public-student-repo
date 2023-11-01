import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar">
            <Link to="/home" className="navLink">Home</Link>
            <Link to="/search" className="navLink">Search</Link>
            <Link to="/houses" className="navLink">House Chart</Link>
        </header>
    );
};

export default Navbar;
