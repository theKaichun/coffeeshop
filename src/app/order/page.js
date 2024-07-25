"use client";

import React, { useState } from "react";

const menuItems = [
  {
    items: [
      {
        name: "小人物配方豆",
        cupPrice: "80$",
        bagPrice: "360$",
        bagSize: "200g",
        roast: "焙度:Medium",
        flavor: "焦糖苦甜感、可可、麥芽、微微炭火香",
      },
      {
        name: "衣索比亞-夏奇索G1",
        cupPrice: "100$",
        bagPrice: "500$",
        bagSize: "200g",
        roast: "焙度:Light",
        processing: "處理法:Washed",
        production: "產區:Yirgacheffe",
        varieties: "品種:Heirloom",
        flavor: "茉莉花香、百香果、鳳梨、楊桃酸、甘蔗甜感",
      },
      {
        name: "衣索比亞-巫莎莎",
        cupPrice: "120$",
        bagPrice: "550$",
        bagSize: "200g",
        roast: "焙度:Light",
        processing: "處理法:Natural",
        production: "產區:Guji",
        varieties: "品種:74112",
        flavor: "藍莓、黑醋栗、葡萄、桃子、黑糖甜感",
      },
      {
        name: "瓜地馬拉-小王子",
        cupPrice: "100$",
        bagPrice: "550$",
        bagSize: "200g",
        roast: "焙度:Dark",
        processing: "處理法:Natural",
        production: "產區:Fraijanes",
        varieties: "品種:Yellow Catuai",
        flavor: "綜合莓果、榛果、微發酵酒感、尾韻綿長、蜂蜜糖感",
      },
      {
        name: "瓜地馬拉-聖芭芭拉莊園",
        cupPrice: "180$",
        bagPrice: "600$",
        bagSize: "100g",
        roast: "焙度:Light",
        processing: "處理法:Washed",
        production: "產區:Fraijanes",
        varieties: "品種:Geisha",
        flavor: "小白花、柑橘、桃子、焦糖、蜂蜜甜感",
      },
      {
        name: "豔夏花荔-天堂莊園",
        cupPrice: "150$",
        bagPrice: "500$",
        bagSize: "100g",
        roast: "焙度:Light",
        processing: "處理法:Anaerobic",
        production: "產區:Colombia Cauca",
        flavor: "玫瑰花、水蜜桃、冰糖",
      },
      {
        name: "艷諜-花蝶處理廠",
        cupPrice: "150$",
        bagPrice: "500$",
        bagSize: "100g",
        roast: "焙度:Light",
        processing: "處理法:Anaerobic",
        production: "產區:Guji",
        varieties: "品種:74110.74112.74158",
        flavor: "百香果、土鳳梨、芒果乾、杏桃、木槿花、可可碎、波特酒香",
      },
      {
        name: "哥倫比亞-翡翠莊園",
        cupPrice: "150$",
        bagPrice: "500$",
        bagSize: "100g",
        roast: "焙度:Medium",
        processing: "處理法:Anaerobic Washed",
        flavor: "鮮甜橙子、馬鞭草、紅糖、薄荷",
      },
    ],
  },
];

const orderOptions = {
  容量: ["單杯", "咖啡豆"],
  溫度: ["熱", "冰"],
};

const MenuItem = ({ item, onSelect }) => (
  <div
    className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
    onClick={() => onSelect(item)}
  >
    <div className="flex justify-between items-center">
      <span className="text-xl font-bold text-blue-700">{item.name}</span>
      <span className="text-lg font-semibold">
        {item.cupPrice} 10oz / {item.bagPrice} {item.bagSize}
      </span>
    </div>
    <p className="text-sm text-gray-600 mt-2">{item.roast}</p>
    <p className="text-sm text-gray-600 italic">{item.flavor}</p>
  </div>
);

const OptionsModal = ({ item, options, onClose, onAddToCart }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);

  const handleOptionSelect = (category, value) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: value }));
  };

  const handleAddToCart = () => {
    if (!selectedOptions.容量) {
      alert("請選擇容量");
      return;
    }
    const price =
      selectedOptions.容量 === "單杯" ? item.cupPrice : item.bagPrice;
    onAddToCart({
      ...item,
      ...selectedOptions,
      price: parseFloat(price),
      displaySize: selectedOptions.容量,
      quantity,
    });
    onClose();
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
        {Object.entries(options).map(([category, values]) =>
          category === "溫度" && selectedOptions.容量 === "咖啡豆" ? null : (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <button
                    key={value}
                    className={`px-3 py-1 rounded ${
                      selectedOptions[category] === value
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    onClick={() => handleOptionSelect(category, value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          )
        )}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">數量</h3>
          <div className="flex items-center">
            <button
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="mr-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            取消
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
};

const Order = () => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">訂購單</h1>
      {menuItems.map((category, idx) => (
        <div key={idx}>
          {category.items.map((item, index) => (
            <MenuItem key={index} item={item} onSelect={handleItemSelect} />
          ))}
        </div>
      ))}
      {selectedItem && (
        <OptionsModal
          item={selectedItem}
          options={orderOptions}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">購物車</h2>
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2 p-2 border rounded"
          >
            <div>
              <span className="font-semibold">{item.name}</span>{" "}
              <span className="text-sm">
                ({item.容量}, {item.溫度})
              </span>
              <span className="ml-2">{item.displaySize}</span>
              <span className="ml-2">
                {item.quantity} x {item.price}$
              </span>
            </div>
            <button
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => handleRemoveFromCart(index)}
            >
              刪除
            </button>
          </div>
        ))}
        <div className="mt-4 text-right">
          <span className="text-xl font-bold">總金額: {calculateTotal()}$</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
