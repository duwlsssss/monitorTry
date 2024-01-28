import React from "react";
import Header from "./Header";
import style from './kimPage.css';

function MyMyoungham(){
  return(
    <div> 
      <h1>대학생 명함 문화 주도, 김명사</h1>
      <Header/>         
      <h3 className="sub">대학생도 명함이 필요합니다.</h3>
      <form>
          <input type="text" placeholder="이름"/><br/>
          <input type="text" placeholder="학교"/><br/>
          <input type="text" placeholder="분야"/><br/>
          <input type="text" placeholder="MBTI"/><br/>
          <input type="text" placeholder="경력"/><br/>
          <br/>
          <button className="printButton">인쇄</button>
      </form>
    </div>
  )
}

export default MyMyoungham