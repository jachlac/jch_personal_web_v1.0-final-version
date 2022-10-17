import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Avatar, fullname, username } from "react-lorem-ipsum";



const HomePage = (props) => {
    return (
        <main className='holder'>

            <div>
                <h3>Bienvenido a mi sitio web</h3>
                <LoremIpsum p={1} />
                <h3>Un poco acerca de mi</h3>
                <LoremIpsum p={3} />
            </div>
        </main>
    );
}
export default HomePage;