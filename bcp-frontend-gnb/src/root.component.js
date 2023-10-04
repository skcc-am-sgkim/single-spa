/* eslint-disable no-console */
import React from "react";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  const [message, setMessage] = React.useState("message test");

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
    <>
      <span>gnb</span>
      <a href="/" className="px-5 underline">
        home
      </a>
      {/* iframe 위 overlay 가능 테스트 */}
      <div className="fixed top-0 right-0 m-10 p-10 bg-slate-500 text-slate-100 flex items-center justify-center">
        {message}
      </div>
    </>
  );
}
