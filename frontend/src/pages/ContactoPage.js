import React from 'react';
import '../styles/Pages/Contacto.css';

const Contact = (props) => {
    return (
        <main className='holder contacto'>
            <div>
                <h2>Fast Contact</h2>
                <form action='' method='' className='formulario'>
                    <p>
                        <label for="name">Name</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="phone">Phone</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="message">Message</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones">
                        <input type="submit" name="" />
                    </p>
                </form>
            </div>
            <div className='datos'>
                <h2>Other ways to get in touch</h2>
                <p>You can also contact us by:</p>
                <ul className='logos'>
                    <div>
                    <img src="./images/pages/contacto/twitter.png" width={50} alt="twitter"></img>
                    </div>
                    <div>
                    <img src="./images/pages/contacto/gmail.png" width={50} alt="gmail"></img>
                    </div>
                    <div>
                    <img src="./images/pages/contacto/linkedin.png" width={50} alt="linkedin"></img>
                    </div>
                   

                </ul>
            </div>
        </main>
        );
    }
    export default Contact;