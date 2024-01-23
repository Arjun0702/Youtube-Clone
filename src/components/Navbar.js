import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdMic } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import logo from "../assets/yt-white-logo.png";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth,provider } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import{setUsers,getUsers, logout} from "../slices/userSlice"


const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUsers);

   const handleSignIn=async()=>{
      const response = await signInWithPopup(auth,provider);
      // console.log(response);
      dispatch(setUsers(response.user));
   };

   const handlelogOut= async()=>{
      dispatch(logout());
      await signOut(auth);
   };

    console.log("user",user);
  return (
    <div className="bg-yt-black h-14 flex items-center pl-4 pr-5 justify-between fixed w-full z-10">
      <div className="flex justify-between items-center">
        <div className="text-yt-white p-2 w-10 text-2xl text-center hover:bg-yt-light-black rounded-full cursor-pointer">
          <HiOutlineBars3 />
        </div>
        <div className="py-5 w-28 pr-3">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
      </div>
      <div className="h-10 flex flex-row items-center flex-1 justify-center">
        <div className="w-[590px] bg-yt-black flex border border-yt-light-black items-center rounded-3xl h-10">
          <input
            type="text"
            placeholder="Search"
            className="w- w-full bg-yt-black h-6 ml-6 pl-4 text-yt-white text-start focus:outline-none"
          />
          <button className="w-16 h-10 bg-yt-light-black px-2 py-0.5 rounded-r-3xl border-l-2 border-yt-light-black">
            <HiMagnifyingGlass
              size={22}
              className="text-yt-white inline-block text-center font-thin"
            />
          </button>
        </div>
        <div className="text-yt-white bg-yt-light w-10 h-10 items-center flex justify-center rounded-full ml-2 hover:bg-yt-light-black cursor-pointer">
          <MdMic size={20} className="text-center" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center">
            <div className="mr-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
                <BiVideoPlus size={25} className="text-yt-white text-center"/>
            </div>
            <div class="mx-3 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
                <FaRegBell size={20} className="text-yt-white text-center"/>
            </div>
            <div className="mx-3 items-center cursor-pointer">
              {
                !user?(
                  <button className="bg-yt-red text-yt-white py-1 px-4 rounded-md" onClick={handleSignIn}>Sign in</button>
                ):(
                  <img src={user.photoURL} alt={user.displayName}
                  className="object-contain rounded-full cursor-pointer w-10 h-10"
                  onClick={handlelogOut}/>
                )
              }
                
                </div> 

        </div>
      </div>
    </div>
  );
};

export default Navbar;
