import { AiFillHome } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { HiOutlineFire } from "react-icons/hi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlineLocalMovies } from "react-icons/md";
import { HiSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { BsNewspaper } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import { AiOutlineBulb } from "react-icons/ai";
import { GiDress } from "react-icons/gi";

export const SideBarItems = {
  Top: [
    {
      icon: <AiFillHome size={21} />,
      name: "Home",
    },
    {
      icon: <SiYoutubemusic size={21} />,
      name: "Shorts"
    },
    {
        icon:<MdOutlineSubscriptions size={21}/>,
        name:"Subscriptions"
    }
  ],
  Middle: [
    {
        icon: <MdVideoLibrary size={21} />,
        name: "Library",
      },
      {
        icon: <VscHistory   size={21} />,
        name: "History"
      },
      {
          icon:<AiOutlinePlaySquare     size={21}/>,
          name:"Your videos"
      },
      {
        icon: <AiOutlinePlayCircle size={21} />,
        name: "Watch later"
      },
      {
          icon:<BiLike size={21}/>,
          name:"Liked videos"
      }
  ],
  Explore: [
      {
        icon: <HiOutlineFire size={21} />,
        name: "Trending",
      },
      {
        icon: <IoMusicalNoteOutline   size={21} />,
        name: "Music"
      },
      {
          icon:<MdOutlineLocalMovies    size={21}/>,
          name:"Movies"
      },
      {
        icon: <HiSignal size={21} />,
        name: "Live"
      },
      {
          icon:<SiYoutubegaming size={21}/>,
          name:"Gaming"
      },
      {
        icon: <BsNewspaper  size={21} />,
        name: "News"
      },
      {
          icon:<CiTrophy     size={21}/>,
          name:"Sports"
      },
      {
        icon: <AiOutlineBulb  size={21} />,
        name: "Learning"
      },
      {
          icon:< GiDress  size={21}/>,
          name:"Fashion&Beauty"
      }
  ],
};

export const  CategoryItems=[
    "All",
    "Music",
    "Mixes",
    "JavaScript",
    "React js",
    "Melodies",
    "Ms Dhoni",
    "T-series",
    "Hollywood",
    "Cricket",
    "Tech",

];
