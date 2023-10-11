import React from "react";
import { navigateToUrl } from "single-spa";
import NexacroMenu from "./NexacroMenu";
import ReactMenu from "./ReactMenu";
import VueMenu from "./VueMenu";

export default function Menu({ menuList }) {
  console.log(menuList);

  return (
    <>
      <div className="px-5 pt-7 ">
        <span>snb</span>
        <span className="px-5 ">
          <a href="/" className="underline " onClick={navigateToUrl}>
            home
          </a>
        </span>
        <NexacroMenu />
        <ReactMenu />
        <VueMenu />
      </div>
    </>
  );
}
