import React from "react";
import Image from "next/image";
import Help from "@/assets/website/coffee.jpg";
import bg from "@/assets/website/NBaC.png";

const Index = () => {
  return (
    <div className="min-h-[450px] sm:min-h-[500px] bg-primary flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Text content section */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center relative h-full">
              <Image
                src={bg}
                alt=""
                className="w-[200px] sm:w-[550px] sm:scale-110 mx-auto spin "
              />
            </div>
            <div className="flex justify-center items-center w-full">
              <button className=" bg-button px-4 py-2 rounded-full hover:bg-buttonHover  hover:scale-105 duration-200 flex items-center gap-3">
                不是什麼了不起的咖啡館，但提供好喝的咖啡好吃的甜點
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="flex flex-col justify-center items-center relative h-full">
            <Image
              src={Help}
              alt=""
              className="w-[100px] sm:w-[250px] sm:scale-110 mx-auto spin rounded-full"
            />
            <div className="flex justify-center items-center w-full mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
