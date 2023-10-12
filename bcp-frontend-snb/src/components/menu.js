import React from "react";
import { navigateToUrl } from "single-spa";
import NexacroMenu from "./NexacroMenu";
import ReactMenu from "./ReactMenu";
import VueMenu from "./VueMenu";
import { Tab } from "@headlessui/react";
import TestMenu from "./TestMenu";

export default function Menu({ menuList }) {
  return (
    <div className="px-5 pt-7 " style={{ position: "relative" }}>
      <Tab.Group>
        <Tab.List>
          <Tab>Menu</Tab>
          <Tab>History</Tab>
          <Tab>Favorite</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <TestMenu />
            <NexacroMenu />
            <ReactMenu />
            <VueMenu />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
