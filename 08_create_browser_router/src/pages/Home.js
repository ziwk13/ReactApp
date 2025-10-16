import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/board">Board</Link>
      </nav>
      <p>홈 페이지 입니다</p>
    </div>
  );
};

export default Home;