import React from "react";

export default function Root(props) {
  const [searchParams, setSearchParams] = React.useState("");
  const iframeUrl = `https://ocean-p.skinnovation.com/${searchParams}`;
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
    <div style={{width: 'calc(100vw - 200px)', height: '80vh'}}>
      React Version: {React.version}
      <div>{props.name} is mounted!</div>
      <div>src: {iframeUrl}</div>
      <iframe
        src={iframeUrl}
        width="90%"
        height="90%"
        frameBorder={0}
      ></iframe>
    </div>
  );
}
