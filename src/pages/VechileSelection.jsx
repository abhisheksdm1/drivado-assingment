import React, { useEffect } from "react";
import locationGreen from "../assets/locationGreen.png";
import locationRed from "../assets/locationRed.png";
import arrow from "../assets/arrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const vehicles = [
  {
    type: "Standard Sedan",
    price: "USD 85",
    pax: 3,
    luggage: 2,
    image: "standard-sedan.jpg", // Replace with your actual image source
  },
  {
    type: "Premium Sedan",
    price: "USD 85",
    pax: 3,
    luggage: 2,
    image: "premium-sedan.jpg", // Replace with your actual image source
  },
  {
    type: "Economy Van",
    price: "USD 85",
    pax: 3,
    luggage: 2,
    image: "economy-van.jpg", // Replace with your actual image source
  },
  {
    type: "Premium Van",
    price: "USD 85",
    pax: 3,
    luggage: 2,
    image: "premium-van.jpg", // Replace with your actual image source
  },
  {
    type: "Luxury Sedan",
    price: "USD 85",
    pax: 3,
    luggage: 2,
    image: "luxury-sedan.jpg", // Replace with your actual image source
  },
];

const VehicleSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedOrigin, selectedDestination } = location.state || {};
  const { data } = useSelector((state) => state.bookingSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlechange = (data, vechileName, vechilePrice) => {
    navigate("/booking-form", {
      state: {
        data,
        vechileName,
        vechilePrice,
        selectedOrigin,
        selectedDestination,
      },
    });
  };

  return (
    <div className="min-h-screen p-5  flex flex-col items-center">
      {/* Header Section */}
      <div className=" border rounded w-full border-primaryGray2  pr-6 pb-8">
        <div className="h-10 border-l-2 border-dotted border-primaryRed relative left-[34px] top-[89px]"></div>

        <div className="flex font-manrope items-center justify-between">
          <div className="flex items-center justify-between">
            <img src={locationRed} />
            <div className=" inline-block">
              <p className="text-[12px] truncate w-[100px]">{selectedOrigin}</p>
              <p className="text-[10px]">Pickup Location</p>
            </div>
          </div>
          <div className="pr-5 w-[100px]">
            <h2 className="font-semibold text-[10px]">Distance</h2>
            <p className="text-[12px]">{data.distanceKm} km</p>
          </div>
        </div>

        <div className="flex font-manrope items-center justify-between">
          <div className="flex items-center justify-between">
            <img src={locationGreen} />
            <div className=" inline-block">
              <p className="text-[12px] truncate w-[100px]">
                {selectedDestination}{" "}
              </p>
              <p className="text-[10px]">Dropoff Location</p>
            </div>
          </div>
          <div className="pr-5 w-[100px]">
            <h2 className="font-semibold text-[10px]">Pax</h2>
            <p className="text-[12px]">{data.paxCount}</p>
          </div>
        </div>
      </div>

      <div className="font-manrope w-full p-2 flex items-center justify-between space-x-2">
        <div className="flex-1">
          <hr className="h-1 bg-primaryGray2 border-0 rounded" />
        </div>
        <div>
          <h3 className="inline-block whitespace-nowrap">
            Choose Your Vehicle
          </h3>
        </div>
        <div className="flex-1">
          <hr className="h-1 bg-primaryGray2 border-0 rounded" />
        </div>
      </div>
      <div className="font-manrope w-full text-[10px] ">
        <p>All prices include VAT, Gratuities, Meet & Greet services </p>
      </div>
      {/* Vehicle Options */}

      <div className="font-manrope w-full border border-primaryGray2 rounded">
        {data.carOptions.map((vehicle, index) => (
          <div
            key={index}
            onClick={() => handlechange(data, vehicle.name, vehicle.price)}
          >
            <div className="flex p-4 justify-between ">
              <div className="flex ">
                <div className="flex flex-col items-center">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-[80px] bg-red-500 h-[50px] object-fit rounded-lg"
                  />
                  <p className="text-primaryRed mb-2 font-bold text-[14px]">
                    {vehicle.price}
                  </p>
                </div>
                <div className="pl-3">
                  <h3 className="text-worldBlack2 leading-6 h-[24px] font-bold  text-[16px]">
                    {vehicle.name}
                  </h3>
                  <div className="flex mt-4 ">
                    <p className="text-worldBlack2  pr-2 text-[12px] font-semibold">
                      2 Pax
                    </p>
                    <p className="text-worldBlack2 text-[12px] font-semibold">
                      {" "}
                      2 Luggage
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center pl-4">
                <img src={arrow} />
              </div>
            </div>
            <div>
              <hr className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelection;
