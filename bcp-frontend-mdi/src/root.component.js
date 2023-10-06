/* eslint-disable no-console */
import CustomTab from "./components/CustomTab/index";

export default function Root(props) {
  return (
    <>
      <div className="flex items-center h-full px-5">
        <CustomTab />
      </div>
    </>
  );
}
