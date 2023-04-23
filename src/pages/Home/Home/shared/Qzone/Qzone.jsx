import React from 'react';
import qzone1 from '../../../../../assets/qZone1.png'
import qzone2 from '../../../../../assets/qZone2.png'
import qzone3 from '../../../../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div className='bg-light text-center py-4 my-4' >
            <h3>Q-Zone</h3>
            <div>
                <img className='img-fluid' src={qzone1} alt="" />
                <img className='img-fluid' src={qzone2} alt="" />
                <img className='img-fluid' src={qzone3} alt="" />
              
            </div>
        </div>
    );
};

export default Qzone;