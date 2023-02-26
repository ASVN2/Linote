import { auth } from '../firebase/config';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import useProvider from './useProvider';

const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useProvider();

  const sginup = async (email, passwrod) => {
    await createUserWithEmailAndPassword(auth, email, passwrod)
      .then((res) => {
        console.log('user sginup successfully', res.user);
        dispatch({ type: 'LOGIN', payload: res.user });
      })
      .catch((err) => {
        console.log(err.message);
        console.log('something went wrong whole signup ');
        setError(err.message);
      });
  };

  return { sginup, error };
};

export default useSignup;
