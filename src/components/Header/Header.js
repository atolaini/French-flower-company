import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Logo from '../Header/Logo/Logo';

const header = (props) => {
    return(
        <header className="header">
            <Logo />
            <img src="/images/lineDesign.png" className="header__logo--2" />
            <h3 className="header__subHeading">The Bespoke Florist</h3>
        </header>  
 
    );
}

export default header;