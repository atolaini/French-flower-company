import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Pages/Home';

const logo = (props) => {
    return(
        <Link exact to="/" component={Home} className="logoLink"><h1 className="logo">French Flower company</h1></Link>
        
    );
}

export default logo;