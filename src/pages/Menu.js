import React, { useState, useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import { SkeletonMenu } from "../components/Skeleton";
import "../styles/Menu.css";
import "../styles/Skeleton.css";

function Menu() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonMenu />;
  }

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <p className="menuSubtitle">
        Discover our handcrafted selection of freshly baked delights, made with love and the finest ingredients daily.
      </p>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
