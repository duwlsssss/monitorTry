import React from 'react';
import { Link } from 'react-router-dom';
import style from './kimPage.css'

function Header() {
  return (
    <div className="navbar_container">
      <Link to="/" className="navbar_item"><h3>홈</h3></Link>
      <Link to="/MyMyoungham" className="navbar_item"><h3>명함 만들기</h3></Link>
      <Link to="/AboutUs" className="navbar_item"><h3>About Us</h3></Link>
    </div>
  );
}

export default Header