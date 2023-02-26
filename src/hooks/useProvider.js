import { useContext } from 'react';
import { Authcontext } from '../context/AuthContext';

const useProvider = () => {
  const context = useContext(Authcontext);

  return context;
};

export default useProvider;
