import FavoriteButton from "./FavoriteButton";
import Link from "./Link";

const PageItem = ({ data }) => {
  const { path, title, favoriteMenu } = data;
  return (
    <div>
      <FavoriteButton path={path} title={title} favoriteMenu={favoriteMenu} />
      <Link path={path} title={title} />
    </div>
  );
};

export default PageItem;
