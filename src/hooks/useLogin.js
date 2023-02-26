import React, { useState } from 'react';
import { auth } from '../firebase/config';

//firebase imports
import { signInWithEmailAndPassword } from 'firebase/auth';
import useProvider from './useProvider';

const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useProvider();

  const login = async (email, passwrod) => {
    await signInWithEmailAndPassword(auth, email, passwrod)
      .then((res) => {
        console.log('user logged in successfully', res.user);
        dispatch({ type: 'LOGIN', payload: res.user });
      })
      .catch((err) => {
        console.log(err.message);
        console.log('something went wrong whole login ');
        setError(err.message);
      });
  };

  return { login, error };
};

export default useLogin;
