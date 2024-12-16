import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookingData } from "../redux/bookingSlice";
import { address } from "../json/address";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [originCoordinates, setOriginCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [destinationCoordinates, setDestinationCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [pax, setPax] = useState(null);
  const [currency, setCurrency] = useState("");
  const [date, setDate] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState(""); // State for selected origin
  const [selectedDestination, setSelectedDestination] = useState(""); // State for selected origin
  const { loading } = useSelector((state) => state.bookingSlice);

  const handleSubmit = async () => {
    const formData = {
      origin: {
        latitude: originCoordinates.latitude,
        longitude: originCoordinates.longitude,
      },
      destination: {
        latitude: destinationCoordinates.latitude,
        longitude: destinationCoordinates.longitude,
      },
      paxCount: pax, // Replace with an actual number
      currency: currency, // Replace with a valid currency string like "USD" or "EUR"
      date: date, // Replace with an actual date string
    };
    console.log(formData);
    await dispatch(addBookingData(formData)).unwrap();
    navigate("/vechile", { state: { selectedOrigin, selectedDestination } });
    setPax("");
    setCurrency("");
    setDate("");
    setSelectedOrigin("");
    setSelectedDestination("");
  };

  const handleSelectChangeOrigin = (e) => {
    const selectedAddress = e.target.value;
    setSelectedOrigin(e.target.value);
    // Find the selected address in the JSON
    const selectedItem = address.find(
      (item) => item.address === selectedAddress
    );

    // Update state with latitude and longitude
    if (selectedItem) {
      setOriginCoordinates({
        latitude: selectedItem.latitude,
        longitude: selectedItem.longitude,
      });
    }
  };

  const handleSelectChangeDestination = (e) => {
    const selectedAddress = e.target.value;
    setSelectedDestination(e.target.value);
    // Find the selected address in the JSON
    const selectedItem = address.find(
      (item) => item.address === selectedAddress
    );

    // Update state with latitude and longitude
    if (selectedItem) {
      setDestinationCoordinates({
        latitude: selectedItem.latitude,
        longitude: selectedItem.longitude,
      });
    }
  };

  return (
    <div className="pr-50px pl-50px w-full mt-[50px] mb-[50px]">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full">
        <div className="relative border border-gray-400 rounded-lg p-3 mt-4 mb-2">
          <label className="absolute top-[-10px] left-3 bg-white text-gray-600 px-1 text-sm">
            Origin
          </label>
          <select
            value={selectedOrigin}
            onChange={handleSelectChangeOrigin}
            className="w-full border-0 p-2 text-gray-600 h-[50px] "
          >
            <option value="" disabled selected>
              Select Origin
            </option>
            {address.map((item) => (
              <option value={item.address}>{item.address}</option>
            ))}
          </select>
        </div>

        <div className="relative border border-gray-400 rounded-lg p-3 mt-4">
          <label className="absolute top-[-10px] left-3 bg-white text-gray-600 px-1 text-sm">
            Destination
          </label>
          <select
            value={selectedDestination}
            onChange={handleSelectChangeDestination}
            className="w-full border-0 p-2 focus:outline-none h-[50px]  text-gray-700"
          >
            <option value="" disabled selected>
              Select Destination
            </option>
            {address.map((item) => (
              <option value={item.address}>{item.address}</option>
            ))}
          </select>
        </div>

        <div className="relative border border-gray-400 rounded-lg p-3 mt-4">
          <label className="absolute top-[-10px] left-3 bg-white text-gray-600 px-1 text-sm">
            Date
          </label>
          <input
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-0 p-2 focus:outline-none h-[20px]"
          />
        </div>
        <div className="relative border border-gray-400 rounded-lg p-3 mt-4">
          <label className="absolute top-[-10px] h-[20px] left-3 bg-white text-gray-600 px-1 text-sm">
            Pax Count
          </label>
          <input
            value={pax}
            type="text"
            onChange={(e) => setPax(e.target.value)}
            className="w-full border-0 p-2 focus:outline-none h-[20px]"
          />
        </div>

        <div className="relative border border-gray-400 rounded-lg p-3 mt-4">
          <label className="absolute top-[-10px] left-3 bg-white text-gray-600 px-1 text-sm">
            Currency
          </label>
          <input
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            type="text"
            className="w-full h-[20px] border-0 p-2 focus:outline-none"
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full bg-primaryRed text-white font-semibold py-2 rounded-md hover:bg-red-600"
            onClick={handleSubmit}
          >
            Search&nbsp;
            {loading && <span>Loading...</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
