import { PageList, useGetFavoriteMenu } from "@bcp/frontend-snb";

const Favorites = () => {
  const { list } = useGetFavoriteMenu();
  return (
    <div class="basis-1/3 border-2">
      <h2>Favorites</h2>
      <PageList list={list} favoriteMenu={list} count={5} />
    </div>
  );
};

export default Favorites;
