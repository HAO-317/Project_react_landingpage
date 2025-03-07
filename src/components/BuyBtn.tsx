import React from 'react';

type BuyBtnProps = {
  text: string;
};

const BuyBtn = ({ text }: BuyBtnProps) => {
  const handleClick = () => {
    console.log(`${text} 按钮被点击了！`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 text-white rounded-lg py-2 px-4 hover:bg-green-700 transition"
    >
      {text}
    </button>
  );
};

export default BuyBtn;