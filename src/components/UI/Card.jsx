import React from "react";
import { Link } from "react-router-dom";

const Card = ({ state: { image, title, price, old_price, id } }) => {
  return (
    <div className="card min-w-[260px] h-[366px] rounded-lg hover:shadow-lg duration-150">
      <img className="min-w-[260px] min-h-[260px]" src={image} alt="card_img" />
      <div className="flex flex-col mt-5 items-center">
        <Link to={`/flowers/${id}`} className="text-[18px] mb-2" href="#">
          {title}
        </Link>
        <Link to={`/flowers/${id}`} className="gap-4 flex ">
          <p className="text-[14px]">{price}</p>
          {old_price && (
            <p className="text-[14px] font-[Regular] line-through text-[#82828B]">
              {old_price}
            </p>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Card;
