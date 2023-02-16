import React, {useState} from 'react'
import NoteContext from './NoteContext'
const NoteState = (props) => {
    const [notes, setNotes] = useState(
        {
            all: [],
            pinned: [],
            archived: [],
            trash: []
        }
    )

    const moveNote = (noteId, moveFrom, moveTo) => {
        let noteToMove = {}
        setNotes((prev)=>{
            return ({
                ...prev,
                [moveFrom] : prev[moveFrom].filter(note=>{
                    if(note.id === noteId ) noteToMove = { ...note }
                    return note.id !== noteId
                }),
                
                [moveTo]: [noteToMove, ...prev[moveTo]]
            })
        })
    }

    // function to insert in the note array
    const insertNote = (newNote, isPinned) => {
        if(isPinned){
            setNotes((prev)=>{
                return (
                    {
                        ...prev, 
                        all : [newNote, ...prev.all],
                        pinned: [newNote, ...prev.pinned]
                    }
                )
    
            })
        }
        else{
            setNotes((prev)=>{
                return (
                    {
                        ...prev, 
                        all : [newNote, ...prev.all],
                    }
                )
    
            })
        }
    }

    return(
        <NoteContext.Provider value={{notes, insertNote, moveNote }}>
            { props.children }
        </NoteContext.Provider>
    )
}

export default NoteState;
