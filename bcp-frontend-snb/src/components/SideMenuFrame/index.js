/* eslint-disable jsx-a11y/no-static-element-interactions */
import { animated, useSpring } from "@react-spring/web";
import { useState, useEffect } from "react";
import MenuButton from "../SideMenu/MenuButton";

const SideMenuFrame = (props) => {
  const { children } = props;
  const [w, setW] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(true);
  const { width } = useSpring({
    width: isVisible ? `${w * 0.166}px` : "50px",
  });
  const { opacity } = useSpring({
    opacity: isVisible ? 1 : 0,
  });
  useEffect(() => {
    window.addEventListener(
      "resize",
      (event) => {
        setW(event.target.innerWidth);
      },
      true
    );
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return (
    <animated.div
      className="bg-slate-100"
      style={{ width: width, position: "relative", height: "100%" }}
    >
      <div
        style={{ cursor: !isVisible ? "pointer" : "default" }}
        className="px-5 pt-7 "
        onClick={() => (!isVisible ? setIsVisible(true) : null)}
      >
        <MenuButton
          isVisible={isVisible}
          onClickButton={() => setIsVisible(!isVisible)}
        />
        <animated.div
          style={{
            opacity: opacity,
            overflow: !isVisible ? "hidden" : "",
            pointerEvents: !isVisible ? "none" : "",
          }}
        >
          {children}
        </animated.div>
      </div>
    </animated.div>
  );
};
export default SideMenuFrame;
