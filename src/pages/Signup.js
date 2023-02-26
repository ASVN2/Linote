import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/signup.png';
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { sginup } = useSignup();

  const submitHander = (e) => {
    e.preventDefault();
    sginup(email, password);
  };

  return (
    <div className="contant flex justify-center place-items-center h-[80vh]">
      <div className="holder flex gap-36 ">
        <div className="image hidden md:flex bg-white  place-items-center rounded-xl p-10 w-fit text-black flex-col">
          <p className=" text-center text-xl font-gloock">👋 Welcome</p>
          <img className="my-4 max-w-[300px] " src={Img} alt="img-login" />
          <p className="max-w-[350px] font-cairo text-xl text-center">Thank you for chosen the right way to save your note </p>
        </div>

        <div className="form flex place-items-center">
          <form onSubmit={submitHander} className="max-w-[400px]">
            <label>
              <span className="block font-cairo text-[18px] mb-1">Email</span>
              <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="outline-none rounded-md w-full p-2 text-black" />
            </label>

            <label className="mt-4 block">
              <span className="block font-cairo text-[18px] mb-1">Password</span>
              <input
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="outline-none rounded-md p-2 w-full text-black"
              />
            </label>

            <label className="mt-4 block">
              <span className="block font-cairo text-[18px] mb-1">Username</span>
              <input
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                className="outline-none rounded-md p-2 w-full text-black"
              />
            </label>

            <input type="submit" value="Login" className="outline-none rounded-md p-2 mt-8 cursor-pointer hover:scale-95 transition-all text-black bg-white w-full" />

            <p className="text-md mt-5 text-center capitalize">
              you’already allrady having account
              <Link to={'/login'} className="text-yellow-400 ml-1">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
