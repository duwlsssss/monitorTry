import React from "react";
import Header from "./Header";
import styled from 'styled-components';
import { useEffect, useState } from "react"
import api from '../api/axios'
import { Title } from "./AboutUs";


import SchoolSelector from "./Selector.js/schoolSelector";
import MbtiSelector from "./Selector.js/MbtiSelector";
import SessionSelector from "./Selector.js/sessionSelector";





function MyMyungham(){
 
  const [name, setName] = useState(''); //이름
  const [engName, setEngName] = useState (''); //영문 네임 
  const [major, setMajor]= useState (''); //전공 
  const [studentNum, setStudentNum]=useState(''); //학번
  const [email, setEmail] = useState(''); //이메일
  const [ig, setIg] = useState(''); //인스타 아이디
  const [school, setSchool] = useState(''); // 학교
  const [session, setSession] = useState(''); // 세션
  const [MBTI, setMBTI] = useState(''); // MBTI

//   const getCards=async()=>{
//     const response = await api.get('/cards')
//     console.log(response)
// }

// useEffect(()=>{
//     getCards();
// },[])


const addCard=async(event)=>{
  
  event.preventDefault(); //기본 제출 방지

  // 부모 페이지로 메시지 전송_iframe 소통
  window.parent.postMessage('danceChange', '*');

  try{

      const response = await api.post('/cards',{
          name :name,
          engName : engName,
          school : school,
          major : major,
          studentNum : studentNum,
          email :email,
          session :session,
          MBTI: MBTI,
          ig: ig

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
      <Title>대학생 명함 문화 주도, 김명사</Title>
      
      <StyledMyMyungham>
      <form>

          <input type="text" value={name} name="name" onChange={(event)=>setName(event.target.value)} placeholder="이름"/><br/>
          <input type="text" value={engName} name="engName" onChange={(event)=>setEngName(event.target.value)} placeholder="영문 이름 혹은 닉네임"/><br/>
          <SchoolSelector onSelectSchool={(selectedSchool) => setSchool(selectedSchool)}/>
          <input type="text" value={major} name="major" onChange={(event)=>setMajor(event.target.value)} placeholder="학과"/><br/>
          <input type="text" value={studentNum} name ="studentNum" onChange={(event)=>setStudentNum(event.target.value)} placeholder="학번"/><br/>
          <SessionSelector onSelectSession={(selectedSession) => setSession(selectedSession)}/>
          <MbtiSelector onSelectMBTI={(selectedMBTI) => setMBTI(selectedMBTI)}/>
          <input type="email" name="email" placeholder="이메일을 입력하세요" value={email} onChange={(event) => {
          setEmail(event.target.value);}}/>
          <input type="text" name="ig" placeholder="인스타그램 아이디" value={ig} onChange={(event)=>{setIg(event.target.value)}}/>

          <br/> 

          <button onClick={addCard}>인쇄</button>

      </form>
      </StyledMyMyungham>
    </div>
  )
}


//스타일 컴포넌트
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

const StyledMyMyungham = styled.div`
  height: 100%;
  background: whitegrey;
  margin-top: 10px;
  position: relative;
  font-family: 'DOSSaemmul';
  

  form {
    max-width: 400px;
    margin: 0 auto;
    padding: 25px;
    background: #f9f9f9;
    border-radius: 3px;

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      outline: none; 
    }
    select {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
    
      outline: none; 
    }
    button {
      width: 100%;
      padding: 10px;
      background: #f0f0f0;
      border: 1px solid #a0a0a0;
      cursor: pointer;
      color: #000;
      font-size: 14px;
      font-weight: bold;
      transition: background 0.3s, border-color 0.2s;

      &:hover {
        background: #e0e0e0;
        border-color: #909090;
      }

      &:active {
        background: #c0c0c0;
        border-color: #808080;
      }
  }
`;