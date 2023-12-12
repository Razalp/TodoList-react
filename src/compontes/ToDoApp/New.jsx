import React, { useState } from 'react';

const New = () => {
  const [login, setLogin] = useState(false);

  function login1() {
    setLogin(!login);
  }

  return (
    <div>
      <button onClick={login1}>
        {login ? "LOG OUT" : "LOGIN IN"}
      </button>
    </div>
  );
};

export default New;
