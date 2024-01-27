import React from "react";
import Header from "./Header";
import logoImg from "assets/kimPageIcons/임시로고.png"
import styled from 'styled-components'

function Main(){
  return(
    <div>
      <h1><strong>KimMyungsa.com</strong> 에 오신 것을 환영합니다.</h1>
      <Header/>
      <main>
        <div className="logo">
          <img src={logoImg} className="logo-img"/>
        </div>
      </main>
      <footer>
        네트워크관리사 : 12.07~12.31
        웹 프로그래머 : kim soo hyun, kim yeo jin
        웹 디자이너 : kim da seul <br/><br/>
        데이터관리사 : 1.22.3
        제작 기간: 2023.12 ~ 2024.04<br/><br/>
        all copyright @ global Media - BLOOM 2024 graduation gallery
      </footer>
    </div>
  )
}

export default styled(Main)`
  height: 100%;
  background: white;
  padding-top: 22px;
  position: relative;
  @media (max-width: 600px) {
    
  }
`;