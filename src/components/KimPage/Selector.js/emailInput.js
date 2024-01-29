import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>

      <input
        type="email"
        id="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default EmailInput;
