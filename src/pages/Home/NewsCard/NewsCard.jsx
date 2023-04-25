import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const{_id,title,details,image_url,author,total_view,rating} =news;
    return (
        <div>
  <Card className="mb-4 ">
    <Card.Header className='d-flex '>
    <Image style={{height:'40px'}} src={author?.img} roundedCircle />
  <div className='ps-3 flex-grow-1'>
    <p className='mb-0'>{author?.name}</p>
    <p>{moment(author?.published_date).format(' YYYY MM D')}</p>
  </div>
  <div>
    <FaBookmark></FaBookmark>
    <FaShareAlt></FaShareAlt>
  </div>
    </Card.Header>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="bottom" src={image_url} />
        <Card.Text>
        {details.length < 250? <>{details}</>:
        <>{details.slice(0,250)}...<Link className="text-decoration-none" to={`/news/${_id}`}>Read More</Link></>
        }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
<div className='flex-grow-1'>
    <Rating  
      placeholderRating={rating.number}
    readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-danger'></FaStar>}
  fullSymbol={<FaStar></FaStar>}>
 
    </Rating>
   <span> {rating?.number}</span>
</div>
        <div>
            <FaEye></FaEye>{total_view}
        </div>
      </Card.Footer>
    </Card> 
        </div>
    );
};

export default NewsCard;