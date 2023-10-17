import { LOCAL_STORAGE_KEY } from "@bcp/frontend-shared";
import { useEffect } from "react";
import store from "store";
export const useTabInfoEvent = (onEventFire) => {
  /*  
    사용자 정의 이벤트 발생시 실행 
    로컬스토리지 내의 탭 저장내역이랑 리액트 스테이트랑 동기화 하기 위함
   */
  useEffect(() => {
    window.addEventListener(LOCAL_STORAGE_KEY.TAB_INFO, () => {
      // console.log("event TAB_INFO");
      const storeTabInfo = store.get(LOCAL_STORAGE_KEY.TAB_INFO);
      const pathname = window.location.pathname;
      const storeActiveTabInfo = storeTabInfo?.filter(
        (m) => m.id === pathname
      )[0];

      onEventFire?.({ storeTabInfo, activeKey: storeActiveTabInfo?.id ?? "" });
    });
    return () => {
      window.removeEventListener(LOCAL_STORAGE_KEY.TAB_INFO);
    };
  }, []);
};
