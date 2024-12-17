import React, { useEffect, useState } from "react";
import dot from "../assets/dot.png";
import timer from "../assets/timer.png";
import tick from "../assets/green-tick.png";
import pepole from "../assets/pepole.png";
import luggage from "../assets/luggage.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBookingConformationData } from "../redux/bookingConformationSlice";
export default function BookingForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const { loading } = useSelector((state) => state.bookingConformationSlice);
  const dispatch = useDispatch();
  const {
    data,
    vehicleName,
    vehiclePrice,
    selectedOrigin,
    selectedDestination,
  } = location.state || {};
  const handleBooking = async () => {
    const formData = {
      carType: vehicleName,
      origin: selectedOrigin,
      destination: selectedDestination,
      date: data.date,
      currency: data.currency,
      paxCount: data.paxCount,
      passengerDetails: {
        firstName: firstName,
        lastName: lastName,
        contactNumber: phoneNumber,
        email: email,
      },
    };
    await dispatch(addBookingConformationData(formData)).unwrap();
    navigate("/confirmation");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-5 font-manrope">
      <div className="w-full mb-3 border bg-primarygray3 border-primaryGray2 p-3 flex items-center justify-between">
        <img src="" width={81} height={39} className="bg-red-500" />
        <h1 className="pl-2">{vehicleName}</h1>
        <img src={dot} />
      </div>
      <div className=" bg-primarygray3 mb-3 w-full border border-primaryGray2 p-3">
        <h1>{vehicleName}</h1>
        <p>(Corolla, Toyota Prius, Camry, Ford Taurus or similar)</p>
      </div>
      <div className="flex mb-3 bg-primarygray3">
        <div className="mr-3 w-full border border-primaryGray2 p-3">
          <div className="flex mb-2">
            <img src={pepole} />
            <p className="text-[12px]"> 3 Pax</p>
          </div>
          <div className="flex">
            <img src={luggage} />
            <p className="text-[12px]"> 2 Luggages</p>
          </div>
        </div>
        <div className="w-full border border-primaryGray2 p-3">
          <div className="text-primaryGreen flex mb-2">
            <img src={tick} className="mr-2" />
            <p className="text-[12px]"> Free Cancellation</p>
          </div>
          <div className="text-primaryGreen flex">
            <img src={timer} className="mr-2" />
            <p className="text-[12px]"> Free Waiting time</p>
          </div>
        </div>
      </div>
      <div className="mb-3 w-full border border-primaryGray2 bg-primarygray3 p-3">
        <p className="text-[12px]">
          Include VAT , Gratuties , Meet & Greet services
        </p>
        <h1 className="font-semibold text-[18px] text-primaryRed">
          {vehiclePrice}
        </h1>
      </div>
      <div className=" border border-primaryGray2 bg-primarygray3 p-3">
        <h1 className="font-bold pt-2 pb-2">Passenger Details</h1>
        <div className="mb-4">
          {" "}
          <label className="block text-gray-700">First name*</label>{" "}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Enter your first name"
          />{" "}
        </div>

        <div className="mb-4">
          {" "}
          <label className="block text-gray-700">Last name*</label>{" "}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Enter your last name"
          />{" "}
        </div>

        <div className="mb-4">
          {" "}
          <label className="block text-gray-700"> Phone Number*</label>{" "}
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Enter your phone number"
          />{" "}
        </div>

        <div className="mb-4">
          {" "}
          <label className="block text-gray-700">Email*</label>{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Enter your email"
          />{" "}
        </div>
        <button
          onClick={handleBooking}
          className="w-full p-[12px_32px] text-white bg-primaryRed rounded"
        >
          Confirm & Pay&nbsp;
          {loading && <span>Loading ...</span>}
        </button>
      </div>
    </div>
  );
}
