import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { loginState } from '../../Utils/recoilState';

const LoginForm = () => {
  const setLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
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
      </ul>
      <Button
        context="Log In"
        width={120}
        height={42}
        disabled={!pw || !id}
        onClick={() => {
          setLogin(true);
          navigate('/');
        }}
      />
    </div>
  );
};

export default LoginForm;
