import React, { useEffect } from "react";
import greenTick from "../assets/green-tick-dark.png";
import navigation1 from "../assets/navigation1.png";
import navigation2 from "../assets/navigation2.png";
import calendar from "../assets/calendar.png";
import passenger from "../assets/passenger.png";
import email from "../assets/email-outline.png";
import phone from "../assets/phone.png";
import pax from "../assets/pax.png";
import { format } from "date-fns";
import { useSelector } from "react-redux";

export default function ConfirmationPage() {
  const { bookingDetails } = useSelector(
    (state) => state.bookingConformationSlice
  );
  const date = new Date(bookingDetails.bookingDetails.date);
  const formattedDate = format(date, "MMMM do yyyy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-5 h-full font-manrope">
      <div className=" border shadow-md border-primaryGray2 rounded-3xl">
        <div className="p-5 rounded-t-3xl  bg-primarygray3  flex flex-col justify-center items-center">
          <img src={greenTick} width={60} height={60} className="mb-2" />
          <h1 className="text-center font-semibold text-primaryGreen text-[14px]">
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

        <div className="flex mr-5 ml-5 justify-between ">
          <h1 className="font-bold text-[20px]">Invoice</h1>
          <div className="text-right">
            <p className="">Booking ID</p>
            <h1 className="font-bold text-[20px]">
              {bookingDetails.bookingDetails.bookingId}
            </h1>
          </div>
        </div>
        <hr className=" mr-5 ml-5 "></hr>
        <div className="pb-5 mr-5 ml-5">
          <div className="h-8 border-l-2 border-dotted border-primaryRed relative left-[6px] top-[50px]"></div>

          <div className="flex items-start">
            <img src={navigation1} className="mr-5 " width={14} height={14} />
            <h1 className="font-semibold truncate text-[14px] ">
              {bookingDetails.bookingDetails.origin}
            </h1>
          </div>
          <div className="h-5"></div>
          <div className="flex items-start">
            <img src={navigation2} className="mr-5" width={14} height={14} />
            <h1 className="font-semibold text-primaryGray3 truncate text-[14px] ">
              {bookingDetails.bookingDetails.destination}
            </h1>
          </div>
        </div>
        <div className="p-[0px_5px] pb-5 pl-5 flex">
          <img src={calendar} className="mr-3" />
          <p>{formattedDate}</p>
        </div>
        <hr className=" mr-5 ml-5"></hr>
        <div className="p-5">
          <h1 className="text-center font-bold">Passenger Details</h1>
          <div className="text-primaryGray2 flex pb-2">
            <img src={passenger} className="mr-3" />
            <h1>
              {bookingDetails.bookingDetails.passengerDetails.firstName}{" "}
              {bookingDetails.bookingDetails.passengerDetails.lastName}
            </h1>
          </div>
          <div className="text-primaryGray2 flex pb-2">
            <img src={email} className="mr-3" />
            <h1>{bookingDetails.bookingDetails.passengerDetails.email}</h1>
          </div>
          <div className="text-primaryGray2 flex pb-2">
            <img src={phone} className="mr-3" />
            <h1>
              {bookingDetails.bookingDetails.passengerDetails.contactNumber}
            </h1>
          </div>
          <div className="text-primaryGray2 flex pb-2">
            <img src={pax} className="mr-3" />
            <h1>{bookingDetails.bookingDetails.paxCount}</h1>
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
            Total{" "}
            <span className="text-primaryRed ">
              {bookingDetails.bookingDetails.totalPrice}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
