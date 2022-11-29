import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/layout/Nav.css';


const Nav = (props) => {


    return (
        <nav>
            <div className="holder link">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/News">News</Link></li>
                    <li><Link to="/Learn">Learn</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>

        </nav>
    );
}
export default Nav;