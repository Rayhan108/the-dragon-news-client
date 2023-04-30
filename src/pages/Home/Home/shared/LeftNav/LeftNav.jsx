import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Editorscard from './Editorscard';

const LeftNav = () => {
    const  [catagories,setCatagories] =useState([])

    useEffect(()=>{
        fetch('https://the-dragon-news-server-rayhan108.vercel.app/catagories')
        .then(res=>res.json())
        .then(data=>setCatagories(data))
        .catch(error=>console.log(error))
    },[])
    // console.log(catagories);
    return (


        <div>
            <h4>All Catagories</h4>
           <div className='mt-4 ps-3 fs-5'>
           {
                catagories.map(catagory=><p
                    key={catagory.id}>
                    <Link className='text-decoration-none text-black' to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                </p>)
            }
           </div>
           <Editorscard></Editorscard>
        </div>
    );
};

export default LeftNav;