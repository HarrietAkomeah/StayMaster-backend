import React from "react";
import { Toaster } from "react-hot-toast";
import { hotelsData } from "../hotelsData";
import HostelCard from "../components/HotelCard";
const Home = () => {
  return (
    <div className="  bg-gray-950 mt-14  p-5 container m-auto">

      <h1 className="font-bold  text-xl md:text-3xl  mb-5 text-white">
         Hostels
      </h1>
      <div className="gap-5 grid md:grid-cols-5 grid-cols-2">
        {hotelsData.map((item, index) => {
          return (
            <HostelCard
              key={index}
              id={item?.id}
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

export default Home;
