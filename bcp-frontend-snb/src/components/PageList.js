import { getFavoriteStatus, toggleFavorite } from "@bcp/frontend-shared";
import { navigateToUrl } from "single-spa";
import StarIcon from "../../assets/svg/star.svg";
import StarFilledIcon from "../../assets/svg/star_filled.svg";

const PageList = ({ list, favoriteMenu }) => {
  return (
    <>
      {list?.map((m, idx) => {
        return (
          <div key={m.path ?? idx}>
            <button
              onClick={() => toggleFavorite({ path: m.path, title: m.title })}
            >
              <img
                src={
                  !getFavoriteStatus(m.path, favoriteMenu)
                    ? StarIcon
                    : StarFilledIcon
                }
                alt="star"
                style={{ display: "inline" }}
              />
            </button>
            <a href={m.path} onClick={navigateToUrl}>
              {m.title ?? m.path}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default PageList;
