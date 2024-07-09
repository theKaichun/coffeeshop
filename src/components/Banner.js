import React from "react";
import Image from "next/image";
import bg from "@/assets/website/NBaC.jpg";

import BannerImg from "@/assets/website/overcoffee.jpg";

import { GiCoffeeBeans } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { MdOutlineSevereCold } from "react-icons/md";

const bgImage = {
  backgroundImage: `url(${bg.src})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "100%",
  width: "100%",
};

function Banner() {
  return (
    <>
      <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image Section */}
            <div>
              <Image
                src={BannerImg}
                alt=""
                className="max-w-[430px] w-full mx-auto rounded-full spin drop-shadow-xl"
              />
            </div>
            {/* Text content Section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold font-cursive">
                Premium Single Origin Coffee
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5 ">
                咖啡中的小人物 而且口感淡薄~~ 一~五 11：00~19：00
                六：13:00~17:00 日：在家陪貓
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <GiCoffeeBeans className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Premium Coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GiCoffeeCup className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                    <span>Hot Coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdOutlineSevereCold className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span>Cold Coffee</span>
                  </div>
                </div>

                <div className="border-l-4 border-primary/50 pl-6 space-y-3">
                  <h1 className="text-2xl font-semibold font-cursive">
                    Address
                  </h1>
                  <p className=" text-gray-500 text-sm">
                    地址：106台北市大安區復興南路二段368號
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
