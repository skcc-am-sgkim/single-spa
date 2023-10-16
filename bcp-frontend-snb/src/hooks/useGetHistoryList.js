import { useState, useEffect } from "react";
import { getHistoryFromStore, LOCAL_STORAGE_KEY } from "@bcp/frontend-shared";
import { useGetFavoriteMenu } from "./useGetFavoriteMenu";

export const useGetHistoryList = () => {
  const { favList } = useGetFavoriteMenu();
  const [list, setlist] = useState(getHistoryFromStore());

  useEffect(() => {
    window.addEventListener("popstate", function (event) {
      setlist(getHistoryFromStore());
    });
    return () => {
      window.removeEventListener("popstate");
    };
  }, []);

  return { list, favList };
};
