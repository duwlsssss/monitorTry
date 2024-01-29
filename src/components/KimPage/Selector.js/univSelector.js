// UniversitySelector.js

import React, { useState } from 'react';

const UniversitySelector = () => {
  const universities = [

    '가야대학교','가천대학교','가톨릭관동대학교', '가톨릭꽃동네대학교','가톨릭대학교','감리교신학대학교', '강남대학교', '강서대학교', '강원대학교' , '건국대학교', '건국대학교 GLOCAL캠퍼스', '건양대학교','경기대학교', '경남대학교','경동대학교','경북대학교', '경상국립대학교','경성대학교','경운대학교','경인교육대학교' ,'경일대학교','경주대학교', '경찰대학', '경희대학교', '계명대학교' ,'고려대학교','고려대학교 세종캠퍼스', '고신대학교', '공군사관학교' ,'공주교육대학교','광신대학교' ,'광운대학교', '광주대학교', 
    
    // 광주가톨릭대학교 · 광주과학기술원 · 광주교육대학교 · 광주여자대학교 · 국군간호사관학교 · 국립강릉원주대학교 · 국립공주대학교 · 국립군산대학교 · 국립금오공과대학교 · 국립목포대학교 · 국립목포해양대학교 · 국립부경대학교 · 국립순천대학교 · 국립안동대학교 · 국립창원대학교 · 국립한국교통대학교 · 국립한국해양대학교 · 국립한밭대학교 · 국민대학교 · 극동대학교 · 금강대학교 · 김천대학교 ·
    
  ];

  const [selectedUniversity, setSelectedUniversity] = useState('');

  const handleSelectChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  return (
    <div>
      <label htmlFor="university"></label>
      <select id="university" value={selectedUniversity} onChange={handleSelectChange}>
        <option value="" disabled>
          -- 대학교 선택 --</option>
        {universities.map((university, index) => (
          <option key={index} value={university}>
            {university}
          </option>
        ))}
      </select>
{/* 
      {selectedUniversity && (
        <div>
          <p>선택한 대학교: {selectedUniversity}</p>
        </div>
      )} */}
    </div>
  );
};

export default UniversitySelector;