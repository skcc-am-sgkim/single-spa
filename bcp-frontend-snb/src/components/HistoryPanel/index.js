import { useGetHistoryList } from "../../hooks/useGetHistoryList";
import { PageList } from "../PageList";

const HistoryPanel = () => {
  const { list, favList } = useGetHistoryList();

  return <PageList list={list} favoriteMenu={favList} />;
};

export default HistoryPanel;
