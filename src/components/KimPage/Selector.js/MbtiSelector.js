import React, { useState } from 'react';

const MbtiSelector = () => {
  // MBTI 유형 목록 및 선택된 MBTI 유형 상태
  const mbtiTypes = [
    'INTJ', 'INFJ', 'ISTJ', 'ISFJ',
    'ENTJ', 'ENFJ', 'ESTJ', 'ESFJ',
    'INTP', 'INFP', 'ISTP', 'ISFP',
    'ENTP', 'ENFP', 'ESTP', 'ESFP'
  ];

  const [selectedMbti, setSelectedMbti] = useState('');

  // 선택된 MBTI 유형이 변경될 때 실행되는 함수
  const handleMbtiChange = (e) => {
    setSelectedMbti(e.target.value);
  };

  return (
    <div>
      
      <select
        id="mbti"
        value={selectedMbti}
        onChange={handleMbtiChange}
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
