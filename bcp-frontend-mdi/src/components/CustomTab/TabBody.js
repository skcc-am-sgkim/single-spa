import Home from "../Home/index";
import Sitemap from "../Sitemap/index";
import Parcel from "single-spa-react/parcel";

const TabBody = ({ activeKey }) => {
  return (
    <>
      <div
        style={{
          display: window.location.pathname === "/" ? "block" : "none",
        }}
      >
        <Home />
      </div>
      {/* <About /> */}
      <div style={{ display: activeKey === "/all" ? "block" : "none" }}>
        <Sitemap />
      </div>

      <div style={{ display: activeKey.includes("react") ? "block" : "none" }}>
        <Parcel
          config={() => System.import("@bcp/frontend-parcel-react")}
          wrapWith="div"
        />
      </div>
      <div
        style={{ display: activeKey.includes("nexacro") ? "block" : "none" }}
      >
        <Parcel
          config={() => System.import("@bcp/frontend-parcel-nexacro")}
          wrapWith="div"
        />
      </div>
      <div style={{ display: activeKey.includes("vue") ? "block" : "none" }}>
        <Parcel
          config={() => System.import("@bcp/frontend-parcel-vue")}
          wrapWith="div"
        />
      </div>
    </>
  );
};
export default TabBody;
