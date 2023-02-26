import { createContext, useEffect, useReducer } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

export const Authcontext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true };
    case 'CURRENT_NOTE':
      return { ...state, note: action.payload };
    case 'THEME':
      return { ...state, theme: action.payload };
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    theme: 'dark',
    user: null,
    authIsReady: false,
    note: null,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      unsub();
    });
  }, []);

  return <Authcontext.Provider value={{ ...state, dispatch }}> {children} </Authcontext.Provider>;
};
