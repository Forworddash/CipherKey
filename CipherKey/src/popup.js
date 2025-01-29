import React, { useState } from 'react';

const Popup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isMFA, setIsMFA] = useState(false);

  const handleLogin = () => {
    // Call the sign-in function (Firebase/Custom Backend)
  };

  const handleMFA = () => {
    // Call the MFA function to send OTP (via phone/email)
  };

  const handleVerifyOTP = () => {
    // Call verify OTP function
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Sign In</button>
      
      {isMFA && (
        <>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </>
      )}

      {!isMFA && (
        <div>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleMFA}>Setup MFA</button>
        </div>
      )}
    </div>
  );
};

export default Popup;
