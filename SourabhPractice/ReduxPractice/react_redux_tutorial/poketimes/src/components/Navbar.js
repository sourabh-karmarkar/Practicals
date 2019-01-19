import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';

const Navbar=(props)=>{
    /*
        //go to the about url after 2 seconds. run and see in chrome developer tools
        setTimeout(()=>{
            props.history.push('./about');
        },2000);
    */
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="#" className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink>></li>
                </ul>
            </div>
        </nav>
    );
}

//higher order components
export default withRouter(Navbar);