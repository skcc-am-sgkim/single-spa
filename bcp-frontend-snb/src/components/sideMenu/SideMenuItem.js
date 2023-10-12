import React, { useState } from "react";
import RecursiveChildrenMenu from "./RecursiveChildrenMenu";

const SideMenuItem = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const clickHandler = (e) => {};
  return (
    <li key={data.name} onClick={() => setIsVisible(!isVisible)}>
      {data.name}
      <RecursiveChildrenMenu data={data} isVisible={isVisible} />
    </li>
  );
};

export default SideMenuItem;
