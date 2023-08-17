import React from "react";
import location from "../../../assets/icons/location.svg";
import cart from "../../../assets/icons/cart.svg";
import search from "../../../assets/icons/search.svg";

const HeaderTop = () => {
  return (
    <div className="h-[52px] flex items-center justify-between">
      <div className="flex gap-[7px] items-center">
        <img src={location} alt="" />
        <a href="#">Tashkent</a>
      </div>
      <div className="flex gap-5">
        <img src={search} alt="search" />
        <img src={cart} alt="cart" />
      </div>
    </div>
  );
};

export default HeaderTop;
