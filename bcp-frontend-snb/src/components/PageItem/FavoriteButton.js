import { getFavoriteStatus, toggleFavorite } from "@bcp/frontend-shared";
import StarIcon from "../../../assets/svg/star.svg";
import StarFilledIcon from "../../../assets/svg/star_filled.svg";

const FavoriteButton = ({ path, title, favoriteMenu }) => {
  const isFavorite = getFavoriteStatus(path, favoriteMenu);
  const icon = isFavorite ? StarFilledIcon : StarIcon;

  const handleClick = () => {
    toggleFavorite({ path, title });
  };

  return (
    <button onClick={handleClick}>
      <img src={icon} alt="star" className="inline" />
    </button>
  );
};

export default FavoriteButton;
