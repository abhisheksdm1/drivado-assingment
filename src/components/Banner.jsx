import React from "react";
import bannerImage1 from "../assets/bannerImage1.png";
import videoImg from "../assets/videoImg.png";
export default function Banner() {
  return (
    <div>
      <div className="block md:hidden">
        <div className="pl-50px pr-50px flex flex-col items-center ">
          <img src={bannerImage1} alt="banner" />
          <h1 className="text-wordBlack font-manrope text-[40px] text-center font-bold mb-[50px]">
            We Offer Exceptional Comfort With 24/7 Access To Our{" "}
            <span className="text-primaryRed">
              <br className="md:hidden" />
              Top-Tier
            </span>{" "}
            Chauffeur Services.
          </h1>
          <div className="flex justify-center items-center">
            <button className="font-lato w-[100px] h-[57px] bg-primaryRed text-white font-manrope p-[40px 20px] rounded-xl	">
              Join Now
            </button>
            <div className="flex items-center">
              <img
                src={videoImg}
                alt="videoImage"
                className="w-[60px] h-[60px]"
              />
              <h1 className="text-primaryRed text-xs">Play Demo</h1>
            </div>
          </div>
        </div>
      </div>
      {/* laptop */}
      <div className="hidden md:block">
        <div className=" flex items-start flex-row-reverse  pl-50px pr-50px p-10">
          <img src={bannerImage1} alt="banner" className="pr-10" />

          <div className="pt-10">
            <h1 className="text-wordBlack font-manrope text-[30px]  font-bold mb-[10px]">
              We Offer Exceptional Comfort With 24/7 Access To Our{" "}
              <span className="text-primaryRed">
                <br className="md:hidden" />
                Top-Tier
              </span>{" "}
              Chauffeur Services.
            </h1>
            <div className="flex">
              <button className="font-lato w-[100px] h-[57px] bg-primaryRed text-white font-manrope p-[40px 20px] rounded-xl	">
                Join Now
              </button>
              <div className="flex items-center">
                <img
                  src={videoImg}
                  alt="videoImage"
                  className="w-[60px] h-[60px]"
                />
                <h1 className="text-primaryRed text-xs">Play Demo</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
