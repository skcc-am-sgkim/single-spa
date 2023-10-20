import {
  useGetFavoriteMenu,
  useGetHistoryList,
  PageList,
} from "@bcp/frontend-snb";

const RecentlyVisited = () => {
  const { list } = useGetHistoryList();
  const { list: favList } = useGetFavoriteMenu();

  return (
    <div class="border-2 grow ">
      <h2>Recently visited</h2>
      <PageList list={list} favoriteMenu={favList} count={5} />
    </div>
  );
};

export default RecentlyVisited;
