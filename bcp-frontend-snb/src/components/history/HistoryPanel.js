import { getFavoriteStatus, removeFavorite } from "@bcp/frontend-shared";
import { navigateToUrl } from "single-spa";
import StarIcon from "../../../assets/svg/star.svg";
import StarFilledIcon from "../../../assets/svg/star_filled.svg";
import { useGetFavoriteMenu } from "../../hooks/useGetFavoriteMenu";
const HistoryPanel = () => {
  const { list } = useGetFavoriteMenu();

  return (
    <>
      {list?.map((m) => {
        return (
          <div key={m.path}>
            <button onClick={() => removeFavorite(m.path)}>
              <img
                src={
                  !getFavoriteStatus(m.path, list) ? StarIcon : StarFilledIcon
                }
                alt="star"
                style={{ display: "inline" }}
              />
            </button>
            <a href={m.path} onClick={navigateToUrl}>
              {m.title}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default HistoryPanel;
