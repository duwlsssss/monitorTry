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
        placeholder="인스타그램 아이디"
        value={dailyLifeLink}
        onChange={handleDailyLifeLinkChange}
      />
    </div>
  );
};

export default DailyLifeLinkInput;
