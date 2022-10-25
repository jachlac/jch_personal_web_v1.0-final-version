import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Avatar, fullname, username } from "react-lorem-ipsum";
import '../styles/Pages/HomePage.css';



const HomePage = (props) => {
    return (
        <main className='holder'>

            <div className='inicio'>
                <h3>Welcomen to Crypto State</h3>
                <LoremIpsum p={1} />
                <h3>What you will find in this web</h3>
                <LoremIpsum p={3} />
            </div>
        </main>
    );
}
export default HomePage;