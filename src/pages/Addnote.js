import React, { useState } from 'react';
import Img from '../assets/note.png';
import { Firebase } from '../hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import useProvider from '../hooks/useProvider';
import { useNavigate } from 'react-router';

const Addnote = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const { addDocument, response } = Firebase('notes');
  const { user } = useProvider();

  const submitHander = (e) => {
    e.preventDefault();
    addDocument({ title, note, createdAt: serverTimestamp(), uid: user.uid });

    if (!response.error) {
      setTitle('');
      setNote('');
    }
  };

  return (
    <div className="contant flex justify-center place-items-center h-[80vh]">
      <div className="holder flex gap-36 ">
        <div className="image hidden md:flex bg-white  place-items-center rounded-xl p-10 w-fit text-black flex-col">
          <p className=" text-center text-xl font-gloock">👋 Welcome</p>
          <img className="my-4 max-w-[300px] " src={Img} alt="img-login" />
          <p className="max-w-[350px] font-cairo text-xl text-center">Thank you for chosen the right way to save your note </p>
        </div>

        <div className="form flex place-items-center ">
          <form onSubmit={submitHander} className="max-w-[500px] ">
            <label>
              <span className="block font-cairo text-[18px] mb-1 ">Title</span>
              <input required value={title} onChange={(e) => setTitle(e.target.value)} type="text" className=" outline-none rounded-md w-full p-2 text-black" />
            </label>

            <label className="mt-4 block">
              <span className="block font-cairo text-[18px]  mb-1">Note</span>
              <textarea
                required
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
                type="text"
                className="outline-none rounded-md h-[200px] p-2 w-full text-black"
              />
            </label>

            <input type="submit" value="Add Note" className="outline-none rounded-md p-2 mt-8 cursor-pointer hover:scale-95 transition-all text-black bg-white w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
