import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Board from './pages/Board';
import User from './pages/User';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/layout">Layout</Link>
        </nav>
        <Routes>
          <Route path="/layout" element={<Layout/>}>
            <Route path="board" element={<Board/>}/>
            <Route path="user" element={<User/>}/>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
