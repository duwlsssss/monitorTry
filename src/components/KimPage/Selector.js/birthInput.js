import React, { useState } from 'react';

const BirthdayInput = () => {
  const [birthday, setBirthday] = useState('');

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  return (
    <div>
      <label htmlFor="birthday">birthDay : </label> <br/>
      <input
        type="date"
        id="birthday"
        value={birthday}
        onChange={handleBirthdayChange}
      />
    </div>
  );
};

export default BirthdayInput;
