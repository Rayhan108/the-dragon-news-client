import React from 'react';
import Header from '../pages/Home/Home/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Home/Home/shared/LeftNav/LeftNav';

import NavigationBar from '../pages/Home/Home/shared/NavigationBar/NavigationBar';
import RightNav from '../pages/Home/Home/shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
    
      <Row>
        <Col lg={3}><LeftNav></LeftNav></Col>
        <Col  lg={6}><Outlet></Outlet></Col>
        <Col lg={3}><RightNav></RightNav></Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;