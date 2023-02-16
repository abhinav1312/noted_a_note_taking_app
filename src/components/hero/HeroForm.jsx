import React, { useState, useRef, useEffect, useContext } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PushPinIcon from "@mui/icons-material/PushPin";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { Button, IconButton, Tooltip } from "@mui/material";
import noteContext from "../../context/NoteContext";


const closeBtnStyle = {
  letterSpacing: "2px",
  color: "#f77f00",
  padding: "1rem 2rem",
  fontWeight: "600",
  fontSize: "1.1rem",
  "&:hover": { backgroundColor: "#f8f9fa" }
};

// generate unique id for a note
const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}



const HeroForm = () => {
  const insertNote = useContext(noteContext).insertNote
  const formDivRef = useRef(); // to change form height on title click
  const contentRef = useRef();
  const [pinClicked, setPinClicked] = useState(false)
  const [note, setNote] = useState({  // keep track of the note getting typed by the user
    title: "",
    content: "",
    bgColor: "#ffffff"
  })
  const [showPalette, setShowPalette] = useState(false)

  // useEffect to handle form close/open when click outside formDivRef 
  useEffect(()=>{
    let handler = event => {
      if(!formDivRef.current.contains(event.target)){
        handleCloseBtnClick();
      }
    }
    document.addEventListener("mousedown", handler)
    // cleanup
    return ()=>{
      document.removeEventListener("mousedown", handler)
    }
  })

  // function dealing with textarea resizing
  const handleNoteInput = (e) => {
    const {name, value} = e.target

    // automatic textarea resizing
    if(name === "content"){
      const row = e.target.scrollHeight/20;
      if(row > e.target.rows)
        e.target.rows = row
    }

    // update note being typed
    setNote((prev)=>{
      return({
        ...prev, 
        [name]: value
      })
    })
  };

  const handleCloseBtnClick = () => {
    const title = note.title.trim() // remove whitespace
    const content = note.content.trim() // remove whitespace
    const bgColor = note.bgColor
    
    // if user didnt entered title or content or both
    if(title !== "" && content !== ""){
      const id = uid(); // unique id for a note
      const newNote = {
        id, title, content, bgColor
      }
      insertNote(newNote, pinClicked)
      
      setNote({
        title: "",
        content: "",
        bgColor: "#ffffff"
      })
    }
    contentRef.current.rows = 1;
    formDivRef.current.style.height = "6rem";
    setPinClicked(false)
  }

  return (
    <>

      



      <div
        ref={formDivRef}
        className="hero-form-div m-auto w-1/2 p-8 overflow-hidden grid align-middle"
        style={{ height: "6rem", backgroundColor: note.bgColor }}
      >

        {/* Title input */}
        <div className="flex justify-between align-center">
          <input style={{backgroundColor: note.bgColor}}
            type="text"
            name="title"
            id="title"
            value={note.title}
            onChange={handleNoteInput}
            placeholder="Title"
            className="w-4/5 text-2xl font-semibold focus:outline-0 h-12 placeholder-black"
            onClick={()=>formDivRef.current.style.height = "fit-content"}
          />
            <IconButton onClick={()=>setPinClicked(prev=>!prev)}>
              <PushPinIcon fontSize="large" sx={{color: pinClicked? "red":""}} />
            </IconButton>
        </div>
        <br />

        {/* main content input */}
        <textarea style={{backgroundColor: note.bgColor}}
          ref = {contentRef}
          rows="1"
          name="content"
          id="content"
          value={note.content}
          onChange={handleNoteInput}
          placeholder="Take a note..."
          className="w-full focus:outline-0 my-8 text-2xl font-medium resize-none placeholder-black"
        />
        <br />
        <div className="options flex justify-between">
          <div className="left-options">
            <Tooltip title={<h3 style={{ fontSize: "1rem" }}>reminder</h3>}>
              <IconButton>
                <NotificationsNoneIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={
                <h3 style={{ fontSize: "1rem" }}>change background color</h3>
              }
            >
              <IconButton onClick={()=>setShowPalette(!showPalette)}>
                <ColorLensIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            
            {
              showPalette &&
              <input type="color" name="bgColor" value={note.bgColor} id="" className=" relative top-4 left-4" onChange={handleNoteInput} />
            }

          </div>
          <div className="right-options">
            <Button
              variant="text"
              sx={closeBtnStyle}
              onClick={handleCloseBtnClick}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroForm;
