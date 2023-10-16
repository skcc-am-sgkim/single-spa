import { useGetFavoriteMenu } from "../../hooks/useGetFavoriteMenu";
import { PageList } from "../PageList";

const FavoritePanel = () => {
  const { list } = useGetFavoriteMenu();
  return <PageList list={list} favoriteMenu={list} />;
};
export default FavoritePanel;
