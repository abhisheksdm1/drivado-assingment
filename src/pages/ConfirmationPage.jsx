import React from "react";
import greenTick from "../assets/green-tick-dark.png";
import navigation1 from "../assets/navigation1.png";
import navigation2 from "../assets/navigation2.png";
import calendar from "../assets/calendar.png";
import passenger from "../assets/passenger.png";
import email from "../assets/email-outline.png";
import phone from "../assets/phone.png";
import pax from "../assets/pax.png";

export default function ConfirmationPage() {
  return (
    <div className="p-5 h-full font-manrope">
      <div className=" border shadow-md border-primaryGray2 rounded-3xl">
        <div className="p-5 rounded-t-3xl  bg-primarygray3  flex flex-col justify-center items-center">
          <img src={greenTick} width={60} height={60} className="mb-2" />
          <h1 className="text-center font-semibold text-[14px]">
            Thank you for your payment. Your booking is CONFIRMED.
          </h1>
        </div>
        <div className="m-5 rounded-3xl p-5 border bg-primarygray3 shadow-md border-primaryGray2">
          <h1 className="">Dear test,</h1>
          <p className="text-primaryGray2">
            Thank you for booking with drivado. You will receive driver details
            atleast 1 hour prior to pick up time. You can find the summary of
            your booking below.
          </p>
        </div>

        <div className="flex p-5 justify-between ">
          <h1 className="font-bold text-[20px]">Invoice</h1>
          <div className="text-right">
            <p className="">Booking ID</p>
            <h1 className="font-bold text-[20px]">D450</h1>
          </div>
        </div>
        <hr className=" mr-5 ml-5 "></hr>
        <div className="p-5">
          <div class="h-5 border-l-2 border-dotted border-primaryRed relative left-[5px] top-[40px]"></div>

          <div className="flex">
            <img src={navigation1} width={14} height={14} className="mr-5" />
            <h1 className="font-semibold text-[14px] ">London</h1>
          </div>
          <div className="h-5"></div>
          <div className="flex">
            <img src={navigation2} width={14} height={14} className="mr-5" />
            <h1 className="font-semibold text-primaryGray3 text-[14px] ">
              London
            </h1>
          </div>
        </div>
        <div className="p-[0px_5px] pb-5 pl-5 flex">
          <img src={calendar} className="mr-3" />
          <p>September 25th 2024, at 09:42</p>
        </div>
        <hr className=" mr-5 ml-5"></hr>
        <div className="p-5">
          <h1 className="text-center font-bold">Passenger Details</h1>
          <div className="text-primaryGray2 flex pb-2">
            <img src={passenger} className="mr-3" />
            <h1>hi there</h1>
          </div>
          <div className="text-primaryGray2 flex pb-2">
            <img src={email} className="mr-3" />
            <h1>hi there</h1>
          </div>
          <div className="text-primaryGray2 flex pb-2">
            <img src={phone} className="mr-3" />
            <h1>hi there</h1>
          </div>
          <div className="text-primaryGray2 flex pb-2">
            <img src={pax} className="mr-3" />
            <h1>hi there</h1>
          </div>
        </div>
        <hr className=" mr-5 ml-5 "></hr>
        <div className="p-5">
          <h1 className="font-bold  text-[20px] text-center">
            Vehicle Details
          </h1>
          <h1 className="font-semibold text-[28px] text-center">
            Standard Sedan
          </h1>
          <img src="" />
          <h1 className="text-[16px] text-center text-primaryGray2">
            Scan the code to view in any device
          </h1>
          <h1 className="text-[28px] text-center">
            {" "}
            Total <span className="text-primaryRed ">USD 234.44</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
