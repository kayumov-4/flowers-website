import React, { useState } from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "Bouquet contents",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod obcaecati
        molestias dolores delectus pariatur necessitatibus temporibus iste est
        aut ducimus illum, iusto enim nobis tempora eaque possimus voluptate
        dicta explicabo quaerat magnam provident impedit omnis, corrupti unde.
        Nulla, tenetur hic?
      </p>
    ),
  },
  {
    key: "2",
    label: "Details",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, atque neque
        natus magni consequatur veniam consequuntur, doloremque voluptate
        adipisci sunt similique reiciendis consectetur quidem rerum in assumenda
        aliquid dignissimos quasi. Modi omnis, assumenda nisi ipsa cum id
        perspiciatis tenetur repellat!
      </p>
    ),
  },
  {
    key: "3",
    label: "Delivery & Pay policy",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, atque neque
        natus magni consequatur veniam consequuntur, doloremque voluptate
        adipisci sunt similique reiciendis consectetur quidem rerum in assumenda
        aliquid dignissimos quasi. Modi omnis, assumenda nisi ipsa cum id
        perspiciatis tenetur repellat!
      </p>
    ),
  },
];
const Accordion = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Collapse
      size="large"
      className="bg-white border-none duration-500 rounded-none"
      items={items}
      expandIconPosition="end"
      onChange={toggleCollapse}
      expandIcon={({ isActive }) =>
        isActive ? <MinusOutlined /> : <PlusOutlined />
      }
    />
  );
};
export default Accordion;
