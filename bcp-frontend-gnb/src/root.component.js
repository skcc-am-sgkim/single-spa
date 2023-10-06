/* eslint-disable no-console */
import React from "react";
import { navigateToUrl } from "single-spa";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import store from "store";
import { useNavigate } from "react-router-dom";
import { unionBy } from "lodash";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

export default function Root(props) {
  const [message, setMessage] = React.useState("message test");

  const clickHandler = (path, title) => {
    const storeTabInfo = store.get("TAB_INFO")?.length
      ? store.get("TAB_INFO")
      : [];

    storeTabInfo?.map((m) => {
      m.isActive = m.id === path;
    });
    store.set(
      "TAB_INFO",
      unionBy([...storeTabInfo, { id: path, title, isActive: true }], "id")
    );
    window.dispatchEvent(new Event("TAB_INFO"));
    navigateToUrl(`/${path}`);
  };

  React.useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.source === "nexacro" || event.data.event === "component") {
        setMessage(event.data.payload.component);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <div>
      <span>gnb</span>
      <a href="/" className="px-5 underline">
        home
      </a>

      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <button onClick={() => clickHandler("about", "About")}>About</button>
        </li>
        <li>
          <button onClick={() => clickHandler("dashboard", "Dashboard")}>
            Dashboard
          </button>
        </li>
        {/* <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li> */}
      </ul>

      {/* iframe 위 overlay 가능 테스트 */}
      <div className="fixed top-0 right-0 m-10 p-10 bg-slate-500 text-slate-100 flex items-center justify-center">
        {message}
      </div>
    </div>
  );
}
