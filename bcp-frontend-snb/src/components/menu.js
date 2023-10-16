import { Tab } from "@headlessui/react";
import { animated, useSpring } from "@react-spring/web";
import { useState, useEffect } from "react";
import closeIcon from "../../assets/svg/close.svg";
import menuIcon from "../../assets/svg/menu.svg";
import NexacroMenu from "./NexacroMenu";
import ReactMenu from "./ReactMenu";
import VueMenu from "./VueMenu";
import PageList from "./PageList";
import TestMenu from "./sideMenu/TestMenu";
import { navigateToUrl } from "single-spa";
import { useGetFavoriteMenu } from "../hooks/useGetFavoriteMenu";
import InnerAppCommunication from "./sideMenu/InnerAppCommunication";
import { getHistoryFromStore } from "@bcp/frontend-shared";
export default function Menu({ menuList }) {
  var w = window.innerWidth;
  const [isVisible, setIsVisible] = useState(true);
  const { width } = useSpring({
    width: isVisible ? `${w * 0.166}px` : "50px",
  });
  const { opacity } = useSpring({
    opacity: isVisible ? 1 : 0,
  });

  return (
    <animated.div
      className="bg-slate-100"
      style={{ width: width, position: "relative", height: "100%" }}
    >
      <animated.div
        style={{ cursor: !isVisible ? "pointer" : "default" }}
        className="px-5 pt-7 "
        onClick={() => (!isVisible ? setIsVisible(true) : null)}
      >
        <button onClick={() => setIsVisible(!isVisible)}>
          <img
            src={!isVisible ? menuIcon : closeIcon}
            style={{ display: "inline", minWidth: 20, width: 20, maxWidth: 20 }}
            alt="close"
          />
        </button>
        <animated.div
          style={{
            opacity: opacity,
            overflow: !isVisible ? "hidden" : "",
            pointerEvents: !isVisible ? "none" : "",
          }}
        >
          <Tab.Group>
            <Tab.List>
              <Tab>
                <span class="material-symbols-outlined">list</span>
              </Tab>
              <Tab>
                <span class="material-symbols-outlined">history</span>
              </Tab>
              <Tab>
                <span class="material-symbols-outlined ">bookmark</span>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <ul>
                  <li>
                    <button onClick={() => navigateToUrl("/")}>Home</button>
                  </li>
                  <li>
                    <button onClick={() => navigateToUrl("/all")}>ALL</button>
                  </li>
                </ul>
                <InnerAppCommunication />

                <TestMenu />
                <NexacroMenu />
                <ReactMenu />
                <VueMenu />
              </Tab.Panel>
              <Tab.Panel>
                <HistoryPanel />
              </Tab.Panel>
              <Tab.Panel>
                <FavoritePanel />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}

const HistoryPanel = () => {
  const { favList } = useGetFavoriteMenu();
  const [list, setlist] = useState(getHistoryFromStore());

  useEffect(() => {
    window.addEventListener("popstate", function (event) {
      setlist(getHistoryFromStore());
    });
    return () => {
      window.removeEventListener("popstate");
    };
  }, []);
  console.log("list", list);
  return <PageList list={list} favoriteMenu={favList} />;
};
const FavoritePanel = () => {
  const { list } = useGetFavoriteMenu();
  return <PageList list={list} favoriteMenu={list} />;
};
