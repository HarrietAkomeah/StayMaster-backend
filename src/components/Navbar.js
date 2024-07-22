import React from "react";

function Navbar({ setcurPage, curPage }) {
  return (
    <header className="text-gray-900   top-0 fixed w-full body-font border-b-2 bg-gray-950 border-gray-800 ">
      <div className="container mx-auto flex   px-5 py-2  flex-row  justify-between items-center">
        <div className="text-white text-lg font-semibold ">
          <span>StayMaster</span>
          <span className=" text-yellow-500"> Booking</span>
        </div>
        <nav className=" flex  items-center text-base   ">
          <button
            onClick={(e) => {
              setcurPage(1);
            }}
            className={` ${
              curPage === 1 && "bg-gray-800 px-5 py-2 rounded-md "
            }  mr-5 hover:text-gray-200 text-gray-300 font-semibold `}
          >
            Home
          </button>
          <button
            onClick={(e) => {
              setcurPage(2);
            }}
            className={` ${
              curPage === 2 && "bg-gray-800 px-5 py-2 rounded-md "
            }   hover:text-gray-200 text-gray-300 font-semibold `}
          >
            My Booking
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
