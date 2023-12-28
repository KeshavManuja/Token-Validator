import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Please select your option</h1>
      <div className="options">
        <Link to="/record" className="option-link">
          Create Record
        </Link>
        <Link to="/record/:id" className="option-link">
          Get Record
        </Link>
      </div>
    </div>
  );
};

export default Home;