import React from "react";
import Card from '../card/Card'
import noteContext from "../../context/NoteContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AlertContext from "../../context/AlertContext";


function Notes() {

  const tooltips = {
    archived: "archive",
    pinned: "pin",
    trash: "delete",
  }
  const handleAlertMsg = useContext(AlertContext).handleAlertMsg;

  const {category} = useParams();
  tooltips[category] = "un" + tooltips[category]
  const context = useContext(noteContext);
  const moveNote = context.moveNote
  let singleCategoryNote;
  if(category === undefined) singleCategoryNote = context.notes.all;
  else singleCategoryNote = context.notes[category];

  const handleDelete = (id, command) => {
    let message;
    if(category === undefined){
      moveNote(id, "all", command)
      message = command;
    }
    else{
      if(category === command){
        moveNote(id, category, "all")
        message = "all";
      }
      else{
        moveNote(id, category, command)
        message = command;
      }
    }
    handleAlertMsg('info', `Succesfully moved the note to ${message} section`);
  }
  return (
    <>
      <div className="all-notes p-20">

        {
          singleCategoryNote.map((note, id)=>{
            // const uid = note.id
            return(
              <Card key={id} id={note.id} title={note.title} content = {note.content} bgColor={note.bgColor} handleDelete={handleDelete} tooltips={tooltips}/>
            )
          })
        }
      </div>
    </>
  );
}

export default Notes;
