import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import './RightNav.css'
import { FaGoogle ,FaGithub ,FaFacebook, FaTwitter,FaInstagram} from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../../../assets/bg.png'
import dev from '../../../../../assets/WhatsApp Image 2023-02-12 at 8.29.49 PM.jpeg'

const RightNav = () => {
    return (
        <div>
            <div className=''>
                <h3>Login with</h3>
            <Button className='mt-2 mb-2' variant="outline-primary">  <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary">  <FaGithub /> Login with github</Button>
            </div>
            <div className='mt-3'>
                <h3 className='mb-3'>Find us on</h3>
                <ListGroup className=' px-2'>
      <ListGroup.Item><FaFacebook className=' me-2 text-info'/>Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter className='me-2 text-info'/>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram className='me-2 text-danger'/>Instragram</ListGroup.Item>
    </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='bg-light text-center py-4 my-4'>
                <img className='img-fluid' src={bg} alt="" />
                <div className="text-position">
<h5 className='mb-3'>Create an amazing newsPaper Sites With MD Rayhan Shorker<small className='text-info'>(Web Developer).</small></h5>
<p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
<img className='img-fluid circle' src={dev} alt="" />
                </div>
                <Button className='btn-position' variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;