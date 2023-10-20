import Favorites from "../Favorites/index";
import RecentlyVisited from "../RecentlyVisited/index";

const Home = () => {
  return (
    <div class="pt-10">
      <h1 class="font-bold">Home</h1>
      <div class="flex">
        <RecentlyVisited />
        <Favorites />
      </div>
    </div>
  );
};

export default Home;
