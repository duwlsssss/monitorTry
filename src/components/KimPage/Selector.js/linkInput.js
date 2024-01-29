import React, { useState } from 'react';

const DailyLifeLinkInput = () => {
  const [dailyLifeLink, setDailyLifeLink] = useState('');

  const handleDailyLifeLinkChange = (e) => {
    setDailyLifeLink(e.target.value);
  };

  return (
    <div>
  
      <input
        type="url"
        id="dailyLifeLink"
        placeholder="일상을 나타내는 링크를 입력하세요"
        value={dailyLifeLink}
        onChange={handleDailyLifeLinkChange}
      />
    </div>
  );
};

export default DailyLifeLinkInput;
