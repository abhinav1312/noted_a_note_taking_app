import React from "react";
import Template from "../random/Template";
import Notes from "../hero/Notes";

const NotesCategoryWise = () => {

  return (
    <>
      <Template>
        <section className="h-max">
          <Notes />
        </section>
      </Template>
    </>
  );
};

export default NotesCategoryWise;
