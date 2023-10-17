/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { getFavoriteStatus, toggleFavorite } from "@bcp/frontend-shared";
import { MenuItem } from "@szhsin/react-menu";
import { useState } from "react";
import { navigateToUrl } from "single-spa";
import StarIcon from "../../../assets/svg/star.svg";
import StarFilledIcon from "../../../assets/svg/star_filled.svg";
import { useGetFavoriteMenu } from "../../hooks/useGetFavoriteMenu";

const CustomMenuItem = ({ title, path }) => {
  const { list } = useGetFavoriteMenu();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const clickHandler = (e) => {
    e.stopPropagation = isMouseOver;
    e.keepOpen = isMouseOver;
    navigateToUrl(path);
  };

  const onClickFavorite = () => {
    toggleFavorite({ title, path });
  };
  return (
    <MenuItem onClick={clickHandler}>
      <button
        style={{ flexShrink: 0 }}
        onClick={onClickFavorite}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <img
          src={!getFavoriteStatus(path, list) ? StarIcon : StarFilledIcon}
          alt="star"
          style={{ display: "inline" }}
        />
      </button>
      {title}
    </MenuItem>
  );
};

export default CustomMenuItem;
