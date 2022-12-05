import React, { useState } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

const LoginForm = () => {
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
          />
        </li>
      </ul>
      <Button context="Log In" width={120} height={42} disabled={!pw || !id} />
    </div>
  );
};

export default LoginForm;
