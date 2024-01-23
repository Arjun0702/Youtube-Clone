import { onSnapshot, query, doc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { auth, db } from "../Firebase";
import { AiFillLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { HiDotsHorizontal, HiDownload } from "react-icons/hi";
import { MdOutlineSort } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUsers } from "../slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { CategoryItems } from "../static/data";
import RecommendVideo from "../components/RecommendVideo";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [comment, setComment] = useState([]);
  const [data, setData] = useState(null);
  

  const { id } = useParams();
  // console.log("id", id);
  const dispatch = useDispatch();
  const user = useSelector(getUsers);

  useEffect(() => {
    if (id) {
      const q = query(doc(db, "videos", id));
      onSnapshot(q, (snapShot) => {
        setData(snapShot.data());
      });
      console.log("q", q);
    }
  }, [id]);
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
   console.log("Data", data);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUsers(user));
      } else {
        dispatch(setUsers(null));
      }
    });
  }, []);

  return (
    <div className="py-20 px-9 bg-yt-black flex flex-row h-full">
      <div className="left flex-1">
        <div className="flex justify-center">
          <iframe
            src={`https://www.youtube.com/embed/${data?.link}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[850px] h-[700px] flex-1"
          ></iframe>
        </div>
        <h2 className="text-yt-white font-semibold mt-3 mb-1 text-lg">
          {data?.title}
        </h2>
        <div className="flex">
          <div className="flex items-center">
            <img
              src={data?.logo}
              alt={data?.channel}
              className="w-10 h-10 rounded-full"
            />
            <div className="px-3">
              <h3 className="text-yt-white font-medium text-base">
                {data?.channel && data?.channel.length <= 25
                  ? data?.channel
                  : `${data?.channel && data?.channel.substr(0, 20)}...`}
              </h3>
              <p className="text-yt-gray text-sm">
                {data?.subscribers} subscribers
              </p>
            </div>
            <button className="bg-yt-white text-sm px-3 py-2 rounded-xl ml-3 font-medium ">
              Subscribe
            </button>
            <div className="flex pl-28">
              <div className="flex bg-yt-light-black item-center rounded-2xl h-10 mx-1 hover:bg-yt-light-1">
                <div className="flex px-3 items-center border-r-2 border-r-yt-light-1 cursor-pointer">
                  <AiFillLike className="text-yt-white text-2xl" />
                  <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">
                    200K
                  </p>
                </div>
                <div className="flex items-center pl-3 pr-5 cursor-pointer">
                  <BiDislike className="text-yt-white text-2xl" />
                </div>
              </div>
              <div className="flex bg-yt-light-black item-center rounded-2xl h-10 mx-1 hover:bg-yt-light-1">
                <div className="flex px-3 items-center  cursor-pointer">
                  <RiShareForwardLine className="text-yt-white text-2xl font-thin" />
                  <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">
                    share
                  </p>
                </div>
              </div>
              <div className="flex bg-yt-light-black item-center rounded-2xl h-10 mx-1 hover:bg-yt-light-1">
                <div className="flex px-3 items-center  cursor-pointer">
                  <HiDownload className="text-yt-white text-2xl font-thin" />
                  <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">
                    Download
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-yt-light-black hover:bg-yt-light-1 w-10 h-10 rounded-full justify-center text-yt-white cursor-pointer">
                <HiDotsHorizontal />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl bg-yt-light-black mt-4 rounded-2xl p-3 text-sm text-yt-white">
          <div className="flex">
            <p className="font-medium pr-3">
              {data?.views}
              <span className="pl-1 text-xs">Views</span>
            </p>
            <p className="font-medium pr-3">{data?.uploadTime}</p>
          </div>
          <span className="text-center font-medium">{data?.description}</span>
        </div>
        <div className="text-yt-white mt-5">
          <div className="flex items-center">
            <h1>{comment.length} Comments</h1>
            <div className="flex items-center mx-10">
              <MdOutlineSort size={30} className="mx-3" />
              <h5>Sort by</h5>
            </div>
          </div>
          {user && (
            <form className="flex w-[800px] pt-4 items-start">
              <img
                src={user?.photoURL}
                alt="profile"
                className="h-12 w-12 rounded-full mr-3"
              />
              <input
                placeholder="Add a comment..."
                className="bg-[transparent] border-b border-bg-yt-light-black outline-none text-sm p-2 w-full"
              ></input>
            </form>
          )}
        </div>
      </div>
      <div className="right px-3 overflow-y-hidden flex-[0.4] ">
        <div>
          <div className="flex flex-row px-3 overflow-x-scroll relative scrollbar-hide">
            {CategoryItems.map((item, index) => {
              return (
                <h2
                  className="text-yt-white  font-normal text-sm py-2 px-4 break-keep  whitespace-nowrap cursor-pointer bg-yt-light my-3 mx-2 rounded-xl hover:bg-yt-light-1"
                  key={index}
                >
                  {item}
                </h2>
              );
            })}
          </div>
          <div className="pt-5">
            {
              videos.map((video,i)=>{
                  if(video.id!== id){
                     return(
                      <Link  key={i} to={`/video/${video.id}`} >
                         <RecommendVideo {...video}/>
                      </Link>
                     
                     )
                  }
              })
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Video;
