import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
     {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/board">Board</Link>
      </nav> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
