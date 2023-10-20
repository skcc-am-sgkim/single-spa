import store from "store";
import {
  LOCAL_STORAGE_KEY,
  getTabInfoFromStore,
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
  const storeTabInfo = getTabInfoFromStore();
  const storeActiveTabInfo = storeTabInfo?.find((m) => m.isActive);
  const [tabInfo, setTabInfo] = useState(storeTabInfo);

  const [activeTabKey, setActiveTabKey] = useState(
    storeActiveTabInfo?.id ?? ""
  );

  const onTabInfoEventFire = ({ storeTabInfo, activeKey }) => {
    setTabInfo(storeTabInfo);
    setActiveTabKey(activeKey);
  };

  useTabInfoEvent(onTabInfoEventFire);

  const onUrlChange = (event) => {
    initTab();

    /* 
     홈이 아닌 모든 접속 경로를 히스토리로 남길건지, 
     탭 처럼 WhiteList 안에 있는 경로만 히스토리로 남길건지 논의 필요
    */
    if (event.state?.current !== "/") {
      saveHistory({
        path: event.state?.current,
        title: getTitle(event.state?.current),
      });
    }
  };
  useUrlChange(onUrlChange);

  const handleTabClick = (id, evn) => {
    evn.stopPropagation();
    setActiveTabKey(id);
  };

  const handleClose = (item, evn) => {
    evn.stopPropagation();

    const filteredTabInfo = tabInfo.filter((m) => m.id !== item.id);
    setTabInfo(filteredTabInfo);
    store.set(LOCAL_STORAGE_KEY.TAB_INFO, filteredTabInfo);

    // 남은 탭이 존재 하지 않을 경우 홈으로 이동
    if (filteredTabInfo.length < 1) {
      navigateToUrl("/");
      return;
    }

    // 닫은 탭이 현재탭일 경우에만 다음 탭으로 이동
    if (item.id !== activeTabKey) return;

    let newActiveTabKey = activeTabKey;
    const idx = tabInfo.findIndex((m) => m.id === item.id);
    const prevTab = tabInfo[idx - 1];
    if (prevTab) {
      newActiveTabKey = prevTab.id;
    }

    const nextTab = tabInfo[idx + 1];
    if (nextTab) {
      newActiveTabKey = nextTab.id;
    }

    if (!prevTab && !nextTab) {
      newActiveTabKey = tabInfo[idx].id;
    }

    setActiveTabKey(newActiveTabKey || "");
    navigateToUrl(newActiveTabKey || "/");
  };

  const handleTabDrop = (id, index) => {
    const oldIndex = tabInfo.findIndex((m) => m.id === id);
    const newData = insertAndShift([...tabInfo], oldIndex, index);
    setTabInfo(newData);
    store.set(LOCAL_STORAGE_KEY.TAB_INFO, newData);
  };

  const initTab = () => {
    const pathname = window.location.pathname;
    const storeTabInfo = getTabInfoFromStore();

    const updatedTabInfo = storeTabInfo.map((m) => ({
      ...m,
      isActive: m.id === pathname,
    }));

    /* 
      case 1. 탭 0개, 타켓 탭 미존재, 주소로 접속  : O
      case 2. 탭 x개, 타겟 탭 존재, 주소로 접속  : O
      case 3. 탭 x개, 타켓 탭 미존재, 주소로 접속 : O
    */

    let newTabInfo = updatedTabInfo;

    if (WHITE_LIST.includes(pathname)) {
      const newTab = {
        id: pathname,
        title: getTitle(pathname),
        isActive: true,
      };
      newTabInfo = updatedTabInfo
        ? unionBy([...updatedTabInfo, newTab], "id")
        : [newTab];
    }

    store.set(LOCAL_STORAGE_KEY.TAB_INFO, newTabInfo);

    window.dispatchEvent(new Event(LOCAL_STORAGE_KEY.TAB_INFO));
  };

  // 앱 시작했을때 (주소창에 주소를 바로 쳤을때)
  useEffect(() => {
    initTab();
  }, []);

  return {
    tabInfo,
    handleTabClick,
    handleTabDrop,
    handleClose,
    activeTabKey,
  };
};
