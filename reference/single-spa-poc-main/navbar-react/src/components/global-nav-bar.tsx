import React from "react";
import { navigateToUrl } from "single-spa";

export default function GlobalNavBar() {
  return (
    <div
      style={{
        position: "static",
        height: 60,
        width: "100vw",
        backgroundColor: "skyblue",
        padding: "1rem",
      }}
    >
      <ol
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          listStyle: "none",
        }}
      >
        <li>React Version: {React.version}</li>
        <li>
            <a href="/" onClick={navigateToUrl}>Home(404 page)</a>
        </li>
        <li>
          <div><a href="/app1-react" onClick={navigateToUrl}>app1-react(+react-router-v6)</a></div>
          <div><a href="/app1-react/about" onClick={navigateToUrl}>app1-react/about</a></div>
          <div><a href="/app1-react/dashboard" onClick={navigateToUrl}>app1-react/dashboard</a></div>
        </li>
        <li>
            <a href="/app2-react-nexacro" onClick={navigateToUrl}>app2-react-nexacro</a>
          <div>
            <a href="/app2-react-nexacro?page=program_psm::PG-psm-0400.xfdl" onClick={navigateToUrl}>app2-react-nexacro?page=program_psm::PG-psm-0400.xfdl</a>
          </div>
          <div>
            <a href="/app2-react-nexacro?page=program_stm::PG-STM-1000.xfdl" onClick={navigateToUrl}>app2-react-nexacro?page=program_stm::PG-STM-1000.xfdl</a>
          </div>
        </li>
        <li>
          <div>
            <a href="/app3-vue" onClick={navigateToUrl}>app3-vue(+vue-router)</a>
          </div>
          <div>
            <a href="/app3-vue/about" onClick={navigateToUrl}>app3-vue/about</a>
          </div>
        </li>
      </ol>
    </div>
  );
}
