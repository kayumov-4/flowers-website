import React from "react";
import { Dropdown } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">Low to High</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">High to Low</a>,
    key: "1",
  },
];
const DropDownUi = ({ title }) => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a
      className="flex items-center justify-start cursor-pointer"
      onClick={(e) => e.preventDefault()}
    >
      {title}
      <a className="ml-[12px]" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.94352 0.350758L4.63636 4.93982C4.56105 5.02006 4.43895 5.02006 4.36364 4.93982L0.0564837 0.350758C-0.0188279 0.270517 -0.0188279 0.140421 0.0564837 0.0601806C0.0926495 0.0216476 0.141701 0 0.192847 0H8.80715C8.91366 0 9 0.0919918 9 0.205469C9 0.259963 8.97968 0.312225 8.94352 0.350758Z"
            fill="black"
          />
        </svg>
      </a>
    </a>
  </Dropdown>
);
export default DropDownUi;
