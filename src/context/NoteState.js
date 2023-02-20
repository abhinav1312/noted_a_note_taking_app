import React, {useState, useEffect, useContext} from 'react'
import {collection, doc, getDocs, getDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import NoteContext from './NoteContext'
import AuthContext from './AuthContext'
const NoteState = (props) => {

    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;
    const userId = authContext.userId;
    
    useEffect(()=>{
        const getNotes = async() => {
            if(isLoggedIn){
                try{

                }
                catch(error){
                    console.log("Error occured while fetching data", error)
                }

            }
            else{
                
            }
        }
        getNotes();
    }, [])

    // console.log(users)

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
