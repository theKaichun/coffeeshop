import React from "react";
import Help from "../../assets/website/coffee.jpg";
const index = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <div className="order-2 sm:order-1">
            <h1 className=" text-5xl sm:text-6xl lg:text-5xl font-bold">
              不是什麼了不起的
              <span className="text-primary font-cursive">咖啡館</span>， 但提供
              <span className="text-primary font-cursive">
                好喝的咖啡，好吃的甜點
              </span>
              。
            </h1>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
                Coffee And Code
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={Help}
              alt=""
              className="w-[100px] sm:w-[250px] sm:scale-110 mx-auto spin rounded-full "
            />
            <div className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-sm">
              <h1>Hey Coder</h1>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary absolute button-10 right-10 p-3 rounded-xl">
              <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
