import React from 'react';
import useProvider from '../hooks/useProvider';

const Sidebar = ({ notes }) => {
  const { dispatch, theme } = useProvider();

  const clickHander = (note) => {
    dispatch({ type: 'CURRENT_NOTE', payload: note });
  };

  return (
    <div className={theme === 'dark' ? 'bg-black h-fit rounded-md p-4' : 'bg-white h-fit rounded-md p-4 text-black'}>
      <h1 className="text-2xl mb-4 p-4 ">Notes</h1>
      <ul className="sidebar-notes bg-gray-900 max-w-[300px] min-w-[250px]  p-5 rounded-2xl overflow-y-scroll h-[70vh]">
        {notes &&
          notes.map((note) => (
            <button className="block w-full" onClick={() => clickHander(note)} key={note.id}>
              <h1 className="text-white font-cairo text-left text-xl cursor-pointer hover:bg-gray-600 transition-all  bg-gray-800  p-2 my-2 rounded-lg">
                {note.title.slice(0, 22)}
                {note.title.length > 22 ? '...' : null}
              </h1>
            </button>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
