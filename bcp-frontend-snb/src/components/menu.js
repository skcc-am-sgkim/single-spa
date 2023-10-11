/* eslint-disable no-console */
import React from "react";
import { navigateToUrl } from "single-spa";

export default function Menu({ menuList }) {
  console.log(menuList);

  const sendMessage = (menuId) => {
    const iframe = document.getElementById("myIframe");
    if (iframe) {
      iframe.contentWindow.postMessage(
        { source: "platform", event: "route", payload: { menu: menuId } },
        "*"
      );
    }
  };

  return (
    <>
      <div className="px-5 pt-7 ">
        <span>snb</span>
        <span className="px-5 ">
          <a href="/" className="underline " onClick={navigateToUrl}>
            home
          </a>
        </span>
        <p className="font-semibold text-lg mt-10">nexacro</p>
        <ul className="px-10 pt-3 list-disc list-outside leading-8">
          <li>
            <a
              href="/nexacro/menu=3"
              className="underline "
              onClick={navigateToUrl}
            >
              Hello page url
            </a>
          </li>
          <li>
            <a
              href="/nexacro/menu=4"
              className="underline "
              onClick={navigateToUrl}
            >
              World page url
            </a>
          </li>
          <li>
            <button
              className="underline text-left"
              onClick={() => sendMessage(3)}
            >
              Hello page event
            </button>
          </li>
          <li>
            <button
              className="underline text-left"
              onClick={() => sendMessage(4)}
            >
              World page event
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
