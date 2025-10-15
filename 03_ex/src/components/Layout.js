import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {

  return (
    <>
    <Header/>
    <main>
      <nav>
        <Link to="board">Board</Link> | <Link to="user">User</Link>
      </nav>
    <Outlet/>
    </main>
    <Footer/>
    </>
  );
};

export default Layout