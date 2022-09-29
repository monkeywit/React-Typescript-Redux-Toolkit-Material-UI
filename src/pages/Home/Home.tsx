import React from 'react';

import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { login } from 'redux/slices/auth';

const Home: React.FC = () => {
  const {
    auth: { accessToken, isLoading }
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  console.log(accessToken);

  const handleLogin = (): void => {
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
  };

  return (
    <div>
      Home <button onClick={handleLogin}>Login</button>
      {isLoading && 'loading...'}
    </div>
  );
};

export default Home;
