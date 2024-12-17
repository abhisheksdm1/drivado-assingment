import React from "react";
import serviceCarImag1 from "../assets/serviceCarImg1.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import operationImg1 from "../assets/operationImg1.png";
import operationImg2 from "../assets/operationImg2.png";
import operationImg3 from "../assets/operationImg3.png";
import line from "../assets/line.png";

const services = [
  {
    banner: operationImg1,
    title: "Contact",
    description:
      "A comprehensive solution for pallet storage, inventory management, fulfillment, pick and pack, Private bonded solutions, and more.",
    icon: one,
  },
  {
    banner: operationImg2,
    title: "Store",
    description:
      "Search and compare the best shipping rates among dozens of the world’s largest partners for the fast world delivery of multiple.",
    icon: two,
  },
  {
    banner: operationImg3,
    title: "Ship",
    description:
      "Our packaging solutions are tailored for each individual customer and are selected based on the customer’s specific needs and requirements.",
    icon: three,
  },
];

const OperationPage = () => {
  return (
    <div>
      <div className="block md:hidden">
        <div className="w-full flex justify-center font-lato pl-50px pr-50px">
          <div className="bg-white p-8  w-full max-w-md">
            {/* Header Image */}
            <div className="mb-6">
              <img
                src={serviceCarImag1}
                alt="Service Car"
                className="w-[100px] h-[100px]"
              />
            </div>
            {/* Heading */}
            <h1 className="text-2xl font-bold mb-6 text-left">
              <span className="border-b-2 border-primaryRed">Operation</span>{" "}
              Mode
            </h1>
            {/* Service List */}
            {services.map((service, index) => (
              <div key={index} className="mb-12 mt-[50px]">
                <img
                  src={service.banner}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4">
                    <img
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-primaryRed">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
            {/* Buttons */}
          </div>
        </div>
      </div>
      {/* //laptop */}
      <div className="hidden md:block">
        <div className="w-full relative flex justify-center font-lato pl-50px pr-50px">
          <img
            src={line}
            className="absolute left-1/2 -translate-x-1/2 top-[550px]  w-[600px] "
          />
          <div className="bg-white p-8 w-full">
            {/* Header Image */}

            <div className="flex  justify-between items-center">
              <div className="mb-6">
                <img
                  src={serviceCarImag1}
                  alt="Service Car"
                  className="w-[100px] h-[100px]"
                />
              </div>
              {/* Heading */}
              <h1 className="text-2xl font-bold mb-6 text-left mr-10">
                <span className="border-b-2 border-primaryRed">Operation</span>{" "}
                Mode
              </h1>
            </div>
            {/* Service List */}
            {services.map((service, index) => (
              <div
                key={index}
                className={`mb-12 flex items-center justify-between mt-[50px] ${
                  index !== 1 ? "flex-row-reverse" : "" // Apply flex-row-reverse only if index is not 1
                }`}
              >
                <img
                  src={service.banner}
                  alt={service.title}
                  className="w-[400px] h-[400px] pr-5 pl-5 object-cover"
                />

                <div className=" mb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 mr-4">
                      <img
                        src={service.icon}
                        alt={`${service.title} Icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h2 className="text-xl font-semibold text-primaryRed">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 w-[300px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            {/* Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationPage;
