import React from 'react';
import Form from 'react-bootstrap/Form';
import '../styles/Pages/logIn.css';


const LogIn = (props) => {

    return (
<div className='imagenFondo'>
        <Form className='loginForm'>
             <p className='acciones'>Ingrese sus datos para iniciar sesion </p>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <p className='acciones'>
                <input type="submit" name="" />
            </p>
        </Form>
        </div>
    )
}
export default LogIn;