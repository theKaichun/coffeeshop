import React from "react";

const menus = [
  {
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

const MenuPage = () => {
  return (
    <div className="bg-primary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 p-5">
      {menus[0].items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-full shadow-lg text-center border border-gray-200 flex flex-col justify-between h-80"
        >
          <h2 className="text-blue-500 text-lg font-bold mb-2">{item.name}</h2>
          <div className="flex-grow">
            <p className="text-gray-700 mb-1">{item.price}</p>
            <p className="text-gray-700 mb-1">{item.roast}</p>
            {item.processing && (
              <p className="text-gray-700 mb-1">{item.processing}</p>
            )}
            {item.production && (
              <p className="text-gray-700 mb-1">{item.production}</p>
            )}
            {item.varieties && (
              <p className="text-gray-700 mb-1">{item.varieties}</p>
            )}
            <p className="text-gray-700">{item.flavor}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
