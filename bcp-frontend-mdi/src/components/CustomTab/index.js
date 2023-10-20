import TabHeader from "./TabHeader";
import { useTab } from "./useTab";
import TabBody from "./TabBody";

const CustomTab = () => {
  const { tabInfo, handleTabClick, handleTabDrop, handleClose, activeTabKey } =
    useTab();

  return (
    <div class="w-full">
      <TabHeader
        data={{
          tabInfo,
          handleTabClick,
          handleTabDrop,
          handleClose,
          activeTabKey,
        }}
      />
      <TabBody activeTabKey={activeTabKey} />
    </div>
  );
};

export default CustomTab;
