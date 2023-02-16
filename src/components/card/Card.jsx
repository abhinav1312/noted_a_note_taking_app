import React, { useState, useRef} from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { IconButton, Tooltip } from "@mui/material";

const para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum similique architecto est illo fugit ut sapiente consequatur consequuntur, a nobis consectetur corrupti dolore rem ipsam enim fugiat explicabo repellat ab illum earum magni perspiciatis? Necessitatibus harum, quaerat ullam nesciunt quod at, assumenda eaque, exercitationem omnis quia perferendis laudantium consectetur mollitia."

const hoverStyle = {
  "&:hover":{
    color: "#f77f00"
  }
}

const Card = (props) => {
  const [cursorIn, setCursorIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [paras, setParas] = useState(para);
  const [rows, setRows] = useState(1);
  const textAreaRef = useRef();

  //  function dealing with textarea resizing
   const handleContentChange = (e) => {
    textAreaRef.setAttribut("disabled", true)
    setParas(e.target.value)
  };

  return (
    <>
      <div
        className= "card w-96 h-96 p-4 border border-dgrey rounded inline-block"
        style={{backgroundColor: props.bgColor}}
        onMouseEnter={() => setCursorIn(!cursorIn)}
        onMouseLeave={() => setCursorIn(!cursorIn)}
        onClick={()=>setIsClicked(true)}
      >
        <div className="title-div flex justify-between align-center">
          <h3 className="title text-3xl font-semibold inline-block"> { props.title } </h3>
          <Tooltip title={<h3 style={{ fontSize: "1rem" }}> { props.tooltips.pinned }  </h3>}>
            <IconButton
              sx={{ opacity: cursorIn ? 1 : 0, transition: ".2s linear", "&:hover": {color: "#f77f00"} }}
              onClick={()=>{props.handleDelete(props.id, "pinned")}}
            >
              <PushPinIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
        <p className="text-2xl my-4 overflow-hidden text-justify">
        <textarea
          ref={textAreaRef}
          rows= "3"
          name="content"
          id="content"
          placeholder="Take a note..."
          className="w-full focus:outline-0 my-8 text-2xl font-medium resize-none placeholder-black"
          style={{backgroundColor: props.bgColor}}
          value={props.content}
          onChange={handleContentChange}
        />
          
        </p>

        <div
          className="options"
          style={{
            opacity: cursorIn === true ? 1 : 0,
            transition: ".2s linear",
          }}
        >
          <Tooltip title={<h3 style={{ fontSize: "1rem" }}>  { props.tooltips.archived } </h3>}>
            <IconButton sx={{ "&:hover": {color: "#f77f00"} }} onClick={()=>props.handleDelete(props.id, "archived")} >
              <ArchiveIcon fontSize="large" />
            </IconButton>
          </Tooltip>

          <Tooltip title={<h3 style={{ fontSize: "1rem" }}> change background color </h3>}>
            <IconButton sx={{ "&:hover": {color: "#f77f00"} }} >
              <ColorLensIcon fontSize="large" />
            </IconButton>
          </Tooltip>

          <Tooltip title={<h3 style={{ fontSize: "1rem" }}> { props.tooltips.trash } </h3>}>
            <IconButton sx={{ "&:hover": {color: "#f77f00"} }} onClick={()=>props.handleDelete(props.id, "trash")}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Card;
