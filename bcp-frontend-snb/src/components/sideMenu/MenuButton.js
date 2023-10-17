import closeIcon from "../../../assets/svg/close.svg";
import menuIcon from "../../../assets/svg/menu.svg";

const MenuButton = ({ isVisible, onClickButton }) => {
  return (
    <button onClick={onClickButton}>
      <img
        src={!isVisible ? menuIcon : closeIcon}
        style={{ display: "inline", minWidth: 20, width: 20, maxWidth: 20 }}
        alt="close"
      />
    </button>
  );
};
export default MenuButton;
