import React from "react";
import { useLocation } from "react-router-dom";
const Generic = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-cyan-500 h-[86vh] pt-40">
      <h1 className="text-[36px] text-center">{pathname.slice(1)}</h1>
    </div>
  );
};

export default Generic;
