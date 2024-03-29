import { MouseEventHandler } from "react";

export interface ICustomButton {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface ICustomFilter{
  title:string;
}
