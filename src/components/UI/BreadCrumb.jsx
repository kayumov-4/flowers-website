import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <div className="flex gap-1 items-center ">
      <Link
        className="hover:bg-[#EFEFEF] w-20 h-8 rounded hover:text-black hover:opacity-[1] flex items-center justify-center"
        to="/"
      >
        Home
      </Link>
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1;
        const cap = name[0];
        const newCap = cap.toUpperCase() + name.slice(1);
        return isLast ? (
          <div className="flex items-center gap-3 h-10">
            <span key={name}>/</span>
            <p className="ml-2">{title}</p>
          </div>
        ) : (
          <div className="flex items-center ">
            <span className="mr-1" key={name}>
              /
            </span>
            <Link
              className="hover:bg-[#EFEFEF] w-20 h-8 rounded hover:text-black hover:opacity-[1] flex items-center justify-center"
              key={name}
              to={`/${pathnames.slice(0, 1)}`}
            >
              {newCap}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Breadcrumbs;
