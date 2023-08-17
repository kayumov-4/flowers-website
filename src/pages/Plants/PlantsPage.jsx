import React, { useState } from "react";
import DropDownUi from "../../components/UI/DropDown";
import data from "../../db";
import Breadcrumbs from "../../components/UI/BreadCrumb";
import PlantsCard from "../../components/UI/PlantsCard";
const index = () => {
  const [open, setOpen] = useState(false);
  const { allPlants } = data;
  return (
    <div className="container mx-auto">
      <div className="h-[52px]  flex items-center justify-start">
        <Breadcrumbs />
      </div>
      <h1 className="text-[32px] mt-5">All Plants</h1>
      <div className="flex items-center justify-between">
        <div className="dropdowns flex gap-20 mt-10 mb-5">
          <DropDownUi title={"Sort by"} />
          <DropDownUi title={"Color"} />
          <DropDownUi title={"Price"} />
          <DropDownUi title={"Flower type"} />
          <DropDownUi title={"Occasion"} />
        </div>
        <h2 className="mt-4">{allPlants.length} items</h2>
      </div>
      <hr className="mb-10" />
      <div className="wrapper flex flex-wrap gap-10 pb-10">
        {open
          ? allPlants.map((plant, index) => {
              return <PlantsCard state={plant} key={index} />;
            })
          : allPlants.slice(0, 8).map((plant, index) => {
              return <PlantsCard state={plant} key={index} />;
            })}
      </div>
      <div className="flex items-center justify-center text-white mb-[100px]">
        <button
          onClick={() => setOpen(!open)}
          className="w-[223px] py-[15px] bg-black text-[14px]"
        >
          {open ? "Hide" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default index;
