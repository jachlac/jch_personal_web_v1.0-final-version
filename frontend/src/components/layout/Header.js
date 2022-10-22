import React from 'react';
import '../../styles/layout/Header.css'
import Button from 'react-bootstrap/Button';


// color logo #548f4d    style color="#50874a"
const Header = (props) => {
    return (
        <header>
        <div className='HolderH'>
            <div className='headerLogo'>
            <img src="./images/Header/header2.png" width="100" alt="Crypto"/>
            <h1 >CRYPTO STATE</h1>
            </div>

            <div className='loginButton'>
            <Button href='https://www.lavoz.com.ar/' variant="outline-warning">LOG IN</Button>{' '}
            </div>
                  </div>
            </header>
        );
    }

    export default Header;