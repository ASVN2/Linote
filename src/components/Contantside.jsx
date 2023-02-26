import React from 'react';
import { Link } from 'react-router-dom';
import useProvider from '../hooks/useProvider';
import { Firebase } from '../hooks/useFirebase';

const Contantside = () => {
  const { note } = useProvider();
  const { removeDoc } = Firebase('notes');
  const { dispatch, theme } = useProvider();

  const removeHandler = () => {
    removeDoc(note.id);
    dispatch({ type: 'CURRENT_NOTE', payload: null });
  };

  return (
    <div
      className={
        theme === 'dark'
          ? 'bg-black min-w-[200px]  p-6 rounded-2xl  w-full relative max-h-[80vh]'
          : 'bg-white text-black min-w-[200px]  p-6 rounded-2xl  w-full relative max-h-[80vh]'
      }>
      <h2 className="text-2xl capitalize font-gloock">{note && note.title}</h2>
      <p className="mt-8 text-gray-300 text-md">{note && note.note}</p>
      <p onClick={() => removeHandler()} className=" cursor-pointer absolute bottom-20 bg-white rounded-full text-black p-4 block right-4 hover:bg-gray-400 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          {' '}
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{' '}
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />{' '}
        </svg>
      </p>
      <Link
        to="/add"
        className="text-black bg-white h-12 justify-center hover:bg-gray-400 transition-all text-sm absolute bottom-4 right-4 flex place-items-center  w-12 rounded-full">
        New
      </Link>
    </div>
  );
};

export default Contantside;
