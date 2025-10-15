import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
          <h3>Home Page</h3>         
          <button onClick={e => navigate("/search")}>Go To 검색</button>
        </div>
    );
};

export default Home;