import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import BookedHotelCard from "../components/BookedHotelCard";

const MyHotels = () => {
  const [hotels, setHotels] = useState([]);

  const fetchHotelsFromLocalStorage = () => {
    const storedHotels = JSON.parse(localStorage.getItem("hotels")) || [];
    setHotels(storedHotels);
  };

  useEffect(() => {
    fetchHotelsFromLocalStorage();
  }, []);

  const removeHotel = (index) => {
    const updatedHotels = [...hotels];
    updatedHotels.splice(index, 1);
    setHotels(updatedHotels);
    localStorage.setItem("hotels", JSON.stringify(updatedHotels));
    toast.success("Hotel Remove Successfully");
  };

  return (
    <div className="text-white mt-14 p-5 container h-screen m-auto">
      <h1 className="font-bold  text-xl md:text-3xl">Your Booking</h1>
      <div className="text-white mt-5 ">
        {hotels.length === 0 && "No Booking Found"}
      </div>{" "}
      <div className="gap-5 mt-5 grid md:grid-cols-5 grid-cols-1">
        {hotels?.map((item, index) => {
          return (
            <BookedHotelCard
              key={index}
              index={index}
              removeHotel={removeHotel}
              id={item?.id}
              StayInfo={item?.StayInfo}
              name={item?.name}
              location={item?.location}
              description={item?.description}
              rating={item?.rating}
              pricePerNight={item?.pricePerNight}
              numberOfRooms={item?.numberOfRooms}
              thumbnail={item?.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyHotels;
