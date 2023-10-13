/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { toggleFavorite, getFavoriteStatus } from "@bcp/frontend-shared";
import { MenuItem } from "@szhsin/react-menu";
import { useState } from "react";
import { navigateToUrl } from "single-spa";
import StarIcon from "../../../assets/svg/star.svg";
import StarFilledIcon from "../../../assets/svg/star_filled.svg";
import { SubMenu } from "./SubMenu";
import { useGetFavoriteMenu } from "../../hooks/useGetFavoriteMenu";

const RecursiveChildrenMenu = ({ data }) => {
  if (data.children)
    return (
      <>
        {data.children?.map((c) =>
          c.children ? (
            <SubMenu key={c.name} label={c.name} openTrigger="clickOnly">
              {c.children && <RecursiveChildrenMenu data={c} key={c.name} />}
            </SubMenu>
          ) : (
            <CustomMenuItem {...c} key={c.name} />
          )
        )}
      </>
    );
  return <CustomMenuItem {...data} key={data.name} />;
};

const CustomMenuItem = ({ name, url }) => {
  const { list } = useGetFavoriteMenu();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const clickHandler = (e) => {
    e.stopPropagation = isMouseOver;
    e.keepOpen = isMouseOver;
  };

  const onClickFavorite = () => {
    toggleFavorite({ name, url });
  };
  return (
    <MenuItem onClick={clickHandler}>
      <button
        onClick={onClickFavorite}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <img
          src={!getFavoriteStatus(url, list) ? StarIcon : StarFilledIcon}
          alt="star"
          style={{ display: "inline" }}
        />
      </button>
      <button onClick={() => navigateToUrl(url)}>{name}</button>
    </MenuItem>
  );
};

export default RecursiveChildrenMenu;
