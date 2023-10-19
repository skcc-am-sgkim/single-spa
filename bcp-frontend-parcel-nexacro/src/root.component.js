/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { union } from "lodash";
import store from "store";

import { LOCAL_STORAGE_KEY } from "@bcp/frontend-shared";

export default function Root(props) {
  const [receiver, setReceiver] = useState();
  useEffect(() => {
    window.addEventListener("NEXACRO", (event) => {
      // console.log(event, event.detail);
      setReceiver(event.detail);
    });

    return () => {
      window.removeEventListener("NEXACRO");
    };
  }, []);

  const [iframeUrls, setIframeUrls] = useState([]);

  const init = () => {
    const storeTabInfo = store.get(LOCAL_STORAGE_KEY.TAB_INFO);
    const c = storeTabInfo
      .filter((s) => s.id.includes("nexacro"))
      .map(
        (m) =>
          `http://localhost:4098/nexacro-adapter.html?${m.id.split("/").pop()}`
      );

    setIframeUrls(c);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    window.addEventListener("TAB_INFO", () => {
      init();
    });
    return () => {
      window.removeEventListener("TAB_INFO");
    };
  }, []);

  if (!iframeUrls || iframeUrls.length <= 0) return <></>;
  // console.log("iframeUrls", iframeUrls);
  return (
    <div class="h-full flex-grow flex flex-col">
      {receiver && <h1>{receiver} event detected!</h1>}{" "}
      {iframeUrls?.map((m, i) => {
        return (
          <div
            key={i}
            style={{
              display: m.includes(
                window.location.pathname.split("/").pop() || ""
              )
                ? "block"
                : "none",
            }}
          >
            <section className="bg-slate-300 p-5">
              nexacro container (url : {m})
            </section>
            <iframe
              id="myIframe"
              title="test"
              class="flex-grow w-full h-full"
              src={m}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}
