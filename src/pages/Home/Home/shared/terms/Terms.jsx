import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Terms and condition</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas, amet vitae praesentium similique maxime cumque aut voluptatibus fuga molestiae consequatur dolores animi temporibus nostrum, eaque dolorum corrupti voluptate, quisquam enim? Velit eaque ipsam a hic beatae laboriosam aspernatur, labore voluptate odit assumenda libero mollitia quam sunt temporibus, tempora error? <br>
            </br>
            <span>Go Back <Link to="/register">Register</Link> </span>
            
            </p>
        </div>
    );
};

export default Terms;