import React from 'react';
import { Route, Link } from 'react-router-dom';

const navBar = (props) => {
    return(
        <nav className="navBar">
            <ul className="navBar__nav">
                <li className="navBar__nav--item">
                    <Link to="/" className="navBar__nav--link">Home</Link>
                </li>
                <li className="navBar__nav--item">
                    <Link to="/Flowers" className="navBar__nav--link">Flowers</Link>
                </li>
                <li className="navBar__nav--item">
                <Link to="/Classes" className="navBar__nav--link">Classes</Link>
                </li>
                <li className="navBar__nav--item">
                <Link to="/Gifts" className="navBar__nav--link">Gifts</Link>
                </li>
                <li className="navBar__nav--item">
                <Link to="/About" className="navBar__nav--link">About</Link>
                </li>
                <li className="navBar__nav--item">
                <Link to="/Contact" className="navBar__nav--link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default navBar;