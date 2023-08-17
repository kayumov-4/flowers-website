import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex gap-[67px] justify-center items-center h-20">
      <li>
        <NavLink className="font-[Regular]" to={"/flowers"}>
          Flowers
        </NavLink>
      </li>
      <li>
        <NavLink className="font-[Regular]" to={"/plants"}>
          Plants
        </NavLink>
      </li>
      <li>
        <NavLink className="font-[Regular]" to={"/gifts"}>
          Gifts
        </NavLink>
      </li>
      <li>
        <NavLink className="font-[Regular]" to={"/discounts"}>
          Discounts
        </NavLink>
      </li>
      <li>
        <NavLink className="font-[Regular]" to={"/about"}>
          About us
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
