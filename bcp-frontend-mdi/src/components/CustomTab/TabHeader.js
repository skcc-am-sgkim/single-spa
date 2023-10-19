import { navigateToUrl } from "single-spa";
import { TabItem, TabWarp } from "./style";

const TabHeader = ({
  data: { tabInfo, handleTabClick, handleTabDrop, handleClose, activeTabKey },
}) => {
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
      activeKey={activeTabKey}
      style={{ gap: 3, overflow: "auto" }}
      onTabClick={(id, evn) => handleTabClick(id, evn)}
      onTabDrop={(id, index) => handleTabDrop(id, index)}
    >
      {tabInfo.map((m, idx) => {
        return (
          m &&
          m.id && (
            <TabItem key={idx} id={m.id} draggable={true}>
              <a
                href={`${m.id}`}
                onClick={navigateToUrl}
                style={{ padding: "3px 7px" }}
              >
                {m.title}
              </a>
              <button
                onClick={(evn) => handleClose(m, evn)}
                style={{ background: "yellow" }}
              >
                x
              </button>
            </TabItem>
          )
        );
      })}
    </TabWarp>
  );
};
export default TabHeader;
