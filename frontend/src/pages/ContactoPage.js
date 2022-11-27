import React from 'react';
import '../styles/Pages/Contacto.css';
import { useState } from 'react'; //trabajamos con estados
import axios from 'axios';

const Contact = (props) => {

    const initialForm = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => { //como vamos capturando los datos
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contact', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }



    return (
        <main className='holder contacto'>
            <div>
                <h2>Fast Contact</h2>
                <form action='/contact' method='' onSubmit={handleSubmit} className='formulario'>
                    <p>
                        <label for="name">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="phone">Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="message">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                    </p>
                    <p class="acciones">
                        <input type="submit" name="" />
                    </p>
                </form>
                {sending ? <p>sending...</p> : null}
                {msg ? <p>{msg}</p> : null}


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