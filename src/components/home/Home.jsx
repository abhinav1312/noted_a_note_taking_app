import React from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import Header from "../partials/Header";

const Home = () => {
  
  return (
    <>
      <Header />
      <main>
        <section className="grid grid-cols-2 bg-dblue px-28 py-10">
          <HomeLeft />
          <HomeRight />
        </section>
      </main>
    </>
  );
};

export default Home;
