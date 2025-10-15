import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

/* 
  static routing
  1. 기본 라우팅 방식
  2. URL 경로와 컴포넌트를 미리 정의해 두는 방식
  3. URL 경로가 항상 동일
*/

/* 
  <Link>
  1. react-router-dom 에서 제공하는 컴포넌트 <a> 태그와 유사하게 동작 한다.
  2. <a> 태그는 전체 페이지를 새로고침 하지만, <Link> 컴포넌트는 일부 컴포넌트만 새롭게 표시한다. ()
  3. to 속성을 이용해 경로를 작성 한다.
  4. 활성화 상태(active) 관리 기능이 없다.
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/">홈</Link> | <Link to="/about">About</Link>
        </nav>
        {/* 경로에 따라서 컴포넌트를 선택해서 열기 */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
