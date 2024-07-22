import React, { useState } from "react";
import DetailModal from "./DetailModal";
import { FaStar } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";

const HotelCard = ({
  name,
  location,
  description,
  rating,
  pricePerNight,
  numberOfRooms,
  thumbnail,
}) => {
  const [stateShow, setstateShow] = useState(false);
  return (
    <div className="  text-white bg-gray-900 rounded-sm">
      <img className="w-full rounded-sm  h-28 md:h-52" src={thumbnail} alt={name}  />
      <div className=" p-2 md:p-5">
        <div className="font-semibold mb-2 justify-between flex gap-2   text-sm text-gray-400">
          <div className="flex  items-center gap-2">
            <FaMapMarkerAlt/>
            <p className="text-[10px] md:text-sm">{location}</p>{" "}
          </div>
          <div className="flex  items-center gap-2">
            <FaStar />
            <p className="text-[10px] md:text-sm">{rating}</p>
          </div>
        </div>
        <p className=" text-sm font-bold  text-gray-200  ">{name}</p>
        <p className=" text-xs  text-gray-300 font-semibold  mt-2 ">
        GH₵ {pricePerNight}/ Academic Year
        </p>

        <button
          onClick={() => {
            setstateShow(true);
          }}
          className="p-2 text-xs font-semibold w-full bg-gray-700 mt-5 rounded-sm"
        >
          View Details
        </button>

      </div>
        <DetailModal
          name={name}
          location={location}
          description={description}
          rating={rating}
          pricePerNight={pricePerNight}
          numberOfRooms={numberOfRooms}
          thumbnail={thumbnail}
          stateShow={stateShow}
          setstateShow={setstateShow}
        />
    </div>
  );
};

export default HotelCard;
