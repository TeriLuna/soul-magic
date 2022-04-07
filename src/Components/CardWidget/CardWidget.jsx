import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import s from "./CardWidget.module.css";

export default function CardWidget() {
  return (
    <div className={s.whiteIcon}>
      <BiShoppingBag />
    </div>
  );
}
