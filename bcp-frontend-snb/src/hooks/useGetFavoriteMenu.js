import { useState, useEffect } from "react";
import {
  getFavoriteMenuFromStore,
  LOCAL_STORAGE_KEY,
} from "@bcp/frontend-shared";
export const useGetFavoriteMenu = () => {
  const [list, setlist] = useState(getFavoriteMenuFromStore());

  useEffect(() => {
    window.addEventListener(LOCAL_STORAGE_KEY.FAVORITE_MENU, () => {
      setlist(getFavoriteMenuFromStore());
    });

    return () => {};
  }, []);

  return { list };
};
