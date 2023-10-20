export { menuList } from "./mockup/data";
import { find, unionBy } from "lodash";
import store from "store";
// Anything exported from this file is importable by other in-browser modules.
import { LOCAL_STORAGE_KEY } from "./constants";
export { LOCAL_STORAGE_KEY };

export function publicApiFunction() {}

/*
{id : 'about', title :'About', isActive: true}
*/

export const PATHS = [
  {
    path: "/react/about",
    title: "About",
  },
  {
    path: "/react/dashboard",
    title: "Dashboard",
  },
  {
    path: "/nexacro/menu=3",
    title: "넥사크로1",
  },
  {
    path: "/nexacro/menu=4",
    title: "넥사크로2",
  },
  {
    path: "/vue/test1",
    title: "Vue테스트1",
  },
  {
    path: "/vue/test2",
    title: "Vue테스트2",
  },
  {
    path: "/all",
    title: "All",
  },
];
export const WHITE_LIST = PATHS.map((m) => m.path);

export const getTabInfoFromStore = () => {
  return store.get(LOCAL_STORAGE_KEY.TAB_INFO)?.filter((m) => m && m.id) ?? [];
};

export const getTitle = (path) => {
  return PATHS.filter((p) => p.path === path)[0]?.title;
};
export const saveList = (key, { path, title }) => {
  const list = store.get(key);
  let finalList = list;
  if (list) {
    finalList = unionBy(
      [
        {
          path,
          title,
        },
        ...list,
      ],
      "path"
    );
  } else {
    finalList = [
      {
        path,
        title,
      },
    ];
  }
  store.set(key, finalList);
  window.dispatchEvent(new Event(key));
};

export const saveHistory = ({ path, title }) => {
  saveList(LOCAL_STORAGE_KEY.HISTORY, { path, title });
};
export const saveFavorite = ({ path, title }) => {
  saveList(LOCAL_STORAGE_KEY.FAVORITE_MENU, { path, title });
};

export const removeFavorite = (path) => {
  const favoriteMenu = store.get(LOCAL_STORAGE_KEY.FAVORITE_MENU);
  const finalFavoriteMenu = favoriteMenu?.filter((m) => m.path !== path);
  store.set(LOCAL_STORAGE_KEY.FAVORITE_MENU, finalFavoriteMenu);
  window.dispatchEvent(new Event(LOCAL_STORAGE_KEY.FAVORITE_MENU));
};

export const toggleFavorite = ({ path, title }) => {
  const favoriteStatus = getFavoriteStatus(path);
  if (favoriteStatus) {
    removeFavorite(path);
  } else {
    saveFavorite({ path, title });
  }
};
export const getFavoriteStatus = (path, list = []) => {
  const favoriteMenu =
    list.length > 0 ? list : store.get(LOCAL_STORAGE_KEY.FAVORITE_MENU);

  return find(favoriteMenu, { path: path });
};

export const getFavoriteMenuFromStore = () => {
  return store.get(LOCAL_STORAGE_KEY.FAVORITE_MENU)?.filter((m) => m.path);
};

export const getHistoryFromStore = () => {
  return store.get(LOCAL_STORAGE_KEY.HISTORY)?.filter((m) => m.path);
};
