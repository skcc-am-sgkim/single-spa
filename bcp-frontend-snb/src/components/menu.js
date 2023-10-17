/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Tab } from "@headlessui/react";

import FavoritePanel from "./FavoritePanel";
import HistoryPanel from "./HistoryPanel";

import MenuPanel from "./MenuPanel";
import SideMenuFrame from "./SideMenuFrame";

export default function Menu({ menuList }) {
  return (
    <SideMenuFrame>
      <Tab.Group>
        <Tab.List>
          <Tab>
            <span class="material-symbols-outlined">list</span>
          </Tab>
          <Tab>
            <span class="material-symbols-outlined">history</span>
          </Tab>
          <Tab>
            <span class="material-symbols-outlined ">bookmark</span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <MenuPanel />
          </Tab.Panel>
          <Tab.Panel>
            <HistoryPanel />
          </Tab.Panel>
          <Tab.Panel>
            <FavoritePanel />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </SideMenuFrame>
  );
}
