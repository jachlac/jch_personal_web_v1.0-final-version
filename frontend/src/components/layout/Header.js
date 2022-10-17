import React from 'react';
import '../../styles/layout/Header.css'

// color logo #548f4d    style color="#50874a"
const Header = (props) => {
    return (
        <header>
        <div className='Holder'>
            <div >
            <img src="./images/Header/icono.svg" width="70" alt="logo developer"/>
            </div>
            <div>
            <h1 >JCH Full Stack Developer</h1>
            </div>
            </div>
            </header>
        );
    }
    export default Header;