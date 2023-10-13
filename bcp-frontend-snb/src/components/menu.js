import { Tab } from "@headlessui/react";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import closeIcon from "../../assets/svg/close.svg";
import menuIcon from "../../assets/svg/menu.svg";
import NexacroMenu from "./NexacroMenu";
import ReactMenu from "./ReactMenu";
import VueMenu from "./VueMenu";
import HistoryPanel from "./history/HistoryPanel";
import TestMenu from "./sideMenu/TestMenu";
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
              <Tab>Menu</Tab>
              <Tab>History</Tab>
              <Tab>Favorite</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <p className="font-semibold text-lg mt-10">
                  Inter-app communication
                </p>
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        window.dispatchEvent(
                          new CustomEvent("REACT", { detail: "react" })
                        );
                      }}
                    >
                      To React
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        window.dispatchEvent(
                          new CustomEvent("VUE", { detail: "vue" })
                        );
                      }}
                    >
                      To Vue
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        window.dispatchEvent(
                          new CustomEvent("NEXACRO", { detail: "nexacro" })
                        );
                      }}
                    >
                      To Nexacro
                    </button>
                  </li>
                </ul>
                <TestMenu />
                <NexacroMenu />
                <ReactMenu />
                <VueMenu />
              </Tab.Panel>
              <Tab.Panel>
                <HistoryPanel />
              </Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
