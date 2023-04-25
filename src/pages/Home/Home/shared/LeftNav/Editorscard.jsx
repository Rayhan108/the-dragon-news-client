import React from 'react';
import first from "../../../../../assets/1.png";
import second from "../../../../../assets/2.png";
import third from "../../../../../assets/3.png";
import { Card, Col, Row } from 'react-bootstrap';
const Editorscard = () => {
    return (
        <Row xs={1} className="g-4 mt-4 mb-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
             
              <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
  

        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
             
              <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

  
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
             
              <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
};

export default Editorscard;