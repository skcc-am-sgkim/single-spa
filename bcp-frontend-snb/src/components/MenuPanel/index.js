import { navigateToUrl } from "single-spa";

import NexacroMenu from "../NexacroMenu";
import ReactMenu from "../ReactMenu";
import VueMenu from "../VueMenu";
import TestMenu from "../sideMenu/TestMenu";
import InnerAppCommunication from "../sideMenu/InnerAppCommunication";

const MenuPanel = () => {
  return (
    <>
      <ul>
        <li>
          <button onClick={() => navigateToUrl("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigateToUrl("/all")}>ALL</button>
        </li>
      </ul>
      <InnerAppCommunication />

      <TestMenu />
      <NexacroMenu />
      <ReactMenu />
      <VueMenu />
    </>
  );
};

export default MenuPanel;
