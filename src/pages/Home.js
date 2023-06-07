import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { CategoryItems } from "../static/data";
import {collection, onSnapshot, query} from "firebase/firestore"
import { auth, db } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";
import Video from "../components/Video";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {  setUsers } from "../slices/userSlice";

const Home = () => {
 
    const[videos,setVideos]=useState([]);
    console.log(videos);
    const dispatch=useDispatch();
    // navigate
    const navigate = useNavigate();

    useEffect(()=>{
        const q=query(collection(db,"videos"));
        onSnapshot(q,(snapShot)=>{
            setVideos(
                snapShot.docs.map((doc)=>({
                    ...doc.data(),
                    id:doc.id,

                }))
            );
        })
    }, [])

    useEffect(()=>{
       onAuthStateChanged(auth,(user)=>{
           if(user){
            dispatch(setUsers(user));
           }
           else{
            dispatch(setUsers(null));
           }
       })
    }, []);
    // console.log(videos)

  return (
    <div>
      <Sidebar />
      <div className="w-[calc(100%-240px)] h-[calc(100%-53px)] pt-16  bg-yt-black ml-60 ">
        <div className="flex flex-row px-3  overfollow-x-scroll relative scrollbar-none">
          {CategoryItems.map((item, index) => {
            return (
              <h2 className="text-yt-white  font-normal text-sm py-2 px-4 break-keep  whitespace-nowrap cursor-pointer bg-yt-light my-3 mx-2 rounded-xl hover:bg-yt-light-1" key={index}>
                {item}
              </h2>
            );
          })}
        </div>
        <div className="pt-12 px-5 grid grid-cols-yt gap-x-3 gap-y-8">
            {
                videos.length === 0 ? (
                   <div className="h-[86vh]"></div>
                ) : (
                    videos.map((video,i)=>(
                     <div key={video.id} onClick={()=>navigate(`/Video/${video.id}`)}>
                        <Video {...video}/>
                     </div>
                    ))
                )
            }
        </div>
      </div>
      </div>
  );
};

export default Home;
