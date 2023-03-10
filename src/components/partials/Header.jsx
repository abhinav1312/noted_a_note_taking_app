import React, { useContext } from "react";
import BrandLogo from "../../assets/images/logo.png";
import { NavLink} from "react-router-dom";
import Hamburger from "./Hamburger";
import AsideContext from "../../context/asideContext";
// import {auth, provider} from '../../firebaseConfig'
// import { signInWithPopup } from "firebase/auth";
import AuthContext from "../../context/AuthContext";



const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleSignin = useContext(AuthContext).handleSignin;
  const handleSignout = useContext(AuthContext).handleSignout;
  const isLoggedIn = useContext(AuthContext).isLoggedIn;

  // const handleSignin = () => {
  //   signInWithPopup(auth, provider).then(data=>{
  //     localStorage.setItem("demo-token", true)
  //     setIsLoggedIn(true);
  //   })
  // }
  // const handleSignout = () => {
  //   localStorage.clear();
  //   setIsLoggedIn(false)
  // }
  // useEffect(()=>{
  //   const loggedIn = localStorage.getItem("demo-token");
  //   setIsLoggedIn(loggedIn)
  // }, [isLoggedIn])

  const setAsideWidthFull = useContext(AsideContext).setAsideWidthFull;
  return (
    <>
      <header className="text-3xl text-white bg-dblue capitalize font-semibold sticky top-0 w-full">
        <nav className="h-full">
          <div className="grid grid-cols-2 h-full px-8">
            <div className="flex gap-12">
              <span className="pt-6">
                <Hamburger onClick={() => setAsideWidthFull((prev) => !prev)} />
              </span>
              <img
                src={BrandLogo}
                alt="brand logo"
                className="w-56 object-contain"
              />
            </div>

            <ul className="flex justify-end items-center gap-12">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>

                {
                  isLoggedIn === "true" ?
                  <button className="btn text-2xl bg-orange hover:bg-lblue text-white hover:text-orange font-bold py-6 px-12 rounded-full"
                  onClick={()=>handleSignout()}
                  >
                  Sign out
                </button>
                  :
                  <button className="btn text-2xl bg-orange hover:bg-lblue text-white hover:text-orange font-bold py-6 px-12 rounded-full"
                  onClick={()=>handleSignin()}
                  >
                  Sign in
                </button>
                }
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
