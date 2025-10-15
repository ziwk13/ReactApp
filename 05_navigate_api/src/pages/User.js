import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const User = () => {
    const { uid } = useParams();
    const navigate = useNavigate();
    return (
        <div>
          <h3>User Home</h3>
          <p>User ID : {uid}</p>
          <button onClick={e => navigate("/")}>Go To Home</button>
        </div>
    );
};

export default User;