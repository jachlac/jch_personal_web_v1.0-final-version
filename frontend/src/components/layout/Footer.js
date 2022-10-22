import React from 'react';
import '../../styles/layout/Footer.css'
var hoy = new Date()

const Footer = (props) => {
    return (

        <footer className='HolderF' >
            <div>
                <img src="./images/Footer/footer.png" width={50} alt="wallet"></img>
            </div>
            <div>
                <p className='ParFooter'> by Jose Chicala - Desarrollador Full stack - Copyright © 2022.</p>
            </div>
        </footer>

    );
}

export default Footer;