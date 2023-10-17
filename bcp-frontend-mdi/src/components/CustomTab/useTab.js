import store from "store";
import {
  LOCAL_STORAGE_KEY,
  WHITE_LIST,
  getTitle,
  saveHistory,
} from "@bcp/frontend-shared";
import { useEffect, useState } from "react";
import { navigateToUrl } from "single-spa";
import { unionBy } from "lodash";
import { useTabInfoEvent } from "../../hooks/useTabInfoEvent";
import { useUrlChange } from "../../hooks/useUrlChange";

const insertAndShift = (arr, from, to) => {
  let cutOut = arr.splice(from, 1)[0];
  arr.splice(to, 0, cutOut);
  return arr;
};

export const useTab = () => {
  const storeTabInfo = store.get(LOCAL_STORAGE_KEY.TAB_INFO);
  const storeActiveTabInfo = storeTabInfo?.filter(
    (m) => m.isActive === true
  )[0];
  const [tabInfo, setTabInfo] = useState(storeTabInfo);

  const [activeKey, setActiveKey] = useState(storeActiveTabInfo?.id ?? "");

  const onTabInfoEventFire = ({ storeTabInfo, activeKey }) => {
    setTabInfo(storeTabInfo);
    setActiveKey(activeKey);
  };

  useTabInfoEvent(onTabInfoEventFire);

  const onUrlChange = (event) => {
    initTab();

    if (event.state?.current && event.state?.current !== "/") {
      saveHistory({
        path: event.state?.current,
        title: getTitle(event.state?.current),
      });
    }
  };
  useUrlChange(onUrlChange);

  const tabClick = (id, evn) => {
    evn.stopPropagation();
    setActiveKey(id);
  };
  const closeHandle = (item, evn) => {
    evn.stopPropagation();
    const idx = tabInfo.findIndex((m) => m.id === item.id);

    const filteredTabInfo = tabInfo.filter((m) => m.id !== item.id);
    setTabInfo(filteredTabInfo);
    store.set(LOCAL_STORAGE_KEY.TAB_INFO, filteredTabInfo);

    if (tabInfo.length === 1) {
      navigateToUrl("/");
      return;
    }

    let active = "";
    if (idx > -1 && activeKey) {
      let prevTab = tabInfo[idx - 1];
      let nextTab = tabInfo[idx + 1];
      if (prevTab) {
        active = prevTab.id;
      } else if (nextTab) {
        active = nextTab.id;
      } else {
        active = tabInfo[idx].id;
      }
    }
    active = active || "";
    setActiveKey(active);
    navigateToUrl(active || "/");
  };

  const tabDrop = (id, index) => {
    const oldIndex = [...tabInfo].findIndex((m) => m.id === id);
    const newData = insertAndShift([...tabInfo], oldIndex, index);
    setTabInfo(newData);
    store.set(LOCAL_STORAGE_KEY.TAB_INFO, newData);
  };

  const initTab = () => {
    const pathname = window.location.pathname;
    const storeTabInfo = store.get(LOCAL_STORAGE_KEY.TAB_INFO);

    storeTabInfo?.map((m) => {
      m.isActive = m.id === pathname;
    });

    /* 
      case 1. 탭 0개, 타켓 탭 미존재, 주소로 접속  : O
      case 2. 탭 x개, 타겟 탭 존재, 주소로 접속  : O
      case 3. 탭 x개, 타켓 탭 미존재, 주소로 접속 : O
    */

    store.set(LOCAL_STORAGE_KEY.TAB_INFO, storeTabInfo);
    if (WHITE_LIST.includes(pathname)) {
      // console.log("run?", pathname);
      let finalTabInfo = storeTabInfo;
      if (storeTabInfo) {
        finalTabInfo = unionBy(
          [
            ...storeTabInfo,
            {
              id: pathname,
              title: getTitle(pathname),
              isActive: true,
            },
          ],
          "id"
        );
      } else {
        finalTabInfo = [
          {
            id: pathname,
            title: getTitle(pathname),
            isActive: true,
          },
        ];
      }
      store.set(LOCAL_STORAGE_KEY.TAB_INFO, finalTabInfo);
    }

    window.dispatchEvent(new Event(LOCAL_STORAGE_KEY.TAB_INFO));
  };

  // 앱 시작했을때 (주소창에 주소를 바로 쳤을때)
  useEffect(() => {
    initTab();
    // console.log("init");
  }, []);

  return {
    tabInfo,
    tabClick,
    tabDrop,
    closeHandle,
    activeKey,
  };
};
