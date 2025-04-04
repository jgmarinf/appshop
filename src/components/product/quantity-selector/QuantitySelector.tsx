"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, setQuantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChange = (value: number) => {
    if (count + value < 1) return;

    const newCount = count + value;
    setCount(newCount);
    setQuantity(newCount);
  };
  return (
    <div className="flex">
      <button className="cursor-pointer" onClick={() => onQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">
        {count}
      </span>
      <button className="cursor-pointer" onClick={() => onQuantityChange(1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};
