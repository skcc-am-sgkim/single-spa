import TabHeader from "./TabHeader";
import { useTab } from "./useTab";
import TabBody from "./TabBody";

const CustomTab = () => {
  const { tabInfo, tabClick, tabDrop, closeHandle, activeKey } = useTab();

  return (
    <div class="w-full">
      <TabHeader
        data={{ tabInfo, tabClick, tabDrop, closeHandle, activeKey }}
      />
      <TabBody activeKey={activeKey} />
    </div>
  );
};

export default CustomTab;
