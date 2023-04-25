import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const {user,logout }= useContext(AuthContext)
    const handleLogOut = () => {
        logout()
        .then(() => {
          console.log("Sign-out successful");
        }).catch((error) => {
          console.log(error.message);
        });
      };
    return (
        <Container>
             <Navbar className="mt-3 mb-3" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
         
              <Link className="text-decoration-none text-black" to={'/'}>Home</Link>
              
           <Link className='text-decoration-none ms-3 text-black'>About</Link>
           <Link className='text-decoration-none ms-3 text-black'>Career</Link>
          </Nav>
          <Nav>
        { user &&   <Nav.Link href="#deets">
          <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
          </Nav.Link>
          }

            
         { user ?  <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
        <Link to="/login"><Button variant="secondary">Login</Button></Link> 
        }
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;