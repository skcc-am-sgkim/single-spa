/* eslint-disable no-console */
import React from "react";

export default function Root(props) {
  const [searchParams, setSearchParams] = React.useState("");
  var iframeUrl = `http://localhost:4098/nexacro-adapter.html${searchParams}`;

  // 브라우져에서 직접 url을 등록한 경우 처리
  if (!searchParams) {
    iframeUrl = `http://localhost:4098/nexacro-adapter.html${location.search}`;
  }

  React.useEffect(() => {
    const onChangeState = (state, title, url, isReplace) =>
      setSearchParams(new URL(url).search.toString());

    // set onChangeState() listener:
    ["pushState", "replaceState"].forEach((changeState) => {
      // store original values under underscored keys (`window.history._pushState()` and `window.history._replaceState()`):
      window.history["_" + changeState] = window.history[changeState];

      window.history[changeState] = new Proxy(window.history[changeState], {
        apply(target, thisArg, argList) {
          const [state, title, url] = argList;
          onChangeState(state, title, url, changeState === "replaceState");

          return target.apply(thisArg, argList);
        },
      });
    });

    return () => {
      // reset `window.history` to original values:
      ["pushState", "replaceState"].forEach((changeState) => {
        window.history[changeState] = window.history["_" + changeState];
        delete window.history["_" + changeState];
      });
    };
  }, []);

  return (
    <div class="h-full flex-grow flex flex-col">
      <section className="bg-slate-300 p-5">
        nexacro container (url : {iframeUrl})
      </section>
      <iframe
        id="myIframe"
        title="test"
        class="flex-grow w-full h-full"
        src={iframeUrl}
      ></iframe>
    </div>
  );
}
