import React, { useState, useEffect, useContext } from "react";
import { auth, provider, db } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import AuthContext from "./AuthContext";
import { collection, doc, getDoc, addDoc, setDoc } from "firebase/firestore";
import AlertContext from "./AlertContext";

const AuthState = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleAlertMsg = useContext(AlertContext).handleAlertMsg;
  const handleNewUser = async (usersDocRef, notesDocRef, user) => {
    const allCollectionRef = collection(notesDocRef, "all");
    const pinnedCollectionRef = collection(notesDocRef, "pinned");
    const archivedCollectionRef = collection(notesDocRef, "archived");
    const trashCollectionRef = collection(notesDocRef, "trash");
    const userData = {
      name: user.displayName,
      email: user.email,
      createdAt: new Date(),
    };
    const notesData = { createdAt: new Date() };
    const sampleData = {
      title: "sample title",
      content: "sample content",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      await Promise.all([
        setDoc(usersDocRef, userData),
        setDoc(notesDocRef, notesData),
        addDoc(allCollectionRef, sampleData),
        addDoc(pinnedCollectionRef, sampleData),
        addDoc(archivedCollectionRef, sampleData),
        addDoc(trashCollectionRef, sampleData),
      ]);
    } catch (error) {
      
    }
  };
  const handleSignin = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const userDocRef = doc(collection(db, "users"), user.uid);
      const notesDocRef = doc(collection(db, "notes"), user.uid);
      const snapshot = await getDoc(userDocRef);

      // if new user signs in
      if (!snapshot.exists()) {
        await handleNewUser(userDocRef, notesDocRef, user);
      }
      localStorage.setItem("demo-token", true);
      setIsLoggedIn(true);
      handleAlertMsg("success", "User login successfull !")
    } catch (error) {
      console.log(error);
    }
  };


  const handleSignout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    handleAlertMsg("success", "Successfully logged out")
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("demo-token");
    setIsLoggedIn(loggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn, setIsLoggedIn, handleSignin, handleSignout }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthState;
