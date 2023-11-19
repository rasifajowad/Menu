import React from "react";
import MenuItem from "./MenuItem";

const MenuCard = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((menu) => {
        return <MenuItem key={menu.id} {...menu} />;
      })}
    </div>
  );
};

export default MenuCard;
