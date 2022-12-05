import React, { useState } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

const SignupFrom = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const disabled = !id || !pw || pw != pwCheck || !email;
  const emailRegex = /^\w+([\.-]?\w+)*(@)(\w|\.\_\-)*(\.\w{2,3})$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const test = emailRegex.test(e.target.value);
    console.log(test);
    setValidEmail(test);
  };

  return (
    <div>
      <ul>
        <li>
          <p>ID</p>
          <Input
            value={id}
            onChange={(e) => setId(e.target.value)}
            width={280}
            height={32}
            placeholder="ID"
          />
        </li>
        <li>
          <p>Password</p>
          <Input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            width={280}
            height={32}
            placeholder={'Password'}
            type="password"
          />
        </li>
        <li>
          <p>Password Check</p>
          {pwCheck && pw != pwCheck ? (
            <span>Please write the same password</span>
          ) : null}
          <Input
            value={pwCheck}
            onChange={(e) => setPwCheck(e.target.value)}
            width={280}
            height={32}
            placeholder={'Password check'}
            wrong={pwCheck && pw != pwCheck}
            type="password"
          />
        </li>
        <li>
          <p>E-Mail</p>
          {!validEmail ? <span>Invalid Email</span> : null}
          <Input
            value={email}
            onChange={handleEmailChange}
            width={280}
            height={32}
            placeholder={'E-mail'}
            wrong={!validEmail}
          />
        </li>
      </ul>
      <Button context="Sign Up" width={120} height={42} disabled={disabled} />
    </div>
  );
};

export default SignupFrom;
