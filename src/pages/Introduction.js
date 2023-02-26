import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/intro.png';

const Introduction = () => {
  return (
    <div className="flex  place-items-center h-[80vh]">
      <div className="holder flex gap-10 justify-between">
        <div className="image bg-white rounded-xl flex-1">{<img src={Img} alt="" />}</div>
        <div className="text flex-1 flex flex-col justify-center gap-20 p-5">
          <p className="text-center font-gloock text-xl tracking-wider">
            Hello and welcome! Our note-taking platform is designed to make your life easier. Stay organized and increase productivity with our easy-to-use interface. Try it out
            now!
          </p>

          <ul className="flex gap-6  justify-center">
            <li className="bg-black p-4 px-6 rounded-md hover:bg-gray-700 transition-all">
              <Link to="/login" className="text-xl">
                🛎 Login
              </Link>
            </li>

            <li className="bg-black p-4 px-6 rounded-md hover:bg-gray-700 transition-all">
              <Link to="/signup" className="text-xl">
                🎉 Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
