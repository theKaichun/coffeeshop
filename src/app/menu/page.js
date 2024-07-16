import React from "react";

const menuItems = [
  {
    category: "髒咖啡 Dirty Coffee - 快速、好喝、不用等",
    items: [
      { name: "髒(黑)咖啡 Dirty Coffee", price: "65$" },
      { name: "髒拿鐵 Dirty Au lait", price: "80$" },
      { name: "髒小白 Dirty Flat white", price: "70$" },
    ],
  },
  {
    category: "現淬咖啡 Fresh coffee - 現點現做 3 min",
    items: [
      { name: "現淬黑咖啡 Freah Black coffee", price: "80$" },
      { name: "現淬拿鐵 Fresh Au lait", price: "100$" },
      { name: "現淬小白 Fresh Flat white", price: "90$" },
      {
        name: "現淬壹加壹 1+1",
        price: "120$",
        note: "Expresso & Flat white (內用限定)",
      },
    ],
  },
  {
    category: "Single Origin Coffee - 單品咖啡",
    items: [
      { name: "單品咖啡 Single Origin Coffee" },
      { name: "單品拿鐵 Single Origin Au lait", price: "120$" },
      { name: "單品小白 Single Origin Flat white", price: "100$" },
      {
        name: "單品壹加壹 Single Origin 1+1",
        price: "140$",
        note: "Expresso & Flat white (內用限定)",
      },
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
      { name: "棉花糖烤餅乾", price: "60$", note: "(內用限定)" },
      { name: "起司雞蛋燒", price: "100~120$" },
      { name: "肉桂捲", price: "普通、楓糖奶油、海鹽起司" },
      { name: "每日甜點", note: "→ 見燈箱" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="text-3xl font-bold mb-4">Menu</h1>
      {menuItems.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold">{category.category}</h2>
          <ul className="mt-2">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex justify-between py-1">
                <span>{item.name}</span>
                <span>{item.price}</span>
                {item.note && (
                  <span className="text-sm text-gray-500">{item.note}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
