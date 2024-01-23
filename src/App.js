import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Youtube-Clone" element={<Home/>}></Route>
        <Route path="/Video/:id" element={<Video/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
