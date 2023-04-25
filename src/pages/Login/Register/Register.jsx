import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const {createUser} =useContext(AuthContext)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = event=>{
        event.preventDefault()
        setError('')
        setSuccess('')
        const form = event.target;
        const name =form.name.value;
        const photo =form.photo.value;
        const email =form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            setSuccess('Account has been created successfully')
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <Container className='mt-5'>
      
        <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
        <h3 className='mb-5'>Please Register</h3>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Your Name" required />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhoto">
    <Form.Label>Photo Url</Form.Label>
    <Form.Control type="text" name="photo" placeholder="Photo Url" required  />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" required  />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" required />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Accept all terms & condition" />
  </Form.Group>
  <Button  className='mb-2' variant="primary" type="submit">
   Register
  </Button>
  <br />
  <Form.Text>
    Already have an account?Go <Link to="/login">Login</Link>
  </Form.Text>
  <br />
  <Form.Text className="text-green ">
    {success}
    </Form.Text>
  <br />
  <Form.Text className="text-danger ">
    {error}
    </Form.Text>
</Form>
    </Container>
    );
};

export default Register;