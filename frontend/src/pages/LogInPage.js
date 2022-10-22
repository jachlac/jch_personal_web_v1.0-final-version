import React from 'react';
import Form from 'react-bootstrap/Form';


const LogIn = (props) => {
    return (
        <Form className='loginForm'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <p class="acciones">
                <input type="submit" name="" />
            </p>
        </Form>
    )
}
export default LogIn;