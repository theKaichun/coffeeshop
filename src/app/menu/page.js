import React from "react";
import Logo from "@/assets/website/NBaC.png";
import Image from "next/image";

const menuItems = [
  {
    category: "髒咖啡 Dirty Coffee - 快速、好喝、不用等",
    note: "(Expresso & Flat white)(棉花糖烤餅乾)(內用限定)",
    items: [
      { name: "髒(黑)咖啡 Dirty Coffee", price: "65$" },
      { name: "髒拿鐵 Dirty Au lait", price: "80$" },
      { name: "髒小白 Dirty Flat white", price: "70$" },
    ],
  },
  {
    category: "現淬咖啡 Fresh coffee - 現點現做 3 min",
    items: [
      { name: "現淬黑咖啡 Fresh Black coffee", price: "80$" },
      { name: "現淬拿鐵 Fresh Au lait", price: "100$" },
      { name: "現淬小白 Fresh Flat white", price: "90$" },
      { name: "現淬壹加壹 1+1", price: "120$" },
    ],
  },
  {
    category: "Single Origin Coffee - 單品咖啡",
    items: [
      { name: "單品咖啡 Single Origin Coffee" },
      { name: "單品拿鐵 Single Origin Au lait", price: "120$" },
      { name: "單品小白 Single Origin Flat white", price: "100$" },
      { name: "單品壹加壹 Single Origin 1+1", price: "140$" },
    ],
  },
  {
    category: "Other Coffee - 其他咖啡",
    items: [
      { name: "泥石流 黑糖拿鐵", price: "100$" },
      { name: "小精靈的 摩卡咖啡", price: "100$" },
      { name: "小人物燕麥奶拿鐵", price: "100$" },
    ],
  },
  {
    category: "No Coffee - 無咖啡因",
    items: [
      { name: "鮮奶茶弍號", price: "80$" },
      { name: "泥石流 黑糖牛奶", price: "80$" },
      { name: "小精靈的熱可可(冰/熱)", price: "80$" },
      { name: "小人物燕麥奶", price: "80$" },
    ],
  },
  {
    category: "小東西 Snack",
    items: [
      { name: "棉花糖烤餅乾", price: "60$" },
      { name: "起司雞蛋燒", price: "60$" },
      { name: "肉桂捲(普通、楓糖奶油、海鹽起司)", price: "100~120$" },
      { name: "每日甜點", note: "→ 見燈箱" },
    ],
  },
];

const coffeemens = [
  {
    category: "單杯" + "咖啡豆",
    items: [
      {
        name: "小人物配方豆",
        price: "80$",
        roast: "焙度:Medium",
        flavor: "焦糖苦甜感、可可、麥芽、微微炭火香",
      },
      {
        name: "衣索比亞-夏奇索G1",
        price: "100$",
        roast: "焙度:Light",
        processing: "處理法:Washed",
        production: "產區:Yirgacheffe",
        varieties: "品種:Heirloom",
        flavor: "茉莉花香、百香果、鳳梨、楊桃酸、甘蔗甜感",
      },
      {
        name: "衣索比亞-巫莎莎",
        price: "120$",
        roast: "焙度:Light",
        processing: "處理法:Natural",
        production: "產區:Guji",
        varieties: "品種:74112",
        flavor: "藍莓、黑醋栗、葡萄、桃子、黑糖甜感",
      },
      {
        name: "瓜地馬拉-小王子",
        price: "100$",
        roast: "焙度:Dark",
        processing: "處理法:Natural",
        production: "產區:Fraijanes",
        varieties: "品種:Yellow Catuai",
        flavor: "綜合莓果、榛果、微發酵酒感、尾韻綿長、蜂蜜糖感",
      },
      {
        name: "瓜地馬拉-聖芭芭拉莊園",
        price: "180$",
        roast: "焙度:Light",
        processing: "處理法:Washed",
        production: "產區:Fraijanes",
        varieties: "品種:Geisha",
        flavor: "小白花、柑橘、桃子、焦糖、蜂蜜甜感",
      },
      {
        name: "豔夏花荔-天堂莊園",
        price: "150$",
        roast: "焙度:Light",
        processing: "處理法:Anaerobic",
        production: "產區:Colombia Cauca",
        flavor: "玫瑰花、水蜜桃、冰糖",
      },
      {
        name: "艷諜-花蝶處理廠",
        price: "150$",
        roast: "焙度:Light",
        processing: "處理法:Anaerobic",
        production: "產區:Guji",
        varieties: "品種:74110.74112.74158",
        flavor: "百香果、土鳳梨、芒果乾、杏桃、木槿花、可可碎、波特酒香",
      },
      {
        name: "哥倫比亞-翡翠莊園",
        price: "150$",
        roast: "焙度:Medium",
        processing: "處理法:Anaerobic Washed",
        flavor: "鮮甜橙子、馬鞭草、紅糖、薄荷",
      },
    ],
  },
];

const MenuList = ({ items }) => {
  return (
    <div className="menu bg-white px-10">
      <Image
        src={Logo}
        alt="Logo"
        className="w-[100px] sm:w-[200px] sm:scale-100 mx-auto mr-0 py-5 -skew-y-12"
      />
      {items.map((category, index) => (
        <div key={index}>
          <h2 className="text-1xl font-semibold flex items-center justify-center underline font-cursive">
            {category.category}
          </h2>
          <ul className="mt-2">
            {category.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex flex-col py-1 text-blue-700 font-cursive font-bold text-xl"
              >
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                {item.note && (
                  <span className="text-sm text-gray-500 block mt-1">
                    {item.note}
                  </span>
                )}
                <div className=" text-black text-sm font-cursive text-nowrap flex-col sm:flex-row ">
                  {item.roast && <span className="mr-3">{item.roast}</span>}

                  {item.processing && (
                    <span className="mr-2">{item.processing}</span>
                  )}
                  {item.production && (
                    <span className="mr-2">{item.production}</span>
                  )}
                  {item.varieties && (
                    <span className="mr-2">{item.varieties}</span>
                  )}
                </div>
                <div className=" text-black text-sm font-cursive flex-col sm:flex-row ">
                  {item.flavor && <span className="mr-2">{item.flavor}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-10 text-center">
        {items.map(
          (category, index) =>
            category.note && (
              <div key={index} className="text-sm text-gray-500 my-2">
                {category.note}
              </div>
            )
        )}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <MenuList items={menuItems} />
      <MenuList items={coffeemens} />
    </div>
  );
};

export default Menu;
