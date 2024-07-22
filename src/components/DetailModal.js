import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaStar } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";

const DetailModal = ({
  name,
  location,
  description,
  rating,
  pricePerNight,
  numberOfRooms,
  thumbnail,
  stateShow,
  setstateShow,
}) => {
  const [loading, setLoading] = useState(false);
  const [stayDate, setstayDate] = useState("");
  // const [leaveDate, setleaveDate] = useState("");
  const [noOfRooms, setnoOfRooms] = useState("");

  const handleBookedHotel = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stayDate || !noOfRooms) {
      setLoading(false);
      return toast.error("Fill all the fields");
    }
    // Retrieve hotels array from localStorage or initialize an empty array if it doesn't exist
    let hotels = JSON.parse(localStorage.getItem("hotels")) || [];

    // Check if the hotel already exists in the hotels array
    const hotelExists = hotels.some(
      (hotel) =>
        hotel.name === name &&
        hotel.location === location &&
        hotel.description === description &&
        hotel.rating === rating &&
        hotel.pricePerNight === pricePerNight &&
        hotel.numberOfRooms === numberOfRooms
    );

    if (!hotelExists) {
      hotels.push({
        name,
        location,
        description,
        rating,
        pricePerNight,
        numberOfRooms,
        thumbnail,
        StayInfo: {
          stayDate,
        
          noOfRooms,
        },
      });
      localStorage.setItem("hotels", JSON.stringify(hotels));
      toast.success("Hotel booked Successfully");
    } else {
      toast.error("Hotel already booked");
    }
    setLoading(false);
  };

  return (
    <div
      className={` ${
        stateShow ? "" : "hidden"
      } w-full fixed top-0  h-screen left-0  grid place-items-center`}
    >
      <div className="opacity-80 transition-all delay-100 ease-linear  bg-black w-full h-full absolute " />
      <div className="bg-gray-900 p-5 w-full md:w-[50%]  absolute bottom-0 md:bottom-auto   rounded-md ">
        <div className="flex justify-between items-center">
          <h3 className=" font-bold text-2xl">{name}</h3>
          <button
            onClick={() => {
              setstateShow(false);
            }}
            className="uil uil-times bg-gray-800 p-1 rounded-md text-3xl w-12 h-12 "
          />
        </div>{" "}
        <div className="p-5 flex gap-5 bg-gray-800  md:flex-row flex-col  md:items-center rounded-md mt-5">
          <div className="" >
            <img src={thumbnail}   className="rounded-md h-40 w-full " alt={name}/>
          </div>
          <div>
            <p className="  text-gray-200  font-semibold   text-2xl">
              {name}
            </p>{" "}
            <div className="mt-2">
              <p className=" text-sm md:text-base text-gray-300">
                Per Academic Year : GH₵ {pricePerNight}
              </p>{" "}
              <p className=" text-sm md:text-base text-gray-300">
                Rooms Available : {numberOfRooms}
              </p>{" "}
            </div>
            <div className="font-semibold mt-2 justify-between flex gap-2   text-sm text-gray-400">
              <div className="flex  items-center gap-2">
              <FaMapMarkerAlt />
                <p className="text-[10px] md:text-sm">{location}</p>{" "}
              </div>
              <div className="flex  items-center gap-2">
                <FaStar />
                <p className="text-[10px] md:text-sm">{rating}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 md:flex-row flex-col mt-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-500 font-semibold">
              {" "}
              Stay Date & Time
            </label>
            <input
              className="object-none bg-transparent p-2 border w-full  rounded-md   outline-none  border-gray-800 text-white"
              type="date"
              onChange={(e) => {
                setstayDate(e.target.value);
              }}
            />
          </div>
          {/* <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-500 font-semibold">
              {" "}
              Leave Date & Time
            </label>
            <input
              className="object-none bg-transparent p-2 border w-full  rounded-md   outline-none   border-gray-800 text-white"
              type="datetime-local"
              onChange={(e) => {
                setleaveDate(e.target.value);
              }}
            />
          </div> */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-500 font-semibold">Type of Rooms</label>
            <input
              className="object-none bg-transparent p-2 border w-full  rounded-md   outline-none  border-gray-800 text-white"
              type="text"
              placeholder="3 in 1"
              onChange={(e) => {
                setnoOfRooms(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          onClick={handleBookedHotel}
          type="submit"
          className="hover:bg-gray-800 w-full   md:mb-0 mb-12 mt-5 bg-gray-950 p-3 rounded-md font-semibold"
          disabled={loading}
        >
          {loading ? "Loading..." : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default DetailModal;
