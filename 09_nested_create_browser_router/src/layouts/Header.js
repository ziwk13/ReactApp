import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <h1>Website</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/board">Board</Link>
      </nav>
      <p>홈 페이지 입니다</p>
    </header>
  );
};

export default Header;