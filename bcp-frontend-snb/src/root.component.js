/* eslint-disable no-console */
import React from "react";
import Menu from "./components/menu";

// 임시 mockup data
import { menuList } from "./mockup/data";

export default function Root(props) {
  return <Menu menuList={menuList} />;
}
