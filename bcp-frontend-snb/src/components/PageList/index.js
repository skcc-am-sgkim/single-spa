import PageItem from "../PageItem";

export const PageList = ({ list, favoriteMenu, count = 0 }) => {
  return (
    <>
      {list?.map((m, idx) => {
        if (count > 0 && idx >= count) return null;
        return (
          <PageItem
            key={m.path ?? idx}
            data={{ path: m.path, title: m.title, favoriteMenu }}
          />
        );
      })}
    </>
  );
};
