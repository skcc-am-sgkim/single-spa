import { getFavoriteStatus, toggleFavorite } from "@bcp/frontend-shared";
import StarIcon from "../../../assets/svg/star.svg";
import StarFilledIcon from "../../../assets/svg/star_filled.svg";

const FavoriteButton = ({ path, title, favoriteMenu }) => {
  return (
    <button onClick={() => toggleFavorite({ path: path, title: title })}>
      <img
        src={!getFavoriteStatus(path, favoriteMenu) ? StarIcon : StarFilledIcon}
        alt="star"
        style={{ display: "inline" }}
      />
    </button>
  );
};

export default FavoriteButton;
