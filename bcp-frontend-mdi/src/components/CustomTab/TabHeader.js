import { useTab } from "./useTab";
import { navigateToUrl } from "single-spa";
import { TabItem, TabWarp } from "./style";

const TabHeader = ({ data }) => {
  const { tabInfo, tabClick, tabDrop, closeHandle, activeKey } = data;
  if (
    tabInfo === null ||
    tabInfo === "undefined" ||
    !tabInfo ||
    tabInfo.length < 1
  ) {
    return <></>;
  }

  return (
    <TabWarp
      activeKey={activeKey}
      style={{ gap: 3, overflow: "auto" }}
      onTabClick={(id, evn) => tabClick(id, evn)}
      onTabDrop={(id, index) => tabDrop(id, index)}
    >
      {tabInfo.map((m, idx) => {
        return (
          <TabItem key={idx} id={m.id} draggable={true}>
            <a
              href={`${m.id}`}
              onClick={navigateToUrl}
              style={{ padding: "3px 7px" }}
            >
              {m.title}
            </a>
            <button
              onClick={(evn) => closeHandle(m, evn)}
              style={{ background: "yellow" }}
            >
              x
            </button>
          </TabItem>
        );
      })}
    </TabWarp>
  );
};
export default TabHeader;
