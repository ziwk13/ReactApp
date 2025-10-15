import React from 'react';
import {useNavigate} from 'react-router-dom';

const About = () => {

    // useNavigate
    const navigate = useNavigate();

    // handleClick
    const handleHomeClick = e => {
        navigate("/");
    }
    return (
        <div>
          <h3>About</h3>
          <p>About Page</p>
          <button onClick={handleHomeClick}>Go To Home</button>
        </div>
    );
};

export default About;