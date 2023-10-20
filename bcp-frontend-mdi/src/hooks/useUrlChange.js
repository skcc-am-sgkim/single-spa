import { useEffect } from "react";
export const useUrlChange = (onUrlChange) => {
  // url 경로가 변경 되었을때
  useEffect(() => {
    window.addEventListener("popstate", function (event) {
      onUrlChange?.(event);
    });
    return () => {
      window.removeEventListener("popstate");
    };
  }, []);
};
