import React, { useState } from 'react';

const MbtiSelector = ({ onSelectMBTI }) => {
  // MBTI 유형 목록 및 선택된 MBTI 유형 상태
  const mbtiTypes = [
    'INTJ', 'INFJ', 'ISTJ', 'ISFJ',
    'ENTJ', 'ENFJ', 'ESTJ', 'ESFJ',
    'INTP', 'INFP', 'ISTP', 'ISFP',
    'ENTP', 'ENFP', 'ESTP', 'ESFP'
  ];

  const [MBTI, setMBTI] = useState('');


  return (
    <div>
      
      <select
        name="MBTI"
        value={MBTI}
        onChange={(event)=>{const selectedMBTI = event.target.value; setMBTI(selectedMBTI); onSelectMBTI(selectedMBTI);}}
        aria-label="MBTI 유형 선택"
      >
        <option value="">--MBTI 유형을 선택하세요--</option>
        {mbtiTypes.map((mbtiType, index) => (
          <option key={index} value={mbtiType}>
            {mbtiType}
          </option>
        ))}
      </select>

    </div>
  );
};

export default MbtiSelector;
