import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HomeLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col justify-center">
      <h1 className="font-bold text-9xl text-lblue leading-tight">
        <span className="text-orange">A</span>ll your notes. <br />
        Organized. <br />
        Effortless.
      </h1>

      <p className="text-3xl w-full pr-40 my-20 text-white tracking-wider leading-normal text-justify">
        Urgency strikes anywhere. Noted gives you the best experience to jot down notes, to do lists, checklists images and helps you capture, organize and
        share your ideas across any device
      </p>

      {/* redirect to /main link on button click */}
      {/* <NavLink to="/hero"> */}
      <button className="btn bg-orange hover:bg-lblue text-white hover:text-orange w-1/2 h-20 rounded text-2xl font-bold tracking-widest" onClick={()=>navigate('/hero')}>
          Get Started
      </button>
      {/* </NavLink> */}


    </div>
  );
};

export default HomeLeft;
