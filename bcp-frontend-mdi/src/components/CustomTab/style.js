import styled from "styled-components";
import Tabs, { Tab, useDataContext } from "@uiw/react-tabs-draggable";

export const TabWarp = styled(Tabs)`
  ${"" /* max-width: 450px; */}
  border-bottom: 1px solid #333;
  margin-bottom: -2px;
  &:hover::-webkit-scrollbar {
    height: 0px;
    background-color: red;
  }
  &:hover::-webkit-scrollbar-track {
    background-color: #333;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: green;
  }
`;

export const TabItem = styled(Tab)`
  background-color: #b9b9b9;
  padding: 3px 7px;
  border-radius: 5px 5px 0 0;
  user-select: none;
  &.w-active {
    color: #fff;
    background-color: #333;
  }
`;
