import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Header() {
  return (


   
    <StyledHeader>
      <Link to="/" className="navbar_item"><h3>홈</h3></Link>
      <Link to="/MyMyungham" className="navbar_item"><h3>명함 만들기</h3></Link>
      <Link to="/AboutUs" className="navbar_item"><h3>About Us</h3></Link>
      </StyledHeader>
   
  );
}

const StyledHeader = styled.div`
  height: 50px;
  background: gainsboro;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

`;



export default styled(Header)`
  height: 100%;
  background: white;
  padding-top: 22px;
  position: relative;

`;