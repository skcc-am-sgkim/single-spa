import { navigateToUrl } from "single-spa";

const Link = ({ path, title }) => {
  return (
    <a href={path} onClick={navigateToUrl}>
      {title ?? path}
    </a>
  );
};

export default Link;
