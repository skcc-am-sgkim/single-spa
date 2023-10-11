import { navigateToUrl } from "single-spa";
import React from "react";

const ReactMenu = () => {
  return (
    <>
      <p className="font-semibold text-lg mt-10">React</p>
      <ul className="px-10 pt-3 list-disc list-outside leading-8">
        <li>
          <a href="/react/about" className="underline " onClick={navigateToUrl}>
            About
          </a>
        </li>
        <li>
          <a
            href="/react/dashboard"
            className="underline "
            onClick={navigateToUrl}
          >
            Dashboard
          </a>
        </li>
      </ul>
    </>
  );
};

export default ReactMenu;
