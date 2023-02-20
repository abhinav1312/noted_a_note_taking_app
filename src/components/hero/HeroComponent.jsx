import React, { useEffect, useContext } from "react";
import HeroForm from "./HeroForm";
import Template from "../random/Template";
import Notes from "./Notes";

const HeroComponent = () => {
  
  return (
    <>
      <Template>
        <section className="hero-section w-full h-fit p-20">
          <HeroForm />
        </section>
        <section className="all-notes-section h-max">
          <h1 className="text-3xl p-20 pb-0 h-fit font-semibold capitalize text-dgrey">
            Notes
          </h1>
          <Notes />
        </section>
      </Template>
    </>
  );
};

export default HeroComponent;
