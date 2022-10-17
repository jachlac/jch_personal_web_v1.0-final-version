import React from 'react';
import '../styles/Pages/Contacto.css';

const Contacto = (props) => {
    return (
        <main className='holder contacto'>
            <div>
                <h2>Contacto Rapido</h2>
                <form action='' method='' className='formulario'>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones">
                        <input type="submit" name="" />
                    </p>
                </form>
            </div>
            <div className='datos'>
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien podes comunicarte  por los siguientes medios</p>
                <ul>
                    <div>
                    <img src="./images/pages/contacto/twitter.png" width={50} alt="twitter"></img>
                    </div>
                    <div>
                    <img src="./images/pages/contacto/gmail.png" width={50} alt="gmail"></img>
                    </div>
                    <div>
                    <img src="./images/pages/contacto/skype.png" width={50} alt="skype"></img>
                    </div>
                    <div>
                    <img src="./images/pages/contacto/linkedin.png" width={50} alt="linkedin"></img>
                    </div>
                    <div>
                    <img src="./images/pages/contacto/github.png" width={50} alt="github"></img>
                    </div>

                </ul>
            </div>
        </main>
        );
    }
    export default Contacto;