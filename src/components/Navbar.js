import React from 'react';
import {NavDiv} from './styled-components'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <NavDiv>
            <Link to="/"><h3>Fashionista</h3></Link>
            <ul>
            <Link to="/"><li>Home</li></Link>
                <li>Contact</li>
                <Link to="/signup"><li>Signup</li></Link>
                <li>Pricing</li>
            </ul>  
        </NavDiv>
    );
};

export default Navbar;