import React from 'react';
import './Popular.css';

const popular = () => {
    return (
        <>
        <div className='serv'>
            <h2 id='servpara'>Popular Searches</h2>
            <div className='serv-img'>
                <img className='serv-img1' src='https://ak.picdn.net/shutterstock/videos/23119246/thumb/1.jpg' alt='Schools'/>
                <p>Schools</p>
            </div>
            <div className='serv-img'>
                <img className='serv-img1' src='https://img.theweek.in/content/dam/week/news/sci-tech/2018/january/check-bp-blood-pressure-hospital-medical--doctor-patient-shut.jpg' alt='Hospitals'/>
                <p>Hospitals</p>
            </div>
            <div className='serv-img'>
                <img className='serv-img1' src='https://www.tamilnadutourism.com/blog/wp-content/uploads/2019/12/chennai-temples-768x395.jpg' alt='Temples'/>
                <p>Temples</p>
            </div>
            <div className='serv-img'>
                <img className='serv-img1' src='https://d274ft55l0imju.cloudfront.net/hotels_app_img/hotelhero.png' alt='Hotels'/>
                <p>Hotels</p>
            </div>
        </div>
        </>
    );
};

export default popular;