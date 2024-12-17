import React from "react";
import serviceCarImag1 from "../assets/serviceCarImg1.png";
import truck from "../assets/truck.png";
import bag from "../assets/bag2.png";
import fligt from "../assets/fligt.png";

const services = [
  {
    title: "Warehousing Services",
    description:
      "A comprehensive solution for pallet storage, inventory management, fulfillment, pick and pack, Private bonded solutions, and more.",
    icon: truck, // Image path
  },
  {
    title: "Global Freight",
    description:
      "Search and compare the best shipping rates among dozens of the world’s largest partners for the fast world delivery of multiple.",
    icon: fligt, // Image path
  },
  {
    title: "Packaging Solutions",
    description:
      "Our packaging solutions are tailored for each individual customer and are selected based on the customer’s specific needs and requirements.",
    icon: bag, // Image path
  },
];

const ServicePage = () => {
  return (
    <div>
      <div className="block md:hidden">
        <div className="w-full flex  justify-center font-lato pl-50px pr-50px">
          <div className="bg-white p-8  w-full max-w-md">
            <div>
              <img src={serviceCarImag1} alt="Service Car" />
            </div>
            <h1 className="text-2xl font-bold mb-6 text-left">
              <span className="border-b-2  border-primaryRed font-lato">
                Services
              </span>{" "}
              We Offer
            </h1>
            {services.map((service, index) => (
              <div key={index} className="mb-[50px] mt-[50px]">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 mr-4">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h2 className="text-md font-semibold text-primaryRed ">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
            <div className="flex flex-col mt-6">
              <button className="border-2 rounder-xl border-primaryRed text-primaryRed p-[20px_50px] rounded hover:bg-red-600 mb-5">
                Request Quote
              </button>
              <button className="bg-primaryRed rounder-xl text-white p-[20px_50px] rounded hover:bg-red-600">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // laptop */}
      <div className="hidden md:block ">
        <div className="w-full font-lato pl-50px pr-50px">
          <div className="bg-white p-8  w-full ">
            <div className="flex flex-row-reverse justify-between items-center">
              <div>
                <img src={serviceCarImag1} alt="Service Car" />
              </div>
              <h1 className="text-2xl font-bold mb-6 text-left">
                <span className="border-b-2  border-primaryRed font-lato">
                  Services
                </span>{" "}
                We Offer
              </h1>
            </div>
            <div className="flex w-full">
              {services.map((service, index) => (
                <div key={index} className="mb-[50px] mt-[50px]">
                  <div className=" mb-2">
                    <div className="w-full  h-12 mr-4">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className=""
                      />
                    </div>
                    <h2 className="text-md font-semibold text-primaryRed ">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center ">
              <button className="border-2 rounder-xl border-primaryRed h-[72px] text-primaryRed p-[20px_50px] rounded hover:bg-red-600 mb-5 mr-5">
                Request Quote
              </button>
              <button className="bg-primaryRed rounder-xl text-white h-[72px] p-[20px_40px] rounded hover:bg-red-600">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
