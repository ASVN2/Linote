import React from 'react';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import useProvider from '../hooks/useProvider';

const Nav = () => {
  const { logout } = useLogout();
  const { user, theme, dispatch } = useProvider();

  const modeHandler = () => {
    dispatch({ type: 'THEME', payload: 'dark' });
    if (theme) {
      theme === 'dark' ? dispatch({ type: 'THEME', payload: 'light' }) : dispatch({ type: 'THEME', payload: 'dark' });
    }
  };

  return (
    <nav className="flex justify-between pt-6">
      <Link className={theme === 'dark' ? `bg-black p-2 px-4 rounded-md` : `bg-white p-2 px-4 rounded-md text-black`} to={'/'}>
        ð¥ LiNote
      </Link>
      <ul className="flex gap-6">
        <li
          className={
            theme === 'dark' ? `bg-black p-2 px-4 rounded-md  hover:bg-gray-700 transition-all` : `bg-white p-2 px-4 rounded-md text-black hover:bg-gray-400 transition-all`
          }>
          <button onClick={modeHandler}>ð Mode</button>
        </li>

        {!user && (
          <li
            className={
              theme === 'dark' ? `bg-black p-2 px-4 rounded-md  hover:bg-gray-700 transition-all` : `bg-white p-2 px-4 rounded-md text-black hover:bg-gray-400 transition-all`
            }>
            <Link to="/login">ð Login</Link>
          </li>
        )}

        {!user && (
          <li
            className={
              theme === 'dark' ? `bg-black p-2 px-4 rounded-md  hover:bg-gray-700 transition-all` : `bg-white p-2 px-4 rounded-md text-black hover:bg-gray-400 transition-all`
            }>
            <Link to="/signup">ð Signup</Link>
          </li>
        )}

        {user && (
          <button
            onClick={logout}
            className={
              theme === 'dark' ? `bg-black p-2 px-4 rounded-md  hover:bg-gray-700 transition-all` : `bg-white p-2 px-4 rounded-md text-black hover:bg-gray-400 transition-all`
            }>
            ðªLog out
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
