import React, { useState } from "react";
import { SubMenu } from "../SubMenu";
import { MenuItem } from "@szhsin/react-menu";
import { navigateToUrl } from "single-spa";

const RecursiveChildrenMenu = ({ data }) => {
  if (data.children)
    return (
      <>
        {data.children?.map((c) =>
          c.children ? (
            <SubMenu key={c.name} label={c.name} openTrigger="clickOnly">
              {c.children && <RecursiveChildrenMenu data={c} key={c.name} />}
            </SubMenu>
          ) : (
            <MenuItem key={c.name} onClick={() => navigateToUrl(data.url)}>
              {c.name}
            </MenuItem>
          )
        )}
      </>
    );
  return (
    <MenuItem key={data.name} onClick={() => navigateToUrl(data.url)}>
      {data.name}
    </MenuItem>
  );
};
export default RecursiveChildrenMenu;
