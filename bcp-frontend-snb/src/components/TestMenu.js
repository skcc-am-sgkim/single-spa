import React from "react";

import { menuList } from "../mockup/data";

import { Menu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";
import leftIcon from "../../assets/svg/chevron_left.svg";
import rightIcon from "../../assets/svg/chevron_right.svg";
import RecursiveChildrenMenu from "./sideMenu/RecursiveChildrenMenu";
import "./style.scss";

const TestMenu = () => {
  return (
    <>
      <p className="font-semibold text-lg mt-10">UI Test</p>
      {menuList.map((m) => (
        <Menu
          key={m.name}
          menuButton={({ open }) => (
            <div style={{ background: open ? "yellow" : "" }}>
              {m.name}
              {open ? (
                <img src={leftIcon} style={{ display: "inline" }} />
              ) : (
                <img src={rightIcon} style={{ display: "inline" }} />
              )}
            </div>
          )}
          position={"initial"}
        >
          <RecursiveChildrenMenu data={m} />
        </Menu>
      ))}
    </>
  );
};

export default TestMenu;
