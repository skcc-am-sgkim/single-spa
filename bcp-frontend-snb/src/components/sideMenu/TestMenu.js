import React from "react";

import { menuList } from "@bcp/frontend-shared";

import { Menu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";
import leftIcon from "../../../assets/svg/chevron_left.svg";
import rightIcon from "../../../assets/svg/chevron_right.svg";
import RecursiveChildrenMenu from "../RecursiveChildrenMenu";
import "./style.scss";

const TestMenu = () => {
  const createMenuButton = (open, m) => (
    <div style={{ background: open ? "yellow" : "" }}>
      {m.name}
      {open ? (
        <img src={leftIcon} style={{ display: "inline" }} alt="left" />
      ) : (
        <img src={rightIcon} style={{ display: "inline" }} alt="right" />
      )}
    </div>
  );

  return (
    <>
      <p className="font-semibold text-lg mt-10">UI Test</p>
      {menuList.map((m) => (
        <Menu
          key={m.name}
          menuButton={({ open }) => createMenuButton(open, m)}
          position={"initial"}
        >
          <RecursiveChildrenMenu data={m} />
        </Menu>
      ))}
    </>
  );
};

export default TestMenu;
