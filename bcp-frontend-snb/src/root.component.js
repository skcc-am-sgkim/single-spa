/* eslint-disable no-console */
import React from "react";
import Menu from "./components/menu";

export { useGetFavoriteMenu } from "./hooks/useGetFavoriteMenu";

export default function Root(props) {
  return <Menu />;
}
