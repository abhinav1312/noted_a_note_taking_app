import React, { useContext } from "react";
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
import AuthState from "./context/AuthState";
import Protected from "./components/auth/Protected";
import AlertBox from "./components/random/AlertBox";
import AlertContext from "./context/AlertContext";

function App() {
  const alertContext = useContext(AlertContext);
  const alertMsg = alertContext.alertMsg.message;
  const severity = alertContext.alertMsg.severity;
  return (
    <>
      <AlertBox alertMsg = {alertMsg} severity={severity} />
      <AuthState>
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
              <Route path="/hero" element={<Protected Component = {<NoteState> <HeroComponent /> </NoteState>} />} />
                {/* <Route
                  index
                  element={
                    <Protected Component = {<NoteState><HeroComponent /></NoteState>} />
                    // <NoteState>
                    //     <HeroComponent />
                    // </NoteState>
                  } */}
                {/* /> */}
                <Route
                  path="/hero/:category"
                  element={
                    <Protected Component = {<NoteState><NotesCategoryWise /></NoteState>} />
                    // <NoteState>
                    //     <NotesCategoryWise />
                    // </NoteState>
                  }
                />
              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        </AsideState>
      </AuthState>
      {/* </AlertState> */}
    </>
  );
}

export default App;
