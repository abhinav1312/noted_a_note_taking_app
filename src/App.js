import React from "react";
import "./index.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact";
import HeroComponent from "./components/hero/HeroComponent";
import "./assets/styles/root.scss";
import NoteState from "./context/NoteState";
import NotesCategoryWise from "./components/noteCategory/NotesCategoryWise";
import AsideState from "./context/AsideState";
import AlertState from "./context/AlertState";


function App() {
  return (
    <>
    <AsideState>
      <BrowserRouter>
        <Routes>
          {/* home page */}
          <Route path="/" element={<Home />} />

          {/* about page */}
          <Route path="/about" element={<About />} />

          {/* contact page  */}
          <Route path="/contact" element={<Contact />} />

          {/* on clicking getting started divert to where the notes and to do list is present */}
          <Route path="/hero">
            <Route index element={  <NoteState> <AlertState> <HeroComponent /> </AlertState> </NoteState>  } />
            <Route path=":category" element={ <NoteState> <AlertState> <NotesCategoryWise /> </AlertState> </NoteState> } />
          </Route>
        </Routes>
      </BrowserRouter>
      </AsideState>
    </>
  );
}

export default App;
