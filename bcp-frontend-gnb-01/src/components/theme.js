import React, { useState, useEffect } from "react";
import useThemeStore from "../stores/theme";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faTableList } from "@fortawesome/free-solid-svg-icons";

export default function Theme({ mode, className }) {
  const { theme, setTheme, changeTheme } = useThemeStore();

  useEffect(() => {
    if (mode) {
      setTheme(mode);
    }
  }, [mode, setTheme]);

  return (
    <>
      <button
        className={classnames(
          "w-12 h-12 rounded-full border-0 relative overflow-hidden block",
          className
        )}
        onClick={() => changeTheme(!theme)}
      >
        <div
          className={`absolute top-0 w-24 h-12 transform transition-transform duration-300 bg-blue-100 border-0 ${
            theme ? "-translate-x-1/2" : ""
          }`}
        >
          <div className="grid grid-cols-2 justify-items-center items-center h-full">
            <FontAwesomeIcon
              icon={faTableList}
              className="text-blue-500 w-1/2 h-1/2"
            />
            <FontAwesomeIcon
              icon={faTableCells}
              className="text-blue-500 w-1/2 h-1/2"
            />
          </div>
        </div>
      </button>
    </>
  );
}
