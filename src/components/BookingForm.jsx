import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/vechile");
  };
  return (
    <div className="pr-50px pl-50px w-full mt-[50px] mb-[50px]">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full">
        <div class="relative border border-gray-400 rounded-lg p-3 mt-4 mb-2">
          <label class="absolute top-[-10px] left-3 bg-white text-gray-600 px-1 text-sm">
            Origin
          </label>
          <input
            type="text"
            class="w-full border-0 h-[20px] p-2 focus:outline-none"
          />
        </div>
        <div class="relative border border-gray-400 rounded-lg p-3 mt-4">
          <label class="absolute top-[-10px] left-3 bg-white text-gray-600 px-1 text-sm">
            Destination
          </label>
          <input
            type="text"
            class="w-full border-0 p-2 h-[20px] focus:outline-none"
          />
        </div>
        <div class="relative border border-gray-400 rounded-lg p-3 mt-4">
          <label class="absolute top-[-10px] left-3 bg-white text-gray-600 px-1 text-sm">
            Date
          </label>
          <input
            type="text"
            class="w-full border-0 p-2 focus:outline-none h-[20px]"
          />
        </div>
        <div class="relative border border-gray-400 rounded-lg p-3 mt-4">
          <label class="absolute top-[-10px] h-[20px] left-3 bg-white text-gray-600 px-1 text-sm">
            Pax Count
          </label>
          <input
            type="text"
            class="w-full border-0 p-2 focus:outline-none h-[20px]"
          />
        </div>
        <div class="relative border border-gray-400 rounded-lg p-3 mt-4">
          <label class="absolute top-[-10px] left-3 bg-white text-gray-600 px-1 text-sm">
            Currency
          </label>
          <input
            type="text"
            class="w-full h-[20px] border-0 p-2 focus:outline-none"
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full bg-primaryRed text-white font-semibold py-2 rounded-md hover:bg-red-600"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
