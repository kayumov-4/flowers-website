import React, { useState } from "react";
import { Link } from "react-router-dom";

const PlantsCard = ({ state: { image, title, price, old_price, id } }) => {
  const [btnState, setBtnState] = useState(false);
  const [first, setFirst] = useState(false);
  const [first1, setFirst1] = useState(false);
  return (
    <div className="card min-w-[260px] h-[366px] rounded-lg hover:shadow-lg duration-150 relative">
      <img className="min-w-[260px] min-h-[260px]" src={image} alt="card_img" />
      {btnState ? null : (
        <button
          onClick={() => setBtnState(!btnState)}
          className="btn bg-[#595CFF] w-[46px] h-[46px] rounded-full  items-center justify-center absolute top-[235px] left-[198px] hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.1867 6.28345C14.8087 6.66137 14.8087 7.27411 15.1867 7.65204L18.6959 11.1613H2.96774C2.43327 11.1613 2 11.5946 2 12.129C2 12.6635 2.43327 13.0968 2.96774 13.0968H18.6959L15.1867 16.606C14.8087 16.984 14.8087 17.5967 15.1867 17.9746C15.5646 18.3525 16.1773 18.3525 16.5553 17.9746L21.7162 12.8137M21.9266 11.7586C21.8793 11.6445 21.8093 11.5375 21.7166 11.4447L16.5553 6.28345C16.1773 5.90552 15.5646 5.90552 15.1867 6.28345M21.9266 11.7586C21.9735 11.8719 21.9996 11.996 22 12.1261C22 12.1271 22 12.1281 22 12.129C22 12.13 22 12.131 22 12.1319C21.9993 12.3777 21.9055 12.6233 21.7186 12.8113"
              fill="white"
            />
          </svg>
        </button>
      )}
      {btnState && (
        <div className="onhoverBtns flex  items-center justify-center top-[199px] absolute gap-[30px] left-[69px]">
          <button
            onClick={() => setFirst(!first)}
            className="info_btn bg-white w-[46px] h-[46px] rounded flex items-center justify-center "
          >
            <svg
              className={first && "hidden"}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.98421 5.66663L6.71575 4.51331C6.50676 3.62373 5.7579 2.99995 4.89901 3H4V4.33331H4.89901C5.19287 4.32417 5.45289 4.53519 5.52332 4.83997L7.74587 14.4932L7.97686 15.4865C8.18752 16.3833 8.94647 17.0091 9.81234 16.9998H18.3592V15.6665H9.81234C9.51848 15.6756 9.25846 15.4646 9.18803 15.1598L9.11311 14.8265L18.3592 12.4999C19.0427 12.3302 19.5801 11.7666 19.7514 11.0399L21 5.66663H6.98421ZM18.5652 10.7199C18.5074 10.9633 18.3264 11.1515 18.097 11.2065L8.82593 13.5332L7.29636 6.99994H19.433L18.5652 10.7199ZM7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19ZM8.33333 19C8.33333 19.3682 8.63181 19.6667 9 19.6667C9.36819 19.6667 9.66667 19.3682 9.66667 19C9.66667 18.6318 9.36819 18.3333 9 18.3333C8.63181 18.3333 8.33333 18.6318 8.33333 19ZM14.1523 18.2346C14.4619 17.4873 15.1911 17 16 17C17.1046 17 18 17.8954 18 19C18 19.8089 17.5127 20.5381 16.7654 20.8477C16.018 21.1573 15.1578 20.9862 14.5858 20.4142C14.0138 19.8422 13.8427 18.982 14.1523 18.2346ZM15.3334 19C15.3334 19.3682 15.6318 19.6666 16 19.6666C16.3682 19.6666 16.6667 19.3682 16.6667 19C16.6667 18.6318 16.3682 18.3333 16 18.3333C15.6318 18.3333 15.3334 18.6318 15.3334 19Z"
                fill="black"
              />
            </svg>
            {first && <i class="bx bx-check text-[24px]"></i>}
          </button>
          <button
            onClick={() => setFirst1(!first1)}
            className="info_btn bg-white w-[46px] h-[46px] rounded flex items-center justify-center "
          >
            <svg
              className={first1 && "hidden"}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.2703 16.5405C6.8073 16.5405 4 13.7332 4 10.2703C4 6.8073 6.8073 4 10.2703 4C13.7332 4 16.5405 6.8073 16.5405 10.2703C16.5405 11.7681 16.0153 13.1433 15.139 14.2217L19.81 18.8927C20.0633 19.146 20.0633 19.5567 19.81 19.81C19.5567 20.0633 19.146 20.0633 18.8927 19.81L14.2217 15.139C13.1433 16.0153 11.7681 16.5405 10.2703 16.5405ZM10.2703 15.2432C13.0168 15.2432 15.2432 13.0168 15.2432 10.2703C15.2432 7.52377 13.0168 5.2973 10.2703 5.2973C7.52377 5.2973 5.2973 7.52377 5.2973 10.2703C5.2973 13.0168 7.52377 15.2432 10.2703 15.2432Z"
                fill="black"
              />
            </svg>
            {first1 && <i class="bx bx-check text-[24px]"></i>}
          </button>
        </div>
      )}
      <div className="flex flex-col mt-5 items-left w-full px-[10px]">
        <Link to={`/plants/${id}`} className="text-[18px] mb-2" href="#">
          {title}
        </Link>
        <Link to={`/plants/${id}`} className="gap-4 flex ">
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

export default PlantsCard;
