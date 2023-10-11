import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Root(props) {
  const [bgColor, setBgColor] = useState("");
  return (
    <BrowserRouter basename="/react">
      <section>
        React Version: {React.version}
        <div>{props.name} is mounted!</div>
        <div>
          <h1>Basic Example</h1>

          <p>
            This example demonstrates some of the core features of React Router
            including nested <code>&lt;Route&gt;</code>s,{" "}
            <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using
            a "*" route (aka "splat route") to render a "not found" page when
            someone visits an unrecognized URL.
          </p>

          {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<h1>Home</h1>} />
              <Route path="about" element={<h1>About</h1>} />
              <Route
                path="dashboard"
                element={
                  <>
                    <h1>Dashboard</h1>
                    <button
                      onClick={() => setBgColor("pink")}
                      style={{ background: bgColor }}
                    >
                      클릭
                    </button>
                  </>
                }
              />

              {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
              <Route path="*" element={<h1>404</h1>} />
            </Route>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
