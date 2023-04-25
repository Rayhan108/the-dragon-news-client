import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const {login} =useContext(AuthContext)
    const handleLogin=(event)=>{
        event.preventDefault();
        setError("");
        setSuccess("");
        // console.log(event);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
          .then((result) => {
            const loggedUser = result.user;
            // console.log(loggedUser);
            form.reset();
         
            setSuccess(" Login successfull");
          })
          .catch((error) => {
            setError(error.message);
          });
    }
    return (
        <Container className='mt-5'>
        
            <Form onSubmit={handleLogin} className='w-50 mx-auto'>
            <h3 className='mb-5'>Please Login</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required  />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={show ? "text":"password"} name="password" placeholder="Password" required  />
        <p onClick={() => setShow(!show)}>
            <span>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </span>
          </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
     
      </Form.Group>
      <Button  className='mb-2' variant="primary" type="submit">
       Login
      </Button>
      <br />
      <Form.Text>
    Didn't have an account?Go <Link to="/register">Register</Link>
  </Form.Text>
      <br />
      <p className="text-primary">
        {success}
        </p>
      <br />
      <p className="text-danger ">
        {error}
        </p>
    </Form>
        </Container>
    );
};

export default Login;