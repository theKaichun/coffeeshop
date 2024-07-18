import React from "react";
import Image from "next/image";
import bg from "@/assets/website/work.png";
import king from "@/assets/website/king.png";
function Leaf() {
  return (
    <div className="flex flex-col items-center bg-primary text-black p-4">
      <div className="flex items-center w-full mb-4">
        <div className="flex-none w-1/3">
          <Image src={bg} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex-grow pl-4">
          <h1 className="text-4xl font-bold text-secondary mb-5">
            紙飛機是夢想~ 荷包蛋是目標！！！
          </h1>
          <p>在小人物咖啡擔任吉祥物</p>
          <p>曾在雄獅旅遊Lion Travel 工作</p>
          <p>曾在國軍online之野戰砲兵工作</p>
        </div>
      </div>
      <div className="w-full flex items-start">
        <div className="flex-none w-1/3 pr-4">
          <Image src={king} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex-grow pl-4">
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-5 text-secondary">經歷</h3>
            <p>2020年 WOTD-ETD 05 鐵籠搏擊賽 配對賽</p>
            <p>2020年 WOTD-ETD 03 鐵籠搏擊賽 配對賽</p>
            <p>2019年 風城盃拳擊賽 第一名</p>
            <p>2018年 風城盃拳擊賽 第一名</p>
            <p>2017 全國業餘泰拳錦標賽 第二名</p>
            <p>2018年 WAKO 亞洲盃錦標賽 低踢 第三名</p>
            <p>第九、十、十一屆踢拳道全國錦標賽 低踢 第一名</p>
            <p>第九、十二、十三、十四屆 踢拳道全國錦標賽 全接觸 第一名</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaf;
