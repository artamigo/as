import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = ( props ) => (
    <header id="header" className="alt">
        {/*<span className="logo"><img src={logo} alt="" /></span>*/}
        <h1>Armando </h1>
        <h1>& Susana</h1>
        <p>18 de Mayo de 2019</p>
        <p style={{
            fontSize: "1em",
            color: "#b2b3b3a8",
        }}>CEREMONIA AL CIVIL</p>
    </header>
)

export default Header
