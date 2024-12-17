import React, { useEffect } from "react";
import locationGreen from "../assets/locationGreen.png";
import locationRed from "../assets/locationRed.png";
import arrow from "../assets/arrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const VehicleSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedOrigin, selectedDestination } = location.state || {};
  const { data } = useSelector((state) => state.bookingSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (data, vehicleName, vehiclePrice) => {
    navigate("/booking-form", {
      state: {
        data,
        selectedOrigin,
        selectedDestination,
        vehicleName,
        vehiclePrice,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-5">
      {/* Mobile View */}
      <div className="block md:hidden w-full">
        {/* Header Section */}
        <div className="border rounded w-full border-primaryGray2 p-6 pb-8">
          <div className="h-10 border-l-2 border-dotted border-primaryRed relative left-[34px] top-[89px]"></div>
          <div className="flex items-center justify-between font-manrope">
            <div className="flex items-center">
              <img src={locationRed} alt="Pickup" />
              <div className="inline-block pl-2">
                <p className="text-[12px] truncate w-[100px]">
                  {selectedOrigin}
                </p>
                <p className="text-[10px]">Pickup Location</p>
              </div>
            </div>
            <div className="pr-5 w-[100px]">
              <h2 className="font-semibold text-[10px]">Distance</h2>
              <p className="text-[12px]">{data?.distanceKm} km</p>
            </div>
          </div>
          <div className="flex items-center justify-between font-manrope mt-3">
            <div className="flex items-center">
              <img src={locationGreen} alt="Dropoff" />
              <div className="inline-block pl-2">
                <p className="text-[12px] truncate w-[100px]">
                  {selectedDestination}
                </p>
                <p className="text-[10px]">Dropoff Location</p>
              </div>
            </div>
            <div className="pr-5 w-[100px]">
              <h2 className="font-semibold text-[10px]">Pax</h2>
              <p className="text-[12px]">{data?.paxCount}</p>
            </div>
          </div>
        </div>

        <div className="font-manrope w-full text-[10px] my-4">
          <p>All prices include VAT, Gratuities, Meet & Greet services</p>
        </div>

        {/* Vehicle Options */}
        <div className="font-manrope w-full border border-primaryGray2 rounded">
          {data.carOptions.map((vehicle, index) => (
            <div
              key={index}
              onClick={() => handleChange(data, vehicle.name, vehicle.price)}
              className="cursor-pointer"
            >
              <div className="flex p-4 justify-between">
                <div className="flex items-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={vehicle?.image}
                      alt={vehicle?.name}
                      className="w-[80px] h-[50px] object-cover rounded-lg"
                    />
                    <p className="text-primaryRed mb-2 font-bold text-[14px]">
                      {vehicle?.price}
                    </p>
                  </div>
                  <div className="pl-3">
                    <h3 className="text-worldBlack2 font-bold text-[16px]">
                      {vehicle?.name}
                    </h3>
                    <div className="flex mt-2">
                      <p className="text-worldBlack2 pr-2 text-[12px]">3 Pax</p>
                      <p className="text-worldBlack2 text-[12px]">2 Luggage</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={arrow} alt="Arrow" />
                </div>
              </div>
              <hr className="w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Laptop View */}
      <div className="hidden md:block w-full">
        {/* Grid Layout for 2 Columns */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Vehicle Options */}
          <div>
            {data.carOptions.map((vehicle, index) => (
              <div
                key={index}
                className="relative border border-primaryGray2 rounded-lg p-4 mb-5"
              >
                <button
                  onClick={() =>
                    handleChange(data, vehicle.name, vehicle.price)
                  }
                  className="absolute right-0 bottom-0 rounded-tl-lg rounded-br-lg text-white bg-gradient-to-r from-[#FB4156] to-[#BD0015] p-[5px_10px]"
                >
                  Book Now
                </button>
                <div className="cursor-pointer mb-4">
                  <div className="flex p-4 justify-between">
                    <div className="flex items-center">
                      <img
                        src={vehicle?.image}
                        alt={vehicle?.name}
                        className="w-[80px] h-[50px] object-cover rounded-lg bg-red-500"
                      />

                      <div className="pl-3">
                        <h3 className="text-worldBlack2 font-bold text-[16px]">
                          {vehicle?.name}
                        </h3>
                        <p className="text-worldBlack2 text-[12px]">
                          3 Pax, 4 Luggage
                        </p>
                        <h1 className="text-primaryRed font-bold">
                          {vehicle.price}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Column - Trip Details */}
          <div className="border h-[300px] border-primaryGray2 rounded p-6 ">
            <div className="h-10 border-l-2 border-dotted border-primaryRed relative left-[34px] top-[89px]"></div>
            <div className="">
              <div className="flex items-center justify-between font-manrope">
                <div className="flex items-center">
                  <img src={locationRed} alt="Pickup" />
                  <div className="inline-block pl-2">
                    <p className="text-[12px] truncate w-[150px]">
                      {selectedOrigin}
                    </p>
                    <p className="text-[10px]">Pickup Location</p>
                  </div>
                </div>
                <div className="pr-5 w-[100px]">
                  <h2 className="font-semibold text-[10px]">Distance</h2>
                  <p className="text-[12px]">{data?.distanceKm} km</p>
                </div>
              </div>
              <div className="flex items-center justify-between font-manrope mt-4">
                <div className="flex items-center">
                  <img src={locationGreen} alt="Dropoff" />
                  <div className="inline-block pl-2">
                    <p className="text-[12px] truncate w-[150px]">
                      {selectedDestination}
                    </p>
                    <p className="text-[10px]">Dropoff Location</p>
                  </div>
                </div>
                <div className="pr-5 w-[100px]">
                  <h2 className="font-semibold text-[10px]">Pax</h2>
                  <p className="text-[12px]">{data?.paxCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelection;
