import React from "react";
import Header from "./Header";
import styled from 'styled-components';
import { useEffect, useState } from "react"
import api from '../api/axios'
import UniversitySelector from '../KimPage/Selector.js/univSelector';
import JobSelector from "./Selector.js/sessionSelector";
import MbtiSelector from "./Selector.js/MbtiSelector";
import EmailInput from "./Selector.js/emailInput";
import DailyLifeLinkInput from "./Selector.js/linkInput";
import BirthdayInput from "./Selector.js/birthInput";


function MyMyungham(){
 
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [age, setAge] = useState('');
  const [session, setSession] = useState('');
  const [MBTi, setMBTi] = useState('');
  const [cardList, setCardList] = useState([]);
  
  const getCards=async()=>{
    const response = await api.get('/cards')
    console.log("rrrrrrrrr",response)
}

useEffect(()=>{
    getCards();
},[])

const addCard=async(event)=>{
        
  event.preventDefault(); //기본 제출 방지
  try{
      const response = await api.post('/cards',{
          name: name,
          school: school,
          age: age,
          session: session,
          MBTi: MBTi
      });
    
      console.log('API 응답:', response);
      const { status } = response;

      if (status === 200) {
          console.log('성공');
      } else {
          throw new Error('카드를 추가할 수 없습니다.');
      }
  } catch (err) {
      console.error('에러', err);
  }
}
  
  return(

    
    <div> 
      <Header/>         
      <h1>대학생 명함 문화 주도, 김명사</h1>
      <h3>대학생도 명함이 필요합니다.</h3>
      <form>
          <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="이름"/><br/>
          <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="영문 이름"/><br/>
          <BirthdayInput/>
          <UniversitySelector />
          <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="학과"/><br/>
          <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="학번"/><br/>
          <JobSelector/>
          <MbtiSelector/>
          <EmailInput/>
          <DailyLifeLinkInput/>
          <br/>
          <button onClick={addCard}>인쇄</button>
      </form>
    </div>
  )
}

export default styled(MyMyungham)`
  height: 100%;
  background: white;
  padding-top: 22px;
  position: relative;
  .top-bars {
    border-bottom: 1px rgb(235, 235, 235) solid;
  }
  .top-bar {
    height: 44px;
  }
  .app-bar {
    height: 58px;
    margin-left: 154px;
    position: relative;
    width: 584px;
  }
  .bar-items {
    display: flex;
    align-items: center;
    position: relative;
    height: 44px;
  }
  .left {
    position: absolute;
    left: 0;
  }
  .right {
    position: absolute;
    right: 4px;
  }
  .logo {
    width: 150px;
    height: 34px;
    padding: 4px 28px 0 30px;
    cursor: pointer;
  }
  .search-bar {
    display: flex;
    align-items: center;
    border-radius: 22px;
    width: 586px;
    height: 46px;
    border: 1px rgb(223, 225, 229) solid;
    padding: 5px 0 0 20px;
    input {
      outline: 0;
      border: 0;
      flex: 1;
      width: 30px;
      font-size: 16px;
    }
    img {
      width: 24px;
      height: 24px;
    }
    .icon {
      width: 40px;
    }
    .icon:nth-of-type(1) {
      cursor: pointer;
    }
    .icon:nth-of-type(2) {
      fill: rgb(66, 133, 244);
      color: rgb(66, 133, 244);
    }
  }
  .functions {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 14px;
    img {
      margin: 8px;
      width: 24px;
      cursor: pointer;
      height: 24px;
    }
  }
  .tags {
    height: 100%;
    display: flex;
    font-size: 13px;
    align-items: center;
    color: rgb(119, 119, 119);
  }
  .tag.active {
    color: rgb(26, 115, 232);
    border-bottom: 3px rgb(26, 115, 232) solid;
    font-weight: 700;
  }
  .tag {
    height: 100%;
    cursor: pointer;
    padding: 28px 16px 0;
    &:hover:not(.active) {
      color: rgb(34, 34, 34);
    }
  }

  .content {
    color: rgb(34, 34, 34);
    padding: 55px 0 0 170px;
    p {
      margin: 16px 0;
    }
  }
  #search-in-content {
    font-weight: 700;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 83px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    background-color: rgba(0, 0, 0, 0.05);
    .upper {
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      width: 100%;
      font-size: 15px;
      padding-bottom: 2px;
      height: 50%;
    }
    .lower {
      position: relative;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
      height: 50%;
      color: rgb(95, 99, 104);
      font-size: 13px;
      width: 100%;
      .item {
        cursor: pointer;
      }
      .item:hover {
        text-decoration: underline;
      }
    }
    .footer-items {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 150px;
      position: relative;
    }
    .left .item {
      margin-right: 27px;
    }
  }
  @media (max-width: 800px) {
    .top-bar {
      height: auto;
    }
    .bar-items.left {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: auto;
      position: relative;
    }
    .bar-items.right {
      display: none;
    }
    .search-bar {
      margin-top: 15px;
      width: 90%;
      height: 40px;
      border-radius: 3px;
      padding: 0px 5px 0 10px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
      }
    }
    .app-bar {
      margin: 0 15px;
      width: calc(100% - 30px);
      height: 40px;
    }
    .tags {
      display: flex;
      width: 100%;
    }
    .tags.right {
      display: none;
    }
    .tag {
      text-align: center;
      padding: 16px 0 0 0;
      flex: 1;
    }
    .content {
      padding: 10px 40px;
    }
    .footer-items.left {
      padding-left: 25px;
    }
    footer .left .item {
      margin-right: 15px;
    }
  }
`;