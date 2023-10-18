import Home from "../Home/index";
import Sitemap from "../Sitemap/index";
import Parcel from "single-spa-react/parcel";

const TabBody = ({ activeTabKey }) => {
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
      <div style={{ display: activeTabKey === "/all" ? "block" : "none" }}>
        <Sitemap />
      </div>

      <div
        style={{ display: activeTabKey.includes("react") ? "block" : "none" }}
      >
        <Parcel
          config={() => System.import("@bcp/frontend-parcel-react")}
          wrapWith="div"
        />
      </div>
      <div
        style={{ display: activeTabKey.includes("nexacro") ? "block" : "none" }}
      >
        <Parcel
          config={() => System.import("@bcp/frontend-parcel-nexacro")}
          wrapWith="div"
        />
      </div>
      <div style={{ display: activeTabKey.includes("vue") ? "block" : "none" }}>
        <Parcel
          config={() => System.import("@bcp/frontend-parcel-vue")}
          wrapWith="div"
        />
      </div>
    </>
  );
};
export default TabBody;
