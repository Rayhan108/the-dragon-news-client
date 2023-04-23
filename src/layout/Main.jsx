import React from 'react';
import Header from '../pages/Home/Home/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;