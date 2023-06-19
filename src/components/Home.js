import React from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../assets/nature.mp4';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <video src={video} autoPlay loop muted />
      <div className='overlay'></div>
      <div className='content'>
        <h1 className='text-4xl'>Crop Prediction</h1>
        <p className='para'>Predict which type of crop is suitable for your land</p>
      </div>
      <div className='button'>
        <button
          className='py-2 px-4 rounded bg-blue-500 text-white button-1'
          onClick={() => navigate('/form')}
        >
          PREDICT YOUR CROP
        </button>
      </div>
    </div>
  );
};

export default Home;
