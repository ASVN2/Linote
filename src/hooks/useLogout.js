import { auth } from '../firebase/config';

// firebase imports
import { signOut } from 'firebase/auth';
import useProvider from './useProvider';

const useLogout = () => {
  const { dispatch } = useProvider();

  const logout = () => {
    signOut(auth)
      .then((res) => {
        console.log('user logged out');
        dispatch({ type: 'LOGOUT' });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};

export default useLogout;
