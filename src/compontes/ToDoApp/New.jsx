import React, { useState } from 'react';
import { useStore } from '../../store/Conter';
const New = () => {
  const [login, setLogin] = useState(false);
  const { count, inc } = useStore()
  function login1() {
    setLogin(!login);
  }

  return (
    <div>
        <span>{count}</span>
      <button onClick={inc}>one up</button>
      <button onClick={login1}>
        {login ? "LOG OUT" : "LOGIN IN"}
      </button>
    </div>
  );
};

export default New;
