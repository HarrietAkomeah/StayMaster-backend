import React, { useState } from "react";
import { hotelsData } from "./hotelsData";
import HostelCard from "./components/HotelCard";
import { Toaster } from "react-hot-toast";
import MyHotels from "./pages/MyHotels";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
const App = () => {
  const [curPage, setcurPage] = useState(1);
  return (
    <>
      <Navbar  curPage={curPage} setcurPage={setcurPage} />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gray-950">
      {curPage === 1 ? <Home /> : <MyHotels />}
      </div>
      {/* <Footer/> */}

    </>
  );
};

export default App;
