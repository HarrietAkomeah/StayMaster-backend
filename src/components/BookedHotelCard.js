import moment from "moment/moment";
import React, { useState } from "react";
import DetailModal from "./DetailModal";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';

const BookedHotelCard = ({
  name,
  location,
  rating,
  pricePerNight,
  removeHotel,
  thumbnail,
  StayInfo,
}) => {
  return (
    <div className="  text-white bg-gray-900 rounded-sm">
      <img
        className="w-full rounded-sm "
        src={thumbnail}
        alt={name}
        srcset=""
      />
      <div className="p-5">
        <div className="font-semibold mb-2 justify-between flex gap-2   text-sm text-gray-400">
          <div className="flex gap-2">
            <FaMapMarkerAlt/>
            <p>{location}</p>{" "}
          </div>
          <div className="flex gap-2">
            <FaStar/>
            <p>{rating}</p>
          </div>
        </div>
        <p className="font-bold  text-gray-300  ">{name}</p>
        <div className="flex justify-between">
          <p className="font-semibold text-sm text-gray-400 mt-2 ">
          GH₵ {pricePerNight}/ Academic Year
          </p>
          <p className="font-semibold text-sm text-gray-400 mt-2 ">
            Rooms : {StayInfo?.noOfRooms}
          </p>
        </div>
        <div className="flex items-center justify-between">
          Date:
          <p className="font-semibold text-sm text-gray-400 mt-2 ">
            {moment(StayInfo?.stayDate).format("MMM Do YY")}
          </p>
        </div>
        <button
          onClick={removeHotel}
          className="p-2 w-full bg-gray-700 mt-5 rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BookedHotelCard;
