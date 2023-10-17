/* eslint-disable jsx-a11y/no-static-element-interactions */
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import MenuButton from "../sideMenu/MenuButton";

const SideMenuFrame = (props) => {
  const { children } = props;

  var w = window.innerWidth;
  const [isVisible, setIsVisible] = useState(true);
  const { width } = useSpring({
    width: isVisible ? `${w * 0.166}px` : "50px",
  });
  const { opacity } = useSpring({
    opacity: isVisible ? 1 : 0,
  });

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
