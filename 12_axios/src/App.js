import {RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { userRouter } from './routers/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={userRouter} />
      </Suspense>
    </div>
  );
}

export default App;
