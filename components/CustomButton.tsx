"use client";

import { ICustomButton } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: ICustomButton) => {
  // console.log("props ",props);

  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {
        handleClick;
      }}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
