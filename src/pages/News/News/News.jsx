import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Editorsinshight from '../Editors/Editorsinshight';


const News = () => {
    const singleNews = useLoaderData()
    const {_id,title,details,image_url,category_id} =singleNews;
    return (
 <div>
           <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
          <Link to={`/catagory/${category_id}`}> <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All news in this catagory</Button></Link>
         
        </Card.Body>
      </Card>
      <Editorsinshight></Editorsinshight>
 </div>
    );
};

export default News;