import React from "react";
import Image from "next/image";
import Img2 from "@/assets/website/Tiramisu.jpg";
import Img3 from "@/assets/website/cinnamon.jpg";
import Img4 from "@/assets/website/eggroast.jpg";

const newLocal_1 =
  "小人物提拉米蘇裡面加了「君度」與「猴子47」，濕潤的手指餅乾，細緻的乳香口感與香氣的交響樂好吃到會笑出來。";
const newLocal = newLocal_1;
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Tiramisu",
    description: newLocal,
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Cinnamon",
    description: "好吃的肉桂捲：即使單嗑也不會覺得膩！",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img4,
    name: "Eggroast",
    description:
      "鬆軟微甜的蛋糕底，中段濃郁的起司，加上上層的全蛋，每一口都有不同滋味。",
    aosDelay: "100",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 bg-primary">
        <div className="container mx-auto">
          {/* header title */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-00">
              Best Dessert For You
            </h1>
          </div>

          {/* Services Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((data, index) => (
              <a
                href="https://myship.7-11.com.tw/general/detail/GM2405226689692"
                key={index}
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-2xl bg-primary hover:bg-secondary hover:text-white shadow-xl duration-200 w-full max-w-[300px] group relative"
                >
                  {/* img section */}
                  <div className="h-[200px] flex items-center justify-center overflow-hidden">
                    <Image
                      src={data.img}
                      alt={data.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  {/* Text content */}
                  <div className="p-4 h-[180px] overflow-y-auto">
                    <h1 className="text-xl font-bold mb-2">{data.name}</h1>
                    <p className="from-primary group-hover:text-white duration-300 text-sm">
                      {data.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
