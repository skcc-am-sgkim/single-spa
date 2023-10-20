import React from "react";
import { navigateToUrl } from "single-spa";

const VueMenu = () => {
  return (
    <>
      <p className="font-semibold text-lg mt-10">Vue</p>
      <ul className="px-10 pt-3 list-disc list-outside leading-8">
        <li>
          <a href="/vue/test1" className="underline " onClick={navigateToUrl}>
            Test1
          </a>
        </li>
        <li>
          <a href="/vue/test2" className="underline " onClick={navigateToUrl}>
            Test2
          </a>
        </li>
      </ul>
    </>
  );
};

export default VueMenu;
