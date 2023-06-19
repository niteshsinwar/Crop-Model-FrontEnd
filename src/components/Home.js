import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 opacity-75"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white">Crop Prediction</h1>
          <p className="text-lg text-white mt-4">
            Predict which type of crop is suitable for your land
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Link
          to="/form"
          className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full"
        >
          PREDICT YOUR CROP
        </Link>
      </div>
    </div>
  );
};

export default Home;
