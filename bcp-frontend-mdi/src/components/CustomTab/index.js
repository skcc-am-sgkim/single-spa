import React, { useEffect, useState, useCallback } from "react";

import { navigateToUrl } from "single-spa";
import { TabWarp, TabItem } from "./style";
import store from "store";
import eventsPlugin from "store/plugins/events";

// import About from "@bcp/frontend-gnb/pages/About";

import {
  getLocalStorage,
  setLocalStorage,
  LOCAL_STORAGE_KEY,
} from "@bcp/frontend-shared";

function insertAndShift(arr, from, to) {
  let cutOut = arr.splice(from, 1)[0];
  arr.splice(to, 0, cutOut);
  return arr;
}

let count = 9;

store.addPlugin(eventsPlugin);

const CustomTab = () => {
  const storeTabInfo = store.get(LOCAL_STORAGE_KEY.TAB_INFO);
  const storeActiveTabInfo = storeTabInfo?.filter(
    (m) => m.isActive === true
  )[0];
  const [tabInfo, setTabInfo] = useState(storeTabInfo);

  const [test, setTest] = useState(1);
  const [activeKey, setActiveKey] = useState(storeActiveTabInfo?.id ?? "");

  const tabClick = (id, evn) => {
    evn.stopPropagation();
    setActiveKey(id);
    setTest(test + 1);
  };
  const closeHandle = (item, evn) => {
    evn.stopPropagation();
    const idx = tabInfo.findIndex((m) => m.id === item.id);

    let active = "";
    if (idx > -1 && activeKey) {
      active = tabInfo[idx - 1]
        ? tabInfo[idx - 1]?.id
        : tabInfo[idx + 1]?.id
        ? tabInfo[idx + 1]?.id
        : tabInfo[idx].id;

      setActiveKey(active || "");
      navigateToUrl(`/${active}`);
    }
    if (tabInfo.length === 1) {
      navigateToUrl("/");
    }
    setTabInfo(tabInfo.filter((m) => m.id !== item.id));

    store.set(
      "TAB_INFO",
      tabInfo.filter((m) => m.id !== item.id)
    );
  };

  const tabDrop = (id, index) => {
    const oldIndex = [...tabInfo].findIndex((m) => m.id === id);
    const newData = insertAndShift([...tabInfo], oldIndex, index);
    setTabInfo(newData);
  };

  useEffect(() => {
    window.addEventListener("TAB_INFO", () => {
      const storeTabInfo = store.get(LOCAL_STORAGE_KEY.TAB_INFO);
      const storeActiveTabInfo = storeTabInfo?.filter(
        (m) => m.isActive === true
      )[0];

      setTabInfo(storeTabInfo);
      setActiveKey(storeActiveTabInfo?.id ?? "");
    });
    return () => {
      window.removeEventListener("TAB_INFO");
    };
  }, []);

  if (
    tabInfo === null ||
    tabInfo === "undefined" ||
    !tabInfo ||
    tabInfo.length < 1
  ) {
    return <></>;
  }
  return (
    <>
      {/* <button onClick={addHandle}>Add{count}</button> */}
      <TabWarp
        activeKey={activeKey}
        style={{ gap: 3, overflow: "auto" }}
        onTabClick={(id, evn) => tabClick(id, evn)}
        onTabDrop={(id, index) => tabDrop(id, index)}
      >
        {tabInfo.map((m, idx) => {
          return (
            <TabItem key={idx} id={m.id} draggable={true}>
              <a href={`/${m.id}`} onClick={navigateToUrl}>
                {m.title}
              </a>
              <button
                onClick={(evn) => closeHandle(m, evn)}
                style={{ background: "yellow" }}
              >
                x
              </button>
            </TabItem>
          );
        })}
      </TabWarp>
      {/* <About /> */}
      {/* <div>{activeKey}</div> */}
    </>
  );
};

export default CustomTab;
