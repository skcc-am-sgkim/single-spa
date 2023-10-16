/* eslint-disable no-console */
import React from "react";
import Menu from "./components/menu";

// 임시 mockup data
import { menuList } from "@bcp/frontend-shared";
export { useGetFavoriteMenu } from "./hooks/useGetFavoriteMenu";

export default function Root(props) {
  return <Menu menuList={menuList} />;
}
